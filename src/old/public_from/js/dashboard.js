function appendError(modal,name,value){
	const inputs = modal.find(`[name=${name}]`);
	inputs.addClass('is-invalid');
	modal.find(`.validation-error[for=${name}]`).css('display','block').text(value);
}
function appendErrors(modal,row) {
	for(const [key,val] of Object.entries(row)){
		appendError(modal,key,val);
	}
}
function appendUnknown(modal,name,value='') {
	modal.find(`.td-${name}`).html('<span class=\'text-muted\'>Unknown</span>');
}
function getThByTd(td) {
	console.log(td,td.closest('table').find(`thead th:nth-child(${td.index()+1})`));
	return td.closest('table').find(`thead th:nth-child(${td.index()+1})`);
}

$(document).ready(function(){
	table = $("#index-table").DataTable({
		"responsive": false,//true,
		"autoWidth": true,
		"lengthChange": true,
		"buttons": ["copy","excel","print"],
	});
	table.buttons().container().appendTo('#index-table_wrapper .col-md-6:eq(0)');
	if(window.location.search){
		const urlParams = new URLSearchParams(window.location.search);
		if(urlParams.has('action')){
			if(urlParams.get('action') === 'show' &&  urlParams.has('item-id')){
				const tr = $('#index-table tbody').find(`#tr-${urlParams.get('item-id')}`);
				console.log(tr)
				if(tr.length){
					tr.find('.table-show-btn:first').trigger('click');
				}
			}
		}
		//console.log(urlParams);
	}
});
$( '.table-edit-modal,.table-create-modal' ).on('hide.bs.modal',function() {
	$(this).find(`form .validation-error`).css('display','none');
	$(this).find(`form input,form textarea`).removeClass('is-invalid');
});
$('.table-create-btn').on('click',function(){
	$('.table-create-modal').modal('show');
});
$('#index-table').on('click','.table-edit-btn',function(){
	const self = $(this),
		tr = self.closest('tr'),
		search_id = tr.attr('item-slug') || tr.attr('item-id'),
		modal = $('.table-edit-modal'),
		form = modal.find('form');7
	if(!search_id){return;}
	$.ajax({
		url: (LURL.edit || LURL.show)+'/'+search_id,
		type: 'GET',dataType: 'json',
	}).done(function(res) {
		console.log("success");
		if(!res.action){return alert('Error');}
		if(res.action==='html-render'){
			modal.find('.modal-dialog').html(res.view);
			modal.modal('show');
			return;
		}else if(res.item){
			for(const [key,val] of Object.entries(res.item)){
				console.log(key,val)
				if(form.find(`[name=${key}]`).attr('type')=='file'){
					form.find(`[name=${key}]`).attr('placeholder',val);
				}else{
					form.find(`[name=${key}]`).val(val);
				}
				
			}
			if(res.item.slug){
				modal.find('.table-submit').attr('item-slug',res.item.slug);
			}else if(res.item.id){
				modal.find('.table-submit').attr('item-id',res.item.id);
			}
			modal.modal('show');
		}
		console.log(res);
	}).fail(function(err) {
		const message = '';
		console.log("error",err);
		if(message){
			alert(message);
		}
	});
});
$('#index-table tbody').on('click','.table-show-btn',function(event){
	event.preventDefault();
	const self = $(this),
		tr = self.closest('tr'),
		search_id = tr.attr('item-slug') || tr.attr('item-id'),
		modal = $('.table-show-modal');
	if(!search_id){return;}
	$.ajax({
		url: LURL.show+'/'+search_id,type: 'GET',dataType: 'json',
	}).done(function(res) {
		console.log("success");
		if(res.action==='html-render'){
			console.log('render');
			modal.find('.modal-dialog').html(res.view);
			modal.modal('show');
			return;
		}
		else if(res.item){
			for(const [key,val] of Object.entries(res.item)){
				if(val){
					modal.find(`.td-${key}`).text(val);
				}else{
					appendUnknown(modal,key);
				}
			}
			modal.modal('show');
		}
		console.log(res)
	}).fail(function(err) {
		const message = '';
		console.log("error",err);
		if(message){
			alert(message);
		}
	});
});
$('.table-create-modal').on('click','.table-submit',function(){
	$('.table-create-modal form').submit();
});

$('.table-show-modal').on('click','.table-submit',function(){
	const modal = $('.table-show-modal'),
		this_table = modal.find('table'),
		search_id = this_table.attr('item-slug') || this_table.attr('item-id');
	console.log(search_id)
	modal.modal('hide');
	setTimeout(function(){
		$(`#tr-${search_id} .table-edit-btn`).trigger('click');
	},300);
});
$('.table-edit-modal').on('click','.table-submit',function(){
	$('.table-edit-modal form').submit();
});
$('.table-edit-modal').on('submit','form',function(event){
	event.preventDefault();
	const self = $(this),
		modal = self.closest('.modal'),
		button_submit = modal.find('.table-submit'),
		search_id = button_submit.attr('item-slug') || button_submit.attr('item-id');
	if(!search_id){return;};
	if(!window.FormData){
		alert('Please update your browser!');
	}
	var data = new FormData(this);
	// if(window.filesUploaderForEdit){
	// 	const filesToUpload = filesUploaderForEdit.getFilesToUpload();
	// 	console.log(filesToUpload)
	// 	for (var i = 0, len = filesToUpload.length; i < len; i++) {
	// 		data.append("files[]", filesToUpload[i].file);
	// 	}
	// }
	data.append('_method','PATCH');
	console.log(data.getAll('files[]'))
	$.ajax({
		url: LURL.update+'/'+search_id,
		type: 'POST',processData: false,'contentType':false,
		data,
	}).done(function(res) {
		console.log("success");
		if(!res.action){alert("Error");}
		if(res.action==='html-render'){
			console.log('render');
			return;
		}
		else if(res.action ==='update' && res.item){
			$('.table-edit-modal').modal('hide');
			const tr = $(`#tr-${res.item.id}`);
			delete res.item.id;
			const rows = table.rows().nodes();
			for(const [key,val] of Object.entries(res.item)){
				console.log(key,val);
				const td = tr.find(`.td-${key}`);
				if(!td.length){
					continue;
				}
				if(val){
					if( getThByTd(td).hasClass('table-show-th')){
						td.html(`<a class='text-dark table-show-btn'>${val}</a>`);
					}else{
						td.html(`<a class='text-dark'>${val}</a>`);
					}
				}else{
					td.html('<span class=\'text-muted\'>Unknown</span>');
				}
			}
		}
		console.log(res);
	}).fail(function(err) {
		const json_errors = err.responseJSON;
		console.log('error',json_errors);
		if(json_errors && json_errors.errors){
			appendErrors(self,json_errors.errors);
		}
	});
});
$('.table-create-modal').on('submit','form',function(e){
	e.preventDefault();
	const self=$(this),
		modal=self.closest('.modal');
	if(!window.FormData){
		alert('Please update your browser!');
	}
	const data = new FormData(this);
	$.ajax({
		url: LURL.store,
		type: 'POST',processData: false,'contentType':false,
		data,
	}).done(function(res) {
		console.log("success");
		if(!res.action){alert("Error");}
		$('.table-create-modal').modal('hide');
		if(res.action==='html-render'){
			console.log('render');
			table.row.add( $(res.view) ).draw();
			return;
		}
		else if(res.action ==='update' && res.item){
			table.row.add( $(insert_template(res.item)) ).draw();
		}
	}).fail(function(err) {
		const json_errors = err.responseJSON;
		console.log('error',json_errors);
		if(json_errors && json_errors.errors){
			appendErrors(self,json_errors.errors);
		}
	});	
});



$(".select-all-btn").click(function(){
	var rows = table.rows().nodes();
	checkAllState = !checkAllState;
	$('input[type=checkbox]',rows).prop('checked',checkAllState);
});
$('#index-table').on('click','.table-delete-btn',function(event) {
	event.preventDefault();
	if(!confirm("Are you sure to delete")){return;}
	const self = $(this);
	const search_id = self.closest('tr').attr('item-id');
	$.ajax({
		url: LURL.delete,
		type: 'POST',dataType: 'json',
		data: {'_method': 'delete','ids[]':[search_id]},
	}).done(function(res) {
		if(res.action && res.action==='update'){
			table.rows($(`#tr-${search_id}`)).remove().draw();
		}
	}).fail(function(err) {
		console.log("error",err);
	});
});
$('.table-delete-multiple-btn').click(function(){
	var ids = [],
		rows = table.rows().nodes();
	$('input[type=checkbox]:checked',rows).each(function(){
		ids.push(parseInt($(this).closest('tr').attr('item-id')));
	});
	if(ids.length==0){
		return alert("Please Choose Items");
	}
	if(!confirm("Are you sure to delete")){return;}
	$.ajax({
		url: LURL.multidelete,
		type: 'POST',dataType: 'json',
		data: {
			'_method': 'delete',
			'ids[]':ids,
		}
	}).done(function(res) {
		console.log("success",res);
		if(res.action && res.action==='update'){
			table.rows($('tr').has('input:checked')).remove().draw();
		}
	}).fail(function(err){
		console.log("error",err);
	});
});
// var files1Uploader = $(".table-create-modal").fileUploader(filesToUpload, "files");
// $('.table-create-img-show-modal').on('click',".table-submit",function (event) {
// 	event.preventDefault();
// 	var formData = new FormData();
// 	for (var i = 0, len = filesToUpload.length; i < len; i++) {
// 		formData.append("files", filesToUpload[i].file);
// 	}
// 	console.log(formData.getAll('files'))
// });
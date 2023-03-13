// $.fn.fileUploader = function (filesToUpload,currentFiles, sectionIdentifier) {
// 	var fileIdCounter = 0,
// 		filesToUpload=[];
// 	for (var i = 0; i < currentFiles.length; i++) {
// 		fileIdCounter++;
// 		filesToUpload.push({
// 			id: sectionIdentifier + fileIdCounter,
// 			file: 'default',
// 			src: LURL['asset.img']+currentFiles[i].file_path,
// 		});
// 	};
// 	this.getFilesToUpload = ()=>{
// 		var newFilesToUpload = [];
// 		for (var i = filesToUpload.length - 1; i >= 0; i--) {
// 			newFilesToUpload.push((filesToUpload[i].file === 'default') ? filesToUpload[i].src : filesToUpload[i].file);
// 		}
// 		return newFilesToUpload;
// 	}
// 	this.change(function (event) {
// 		var output = [];
// 		for (var i = 0; i < event.target.files.length; i++) {
// 			fileIdCounter++;
// 			var file = event.target.files[i];
// 			var fileId = sectionIdentifier + fileIdCounter;
// 			filesToUpload.push({
// 				id: fileId,
// 				file: file
// 			});
// 			const removeLink = `<a class="removeFile" href="#" data-fileid="${fileId}">Remove</a>`;
// 			output.push(`<li><a class="font-weight-bold table-create-img-show-btn" data-fileid="${fileId}">${ escape(file.name) }</a> - ${file.size } bytes. &nbsp; &nbsp; ${ removeLink }</li>`);
// 		};
// 		console.log('change',filesToUpload);
// 		$(this).find(".fileList").append(output.join(""));
// 		event.target.value = null;
// 	});

// 	$(this).on("click", ".removeFile", function (e) {
// 		e.preventDefault();
// 		var fileId = $(this).data("fileid");
// 		for (var i = 0; i < filesToUpload.length; ++i) {
// 			if (filesToUpload[i].id === fileId){
// 				filesToUpload.splice(i, 1);
// 			}
// 		}
// 		$(this).parent().remove();
// 	});
// 	$(this).on('click','.table-create-img-show-btn',function(event){
// 		event.preventDefault();
// 		var fileId = $(this).data("fileid");
// 		console.log(fileId);
// 		for (var i = 0; i < filesToUpload.length; ++i) {
// 			console.log(filesToUpload[i].id,fileId,filesToUpload[i].id === fileId);
// 			if (filesToUpload[i].id === fileId){
// 				var img = document.querySelector(".table-create-img-show-modal .modal-body img"),
// 					url = (filesToUpload[i].file === 'default') ? filesToUpload[i].src : URL.createObjectURL(filesToUpload[i].file);
// 				console.log(img,url)
// 				$(this).find('.modal-title .table-create-img-name').text(url);
// 				img.src = url;
// 				img.alt = url;
// 				img.onload = function() {
// 					console.log("loaded")
// 					URL.revokeObjectURL(url);
// 					$('.table-create-img-show-modal').modal('show');
// 				}
// 				break;
// 			}
// 		}
// 	});
// 	this.clear = function () {
// 		for (var i = 0; i < filesToUpload.length; ++i) {
// 			if (filesToUpload[i].id.indexOf(sectionIdentifier) >= 0){
// 				filesToUpload.splice(i, 1);
// 			}
// 		}
// 		$(this).children(".fileList").empty();
// 	}
// 	console.log(this,filesToUpload);
// 	return this;
// };

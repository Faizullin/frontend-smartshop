<template>
    <main class="overflow-hidden ">
        <!--Start Breadcrumb Style2-->
        <section class="breadcrumb-area" style="background-image: url(/assets/images/inner-pages/breadcum-bg.png);">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="breadcrumb-content text-center wow fadeInUp animated">
                            <h2>Cart</h2>
                            <div class="breadcrumb-menu">
                                <ul>
                                    <li><router-link :to="{name:'home'}"><i class="flaticon-home pe-2"></i>Home</router-link></li>
                                    <li> <i class="flaticon-next"></i> </li>
                                    <li class="active">Cart</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--End Breadcrumb Style2-->
        <!--Start cart area-->
        <section class="cart-area pt-120 pb-120">
            <div class="container">
                <div class="row wow fadeInUp animated">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <div class="cart-table-box">
                            <div class="table-outer">
                                <table class="cart-table">
                                    <thead class="cart-header">
                                        <tr>
                                            <th class="">Product Name</th>
                                            <th class="price">Price</th>
                                            <th>Quantity</th>
                                            <th>Subtotal</th>
                                            <th class="hide-me"></th>
                                        </tr>
                                    </thead>
                                    <tbody v-if="products">
                                        <tr v-for="product in products" :key="product.id" :data-product_id="product.id">
                                            <td>
                                                <div class="thumb-box">
                                                    <router-link :to="{name:'products.show',params:{id:product.id}}" class="thumb">
                                                        <img :src="product.image_url" alt="">
                                                    </router-link> 
                                                     <router-link :to="{name:'products.show',params:{id:product.id}}" class="title">
                                                        <h5>{{ product.title }}</h5>
                                                    </router-link>
                                                </div>
                                            </td>
                                            <td>${{ product.price.toFixed(2) }}</td>
                                            <td class="qty">
                                                <div class="qtySelector text-center">
                                                    <span @click.prevent="decreaseQty(product)" class="decreaseQty">
                                                        <i class="flaticon-minus"></i>
                                                    </span> 
                                                    <input  type="number" class="qtyValue"  min="1" :value="product.qty"/>
                                                    <span @click.prevent="increaseQty(product)" class="increaseQty">
                                                        <i class="flaticon-plus"></i> 
                                                    </span> 
                                                </div>
                                            </td>
                                            <td class="sub-total">${{ (product.qty*product.price).toFixed(2) }}</td>
                                            <td>
                                                <div @click.prevent="removeProductFromCart(product)" class="remove">
                                                    <i class="flaticon-cross"></i>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xl-12">
                        <div class="cart-button-box">
                            <div class="apply-coupon wow fadeInUp animated">
                                <div class="apply-coupon-input-box mt-30 "> <input type="text" name="coupon-code"
                                        value="" placeholder="Coupon Code"> </div>
                                <div class="apply-coupon-button mt-30"> <button class="btn--primary style2"
                                        type="submit">Apply Coupon</button> </div>
                            </div>
                            <div class="cart-button-box-right wow fadeInUp animated">
                                <button class="btn--primary mt-30" type="submit">Continue Shopping
                                </button>
                                <button @click.prevent="getCartProducts" 
                                    class="btn--primary mt-30" type="submit">
                                    Update Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row w-25 mt-3">
                    <form @submit.prevent="storeOrder">
                        <div v-if="message" class="invalid-feedback">
                            <strong>{{ message }}</strong>
                        </div>
                        <div class="form-group">
                            <input type="text" v-model="user.name" placeholder="name">
                            <div v-if="errors.name"
                                class="invalid-feedback">
                                <strong>{{ errors.name[0] }}</strong>
                            </div>
                        </div>
                        <div class="form-group">
                            <input type="email" v-model="user.email" placeholder="email">
                            <div v-if="errors.email"
                                class="invalid-feedback">
                                <strong>{{ errors.email[0] }}</strong>
                            </div>
                        </div>
                        <div class="form-group">
                           <input type="text" v-model="user.address" placeholder="address">
                           <div v-if="errors.address"
                                class="invalid-feedback">
                                <strong>{{ errors.address[0] }}</strong>
                            </div>
                        </div>
                        <div>
                            <input :disabled="orderForm.isLoading"
                                type="submit" value="Order" class="btn btn-primary">
                        </div>
                    </form>
                </div>
                <div class="row pt-120">
                    <div class="col-xl-6 col-lg-7 wow fadeInUp animated">
                        <div class="cart-total-box">
                            <div class="inner-title">
                                <h3>Cart Totals</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mt--30">
                    <div class="col-xl-6 col-lg-7 wow fadeInUp animated">
                        <div class="cart-total-box mt-30">
                            <div class="table-outer">
                                <table class="cart-table2">
                                    <thead class="cart-header clearfix">
                                        <tr>
                                            <th colspan="1" class="shipping-title">Shipping</th>
                                            <th class="price">$2500.00</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="shipping"> Shipping </td>
                                            <td class="selact-box1">
                                                <ul class="shop-select-option-box-1">
                                                    <li> <input type="checkbox" name="free_shipping" id="option_1"
                                                            checked=""> <label for="option_1"><span></span>Free
                                                            Shipping</label> </li>
                                                    <li> <input type="checkbox" name="flat_rate" id="option_2"> <label
                                                            for="option_2"><span></span>Flat Rate</label> </li>
                                                    <li> <input type="checkbox" name="local_pickup" id="option_3">
                                                        <label for="option_3"><span></span>Local Pickup</label> </li>
                                                </ul>
                                                <div class="inner-text">
                                                    <p>Shipping options will be updated during checkout</p>
                                                </div>
                                                <h4>Calculate Shipping</h4>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h4 class="total">Total</h4>
                                            </td>
                                            <td class="subtotal">$2500.00</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-5 wow fadeInUp animated">
                        <div class="cart-check-out mt-30">
                            <h3>Check Out</h3>
                            <ul class="cart-check-out-list">
                                <li>
                                    <div class="left">
                                        <p>Subtotal</p>
                                    </div>
                                    <div class="right">
                                        <p>$2500.00</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="left">
                                        <p>Shipping</p>
                                    </div>
                                    <div class="right">
                                        <p><span>Flat rate:</span> $50.00</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="left">
                                        <p>Total Price:</p>
                                    </div>
                                    <div class="right">
                                        <p>$2550.00</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--End cart area-->
    </main>
</template>
<script >
	const BASE_URL = 'http://127.0.0.1:8000';
	console.log("index.vue")
	export default {
		name:"Index",
		mounted:function(){
			console.log("mount");
            this.getCartProducts();
			$(document).trigger('changed');
			
		},
		data(){
			return {
				products:[],
                user:{
                    name:"",
                    email:'',
                    address:'',
                },
                orderForm:{
                    isLoading:false,
                },
                errors:{},
                message:null,
			}
		},
		methods:{
			getCartProducts(){
				this.products = JSON.parse(localStorage.getItem('cart'));
			},
			increaseQty(product){
                product.qty++;
                if(product.qty < 1){
                    product.qty = 1;
                }
                this.updateCart();
            },
            decreaseQty(product){
                product.qty--;
                if(product.qty < 1){
                    product.qty = 1;
                }
                this.updateCart();
            },
            removeProductFromCart(product){
                this.products = this.products.filter(function(item){
                    return item.id !== product.id;
                });
                this.updateCart();
            },
            updateCart(){
                localStorage.setItem('cart',JSON.stringify(this.products));
            },
			addToCart(id,qty=0){
				var cart = localStorage.getItem('cart'),
					qtyBlock =$('.qtyValue');
				if(qty){
					qtyBlock.val(qty);//1
				}
				
					
				qty = qtyBlock.val();
				qty = Number((qty) ? qty : 1);
				qtyBlock.val(1);
				var newCartProduct = [{
					'id':id,
					'qty':qty,
				}];
                if(!cart){
                    localStorage.setItem('cart',JSON.stringify(newCartProduct));
                }else{
                    cart = JSON.parse(cart);
                    console.log('CART:',cart);
                    cart.forEach((item)=>{
                    	if(item.id===id){
                    		item.qty = Number(item.qty)+qty;
                    		newCartProduct = null;
                    	}
                    });
                    Array.prototype.push.apply(cart,newCartProduct);
                    localStorage.setItem('cart',JSON.stringify(cart));
                }    
			},
            storeOrder(){
                this.orderForm.isLoading=true;
                this.message=null;
                this.errors={};
                axios.post(BASE_URL+'/api/orders',{
                    products:this.products,
                    name:this.user.name,
                    address:this.user.address,
                    email:this.user.email,
                    total_price:this.totalPrice,
                }).then((response)=>{
                    if(response.data.status){
                        if(response.data.order){
                            var ids = [];
                            for (var i = response.data.order.products.length - 1; i >= 0; i--) {
                                ids.push(response.data.order.products[i].id)
                            }
                            this.products = this.products.filter(function(elem) {
                                return !ids.includes(elem.id);
                            })
                            this.updateCart()
                        }
                        if(response.data.message){
                            alert(response.data.message)
                        }
                        this.user={}
                    }
                }).catch((error)=>{
                    if(error.response && error.response.data && !error.response.data.status) {
                        this.errors = error.response.data.errors || {};
                        this.message = error.response.data.message || null;
                    }
                }).finally((v)=>{
                    this.orderForm.isLoading=false;
                    $(document).trigger('changed');
                });
            },
		},
        computed:{
            totalPrice(){
                var result = 0;
                this.products.forEach((product)=>{
                    console.log(product.price*product.qty)
                    result += product.price*product.qty;
                });
                return result;
            }
        }
	}
</script>
<style scoped>
    .invalid-feedback{
        display: block !important;
    }
</style>
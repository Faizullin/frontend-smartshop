<template>
	<main class="overflow-hidden ">
        <!--Start Breadcrumb Style2-->
        <section class="breadcrumb-area" style="background-image: url(/assets/images/inner-pages/breadcum-bg.png);">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="breadcrumb-content text-center wow fadeInUp animated">
                            <h2>Contact Us</h2>
                            <div class="breadcrumb-menu">
                                <ul>
                                    <li><router-link :to="{name:'home'}"><i class="flaticon-home pe-2"></i>Home</router-link></li>
                                    <li> <i class="flaticon-next"></i> </li>
                                    <li class="active">Contact Us</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--End Breadcrumb Style2-->
        <!--Start Contact Page Info-->
        <section class="contact-page-info pt-120 pb-60">
            <div class="container">
                <div class="row mt--30">
                    <div class="col-xl-4 col-lg-6 wow fadeInUp animated">
                        <div class="contact-page-info__single mt-30">
                            <div class="thumb"> <img src="/assets/images/inner-pages/location.png" alt=""> </div>
                            <div class="contact-box">
                                <h4>Address</h4>
                                <p class="text1">272 Rodney St, Brooklyn, NY 11211</p>
                                <p class="text2">76 East Houston Street <br>New York City</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-6 wow fadeInUp animated">
                        <div class="contact-page-info__single mt-30">
                            <div class="thumb"> <img src="/assets/images/inner-pages/contact.png" alt=""> </div>
                            <div class="contact-box">
                                <h4>Contact</h4>
                                <ul>
                                    <li>
                                        <p>Mobile: <a href="tel:123456789">068 26589 996</a></p>
                                    </li>
                                    <li>
                                        <p>Hotline: <a href="tel:123456789">1900 26886</a></p>
                                    </li>
                                    <li>
                                        <p>E-mail: <a href="mailto:yourmail@email.com">info@google.com</a></p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-6 wow fadeInUp animated">
                        <div class="contact-page-info__single mt-30 ">
                            <div class="thumb"> <img src="/assets/images/inner-pages/clockt.png" alt=""> </div>
                            <div class="contact-box">
                                <h4>Office Hour</h4>
                                <p class="text1">Monday - Friday: 08:30 - 20:00</p>
                                <p class="text2">Saturday & Sunday: 09:30 -<br> 21:30</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--End Contact Page Info-->
        <!-- Contact box Start -->
        <section class="contact-box pt-60 pb-120">
            <div class="container">
                <div class="row g-0 background align-items-center wow fadeInUp animated">
                    <div class="col-lg-5">
                        <div class="map"> <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8404599049227!2d144.95373931584484!3d-37.81720574201434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sbd!4v1643890073627!5m2!1sen!2sbd"
                                allowfullscreen="" loading="lazy"></iframe> </div>
                    </div>
                    <div class="col-lg-7">
                        <div class="contact-form">
                            <h3>Send Us Message</h3>
                            <form action="#" class="common-form">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="form-group"> <label for="name"> Your Name</label> <input type="text"
                                                id="name" class="form-control" placeholder="David Warner"> </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form-group"> <label for="number"> Phone Number </label> <input
                                                type="text" id="number" class="form-control" placeholder="+61"> </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form-group"> <label for="email"> Email Address </label> <input
                                                type="text" id="email" class="form-control"
                                                placeholder="support@gmail.com"> </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <p>Subjects </p>
                                            <div class="sellect-box"> <select>
                                                    <option>Want to know order status </option>
                                                    <option value="1">Want to get refund </option>
                                                    <option value="4">want to buy a product</option>
                                                </select> </div>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-group m-0"> <label for="email"> Write Message </label>
                                            <textarea placeholder="Hi, Good Afternoon..."></textarea> </div>
                                    </div>
                                </div> <button type="submit" class="btn--primary style2 ">Send Message </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section> <!-- Contact box End -->
    </main>
</template>
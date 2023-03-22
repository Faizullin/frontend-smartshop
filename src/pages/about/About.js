import Breadcrumbs, { BreadcrumbsLink } from "../../components/layouts/Breadcrumbs ";
import './style.css';
import Layout from "../../components/layouts/Layout"
import img1 from "./images/shape/mission-v1-shape1.png"
import img2 from "./images/shape/mission-v1-shape2.png"
import img3 from './images/page/image688419215320-dpmj-600w.png'
import img4 from './images/page/mobilepayment21e12306svg193-kn9j.svg'
import img5 from './images/page/digitalalmaty182-8t7-400h.png'
import img6 from './images/page/image14sdiis4ulltransformed15324-ll9-600h.png'

export default function About() {
    return (
        <Layout>
            <main className="overflow-hidden">
                <Breadcrumbs>
                    <BreadcrumbsLink active={true}>About</BreadcrumbsLink>
                </Breadcrumbs>
                <section className="about__background pt-120 pb-120">
                    <div className="auto-container container align-items-center justify-content-lg-between justify-content-center">
                        <div className="row  g-0 ">
                            <div className="col-lg-5 col-10 wow fadeInLeft animated align-items-center vertical-align-center">
                                <div className="about__img">
                                    <div className="img-box">
                                        <img src="/assets/images/inner-pages/about-v1-img2.png" alt="" /></div>
                                    <div className="about__img-inner"> <img src={img3}
                                            alt="" /> </div>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-11 ">
                                <div className="about__content text-center">
                                    <div className="shape1"><img src={img1} alt="" /></div>
                                    <div className="shape2"><img src={img2} alt="" /></div>
                                    <div className="title wow fadeInUp animated">
                                        <h6>Our Company</h6>
                                        <h2>The Highest Quality <br/>Products</h2>
                                    </div>
                                    <div className="text wow fadeInUp animated">
                                        <p>Monotonectally initiate covalent intellectual capital without scalable mindshare.
                                            Synergistically recaptiualize maintainable users whereas fully tested initiatives.
                                            Appropriately create superior scenarios for professional services. Holisticly
                                            envision emerging portal egestas sapien hac urna telluses nam pulvinar per luctus
                                            ipsum.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        
                <section className="mission mission__background">
                    <div className="shape1"><img src={img1} alt="" /></div>
                    <div className="shape2"><img src={img2} alt="" /></div>
                    <div className="auto-container container pt-120 pb-120">
                        <div className="container">
                            <div className="row mt--30 align-items-center justify-content-center">
                                <div className="col-lg-6 col-md-10 mt-30">
                                    <div className="mission__content text-lg-start text-center">
                                        <h2 className=" wow fadeInUp animated">Процесс покупки</h2>
                                        <p className=" wow fadeInUp animated">
                                        Перед входом в магазин, делается специальная аутентификация пользователя
                                        Покупатель выбирает нужные ему товары
                                        Дальше клиент просто проходит через наш кассовый аппарат
                                        Автоматический происходит подчёт товаров и оплата по нему, не контактируя с кем-либо
                                        </p>
                                        <div className="btn-box wow fadeInUp animated"> <a href=""
                                                className="btn--secondary style2">Get More Info</a> </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 mt-30">
                                    <div className="mission__thumb wow fadeInRight animated"> <img
                                            src={img4} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="testimonial-two pt-120 pb-120">
                    <div className="container">
                        <div className="section-header text-center wow fadeInUp animated">
                            <h2>Наши возможности</h2>
                            <p>Увеличьте пропускную способность вашего бизнеса, сокращая затраты на персонал и анализируя продажи</p>
                        </div>
                        <div className="row">
                            <div className="col-xl-12 wow fadeInUp animated">
                                <div className="testimonial-two__slider row">
                                    <div className="testimonial-two__single col-6 col-md-3">
                                        <div className="testimonial-two__single-inner">
                                            <div className="testimonial-two__single-img"> <img
                                                    src="/assets/images/testimonial/testimonial-v2-1.png" alt="" /> </div>
                                            <div className="testimonial-two__single-content">
                                                <div className="text">
                                                    <p>Сохранение банковских карт</p>
                                                </div>
                                                <div className="client-info"> <a href="">
                                                        <h6>Мгновенная оплата</h6>
                                                    </a> </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="testimonial-two__single col-6 col-md-3">
                                        <div className="testimonial-two__single-inner">
                                            <div className="testimonial-two__single-img"> <img
                                                    src="/assets/images/testimonial/testimonial-v2-2.png" alt="" /> </div>
                                            <div className="testimonial-two__single-content">
                                                <div className="text">
                                                    <p>Аутендификация пользователя</p>
                                                </div>
                                                <div className="client-info"> <a href="">
                                                        <h6>RFID технология </h6>
                                                    </a> </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="testimonial-two__single col-6 col-md-3">
                                        <div className="testimonial-two__single-inner">
                                            <div className="testimonial-two__single-img"> <img
                                                    src="/assets/images/testimonial/testimonial-v2-3.png" alt="" /> </div>
                                            <div className="testimonial-two__single-content">
                                                <div className="text">
                                                    <p>Экономия времени и денег</p>
                                                </div>
                                                <div className="client-info"> <a href="">
                                                        <h6>Оплата не доставая карту</h6>
                                                    </a> </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="testimonial-two__single col-6 col-md-3">
                                        <div className="testimonial-two__single-inner">
                                            <div className="testimonial-two__single-img"> <img
                                                    src="/assets/images/testimonial/testimonial-v2-3.png" alt="" /> </div>
                                            <div className="testimonial-two__single-content">
                                                <div className="text">
                                                    <p>Удобная платформа</p>
                                                </div>
                                                <div className="client-info"> <a href="">
                                                        <h6>Аналитика по продажам</h6>
                                                    </a> </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="mission mission__background">
                    <div className="shape1"><img src={img1} alt="" /></div>
                    <div className="shape2"><img src={img2} alt="" /></div>
                    <div className="auto-container container pt-120 pb-120">
                        <div className="container">
                            <div className="row mt--30 align-items-center justify-content-center">
                                <div className="col-lg-6 col-md-10 mt-30">
                                    <div className="mission__content text-lg-start text-center">
                                        <h2 className=" wow fadeInUp animated">Почему именно мы? </h2>
                                        <p className=" wow fadeInUp animated">RFID KASSA– позволяет клиентамбыстрее и удобнееоплачивать за товары и услуги, что может улучшить их впечатление о бизнесе и повысить уровень удовлетворенности клиентов.
 Наш аппарат даёт возможность собирать болееточную аналитику по продажам, так как он записывает каждую транзакцию и позволяет упорядочить данные для более детального анализа. Мы понимаем Ваш бизнес, у нас одно видение –Ваш рост.Мы помогаем каждому клиенту достичь бизнес-целей, используя весь наш потенциал. 
                                        </p>
                                        <div className="btn-box wow fadeInUp animated"> <a href=""
                                                className="btn--secondary style2">Get More Info</a> </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 mt-30">
                                    <div className="mission__thumb wow fadeInRight animated"> <img
                                            src={img6} alt="" />
                                        {/* <div className="content-box">
                                            <div className="icon"> <i className="flaticon-quote"></i> </div>
                                            <h3>Success usually comes to those who are too busy to be looking for it</h3>
                                            <div className="author-box">
                                                <h5>Sowat Ahsan <span> Founder, CEO </span> </h5>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="about__background video1 pt-5 pb-5" id="video1-8">
                    <div className="container align-center">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-md-12 col-12 col-lg-6">
                                <div className="text-wrapper">
                                    <h1 className="mbr-section-subtitle mbr-fonts-style mb-5 fade-in-up mbr-bold display-1">Пресса о нас</h1>
                                    <p className="mbr-text mbr-fonts-style mb-0 fade-in-up display-7">
                                    "Устройство, которое мы делаем, очень эффективно как для продавца, так и для покупателя. Оно не только экономит время обеих сторон, но и решает проблему нехватки персонала в магазинах. Кроме того, оно остановит мелкие кражи в магазинах. Мои коллеги Ерсерік Маханбет, Нұрасыл Амантұр, c которыми мы собирали устройство и писали общий код, нам троим, потребовалось несколько месяцев", — рассказал Адильжан Кадыров.
                                    </p>
                                    <div className="mbr-section-btn mt-3 fade-in-up">
                                        <p className="">7 февраля 2023</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mbr-white col-md-12 col-12 col-lg-6">
                                <div className="card text-center">
                                    <img className="card-img-top" src={img5} />
                                    <div className="card-body">
                                        <h5 className="card-title  pt-3 pb-3">"Автоматизированный кассовый аппарат"</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="video-three">
                    <div className="video-three__bg jarallax" data-jarallax data-speed="0.3" data-imgposition="50% 50%"
                        > </div>
                        {/* style="background-image: url(/assets/images/inner-pages/video-v3-bg.jpg);" */}
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="video-three__inner">
                                    <div className="icon wow zoomIn animated" data-wow-delay="300ms" data-wow-duration="1500ms"> <a
                                            className="video-popup" title="Video Gallery"
                                            href="https://www.youtube.com"> <i className="flaticon-play"></i>
                                        </a> <span className="border-animation border-1"></span> <span
                                            className="border-animation border-2"></span> <span
                                            className="border-animation border-3"></span> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="partner-one">
                    <div className="container wow fadeInUp animated">
                        <div className="row wow fadeInUp animated">
                            <div className="partnerslider"> 
                                <a href=""
                                    className="partner-one__brand d-flex justify-content-center align-items-center"> <img
                                        src="/assets/images/brand/brand-logo-1.png" alt=""/> </a> <a href=""
                                    className="partner-one__brand justify-content-center align-items-center"> <img
                                        src="/assets/images/brand/brand-logo-2.png" alt=""/> </a> <a href=""
                                    className="partner-one__brand justify-content-center align-items-center"> <img
                                        src="/assets/images/brand/brand-logo-3.png" alt=""/> </a> <a href=""
                                    className="partner-one__brand justify-content-center align-items-center"> <img
                                        src="/assets/images/brand/brand-logo-4.png" alt=""/> </a> <a href=""
                                    className="partner-one__brand justify-content-center align-items-center"> <img
                                        src="/assets/images/brand/brand-logo-5.png" alt=""/> </a> <a href=""
                                    className="partner-one__brand justify-content-center align-items-center"> <img
                                        src="/assets/images/brand/brand-logo-2.png" alt=""/> </a> <a href=""
                                    className="partner-one__brand justify-content-center align-items-center"> <img
                                        src="/assets/images/brand/brand-logo-3.png" alt=""/> </a> <a href=""
                                    className="partner-one__brand justify-content-center align-items-center"> <img
                                        src="/assets/images/brand/brand-logo-4.png" alt=""/> </a> </div>
                        </div>
                    </div>
                </div>
            </main>
        {/* <style>
            @media (min-width: 1024px) {
            .about {
                min-height: 100vh;
                display: flex;
                align-items: center;
            }
            }
            </style> */}
        </Layout>

    );
}

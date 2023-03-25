import { useEffect, useRef } from "react";
import jQuery from "jquery";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/authAction";

export default function Layout({children}){ 
    var cart_number= 0;
    const dataFetchedRef = useRef(false);
    const dispatch = useDispatch()
    const { isAuthenticated } = useSelector(state => state.authReducer);


    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout())
    }

    useEffect(() => {
        if (dataFetchedRef.current) return;
        dataFetchedRef.current = true;
        jQuery(document).trigger('changed')
    },[])
  return (
      <>
          <header className="header-style-3">
              <div className="menubox">
                  <div className="container-fluid">
                      <div className="row d-lg-none d-block">
                          <div className="mobile-menu ">
                              <div className="mobile-menu__menu-top border-bottom-0">
                                  <div className="container">
                                      <div className="row">
                                          <div className="menu-info d-flex justify-content-between align-items-center">
                                              <div className="menubar"> 
                                                  <span></span> 
                                                  <span></span> 
                                                  <span></span> 
                                                  </div>
                                                   <a href="index.html" className="logo"> 
                                                   <img src="/src/assets/images/logo/logo.png"
                                                      alt=""/> </a>
                                              <div className="cart-holder">
                                                    <Link to="/cart" className="cart cart-icon position-relative">
                                                        <i className="flaticon-shopping-cart"></i>
                                                    </Link>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="menu-closer"></div>
                              <div className="mobile-menu__sidebar-menu">
                                  <div className="menu-closer two"> <span> Close Menu</span> <span className="cross"><i
                                              className="flaticon-cross"></i></span> </div>
                                  <div className="search-box-holder">
                                      <form action="#0">
                                          <div className="form-group search-box menu"> 
                                          <input type="text" className="form-control"
                                                  placeholder="Search for products"/> <span className="search-icon"> <i
                                                      className="flaticon-magnifying-glass"></i> </span> </div>
                                      </form>
                                  </div>
                                  <ul className="page-dropdown-menu">
                                      <li className="dropdown-list">
                                        <Link to="/"> <span>Home </span></Link>
                                      </li>
                                      <li className="dropdown-list">
                                        <Link to="/product"> <span>Products</span></Link>
                                      </li>
                                      <li className="dropdown-list"> 
                                        <a>
                                            <span>Pages</span>
                                            <span className="menuarrow"> 
                                                <i className="flaticon-next-1"></i>
                                            </span> 
                                        </a>
                                        <ul className=" dropdown ">
                                              <li><Link to="/about"> About Us </Link></li>
                                              <li><Link to="/cart"> Cart </Link></li>
                                              {
                                                isAuthenticated ? (
                                                    <>
                                                        <li><Link to="/profile"> Profile </Link></li>
                                                        <li><a href="#" onClick={handleLogout}>Log out </a></li>
                                                    </>
                                                ) : ""
                                              }                                              
                                        </ul>
                                      </li>
                                        {
                                            isAuthenticated ? (
                                                <li><Link to="/profile"> Profile </Link></li>
                                            ) : (
                                                <>
                                                    <li><Link to="/auth/login">Login </Link></li>
                                                    <li><Link to="/auth/register">Register </Link></li>
                                                </>
                                            )
                                        }  
                                      
                                  </ul>
                              </div>
                          </div>
                      </div>
                      <div className="d-lg-block d-none">
                          <div className="row g-0 position-relative">
                              <div className="col-lg-3 d-flex align-items-center justify-content-center border-rit ">
                                  <div className="logo"> <a href="index.html"> 
                                  <img src="/src/assets/images/logo/logo.png" alt=""/> </a>
                                  </div>
                              </div>
                              <div className="col-lg-9 g-0 p-0">
                                  <div className="row g-0 holder">
                                      <div className="col-12">
                                          <div className="some-info">
                                              <p className="d-flex align-items-center"> <span className="icon"> <i
                                                          className="flaticon-power"></i> </span> Welcome to Karte Online Shop</p>
                                              <div className="right d-flex align-items-center ">
                                                  <div className="language currency"> <select>
                                                          <option>USD</option>
                                                          <option value="1">TG</option>
                                                          <option value="2">RUB</option>
                                                      </select> </div>
                                                  <div className="language two">
                                                      <select>
                                                          <option>KAZAKH </option>
                                                          <option value="1">RUSSIAN</option>
                                                          <option value="4">ENGLISH</option>
                                                      </select>
                                                  </div> 
                                                  <Link to="/auth/login"> Sign In </Link>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="border-one"> </div>
                                  <div className="row g-0 holder">
                                      <div className="col-12">
                                          <div className="mega-menu-default mega-menu d-lg-block d-none">
                                              <div className=" d-flex align-items-center justify-content-between ">
                                                  <nav>
                                                      <ul className="page-dropdown-menu d-flex align-items-center justify-content-center">
                                                          <li className="dropdown-list">
                                                          <Link to="/">
                                                              <span>Home</span> 
                                                          </Link>
                                                          </li>
                                                          <li className="dropdown-list">
                                                          <Link to="/product">
                                                              <span>Products</span> 
                                                          </Link>
                                                          </li>
                                                          <li className="dropdown-list"> 
                                                            <a href=""> 
                                                                <span>Pages </span> <span className="menuarrow"> <i className="flaticon-down-arrow"></i>
                                                                </span> 
                                                            </a>
                                                            <ul className="dropdown">
                                                                <li><Link to="/about">About Us </Link></li>
                                                                <li><Link to="/cart">Cart</Link></li>
                                                                {
                                                                    isAuthenticated ? (
                                                                        <>
                                                                            <li><Link to="/profile"> Profile </Link></li>
                                                                            <li><a href="#" onClick={handleLogout}>Log out </a></li>
                                                                        </>
                                                                    ) : ""
                                                                }  
                                                            </ul>
                                                          </li>
                                                      </ul>
                                                  </nav>
      

                                                  <div className="right d-flex align-items-center justify-content-end">
                                                      <ul className="main-menu__widge-box d-flex align-items-center ">
                                                          <li className="d-lg-block d-none">
                                                              <Link to="/profile">
                                                                  <i className="flaticon-user"></i>
                                                              </Link>
                                                          </li>
                                                          <li className="d-lg-block d-none">
                                                              <Link to="#"  className="number">
                                                                  <i className="flaticon-heart"></i>
                                                                  <span className="count">(2)</span>
                                                              </Link> 
                                                          </li>
                                                          <li className="cartm">
                                                              <Link to="/cart" className="number cart-icon">
                                                                  <i className="flaticon-shopping-cart"></i>
                                                                  <span className="count">({ cart_number })</span> 
                                                              </Link> 
                                                          </li>
                                                      </ul>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="sticy-header">
                  <div className="mobile-menu d-lg-none d-block">
                      <div className="mobile-menu__menu-top border-bottom-0">
                          <div className="container">
                              <div className="row">
                                  <div className="menu-info d-flex justify-content-between align-items-center">
                                      <div className="menubar"> <span></span> <span></span> <span></span> </div> <a
                                          href="index.html" className="logo"> 
                                          <img src="/src/assets/images/logo/logo.png" alt=""/> </a>
                                      <div className="cart-holder">
                                          <a href="#0" className="cart cart-icon position-relative">
                                              <i className="flaticon-shopping-cart"></i>
                                          </a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="container position-relative d-lg-block d-none">
                      <div className="d-flex align-items-center justify-content-between"> <a href="index.html" className="logo me-2">
                              <img src="/src/assets/images/logo/logo.png" alt=""/> </a>
                          <div className="mega-menu-default mega-menu d-lg-block d-none">
                              <div className="container ">
                                  <div className="row">
                                      <nav>
                                          <ul
                                              className="page-dropdown-menu d-flex align-items-center justify-content-center">
                                              <li className="dropdown-list">
                                                  <Link to="/">
                                                      <span>Home</span>
                                                  </Link>
                                              </li>
                                              <li className="dropdown-list"> 
                                                  <Link to="/product"> 
                                                      <span>Products </span>
                                                  </Link>
                                              </li>
                                              <li className="dropdown-list"> <a href=""> <span>Pages </span> <span
                                                          className="menuarrow"> <i className="flaticon-down-arrow"></i>
                                                      </span> </a>
                                                  <ul className="dropdown">
                                                      <li><Link to="/about">About Us </Link></li>
                                                      <li><Link to="/cart">Cart</Link></li>
                                                      <li><Link to="/profile">Profile</Link></li>
                                                  </ul>
                                              </li>
                                          </ul>
                                      </nav>

                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="sidebar-content-closer"></div>
              <div className="sidebar-content">
                  <div className="sidebar-widget-container">
                      <div className="widget-heading d-flex justify-content-end align-content-center"> <span
                              className="close-side-widget">X</span> </div>
                      <div className="sidebar-textwidget">
                          <div className="sidebar-info-contents">
                              <div className="content-inner">
                                  <div className="logo"> <a href="index.html">
                                      <img src="/src/assets/images/logo/logo-2.png" alt=""/></a>
                                  </div>
                                  <div className="content-box">
                                      <h4>About Us</h4>
                                      <div className="inner-text">
                                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                              Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                                      </div>
                                  </div>
                                  <div className="form_inner">
                                      <h4>Support</h4>
                                      <form method="post">
                                          <div className="form-group mt-4"> 
                                          <input type="text" name="name" placeholder="Name"
                                                  required=""/> </div>
                                          <div className="form-group mt-4"> <input type="email" name="email" placeholder="Email"
                                                  required=""/> </div>
                                          <div className="form-group mt-4"> <textarea name="message"
                                                  placeholder="Message..."></textarea> </div>
                                          <div className="form-group message-btn mt-4"> <button type="submit"
                                                  className="btn--secondary"> <span className="txt">Submit Now</span> </button> </div>
                                      </form>
                                  </div>
                                  <div className="sidebar-contact-info">
                                      <h4>Contact Info</h4>
                                      <ul>
                                          <li> <span className="flaticon-pin-1"></span> New York, United States </li>
                                          <li> <span className="flaticon-telephone"></span> <a href="tel+44203700001">+44 123 456
                                                  789</a> </li>
                                          <li> <span className="flaticon-mail"></span> <a
                                                  href="mailtoinfoexample.com">infoexample.com</a> </li>
                                      </ul>
                                  </div>
                                  <div className="thm-medio-boxx1">
                                      <ul className="social-box">
                                          <li className="facebook"> <a href="https//www.facebook.com/" target="_blank"><i
                                                      className="flaticon-facebook-app-symbol"></i></a> </li>
                                          <li className="twitter"> <a href="https//twitter.com/" target="_blank"><i
                                                      className="flaticon-twitter"></i></a> </li>
                                          <li className="instagram"> <a href="https//www.instagram.com/" target="_blank"><i
                                                      className="flaticon-instagram"></i></a> </li>
                                          <li className="youtube"> <a href="https//www.youtube.com/" target="_blank"><i
                                                      className="flaticon-youtube"></i></a> </li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </header>
          { children }
          <footer className="footer-default footer-3 ">
              <div className="footer-default__shap_1 position-absolute "> 
              <img src="/src/assets/images/shape/footer-shape-1.png"
                      alt=""/> </div>
              <div className="footer-default__main-footer position-relative">
                  <div className="container">
                      <div className="row">
                          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 mt-30 wow fadeInUp animated">
                              <div className="footer-default__single-box">
                                  <div className="company-info">
                                      <div className="footer-title">
                                          <h4> Office</h4>
                                      </div>
                                      <div className="text1">
                                          <p>+7 (777) 110 6777</p>
                                      </div>
                                      <div className="text2">
                                          <p>Republic of Kazakhstan, Astana City</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="col-xl-2 col-lg-6 col-md-6 col-sm-12 mt-30 wow fadeInUp animated">
                              <div className="footer-default__single-box">
                                  <div className="footer-title">
                                      <h4> Useful Links </h4>
                                  </div>
                                  <ul className="footer-links">
                                      <li><Link to="/profile">Profile</Link></li>
                                      <li><Link to="/auth/login">Sign In</Link></li>
                                      <li><Link to="/cart">View Cart</Link></li>
                                  </ul>
                              </div>
                          </div>
                          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 mt-30 wow fadeInUp animated">
                              <div className="footer-default__single-box">
                                  <div className="footer-title">
                                      <h4> Information </h4>
                                  </div>
                                  <ul className="footer-links">
                                      <li><Link to="/about">About us</Link></li>
                                      <li><Link to="/product">New Products</Link></li>
                                  </ul>
                              </div>
                          </div>
                          <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 mt-30 wow fadeInUp animated">
                              <div className="footer-default__single-box">
                                  <div className="footer-title">
                                      <h4> Newsletter </h4>
                                  </div>
                                  <div className="footer-newsletter">
                                      <p className="text">Enter your email to receive our latest updates about our products &
                                          promotions. </p>
                                      <form action="#0" className="footer-default__subscrib-form">
                                          <div className="footer-input-box"> 
                                              <input type="email" placeholder="Email address"
                                                  name="email"/> 
                                              <button type="submit" className="subscribe_btn"> Subscribe
                                              </button> 
                                          </div>
                                      </form>
                                      <div className="newsletter-bottom d-flex align-items-center">
                                          <div className="footer-title-box">
                                              <p>Follow Us</p>
                                          </div>
                                          <div className="footer__medio-boxx  medio-boxx  d-flex align-items-center">
                                              <ul>
                                                  <li><a href="https//www.facebook.com/" target="_blank" className="active"><i
                                                              className="flaticon-facebook-app-symbol"></i></a></li>
                                                  <li><a href="https//www.youtube.com/" target="_blank"><i
                                                              className="flaticon-youtube"></i></a></li>
                                                  <li><a href="https//twitter.com/"><i className="flaticon-twitter"
                                                              target="_blank"></i></a></li>
                                                  <li><a href="https//www.instagram.com/"><i className="flaticon-instagram"
                                                              target="_blank"></i></a></li>
                                              </ul>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </footer>
      </>
  )
}
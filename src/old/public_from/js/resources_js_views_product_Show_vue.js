"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_product_Show_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/product/Show.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/product/Show.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var BASE_URL = 'http://127.0.0.1:8000';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Show",
  mounted: function mounted() {
    console.log("mount");
    $(document).trigger('changed');
    this.getProduct();
  },
  data: function data() {
    return {
      product: null
    };
  },
  methods: {
    getProduct: function getProduct() {
      var _this = this;

      axios.get(BASE_URL + "/api/products/".concat(this.$route.params.id)).then(function (res) {
        _this.product = res.data.data;
        console.log(_this.product);
      })["catch"](function (err) {
        console.log(err);
      })["finally"](function (v) {
        $(document).trigger('changed');
      });
    },
    addToCart: function addToCart(id) {
      var cart = localStorage.getItem('cart');

      if (!cart) {
        localStorage.setItem('cart', JSON.stringify({
          'id': id,
          'qty': this.product_quantity
        }));
      } else {
        cart = JSON.stringify({
          'id': id,
          'qty': 1
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/product/Show.vue?vue&type=template&id=049a6388":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/product/Show.vue?vue&type=template&id=049a6388 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"shop-details-breadcrumb wow fadeInUp animated overflow-hidden\"><div class=\"container\"><div class=\"row\"><div class=\"col-xl-12\"><div class=\"shop-details-inner\"><ul class=\"shop-details-menu\"><li><a href=\"index.html\">Home</a></li><li class=\"active\">Shop Details</li></ul></div></div></div></div></div>", 1);

var _hoisted_2 = {
  "class": "shop-details-top two"
};
var _hoisted_3 = {
  "class": "container"
};
var _hoisted_4 = {
  "class": "row mt--30"
};
var _hoisted_5 = {
  "class": "col-xl-6 col-lg-6 mt-30 wow fadeInUp animated"
};
var _hoisted_6 = {
  "class": "single-product-box one"
};
var _hoisted_7 = {
  key: 0,
  "class": "big-product single-product-one slider-for"
};
var _hoisted_8 = {
  "class": "single-item"
};
var _hoisted_9 = ["src"];

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "ptag"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "one"
}, "-20% ")], -1
/* HOISTED */
);

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)();

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#0",
  "class": "love"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-like"
})], -1
/* HOISTED */
);

var _hoisted_13 = {
  "class": "navholder"
};
var _hoisted_14 = {
  key: 0,
  "class": "product-slicknav single-product-one-nav slider-nav"
};
var _hoisted_15 = {
  "class": "single-item"
};
var _hoisted_16 = ["src"];
var _hoisted_17 = {
  "class": "col-xl-6 col-lg-6 mt-30 wow fadeInUp animated"
};
var _hoisted_18 = {
  "class": "shop-details-top-right"
};
var _hoisted_19 = {
  key: 0,
  "class": "shop-details-top-right-content-box"
};

var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"shop-details-top-review-box\"><div class=\"shop-details-top-review\"><ul><li><i class=\"flaticon-star-1\"></i></li><li><i class=\"flaticon-star-1\"></i></li><li><i class=\"flaticon-star-1\"></i></li><li><i class=\"flaticon-star-1\"></i></li><li><i class=\"flaticon-star-1\"></i></li></ul><p>(2 Reviews)</p></div></div>", 1);

var _hoisted_21 = {
  "class": "shop-details-top-title"
};
var _hoisted_22 = {
  "class": "shop-details-top-info"
};

var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Category:", -1
/* HOISTED */
);

var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Vendor:", -1
/* HOISTED */
);

var _hoisted_25 = {
  key: 0
};
var _hoisted_26 = {
  key: 1,
  "class": "text-muted text-capitalize"
};
var _hoisted_27 = {
  "class": "shop-details-top-price-box"
};

var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("del", null, "$50.00", -1
/* HOISTED */
);

var _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "(+15% Vat Included)", -1
/* HOISTED */
);

var _hoisted_30 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "shop-details-top-product-sale"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "20"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Products sold in last 12 hours ")], -1
/* HOISTED */
);

var _hoisted_31 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<ul class=\"shop-details-top-ask-question\"><li><a href=\"#0\"><div class=\"icon\"><i class=\"flaticon-left-and-right-arrows\"></i></div><div class=\"text\"><p>Add to Compare</p></div></a></li><li><a href=\"#0\"><div class=\"icon\"><i class=\"flaticon-chat-bubble\"></i></div><div class=\"text\"><p>Ask Question</p></div></a></li></ul><div class=\"timer-box\"><h4>Running Offer</h4><div class=\"countdown-timer\"><div class=\"default-coundown\"><div class=\"box\"><div class=\"countdown time-countdown-two\" data-countdown-time=\"2022/03/12\"></div></div></div></div></div><p class=\"shop-details-top-product-sale\"><span>20</span> Persons looking for this product</p>", 3);

var _hoisted_34 = {
  "class": "product-quantity"
};

var _hoisted_35 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Quantity", -1
/* HOISTED */
);

var _hoisted_36 = {
  "class": "product-quantity-box d-flex align-items-center flex-wrap"
};

var _hoisted_37 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"qty mr-2\"><div class=\"qtySelector text-center\"><span class=\"decreaseQty\"><i class=\"flaticon-minus\"></i></span> <input type=\"number\" class=\"qtyValue\" value=\"1\"> <span class=\"increaseQty\"><i class=\"flaticon-plus\"></i></span></div></div>", 1);

var _hoisted_38 = {
  key: 0,
  "class": "product-quantity-check"
};

var _hoisted_39 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-select"
}, null, -1
/* HOISTED */
);

var _hoisted_40 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "In Stock", -1
/* HOISTED */
);

var _hoisted_41 = [_hoisted_39, _hoisted_40];
var _hoisted_42 = {
  key: 1,
  "class": "product-quantity-check"
};

var _hoisted_43 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-cross"
}, null, -1
/* HOISTED */
);

var _hoisted_44 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Out Of Stock", -1
/* HOISTED */
);

var _hoisted_45 = [_hoisted_43, _hoisted_44];
var _hoisted_46 = {
  "class": "shop-details-top-order-now"
};

var _hoisted_47 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-point"
}, null, -1
/* HOISTED */
);

var _hoisted_48 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"shop-details-top-cart-box-btn\"><button class=\"btn--primary style2\" type=\"submit\">Add to Cart</button></div><div class=\"shop-details-top-free-shipping\"><i class=\"flaticon-shipping\"></i><p>SPENT <span>$399.00</span> MORE FOR FREE SHIPPING</p></div><div class=\"shop-details-top-social-box\"><p>Share:</p><ul class=\"ps-1 social_link d-flex align-items-center\"><li><a href=\"https://www.facebook.com/\" class=\"active\" target=\"_blank\"><i class=\"flaticon-facebook-app-symbol\"></i></a></li><li><a href=\"https://www.youtube.com/\" target=\"_blank\"><i class=\"flaticon-youtube\"></i></a></li><li><a href=\"https://twitter.com/\" target=\"_blank\"><i class=\"flaticon-twitter\"></i></a></li><li><a href=\"https://www.instagram.com/\" target=\"_blank\"><i class=\"flaticon-instagram\"></i></a></li></ul></div><div class=\"checked-box\"><form><div class=\"form-group\"><input type=\"checkbox\" id=\"html\"> <label for=\"html\">I agree with all company terms &amp; condition</label></div></form></div><div class=\"shop-details-top-buy-now-btn\"><a href=\"#\" class=\"btn--primary\">Buy It Now</a></div><div class=\"shop-details-top-safe-checkout\"><h4>Guranteed Safe Checkout</h4><ul class=\"shop-details-top-safe-checkout-list\"><li><div class=\"shop-details-top-safe-checkout-img\"><a href=\"#0\"><img src=\"/assets/images/shop/shop-details-top-safe-checkout-img-1.jpg\" alt=\"\"></a></div></li><li><div class=\"shop-details-top-safe-checkout-img\"><a href=\"#0\"><img src=\"/assets/images/shop/shop-details-top-safe-checkout-img-2.jpg\" alt=\"\"></a></div></li><li><div class=\"shop-details-top-safe-checkout-img\"><a href=\"#0\"><img src=\"/assets/images/shop/shop-details-top-safe-checkout-img-3.jpg\" alt=\"\"></a></div></li><li><div class=\"shop-details-top-safe-checkout-img\"><a href=\"#0\"><img src=\"/assets/images/shop/shop-details-top-safe-checkout-img-4.jpg\" alt=\"\"></a></div></li><li><div class=\"shop-details-top-safe-checkout-img\"><a href=\"#0\"><img src=\"/assets/images/shop/shop-details-top-safe-checkout-img-5.jpg\" alt=\"\"></a></div></li><li><div class=\"shop-details-top-safe-checkout-img\"><a href=\"#0\"><img src=\"/assets/images/shop/shop-details-top-safe-checkout-img-7.jpg\" alt=\"\"></a></div></li></ul></div><p class=\"shop-details-top-product-delivery\">This product estimated delivery between <span>Wednesday 27 October</span> <br> <span>Tuesday 02 November</span></p><ul class=\"shop-details-top-category-tags\"><li>Category: <span>Gold Diamond</span></li><li>Tags: <span>platinum watch, gold ring, women jewellary</span></li></ul><ul class=\"shop-details-top-feature\"><li><div class=\"icon\"><i class=\"flaticon-portfolio\"></i></div><div class=\"text\"><p>Money back guarantee</p></div></li><li><div class=\"icon\"><i class=\"flaticon-truck\"></i></div><div class=\"text\"><p>Free Shipping &amp; Return</p></div></li><li><div class=\"icon\"><i class=\"flaticon-security\"></i></div><div class=\"text\"><p>Comportable Support</p></div></li></ul>", 9);

var _hoisted_57 = {
  "class": "product pt-60 pb-60 wow fadeInUp overflow-hidden"
};
var _hoisted_58 = {
  "class": "container"
};

var _hoisted_59 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row wow fadeInUp animated"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  "class": "nav product-details-nav nav-one nav-pills justify-content-center",
  id: "pills-tab-two",
  role: "tablist"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item",
  role: "presentation"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "nav-link active",
  id: "pills-description-tab",
  "data-bs-toggle": "pill",
  "data-bs-target": "#pills-description",
  type: "button",
  role: "tab",
  "aria-controls": "pills-description",
  "aria-selected": "true"
}, " Description ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item",
  role: "presentation"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "nav-link",
  id: "pills-additional-tab",
  "data-bs-toggle": "pill",
  "data-bs-target": "#pills-additional",
  type: "button",
  role: "tab",
  "aria-controls": "pills-additional",
  "aria-selected": "false"
}, " Additional ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item",
  role: "presentation"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "nav-link",
  id: "pills-sizechart-tab",
  "data-bs-toggle": "pill",
  "data-bs-target": "#pills-sizechart",
  type: "button",
  role: "tab",
  "aria-controls": "pills-sizechart",
  "aria-selected": "false"
}, " Size Chart ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item",
  role: "presentation"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "nav-link",
  id: "pills-review-tab",
  "data-bs-toggle": "pill",
  "data-bs-target": "#pills-review",
  type: "button",
  role: "tab",
  "aria-controls": "pills-review",
  "aria-selected": "false"
}, " Review ")])])])], -1
/* HOISTED */
);

var _hoisted_60 = {
  "class": "row wow fadeInUp animated"
};
var _hoisted_61 = {
  key: 0,
  "class": "tab-content",
  id: "pills-tabContent-two"
};
var _hoisted_62 = {
  "class": "tab-pane fade show active",
  id: "pills-description",
  role: "tabpanel",
  "aria-labelledby": "pills-description-tab"
};
var _hoisted_63 = {
  "class": "product-drescription"
};

var _hoisted_64 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, " Product Details:", -1
/* HOISTED */
);

var _hoisted_65 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"row align-items-center\"><div class=\"col-lg-4 mt-30\"><div class=\"thumb\"><img src=\"/assets/images/shop/shop-details-tab-content-specification-img-1.jpg\" alt=\"\"></div></div><div class=\"col-lg-8 mt-30\"><h4>Specification:</h4><ul class=\"drescription-list\"><li> 1. Adipiscing hac cubilia, fermentum ipsum auctor parturient tempus lobortis fermentum. </li><li> 2. Euismod disagree soler imperdiet vehicula pede eros ipsum cras mi feugiat. </li><li> 3. Rhoncus consequat phasellus donec suspendisse scelerisque facilisis gravida porttitor turpis. </li><li> 4. Consequat phasellus donec suspendisse scelerisque facilisis gravida porttitor turpis. </li><li> 5. Consequat phasellus donec suspendisse scelerisque facilisis gravida porttitor </li></ul></div></div>", 1);

var _hoisted_66 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane fade",
  id: "pills-additional",
  role: "tabpanel",
  "aria-labelledby": "pills-additional-tab"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "product-drescription"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "pt-0"
}, " Assertively conceptualize parallel process improvements through user friendly colighue to action items. Interactively antidos cultivate interdependent customer service without clicks-and-mortar e-services. Proactively cultivate go forward testing procedures with accurate quality vectors. Globally aiembrace ethical functionalities via empowered scenarios. Phosfluorescently restore highly efficient opportunities and client-focused infomediaries. Enthusiastically transition multidisciplinary outside the box thinking without premium networks. Progressive supply clicks-and-mortar human capital through enterprise-wide web services. Objectivey bester provide access to extensible processes better than more qulification dumber there stoaling through 24/365 solutions. "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  "class": "drescription-list"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, " 1. Adipiscing hac cubilia, fermentum ipsum auctor parturient tempus lobortis fermentum. "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, " 2. Euismod disagree soler imperdiet vehicula pede eros ipsum cras mi feugiat. "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, " 3. Rhoncus consequat phasellus donec suspendisse scelerisque facilisis gravida porttitor turpis. "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, " 4. Consequat phasellus donec suspendisse scelerisque facilisis gravida porttitor turpis. "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, " 5. Consequat phasellus donec suspendisse scelerisque facilisis gravida porttitor ")])])], -1
/* HOISTED */
);

var _hoisted_67 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane fade",
  id: "pills-sizechart",
  role: "tabpanel",
  "aria-labelledby": "pills-sizechart-tab"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "product-drescription"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "size-chirt"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Size Guide"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "pt-0"
}, " Assertively conceptualize parallel process improvements through user friendly colighue to action items. "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "size-tabble"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Size"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "XXS - XS"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "XS - S"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "S - M"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "M - L"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "L - XL"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "XL - XXL")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "ARGENTINA"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "7"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "8"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "9"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "10"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "11"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "12")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "BOLIVIA"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "8"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "9"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "10"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "11"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "12"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "13")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "COLOMBIA"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "26"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "28"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "30"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "32"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "34"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "36")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "China"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "34"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "36"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "38"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "40"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "42"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "44")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "MEXICO"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "32"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "34"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "36"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "38"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "40"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "42")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "JAMAICA"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "40"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "42"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "44"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "46"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "48"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "50")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "MEXICO"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "32"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "34"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "36"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "38"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "40"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "42")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "Australia"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "6"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "8"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "10"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "12"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "14"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "16")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "USA"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "33"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "44"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "55"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "66"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "77"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "88")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "UK"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "6"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "8"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "10"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "12"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "14"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "16")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "Pant")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "22-23 "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "24-25"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "26-27"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "28-29"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "30-31"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "32-33")])])])])])])], -1
/* HOISTED */
);

var _hoisted_68 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane fade",
  id: "pills-review",
  role: "tabpanel",
  "aria-labelledby": "pills-review-tab"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "product-drescription"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "review-single pt-0 hed"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "ratting"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-star-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-star-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-star-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-star-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-star-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "ps-2"
}, "BASED ON 100 REVIEW")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "review-single"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "left"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "ratting"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-star-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-star-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-star-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-star-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-star-1"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Vary Good quality Theme "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Raul Bates on January 28, 2022")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, " Assertively conceptualize parallel process improvements through user friendly colighue to action items. Interactively antidos cultivate interdependent customer service without clicks-and-mortar e-services. ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#0",
  "class": "right-box"
}, " Report this Comments ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "review-single"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "left"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "ratting"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-star-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-star-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-star-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-star-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-star-1"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Amazing Theme "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Kurt Morgan on January 28, 2022")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, " Assertively conceptualize parallel process improvements through user friendly colighue to action items. Interactively antidos cultivate interdependent customer service without clicks-and-mortar e-services. ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#0",
  "class": "right-box"
}, "Report this Comments ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "review-from-box mt-30"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "Write a Review"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
  action: "#",
  "class": "review-from"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-lg-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "ratting-box"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, " RATING "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "ratting"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-star-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-star-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-star-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-star-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-star-1"
})])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-lg-6"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "form-group"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "name"
}, "NAME"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "text",
  id: "name",
  "class": "form-control",
  placeholder: "David Warner"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-lg-6"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "form-group"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "number"
}, "Number"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "text",
  id: "number",
  "class": "form-control",
  placeholder: "Phone Number"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-lg-6"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "form-group"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "email"
}, " Email "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "text",
  id: "email",
  "class": "form-control",
  placeholder: "support@gmail.com"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-lg-6"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "form-group"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "namee"
}, " REVIEW TITLE"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "text",
  id: "namee",
  "class": "form-control",
  placeholder: "Give your review title"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "form-group m-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "email"
}, "BODY OF REVIEW (1500) "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
  placeholder: "Write Your Comments Here"
})])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "submit",
  "class": "btn--primary style2"
}, "Submit Review ")])])])], -1
/* HOISTED */
);

var _hoisted_69 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<section class=\"recent-products pt-60 pb-120 overflow-hidden wow fadeInUp\"><div class=\"container\"><div class=\"row\"><div class=\"col-12 wow fadeInUp animated\"><div class=\"section-head text-center\"><h2>Recent Products </h2></div></div></div><div class=\"row mt-30 wow fadeInUp animated\"><div class=\"catagory-slider\"><div class=\"products-grid-one\"><div class=\"products-grid-one__product-image\"><div class=\"products-grid-one__badge-box\"><span class=\"bg_base badge new\">New</span></div> <a href=\"shop-details-1.html\" class=\"d-block products-grid__image_holder\"><img src=\"/assets/images/shop/products-img1.jpg\" alt=\"Alt\"></a><div class=\"products-grid__usefull-links\"><ul><li><a href=\"wishlist.html\"><i class=\"flaticon-heart\"></i> <span> wishlist</span></a></li><li><a href=\"compare.html\"><i class=\"flaticon-left-and-right-arrows\"></i><span> compare</span></a></li><li><a href=\"#view-popup1\" class=\"popup_link\"><i class=\"flaticon-visibility\"></i> <span> quick view</span></a></li></ul></div></div><div id=\"view-popup1\" class=\"product-gird__quick-view-popup mfp-hide\"><div class=\"container\"><div class=\"row justify-content-between align-items-center\"><div class=\"col-lg-6\"><div class=\"quick-view__left-content\"><div class=\"tabs\"><div class=\"popup-product-thumb-box\"><ul><li class=\"tab-nav popup-product-thumb\"><a href=\"#tab7\"><img src=\"/assets/images/shop/products-img1.jpg\" alt=\"img\"></a></li><li class=\"tab-nav popup-product-thumb\"><a href=\"#tab8\"><img src=\"/assets/images/shop/products-img2.jpg\" alt=\"img\"></a></li><li class=\"tab-nav popup-product-thumb\"><a href=\"#tab9\"><img src=\"/assets/images/shop/products-img3.jpg\" alt=\"img\"></a></li></ul></div><div class=\"popup-product-main-image-box\"><div id=\"tab7\" class=\"tab-item popup-product-image\"><div class=\"popup-product-single-image\"><img src=\"/assets/images/shop/products-img1.jpg\" alt=\"img\"></div></div><div id=\"tab8\" class=\"tab-item popup-product-image\"><div class=\"popup-product-single-image\"><img src=\"/assets/images/shop/products-img2.jpg\" alt=\"img\"></div></div><div id=\"tab9\" class=\"tab-item popup-product-image\"><div class=\"popup-product-single-image\"><img src=\"/assets/images/shop/products-img3.jpg\" alt=\"img\"></div></div> <button class=\"prev\"><i class=\"flaticon-back\"></i></button> <button class=\"next\"><i class=\"flaticon-next\"></i></button></div></div></div></div><div class=\"col-lg-6\"><div class=\"popup-right-content\"><h3>Blacked Neckles Set</h3><div class=\"ratting\"><i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i><span>(100)</span></div><p class=\"text\"> Hydrating Plumping Intense Shine Lip Colour </p><div class=\"price\"><h2> $45 USD <del> $50 USD</del></h2><h6> In stuck</h6></div><div class=\"color-varient\"><a href=\"#0\" class=\"color-name pink\"><span>Pink</span></a> <a href=\"#0\" class=\"color-name red\"><span>Red</span></a> <a href=\"#0\" class=\"color-name yellow\"><span>Yellow</span></a> <a href=\"#0\" class=\"color-name blue\"><span>Blue</span></a> <a href=\"#0\" class=\"color-name black\"><span>Black</span></a></div><div class=\"add-product\"><h6>Qty:</h6><div class=\"button-group\"><div class=\"qtySelector text-center\"><span class=\"decreaseQty\"><i class=\"flaticon-minus\"></i></span> <input type=\"number\" class=\"qtyValue\" value=\"1\"><span class=\"increaseQty\"><i class=\"flaticon-plus\"></i></span></div> <button class=\"btn--primary\"> Add to Cart </button></div></div><div class=\"payment-method\"><a href=\"#0\"><img src=\"/assets/images/payment_method/method_1.png\" alt=\"\"></a><a href=\"#0\"><img src=\"/assets/images/payment_method/method_2.png\" alt=\"\"></a> <a href=\"#0\"><img src=\"/assets/images/payment_method/method_3.png\" alt=\"\"></a><a href=\"#0\"><img src=\"/assets/images/payment_method/method_4.png\" alt=\"\"></a></div></div></div></div></div></div><div class=\"products-grid__content\"><a href=\"cart.html\" class=\"products-grid__cart-btn btn--primary\"><span class=\"one\"> Add to Cart </span><span class=\"two\"><i class=\"flaticon-shopping-cart\"></i></span></a><div class=\"ratting\"><i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i></div><h5 class=\"product_name\"><a href=\"shop-details-1.html\">Diamond Bracelet </a></h5><div class=\"price d-flex align-content-center justify-content-center\"><p>$2909</p></div></div></div><div class=\"products-grid-one\"><div class=\"products-grid-one__product-image\"><div class=\"products-grid-one__badge-box\"><span class=\"bg_black badge discount\">-20%</span></div> <a href=\"shop-details-1.html\" class=\"d-block products-grid__image_holder\"><img class=\"products-grid-one__mainimage products-grid-one__first-img\" src=\"/assets/images/shop/products-img3.jpg\" alt=\"Alt\"> <img class=\"products-grid-one__hover-img\" src=\"/assets/images/shop/products-img4.jpg\" alt=\"Alt\"></a><div class=\"products-grid__usefull-links\"><ul><li><a href=\"wishlist.html\"><i class=\"flaticon-heart\"></i> <span> wishlist</span></a></li><li><a href=\"compare.html\"><i class=\"flaticon-left-and-right-arrows\"></i><span> compare</span></a></li><li><a href=\"#view-popup2\" class=\"popup_link\"><i class=\"flaticon-visibility\"></i> <span> quick view</span></a></li></ul></div></div><div id=\"view-popup2\" class=\"product-gird__quick-view-popup mfp-hide\"><div class=\"container\"><div class=\"row justify-content-between align-items-center\"><div class=\"col-lg-6\"><div class=\"quick-view__left-content\"><div class=\"tabs\"><div class=\"popup-product-thumb-box\"><ul><li class=\"tab-nav popup-product-thumb\"><a href=\"#tab777\"><img src=\"/assets/images/shop/products-img3.jpg\" alt=\"img\"></a></li><li class=\"tab-nav popup-product-thumb\"><a href=\"#tab888\"><img src=\"/assets/images/shop/products-img4.jpg\" alt=\"img\"></a></li><li class=\"tab-nav popup-product-thumb\"><a href=\"#tab999\"><img src=\"/assets/images/shop/products-img5.jpg\" alt=\"img\"></a></li></ul></div><div class=\"popup-product-main-image-box\"><div id=\"tab777\" class=\"tab-item popup-product-image\"><div class=\"popup-product-single-image\"><img src=\"/assets/images/shop/products-img3.jpg\" alt=\"img\"></div></div><div id=\"tab888\" class=\"tab-item popup-product-image\"><div class=\"popup-product-single-image\"><img src=\"/assets/images/shop/products-img5.jpg\" alt=\"img\"></div></div><div id=\"tab999\" class=\"tab-item popup-product-image\"><div class=\"popup-product-single-image\"><img src=\"/assets/images/shop/products-img6.jpg\" alt=\"img\"></div></div> <button class=\"prev\"><i class=\"flaticon-back\"></i></button> <button class=\"next\"><i class=\"flaticon-next\"></i></button></div></div></div></div><div class=\"col-lg-6\"><div class=\"popup-right-content\"><h3>Girl Diamond Ring </h3><div class=\"ratting\"><i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i><span>(100)</span></div><p class=\"text\"> Hydrating Plumping Intense Shine Lip Colour </p><div class=\"price\"><h2> $45 USD <del> $50 USD</del></h2><h6> In stuck</h6></div><div class=\"color-varient\"><a href=\"#0\" class=\"color-name pink\"><span>Pink</span></a> <a href=\"#0\" class=\"color-name red\"><span>Red</span></a> <a href=\"#0\" class=\"color-name yellow\"><span>Yellow</span></a> <a href=\"#0\" class=\"color-name blue\"><span>Blue</span></a> <a href=\"#0\" class=\"color-name black\"><span>Black</span></a></div><div class=\"add-product\"><h6>Qty:</h6><div class=\"button-group\"><div class=\"qtySelector text-center\"><span class=\"decreaseQty\"><i class=\"flaticon-minus\"></i></span> <input type=\"number\" class=\"qtyValue\" value=\"1\"><span class=\"increaseQty\"><i class=\"flaticon-plus\"></i></span></div> <button class=\"btn--primary\"> Add to Cart </button></div></div><div class=\"payment-method\"><a href=\"#0\"><img src=\"/assets/images/payment_method/method_1.png\" alt=\"\"></a><a href=\"#0\"><img src=\"/assets/images/payment_method/method_2.png\" alt=\"\"></a> <a href=\"#0\"><img src=\"/assets/images/payment_method/method_3.png\" alt=\"\"></a><a href=\"#0\"><img src=\"/assets/images/payment_method/method_4.png\" alt=\"\"></a></div></div></div></div></div></div><div class=\"products-grid__content\"><a href=\"cart.html\" class=\"products-grid__cart-btn btn--primary\"><span class=\"one\"> Add to Cart </span><span class=\"two\"><i class=\"flaticon-shopping-cart\"></i></span></a><div class=\"ratting\"><i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i></div><h5 class=\"product_name\"><a href=\"shop-details-1.html\"> Girl Diamond Ring </a></h5><div class=\"price d-flex align-content-center justify-content-center\"><p>$250</p></div></div><div class=\"products-grid-one__thumb-box\"><p class=\"products-grid-one__product-varient\"><span class=\"color\"> Yellow </span> <img src=\"/assets/images/shop/products-img3.jpg\" alt=\"Alt\"></p><p class=\"products-grid-one__product-varient\"><span class=\"color\"> blue </span> <img src=\"/assets/images/shop/products-img4.jpg\" alt=\"Alt\"></p><p class=\"products-grid-one__product-varient\"><span class=\"color\"> Black </span> <img src=\"/assets/images/shop/products-img5.jpg\" alt=\"Alt\"></p></div></div><div class=\"products-grid-one\"><div class=\"products-grid-one__product-image\"><div class=\"products-grid-one__badge-box\"><span class=\"bg_base badge new\">New</span><span class=\"bg_black badge discount\">-30%</span></div> <a href=\"shop-details-1.html\" class=\"d-block products-grid__image_holder\"><img class=\"products-grid-one__mainimage products-grid-one__first-img\" src=\"/assets/images/shop/products-img4.jpg\" alt=\"Alt\"> <img class=\"products-grid-one__hover-img\" src=\"/assets/images/shop/products-img5.jpg\" alt=\"Alt\"></a><div class=\"products-grid__usefull-links\"><ul><li><a href=\"wishlist.html\"><i class=\"flaticon-heart\"></i> <span> wishlist</span></a></li><li><a href=\"compare.html\"><i class=\"flaticon-left-and-right-arrows\"></i><span> compare</span></a></li><li><a href=\"#view-popup3\" class=\"popup_link\"><i class=\"flaticon-visibility\"></i> <span> quick view</span></a></li></ul></div></div><div id=\"view-popup3\" class=\"product-gird__quick-view-popup mfp-hide\"><div class=\"container\"><div class=\"row justify-content-between align-items-center\"><div class=\"col-lg-6\"><div class=\"quick-view__left-content\"><div class=\"tabs\"><div class=\"popup-product-thumb-box\"><ul><li class=\"tab-nav popup-product-thumb\"><a href=\"#tab7777\"><img src=\"/assets/images/shop/products-img4.jpg\" alt=\"img\"></a></li><li class=\"tab-nav popup-product-thumb\"><a href=\"#tab8888\"><img src=\"/assets/images/shop/products-img5.jpg\" alt=\"img\"></a></li><li class=\"tab-nav popup-product-thumb\"><a href=\"#tab9999\"><img src=\"/assets/images/shop/products-img6.jpg\" alt=\"img\"></a></li></ul></div><div class=\"popup-product-main-image-box\"><div id=\"tab7777\" class=\"tab-item popup-product-image\"><div class=\"popup-product-single-image\"><img src=\"/assets/images/shop/products-img4.jpg\" alt=\"img\"></div></div><div id=\"tab8888\" class=\"tab-item popup-product-image\"><div class=\"popup-product-single-image\"><img src=\"/assets/images/shop/products-img5.jpg\" alt=\"img\"></div></div><div id=\"tab9999\" class=\"tab-item popup-product-image\"><div class=\"popup-product-single-image\"><img src=\"/assets/images/shop/products-img6.jpg\" alt=\"img\"></div></div> <button class=\"prev\"><i class=\"flaticon-back\"></i></button> <button class=\"next\"><i class=\"flaticon-next\"></i></button></div></div></div></div><div class=\"col-lg-6\"><div class=\"popup-right-content\"><h3>Women Earring Erl</h3><div class=\"ratting\"><i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i><span>(100)</span></div><p class=\"text\"> Hydrating Plumping Intense Shine Lip Colour </p><div class=\"price\"><h2> $45 USD <del> $50 USD</del></h2><h6> In stuck</h6></div><div class=\"color-varient\"><a href=\"#0\" class=\"color-name pink\"><span>Pink</span></a> <a href=\"#0\" class=\"color-name red\"><span>Red</span></a> <a href=\"#0\" class=\"color-name yellow\"><span>Yellow</span></a> <a href=\"#0\" class=\"color-name blue\"><span>Blue</span></a> <a href=\"#0\" class=\"color-name black\"><span>Black</span></a></div><div class=\"add-product\"><h6>Qty:</h6><div class=\"button-group\"><div class=\"qtySelector text-center\"><span class=\"decreaseQty\"><i class=\"flaticon-minus\"></i></span> <input type=\"number\" class=\"qtyValue\" value=\"1\"><span class=\"increaseQty\"><i class=\"flaticon-plus\"></i></span></div> <button class=\"btn--primary\"> Add to Cart </button></div></div><div class=\"payment-method\"><a href=\"#0\"><img src=\"/assets/images/payment_method/method_1.png\" alt=\"\"></a><a href=\"#0\"><img src=\"/assets/images/payment_method/method_2.png\" alt=\"\"></a> <a href=\"#0\"><img src=\"/assets/images/payment_method/method_3.png\" alt=\"\"></a><a href=\"#0\"><img src=\"/assets/images/payment_method/method_4.png\" alt=\"\"></a></div></div></div></div></div></div><div class=\"products-grid__content\"><a href=\"cart.html\" class=\"products-grid__cart-btn btn--primary\"><span class=\"one\"> Add to Cart </span><span class=\"two\"><i class=\"flaticon-shopping-cart\"></i></span></a><div class=\"ratting\"><i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i></div><h5 class=\"product_name\"><a href=\"shop-details-1.html\"> Women Earring Erl </a></h5><div class=\"price d-flex align-content-center justify-content-center\"><span class=\"pe-1\"><del> $200.00</del></span><p>$160</p></div></div><div class=\"products-grid-one__thumb-box\"><p class=\"products-grid-one__product-varient\"><span class=\"color\"> Yellow </span> <img src=\"/assets/images/shop/products-img4.jpg\" alt=\"Alt\"></p><p class=\"products-grid-one__product-varient\"><span class=\"color\"> blue </span> <img src=\"/assets/images/shop/products-img5.jpg\" alt=\"Alt\"></p></div></div><div class=\"products-grid-one\"><div class=\"products-grid-one__product-image\"><div class=\"products-grid-one__badge-box\"><span class=\"bg_base badge new\">New</span></div> <a href=\"shop-details-1.html\" class=\"d-block products-grid__image_holder\"><img class=\"products-grid-one__hover-img now-main\" src=\"/assets/images/shop/products-img6.jpg\" alt=\"Alt\"></a><div class=\"products-grid__usefull-links\"><ul><li><a href=\"wishlist.html\"><i class=\"flaticon-heart\"></i> <span> wishlist</span></a></li><li><a href=\"compare.html\"><i class=\"flaticon-left-and-right-arrows\"></i><span> compare</span></a></li><li><a href=\"#view-popup4\" class=\"popup_link\"><i class=\"flaticon-visibility\"></i> <span> quick view</span></a></li></ul></div></div><div id=\"view-popup4\" class=\"product-gird__quick-view-popup mfp-hide\"><div class=\"container\"><div class=\"row justify-content-between align-items-center\"><div class=\"col-lg-6\"><div class=\"quick-view__left-content\"><div class=\"tabs\"><div class=\"popup-product-thumb-box\"><ul><li class=\"tab-nav popup-product-thumb\"><a href=\"#tab77777\"><img src=\"/assets/images/shop/products-img5.jpg\" alt=\"img\"></a></li><li class=\"tab-nav popup-product-thumb\"><a href=\"#tab88888\"><img src=\"/assets/images/shop/products-img6.jpg\" alt=\"img\"></a></li><li class=\"tab-nav popup-product-thumb\"><a href=\"#tab99999\"><img src=\"/assets/images/shop/products-img7.jpg\" alt=\"img\"></a></li></ul></div><div class=\"popup-product-main-image-box\"><div id=\"tab77777\" class=\"tab-item popup-product-image\"><div class=\"popup-product-single-image\"><img src=\"/assets/images/shop/products-img5.jpg\" alt=\"img\"></div></div><div id=\"tab88888\" class=\"tab-item popup-product-image\"><div class=\"popup-product-single-image\"><img src=\"/assets/images/shop/products-img6.jpg\" alt=\"img\"></div></div><div id=\"tab99999\" class=\"tab-item popup-product-image\"><div class=\"popup-product-single-image\"><img src=\"/assets/images/shop/products-img7.jpg\" alt=\"img\"></div></div> <button class=\"prev\"><i class=\"flaticon-back\"></i></button> <button class=\"next\"><i class=\"flaticon-next\"></i></button></div></div></div></div><div class=\"col-lg-6\"><div class=\"popup-right-content\"><h3>Wedding Ring Men</h3><div class=\"ratting\"><i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i><span>(100)</span></div><p class=\"text\"> Hydrating Plumping Intense Shine Lip Colour </p><div class=\"price\"><h2> $35 USD <del> $50 USD</del></h2><h6> In stuck</h6></div><div class=\"color-varient\"><a href=\"#0\" class=\"color-name pink\"><span>Pink</span></a> <a href=\"#0\" class=\"color-name red\"><span>Red</span></a> <a href=\"#0\" class=\"color-name yellow\"><span>Yellow</span></a> <a href=\"#0\" class=\"color-name blue\"><span>Blue</span></a> <a href=\"#0\" class=\"color-name black\"><span>Black</span></a></div><div class=\"add-product\"><h6>Qty:</h6><div class=\"button-group\"><div class=\"qtySelector text-center\"><span class=\"decreaseQty\"><i class=\"flaticon-minus\"></i></span> <input type=\"number\" class=\"qtyValue\" value=\"1\"><span class=\"increaseQty\"><i class=\"flaticon-plus\"></i></span></div> <button class=\"btn--primary\"> Add to Cart </button></div></div><div class=\"payment-method\"><a href=\"#0\"><img src=\"/assets/images/payment_method/method_1.png\" alt=\"\"></a><a href=\"#0\"><img src=\"/assets/images/payment_method/method_2.png\" alt=\"\"></a> <a href=\"#0\"><img src=\"/assets/images/payment_method/method_3.png\" alt=\"\"></a><a href=\"#0\"><img src=\"/assets/images/payment_method/method_4.png\" alt=\"\"></a></div></div></div></div></div></div><div class=\"products-grid__content\"><a href=\"cart.html\" class=\"products-grid__cart-btn btn--primary\"><span class=\"one\"> Add to Cart </span><span class=\"two\"><i class=\"flaticon-shopping-cart\"></i></span></a><div class=\"ratting\"><i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i></div><h5 class=\"product_name\"><a href=\"shop-details-1.html\"> Wedding Ring Men </a></h5><div class=\"price d-flex align-content-center justify-content-center\"><p>$200</p></div></div><div class=\"products-grid-one__thumb-box\"><p class=\"products-grid-one__product-varient\"><span class=\"color\"> blue </span> <img src=\"/assets/images/shop/products-img6.jpg\" alt=\"Alt\"></p><p class=\"products-grid-one__product-varient\"><span class=\"color\"> Yellow </span> <img src=\"/assets/images/shop/products-img5.jpg\" alt=\"Alt\"></p></div></div><div class=\"products-grid-one\"><div class=\"products-grid-one__product-image\"><div class=\"products-grid-one__badge-box\"><span class=\"bg_base badge new\">New</span></div> <a href=\"shop-details-1.html\" class=\"d-block products-grid__image_holder\"><img class=\"products-grid-one__mainimage products-grid-one__first-img\" src=\"/assets/images/shop/products-img6.jpg\" alt=\"Alt\"> <img class=\"products-grid-one__hover-img\" src=\"/assets/images/shop/products-img2.jpg\" alt=\"Alt\"></a><div class=\"products-grid__usefull-links\"><ul><li><a href=\"wishlist.html\"><i class=\"flaticon-heart\"></i> <span> wishlist</span></a></li><li><a href=\"compare.html\"><i class=\"flaticon-left-and-right-arrows\"></i><span> compare</span></a></li><li><a href=\"#view-popup5\" class=\"popup_link\"><i class=\"flaticon-visibility\"></i> <span> quick view</span></a></li></ul></div></div><div id=\"view-popup5\" class=\"product-gird__quick-view-popup mfp-hide\"><div class=\"container\"><div class=\"row justify-content-between align-items-center\"><div class=\"col-lg-6\"><div class=\"quick-view__left-content\"><div class=\"tabs\"><div class=\"popup-product-thumb-box\"><ul><li class=\"tab-nav popup-product-thumb\"><a href=\"#stab1\"><img src=\"/assets/images/shop/products-img1.jpg\" alt=\"img\"></a></li><li class=\"tab-nav popup-product-thumb\"><a href=\"#stab2\"><img src=\"/assets/images/shop/products-img2.jpg\" alt=\"img\"></a></li><li class=\"tab-nav popup-product-thumb\"><a href=\"#stab3\"><img src=\"/assets/images/shop/products-img3.jpg\" alt=\"img\"></a></li></ul></div><div class=\"popup-product-main-image-box\"><div id=\"stab1\" class=\"tab-item popup-product-image\"><div class=\"popup-product-single-image\"><img src=\"/assets/images/shop/products-img1.jpg\" alt=\"img\"></div></div><div id=\"stab2\" class=\"tab-item popup-product-image\"><div class=\"popup-product-single-image\"><img src=\"/assets/images/shop/products-img2.jpg\" alt=\"img\"></div></div><div id=\"stab3\" class=\"tab-item popup-product-image\"><div class=\"popup-product-single-image\"><img src=\"/assets/images/shop/products-img3.jpg\" alt=\"img\"></div></div> <button class=\"prev\"><i class=\"flaticon-back\"></i></button> <button class=\"next\"><i class=\"flaticon-next\"></i></button></div></div></div></div><div class=\"col-lg-6\"><div class=\"popup-right-content\"><h3>Titan Locket Women</h3><div class=\"ratting\"><i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i><span>(100)</span></div><p class=\"text\"> Hydrating Plumping Intense Shine Lip Colour </p><div class=\"price\"><h2> $55 USD <del> $50 USD</del></h2><h6> In stuck</h6></div><div class=\"color-varient\"><a href=\"#0\" class=\"color-name pink\"><span>Pink</span></a> <a href=\"#0\" class=\"color-name red\"><span>Red</span></a> <a href=\"#0\" class=\"color-name yellow\"><span>Yellow</span></a> <a href=\"#0\" class=\"color-name blue\"><span>Blue</span></a> <a href=\"#0\" class=\"color-name black\"><span>Black</span></a></div><div class=\"add-product\"><h6>Qty:</h6><div class=\"button-group\"><div class=\"qtySelector text-center\"><span class=\"decreaseQty\"><i class=\"flaticon-minus\"></i></span> <input type=\"number\" class=\"qtyValue\" value=\"1\"><span class=\"increaseQty\"><i class=\"flaticon-plus\"></i></span></div> <button class=\"btn--primary\"> Add to Cart </button></div></div><div class=\"payment-method\"><a href=\"#0\"><img src=\"/assets/images/payment_method/method_1.png\" alt=\"\"></a><a href=\"#0\"><img src=\"/assets/images/payment_method/method_2.png\" alt=\"\"></a> <a href=\"#0\"><img src=\"/assets/images/payment_method/method_3.png\" alt=\"\"></a><a href=\"#0\"><img src=\"/assets/images/payment_method/method_4.png\" alt=\"\"></a></div></div></div></div></div></div><div class=\"products-grid__content\"><a href=\"cart.html\" class=\"products-grid__cart-btn btn--primary\"><span class=\"one\"> Add to Cart </span><span class=\"two\"><i class=\"flaticon-shopping-cart\"></i></span></a><div class=\"ratting\"><i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i></div><h5 class=\"product_name\"><a href=\"shop-details-1.html\"> Titan Locket Women </a></h5><div class=\"price d-flex align-content-center justify-content-center\"><p>$250</p></div></div><div class=\"products-grid-one__thumb-box\"><p class=\"products-grid-one__product-varient\"><span class=\"color\"> Blue </span> <img src=\"/assets/images/shop/products-img6.jpg\" alt=\"Alt\"></p><p class=\"products-grid-one__product-varient\"><span class=\"color\"> Yellow </span> <img src=\"/assets/images/shop/products-img7.jpg\" alt=\"Alt\"></p><p class=\"products-grid-one__product-varient\"><span class=\"color\"> green </span> <img src=\"/assets/images/shop/products-img8.jpg\" alt=\"Alt\"></p></div></div><div class=\"products-grid-one\"><div class=\"products-grid-one__product-image\"><a href=\"shop-details-1.html\" class=\"d-block products-grid__image_holder\"><img class=\"products-grid-one__mainimage products-grid-one__first-img\" src=\"/assets/images/shop/products-img12.jpg\" alt=\"Alt\"> <img class=\"products-grid-one__hover-img\" src=\"/assets/images/shop/products-img11.jpg\" alt=\"Alt\"></a><div class=\"products-grid__usefull-links\"><ul><li><a href=\"wishlist.html\"><i class=\"flaticon-heart\"></i> <span> wishlist</span></a></li><li><a href=\"compare.html\"><i class=\"flaticon-left-and-right-arrows\"></i><span> compare</span></a></li><li><a href=\"#view-popup6\" class=\"popup_link\"><i class=\"flaticon-visibility\"></i><span> quick view</span></a></li></ul></div></div><div id=\"view-popup6\" class=\"product-gird__quick-view-popup mfp-hide\"><div class=\"container\"><div class=\"row justify-content-between align-items-center\"><div class=\"col-lg-6\"><div class=\"quick-view__left-content\"><div class=\"tabs\"><div class=\"popup-product-thumb-box\"><ul><li class=\"tab-nav popup-product-thumb\"><a href=\"#ttab111\"><img src=\"/assets/images/shop/products-img9.jpg\" alt=\"img\"></a></li><li class=\"tab-nav popup-product-thumb\"><a href=\"#ttab222\"><img src=\"/assets/images/shop/products-img10.jpg\" alt=\"img\"></a></li><li class=\"tab-nav popup-product-thumb\"><a href=\"#ttab333\"><img src=\"/assets/images/shop/products-img11.jpg\" alt=\"img\"></a></li></ul></div><div class=\"popup-product-main-image-box\"><div id=\"ttab111\" class=\"tab-item popup-product-image\"><div class=\"popup-product-single-image\"><img src=\"/assets/images/shop/products-img9.jpg\" alt=\"img\"></div></div><div id=\"ttab222\" class=\"tab-item popup-product-image\"><div class=\"popup-product-single-image\"><img src=\"/assets/images/shop/products-img10.jpg\" alt=\"img\"></div></div><div id=\"ttab333\" class=\"tab-item popup-product-image\"><div class=\"popup-product-single-image\"><img src=\"/assets/images/shop/products-img11.jpg\" alt=\"img\"></div></div> <button class=\"prev\"><i class=\"flaticon-back\"></i></button> <button class=\"next\"><i class=\"flaticon-next\"></i></button></div></div></div></div><div class=\"col-lg-6\"><div class=\"popup-right-content\"><h3>Gold Bracelet Girl </h3><div class=\"ratting\"><i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i><span>(100)</span></div><p class=\"text\"> Hydrating Plumping Intense Shine Lip Colour </p><div class=\"price\"><h2> $65 USD <del> $50 USD</del></h2><h6> In stuck</h6></div><div class=\"color-varient\"><a href=\"#0\" class=\"color-name pink\"><span>Pink</span></a> <a href=\"#0\" class=\"color-name red\"><span>Red</span></a> <a href=\"#0\" class=\"color-name yellow\"><span>Yellow</span></a> <a href=\"#0\" class=\"color-name blue\"><span>Blue</span></a> <a href=\"#0\" class=\"color-name black\"><span>Black</span></a></div><div class=\"add-product\"><h6>Qty:</h6><div class=\"button-group\"><div class=\"qtySelector text-center\"><span class=\"decreaseQty\"><i class=\"flaticon-minus\"></i></span> <input type=\"number\" class=\"qtyValue\" value=\"1\"><span class=\"increaseQty\"><i class=\"flaticon-plus\"></i></span></div> <button class=\"btn--primary\"> Add to Cart </button></div></div><div class=\"payment-method\"><a href=\"#0\"><img src=\"/assets/images/payment_method/method_1.png\" alt=\"\"></a><a href=\"#0\"><img src=\"/assets/images/payment_method/method_2.png\" alt=\"\"></a> <a href=\"#0\"><img src=\"/assets/images/payment_method/method_3.png\" alt=\"\"></a><a href=\"#0\"><img src=\"/assets/images/payment_method/method_4.png\" alt=\"\"></a></div></div></div></div></div></div><div class=\"products-grid__content\"><a href=\"cart.html\" class=\"products-grid__cart-btn btn--primary\"><span class=\"one\"> Add to Cart </span><span class=\"two\"><i class=\"flaticon-shopping-cart\"></i></span></a><div class=\"ratting\"><i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i></div><h5 class=\"product_name\"><a href=\"shop-details-1.html\">Gold Bracelet Girl </a></h5><div class=\"price d-flex align-content-center justify-content-center\"><p>$150</p></div></div><div class=\"products-grid-one__thumb-box\"><p class=\"products-grid-one__product-varient\"><span class=\"color\"> Blue </span> <img src=\"/assets/images/shop/products-img12.jpg\" alt=\"Alt\"></p><p class=\"products-grid-one__product-varient\"><span class=\"color\"> Green </span> <img src=\"/assets/images/shop/products-img11.jpg\" alt=\"Alt\"></p><p class=\"products-grid-one__product-varient\"><span class=\"color\"> Black </span> <img src=\"/assets/images/shop/products-img10.jpg\" alt=\"Alt\"></p></div></div></div></div></div></section>", 1);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("main", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Start Shop Details Breadcrumb"), _hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("End Shop Details Breadcrumb"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Start Shop Details Top"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [$data.product ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_7, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.product.product_images, function (productImage) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      src: productImage.url,
      alt: ""
    }, null, 8
    /* PROPS */
    , _hoisted_9), _hoisted_10, _hoisted_11, _hoisted_12])]);
  }), 256
  /* UNKEYED_FRAGMENT */
  ))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [$data.product ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_14, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.product.product_images, function (productImage) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      src: productImage.url,
      alt: ""
    }, null, 8
    /* PROPS */
    , _hoisted_16)])]);
  }), 256
  /* UNKEYED_FRAGMENT */
  ))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [$data.product ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_19, [_hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.product.title), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [_hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.product.category.title), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [_hoisted_24, $data.product.user ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_25, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.product.user.name), 1
  /* TEXT */
  )) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_26, " Unknown"))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("$" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.product.price.toFixed(2)) + " ", 1
  /* TEXT */
  ), _hoisted_28]), _hoisted_29]), _hoisted_30, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                                 <div class=\"shop-details-top-color-sky-box\">\n                                    <h4>Color: ()</h4>\n                                    <ul class=\"varients\">\n                                        <li> <a href=\"#0\" class=\"shop-details-top-color-sky-img\"\n                                                data-src=\"/assets/images/shop/products-img1.jpg\"> <img\n                                                    src=\"/assets/images/shop/shop-details-top-color-sky-img-1.jpg\"\n                                                    alt=\"\"> </a> </li>\n                                        <li> <a href=\"#0\" class=\"shop-details-top-color-sky-img\"\n                                                data-src=\"/assets/images/shop/products-img2.jpg\"> <img\n                                                    src=\"/assets/images/shop/shop-details-top-color-sky-img-2.jpg\"\n                                                    alt=\"\"> </a> </li>\n                                        <li> <a href=\"#0\" class=\"shop-details-top-color-sky-img\"\n                                                data-src=\"/assets/images/shop/products-img3.jpg\"> <img\n                                                    src=\"/assets/images/shop/shop-details-top-color-sky-img-3.jpg\"\n                                                    alt=\"\"> </a> </li>\n                                        <li> <a href=\"#0\" class=\"shop-details-top-color-sky-img\"\n                                                data-src=\"/assets/images/shop/products-img4.jpg\"> <img\n                                                    src=\"/assets/images/shop/shop-details-top-color-sky-img-4.jpg\"\n                                                    alt=\"\"> </a> </li>\n                                    </ul>\n                                </div> "), _hoisted_31, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_34, [_hoisted_35, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_36, [_hoisted_37, $data.product.isPublished ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_38, _hoisted_41)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_42, _hoisted_45))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_46, [_hoisted_47, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Order Now, Only " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.product.count) + " Left !", 1
  /* TEXT */
  )]), _hoisted_48])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("End Shop Details Top"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" productdrescription-tabStart "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_57, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_58, [_hoisted_59, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_60, [$data.product ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_61, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_62, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_63, [_hoisted_64, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.product.content), 1
  /* TEXT */
  ), _hoisted_65])]), _hoisted_66, _hoisted_67, _hoisted_68])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" productdrescription-tab End "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" recent-products Start "), _hoisted_69, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" recent-products End ")]);
}

/***/ }),

/***/ "./resources/js/views/product/Show.vue":
/*!*********************************************!*\
  !*** ./resources/js/views/product/Show.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Show_vue_vue_type_template_id_049a6388__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Show.vue?vue&type=template&id=049a6388 */ "./resources/js/views/product/Show.vue?vue&type=template&id=049a6388");
/* harmony import */ var _Show_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Show.vue?vue&type=script&lang=js */ "./resources/js/views/product/Show.vue?vue&type=script&lang=js");
/* harmony import */ var _home_user_Desktop_OSMAN_PROJECTS_laravel_ShopApp_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_user_Desktop_OSMAN_PROJECTS_laravel_ShopApp_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Show_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Show_vue_vue_type_template_id_049a6388__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/views/product/Show.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/product/Show.vue?vue&type=script&lang=js":
/*!*********************************************************************!*\
  !*** ./resources/js/views/product/Show.vue?vue&type=script&lang=js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Show_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Show_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Show.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/product/Show.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/product/Show.vue?vue&type=template&id=049a6388":
/*!***************************************************************************!*\
  !*** ./resources/js/views/product/Show.vue?vue&type=template&id=049a6388 ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Show_vue_vue_type_template_id_049a6388__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Show_vue_vue_type_template_id_049a6388__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Show.vue?vue&type=template&id=049a6388 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/product/Show.vue?vue&type=template&id=049a6388");


/***/ })

}]);
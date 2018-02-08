webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div>\n  <flash-messages></flash-messages>\n  <ng4-loading-spinner></ng4-loading-spinner>\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_mydatepicker__ = __webpack_require__("../../../../mydatepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_about_us_about_us_component__ = __webpack_require__("../../../../../src/app/components/about-us/about-us.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_services_services_component__ = __webpack_require__("../../../../../src/app/components/services/services.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_signin_signin_component__ = __webpack_require__("../../../../../src/app/components/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_contact_us_contact_us_component__ = __webpack_require__("../../../../../src/app/components/contact-us/contact-us.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_contact_us_service__ = __webpack_require__("../../../../../src/app/services/contact-us.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_project_project_component__ = __webpack_require__("../../../../../src/app/components/project/project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_modals_projects_modal_projects_modal_component__ = __webpack_require__("../../../../../src/app/components/modals/projects-modal/projects-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_project_dashboard_project_dashboard_component__ = __webpack_require__("../../../../../src/app/components/project-dashboard/project-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_electrical_service__ = __webpack_require__("../../../../../src/app/services/electrical.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_electrical_list_electrical_list_component__ = __webpack_require__("../../../../../src/app/components/electrical-list/electrical-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_electrical_item_electrical_item_component__ = __webpack_require__("../../../../../src/app/components/electrical-item/electrical-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_modals_electricals_modal_electricals_modal_component__ = __webpack_require__("../../../../../src/app/components/modals/electricals-modal/electricals-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_cable_service__ = __webpack_require__("../../../../../src/app/services/cable.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_cable_list_cable_list_component__ = __webpack_require__("../../../../../src/app/components/cable-list/cable-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_cable_item_cable_item_component__ = __webpack_require__("../../../../../src/app/components/cable-item/cable-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_modals_cabels_modals_cable_distance_modal_cable_distance_modal_component__ = __webpack_require__("../../../../../src/app/components/modals/cabels-modals/cable-distance-modal/cable-distance-modal.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//MAIN SOLUTION COMPONENTS







//MAIN PROJECT COMPONENT

//NAVIGATION COMPONENT

//MAIN SITE COMPONENTS




//CONRACT US COMPONENTS


//PROFILE COMPONENT

//AUTHORIZATION AND AUTHENTICATION COMPONENTS






//PROJECTS COMPONENTS




//ELECTRICALS COMPONENTS




//CABLES COMPONENTS




//TODO move to separate component
var appRoutes = [
    //main pages
    { path: '', component: __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'about_us', component: __WEBPACK_IMPORTED_MODULE_10__components_about_us_about_us_component__["a" /* AboutUsComponent */] },
    { path: 'services', component: __WEBPACK_IMPORTED_MODULE_11__components_services_services_component__["a" /* ServicesComponent */] },
    { path: 'contact_us', component: __WEBPACK_IMPORTED_MODULE_13__components_contact_us_contact_us_component__["a" /* ContactUsComponent */] },
    //registration and authentication
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_21__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_20__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'signin', component: __WEBPACK_IMPORTED_MODULE_12__components_signin_signin_component__["a" /* SigninComponent */] },
    //projects
    { path: 'project', component: __WEBPACK_IMPORTED_MODULE_23__components_project_project_component__["a" /* ProjectComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'project/:id', component: __WEBPACK_IMPORTED_MODULE_25__components_project_dashboard_project_dashboard_component__["a" /* ProjectDashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__guards_auth_guard__["a" /* AuthGuard */]] },
    //electricals
    { path: 'project/:id/electricals', component: __WEBPACK_IMPORTED_MODULE_27__components_electrical_list_electrical_list_component__["a" /* ElectricalListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'project/:id/electricals/:electricalid', component: __WEBPACK_IMPORTED_MODULE_28__components_electrical_item_electrical_item_component__["a" /* ElectricalItemComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__guards_auth_guard__["a" /* AuthGuard */]] },
    //cables
    { path: 'project/:id/cables', component: __WEBPACK_IMPORTED_MODULE_31__components_cable_list_cable_list_component__["a" /* CableListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'project/:id/cables/:cableId', component: __WEBPACK_IMPORTED_MODULE_32__components_cable_item_cable_item_component__["a" /* CableItemComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__guards_auth_guard__["a" /* AuthGuard */]] },
    //profile
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_15__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__guards_auth_guard__["a" /* AuthGuard */]] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_project_project_component__["a" /* ProjectComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_modals_projects_modal_projects_modal_component__["a" /* ProjectsModalComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_project_dashboard_project_dashboard_component__["a" /* ProjectDashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_electrical_list_electrical_list_component__["a" /* ElectricalListComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_electrical_item_electrical_item_component__["a" /* ElectricalItemComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_modals_electricals_modal_electricals_modal_component__["a" /* ElectricalsModalComponent */],
                __WEBPACK_IMPORTED_MODULE_31__components_cable_list_cable_list_component__["a" /* CableListComponent */],
                __WEBPACK_IMPORTED_MODULE_32__components_cable_item_cable_item_component__["a" /* CableItemComponent */],
                __WEBPACK_IMPORTED_MODULE_33__components_modals_cabels_modals_cable_distance_modal_cable_distance_modal_component__["a" /* CableDistanceModalComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_about_us_about_us_component__["a" /* AboutUsComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_services_services_component__["a" /* ServicesComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_contact_us_contact_us_component__["a" /* ContactUsComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_signin_signin_component__["a" /* SigninComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_6_mydatepicker__["MyDatePickerModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_18_angular2_flash_messages__["FlashMessagesModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5_ng4_loading_spinner__["Ng4LoadingSpinnerModule"].forRoot()
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_16__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_17__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_19__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_22__services_project_service__["a" /* ProjectService */], __WEBPACK_IMPORTED_MODULE_26__services_electrical_service__["a" /* ElectricalService */], __WEBPACK_IMPORTED_MODULE_30__services_cable_service__["a" /* CableService */], __WEBPACK_IMPORTED_MODULE_14__services_contact_us_service__["a" /* ContactUsService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/about-us/about-us.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@font-face {\r\n  font-family: \"Roboto-Light\";\r\n  src: url(" + __webpack_require__("../../../../../src/assets/fonts/Roboto-Light.ttf") + ");\r\n  font-style: normal;\r\n  font-weight: normal;\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Roboto-Bolt\";\r\n  src: url(" + __webpack_require__("../../../../../src/assets/fonts/Roboto-Bold.ttf") + ");\r\n  font-weight: bold;\r\n}\r\n\r\n@media (max-width: 575px) {\r\n  .content-style {\r\n    font-size: 13px;\r\n  }\r\n  .small-topic-text-body {\r\n    font-size: 15px;\r\n  }\r\n  .big-topic-text-body {\r\n    font-size: 22px;\r\n  }\r\n  .carousel-indicators {\r\n    bottom: -10px;\r\n  }\r\n  li {\r\n    height: 5px;\r\n    width: 5px;\r\n  }\r\n  li.active {\r\n    height: 5px;\r\n    width: 5px;\r\n  }\r\n}\r\n\r\n@media (min-width: 576px) and (max-width: 767px) {\r\n  .content-style {\r\n    font-size: 13px;\r\n  }\r\n  .small-topic-text-body {\r\n    font-size: 15px;\r\n  }\r\n  .big-topic-text-body {\r\n    font-size: 30px;\r\n  }\r\n  li.active {\r\n    height: 10px;\r\n    width: 10px;\r\n  }\r\n  \r\n  li {\r\n    height: 10px;\r\n    width: 10px;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) and (max-width: 991px) {\r\n\r\n}\r\n\r\n@media (min-width: 992px) and (max-width: 1199px) {\r\n\r\n}\r\n\r\n@media (min-width: 768px) and (max-width: 1199px) {\r\n  .content-style {\r\n    font-size: 14px;\r\n  }\r\n  .small-topic-text-body {\r\n    font-size: 16px;\r\n  }\r\n  .big-topic-text-body {\r\n    font-size: 30px;\r\n  }\r\n  li.active {\r\n    height: 10px;\r\n    width: 10px;\r\n  }\r\n  \r\n  li {\r\n    height: 10px;\r\n    width: 10px;\r\n  }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n  .content-style {\r\n    font-size: 20px;\r\n  }\r\n  .small-topic-text-body {\r\n    font-size: 30px;\r\n  }\r\n  .big-topic-text-body {\r\n    font-size: 50px;\r\n  }\r\n  li.active {\r\n    height: 10px;\r\n    width: 10px;\r\n  }\r\n  \r\n  li {\r\n    height: 10px;\r\n    width: 10px;\r\n  }\r\n}\r\n\r\n.carousel-item.active,\r\n.carousel-item-next,\r\n.carousel-item-prev {\r\n  display: block;\r\n}\r\n\r\nli.active {\r\n  background-color: #FFB248!important;\r\n  border-radius: 5px 5px 5px 5px;\r\n}\r\n\r\nli {\r\n  margin: 5px!important;\r\n  background-color: white!important;\r\n  border-radius: 5px 5px 5px 5px;\r\n}\r\n\r\n.small-topic-text-body {\r\n  font-family: Roboto-Bolt;\r\n  color:#4c4c4c;\r\n}\r\n\r\n.big-topic-text-body {\r\n  font-family: Roboto-Bolt;\r\n  color:#4c4c4c;\r\n}\r\n\r\n.content-justify {\r\n  text-align: justify;\r\n  line-height: 1.3;\r\n}\r\n\r\n.content-style {\r\n  font-family: Roboto-Light;\r\n  color: #4c4c4c;\r\n  text-align: justify;\r\n}\r\n\r\n.template-footer {\r\n  display:block;\r\n}\r\n\r\n.custom-footer {\r\n  height:210px;\r\n  background-color:#2f3032\r\n}\r\n\r\na.footer_href {\r\n  color: #ffffff;\r\n  text-decoration: none;\r\n}\r\n\r\nspan.footer-text {\r\n  color:white;\r\n}\r\n\r\n.footer-row {\r\n  margin-right:0px!important;\r\n  margin-left:0px!important\r\n}\r\n\r\n.h-100 {\r\n  height: 100%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/about-us/about-us.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div id=\"carouselExampleIndicators2\" class=\"carousel slide\" data-ride=\"carousel\">\n    <ol class=\"carousel-indicators\">\n      <li data-target=\"#carouselExampleIndicators2\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#carouselExampleIndicators2\" data-slide-to=\"1\"></li>\n      <li data-target=\"#carouselExampleIndicators2\" data-slide-to=\"2\"></li>\n      <li data-target=\"#carouselExampleIndicators2\" data-slide-to=\"3\"></li>\n    </ol>\n    <div class=\"carousel-inner\" role=\"listbox\">\n      <div class=\"carousel-item active\">\n        <picture>\n          <source media=\"(min-width: 1200px)\" [srcset]=\"firstImg_1920\">\n          <source media=\"(min-width: 992px)\" [srcset]=\"firstImg_1200\">\n          <source media=\"(min-width: 768px)\" [srcset]=\"firstImg_992\">\n          <source media=\"(min-width: 576px)\" [srcset]=\"firstImg_768\">\n          <source [srcset]=\"firstImg_576\">\n          <img class=\"d-block img-fluid\" [src]=\"firstImg_1920\" alt=\"first_img\" sr-only=\"First Image\">\n        </picture>\n      </div>\n      <div class=\"carousel-item\">\n        <picture>\n          <source media=\"(min-width: 1200px)\" [srcset]=\"secondImg_1920\">\n          <source media=\"(min-width: 992px)\" [srcset]=\"secondImg_1200\">\n          <source media=\"(min-width: 768px)\" [srcset]=\"secondImg_992\">\n          <source media=\"(min-width: 576px)\" [srcset]=\"secondImg_768\">\n          <source [srcset]=\"secondImg_576\">\n          <img class=\"d-block img-fluid\" [src]=\"secondImg_1920\" alt=\"second_img\" sr-only=\"Second Image\">\n        </picture>\n      </div>\n      <div class=\"carousel-item\">\n        <picture>\n          <source media=\"(min-width: 1200px)\" [srcset]=\"thirdImg_1920\">\n          <source media=\"(min-width: 992px)\" [srcset]=\"thirdImg_1200\">\n          <source media=\"(min-width: 768px)\" [srcset]=\"thirdImg_992\">\n          <source media=\"(min-width: 576px)\" [srcset]=\"thirdImg_768\">\n          <source [srcset]=\"thirdImg_576\">\n          <img class=\"d-block img-fluid\" [src]=\"thirdImg_1920\" alt=\"third_img\" sr-only=\"Third Image\">\n        </picture>\n      </div>\n      <div class=\"carousel-item\">\n        <picture>\n          <source media=\"(min-width: 1200px)\" [srcset]=\"fourthImg_1920\">\n          <source media=\"(min-width: 992px)\" [srcset]=\"fourthImg_1200\">\n          <source media=\"(min-width: 768px)\" [srcset]=\"fourthImg_992\">\n          <source media=\"(min-width: 576px)\" [srcset]=\"fourthImg_768\">\n          <source [srcset]=\"fourthImg_576\">\n          <img class=\"d-block img-fluid\" [src]=\"fourthImg_1920\" alt=\"fourth_img\" sr-only=\"Fourth Image\">\n        </picture>\n      </div>\n    </div>\n    <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators2\" role=\"button\" data-slide=\"prev\">\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators2\" role=\"button\" data-slide=\"next\">\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n  </div>\n  <div class=\"container\">\n    <div class=\"row pt-5\">\n      <div class=\"col-4\">\n        <div class=\"row\">\n          <div class=\"col-12\">\n            <span class=\"small-topic-text-body\">\n                About            \n            </span>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-12\">\n            <span class=\"big-topic-text-body\">\n                <strong>\n                  Us\n                </strong>\n            </span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-8 content-justify\">\n        <span class=\"content-style\">\n            Based in Calgary, Alberta, AMP X is a company that’s 20 years in the making. Only through the completion of more than 100 electrical,\n             instrumentation and controls (E, I and C) projects did we have enough first-hand information to build a solution we feel can truly help our \n             customers deliver their projects better. Through technology and practical project delivery methods that enable thoughtful engineering, we help \n             customers improve their bottom lines in today’s challenging business environment.\n        </span>\n      </div>\n      <div class=\"col-12 pt-5\">\n        <hr/>\n      </div>\n    </div>\n  <!-- -->\n    <div class=\"row pt-3\">\n      <div class=\"col-4\">\n        <div class=\"row\">\n          <div class=\"col-12\">\n            <span class=\"small-topic-text-body\">Our</span>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-12\">\n            <span class=\"big-topic-text-body\">\n              <strong>\n                Vision\n              </strong>\n            </span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-8 content-justify\">\n        <div class=\"row\">\n          <div class=\"col-12\">\n            <span class=\"content-style\">\n              Go beyond end-to-end E, I and C professional services.\n            </span>\n          </div>  \n        </div>\n        <div class=\"row pt-3\">\n          <div class=\"col-12\">\n            <span class=\"content-style\">\n              With a foundation that includes subject matter expertise in engineering, regulations and codes, construction and inspection, we are passionate about helping \n              our customers focus on optimizing engineering, reducing costs and benefitting long-term from solutions driven by technology and data.\n            </span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-12 pt-5\">\n        <hr/>\n      </div>\n    </div>\n  <!-- -->\n    <div class=\"row pt-3\">\n      <div class=\"col-4\">\n        <div class=\"row\">\n          <div class=\"col-12\">\n            <span class=\"small-topic-text-body\">\n                Our\n            </span>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-12\">\n            <span class=\"big-topic-text-body\">\n              <strong>\n                  Goals\n              </strong>\n            </span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-8\">\n        <div class=\"row d-none d-block\">\n          <div class=\"col-12\">\n            <picture>\n              <source media=\"(min-width: 1200px)\" [srcset]=\"lightbulbIcon_1200\">\n              <source media=\"(min-width: 768px)\" [srcset]=\"lightbulbIcon_768\">\n              <source [srcset]=\"lightbulbIcon_576\">\n              <img class=\"d-block img-fluid\" [src]=\"lightbulbIcon_1200\" alt=\"lightbulb_icon\" sr-only=\"Lightbulb Icon\">\n            </picture>\n                <!--\n            <img class=\"img-fluid\" [src]=\"lightbulbIcon\"/>\n                -->\n          </div>\n        </div>\n        <div class=\"row pt-3\">\n          <div class=\"col-12 content-justify\">\n            <span class=\"content-style\">\n              To provide trusted E, I and C solutions to our customers with a foundation that includes multiple decades of subject matter expertise and lessons-learned \n              in engineering, technology, regulations and codes, construction and inspection.\n            </span>\n          </div>\n        </div>\n        <div class=\"row pt-3 d-none d-block\">\n          <div class=\"col-12\">\n            <picture>\n              <source media=\"(min-width: 1200px)\" [srcset]=\"graficIcon_1200\">\n              <source media=\"(min-width: 768px)\" [srcset]=\"graficIcon_768\">\n              <source [srcset]=\"graficIcon_576\">\n              <img class=\"d-block img-fluid\" [src]=\"graficIcon_1200\" alt=\"grafic_icon\" sr-only=\"Grafic Icon\">\n            </picture>\n            <!--\n            <img class=\"img-fluid\" [src]=\"graficIcon\"/>\n            -->\n          </div>\n        </div>\n        <div class=\"row pt-3\">\n          <div class=\"col-12 content-justify\">\n              <span class=\"content-style\">\n                To add more value to our customers by shifting professional services efforts from tedious and time-consuming deliverable-related tasks to engineering, \n                stakeholder collaboration and total installed cost optimization, while maintaining project schedules.\n              </span>\n          </div>\n        </div>\n        <div class=\"row pt-3 d-none d-md-block\">\n          <div class=\"col-12\">\n            <picture>\n              <source media=\"(min-width: 1200px)\" [srcset]=\"computerIcon_1200\">\n              <source media=\"(min-width: 768px)\" [srcset]=\"computerIcon_768\">\n              <source [srcset]=\"computerIcon_576\">\n              <img class=\"d-block img-fluid\" [src]=\"computerIcon_1200\" alt=\"computer_icon\" sr-only=\"Computer Icon\">\n            </picture>\n            <!--\n            <img class=\"img-fluid\" [src]=\"computerIcon\"/>\n            -->\n          </div>\n        </div>\n        <div class=\"row pt-3\">\n          <div class=\"col-12 content-justify\">\n            <span class=\"content-style\">\n              To leverage the benefits of technology and globalization by effectively implementing a proprietary database and design tools, paired with multi-office \n              solutions, while not burdening customers with expensive and complicated software systems and onerous organizational structures.\n            </span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-12 pt-5\">\n        <hr/>\n      </div>\n    </div>\n  <!-- -->\n    <div class=\"row pt-3\">\n      <div class=\"col-4\">\n        <div class=\"row\">\n          <div class=\"col-12\">\n            <span class=\"small-topic-text-body\">Our</span>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-12\">\n            <span class=\"big-topic-text-body\">\n              <strong>\n                Model\n              </strong>\n            </span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-8\">\n        <div class=\"row\">\n          <div class=\"col-12 content-justify\">\n            <span class=\"content-style\">\n              To support our customers as they develop new projects or modify existing assets, we believe the best value we can bring is to spend as much effort as possible on tasks outside of deliverable development itself. By completing our designs within a proprietary database and by using effective design tools, we are able to remove many of the tedious and time-consuming efforts faced by projects completed using traditional methods, while maintaining a high level of design control and quality. Even more beneficial to our customers’ bottom lines is our ability to focus more of our time on the engineering itself. This includes an increased ability to concentrate on cost and design optimization and examination of how codes and regulations need to be implemented, while maintaining tight project schedules.\n            </span>\n          </div>\n        </div>\n        <div class=\"row pt-3\">\n          <div class=\"col-12 content-justify\">\n            <span class=\"content-style\">\n              Being able to produce high-quality engineering and complete deliverable packages with less effort is where we believe our differentiated solution begins. By using our database, engineering data is recorded, controlled and made available to project stakeholders such as other engineering disciplines, supply chain, vendors, construction and commissioning teams. This promotes collaboration, provides an ability to streamline professional services efforts and improves consistency. And let’s not forget that our customers are left with not only a complete set of deliverables, but also a comprehensive data package to support operations, future projects and long-term asset management.\n            </span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-12 pt-5\">\n        <hr/>\n      </div>\n    </div>\n  <!-- -->\n    <div class=\"row pt-3 pb-5\">\n      <div class=\"col-4\">\n        <div class=\"row\">\n          <div class=\"col-12\">\n            <span class=\"small-topic-text-body\">\n              Our\n            </span>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-12\">\n            <span class=\"big-topic-text-body\">\n              <strong>\n                Leadership\n              </strong>  \n            </span>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-12\">\n              <img class=\"img-fluid\" [src]=\"leaderImg\"/>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-8\">\n        <div class=\"row\">\n          <div class=\"col-12\">\n            <span class=\"content-style\">\n              <strong>\n                Greg Jarbeau, P.L.(Eng.), SCO, CME\n              </strong>\n            </span>\n          </div>\n        </div>\n        <div class=\"row pt-3\">\n          <div class=\"col-12\">\n            <span class=\"content-style\">\n              <i>\n                Owner and Principal\n              </i>\n            </span>\n          </div>\n        </div>\n        <div class=\"row pt-3\">\n          <div class=\"col-12 content-justify\">\n            <span class=\"content-style\">\n              Greg is a professional engineering technologist with more than 20 years of experience working in the energy & resources and commercial sectors. Throughout his career, Greg has helped numerous firms deliver complex projects on schedule and with the highest quality. His experience is in both project lead and technical specialist roles for scopes ranging from conceptual studies to detailed engineering and construction projects.\n            </span>\n          </div>\n        </div>\n        <div class=\"row pt-3\">\n          <div class=\"col-12 content-justify\">\n            <span class=\"content-style\">\n              His specialties include E, I and C engineering, construction management, field inspection and commissioning / start-up support. Greg started his career as an electrician, then completed the electrical engineering technology program at Northern Alberta Institute of Technology (NAIT) in Edmonton. Greg is also a certified master electrician and safety codes officer who is highly knowledgeable with respect to construction practices, codes and regulations. His field experience spans both hands-on and professional field services, with more than 10 years of successfully-delivered roles working at facilities throughout North America and globally.\n            </span>\n          </div>\n        </div>\n      </div>\n    </div>\n  <!-- -->\n  </div>\n  <footer *ngIf=\"sizeWindow > 992; else werticalFooter\">\n    <div class=\"custom-footer\">\n      <div class=\"d-flex align-items-center justify-content-around h-100\">\n        <div class=\"p-1 bd-highlight\">\n          <div class=\"row align-items-center\">\n            <div class=\"col-4\">\n              <img class=\"d-block\" [src]=\"phoneImg\" alt=\"phone:\" sr-only=\"phone number\">\n            </div>\n            <div class=\"col-8\">\n              <span> <a href=\"tel:1.403.863.0893\" class=\"footer_href\">1.403.863.0893</a></span>\n            </div>\n          </div>\n        </div>\n        <div class=\"p-1 bd-highlight\">\n          <div class=\"row align-items-center\">\n            <div class=\"col-4\">\n              <img class=\"d-block\" [src]=\"emailImg\" alt=\"email address\" sr-only=\"email\">\n            </div>\n            <div class=\"col-8\">\n              <span><a class=\"footer_href\" href=\"mailto:info@ampx.ca\">info@ampx.ca</a></span>\n            </div>\n          </div>\n        </div>\n        <div class=\"p-1 bd-highlight\">\n          <div class=\"row align-items-center\">\n            <div class=\"col-3\">\n              <img class=\"d-block\" [src]=\"linkedInImg\" alt=\"linkedIn\" sr-only=\"linked in account\">\n            </div>\n            <div class=\"col-9\">\n              <span class=\"footer-text\">Follow us on <a href=\"https://www.linkedin.com/company/amp-x-consulting-inc.?trk=top_nav_home\" target=\"_blank\" class=\"footer_href\"><strong>LinkedIn</strong></a></span>\n            </div>\n          </div>\n        </div>\n        <div class=\"p-1 bd-highlight\">\n            <span class=\"footer-text\">AMP X Consulting Inc. &copy; {{year}} | All Rights Reserved</span>\n        </div>\n      </div>\n    </div>\n  </footer>\n  <ng-template class=\"template-footer\" #werticalFooter>\n    <div class=\"custom-footer\">\n      <div class=\"d-flex flex-column\">\n        <div class=\"row mt-2 footer-row\">\n          <div class=\"col-6\">\n            <div class=\"float-right\">\n              <img class=\"d-block\" [src]=\"phoneImg\" alt=\"phone:\" sr-only=\"phone number\">\n            </div>\n          </div>\n          <div class=\"col-6 mr-a\">\n            <span> <a href=\"tel:1.403.863.0893\" class=\"footer_href\">1.403.863.0893</a></span>\n          </div>\n        </div>\n        <div class=\"row mt-2 footer-row\">\n          <div class=\"col-6\">\n            <div class=\"float-right\">\n              <img class=\"d-block\" [src]=\"emailImg\" alt=\"email address\" sr-only=\"email\">\n            </div>\n          </div>\n          <div class=\"col-6\">\n            <span><a class=\"footer_href\" href=\"mailto:info@ampx.ca\">info@ampx.ca</a></span>\n          </div>\n        </div>\n        <div class=\"row mt-2 footer-row\">\n          <div class=\"col-6\">\n            <div class=\"float-right\">\n              <img class=\"d-block\" [src]=\"linkedInImg\" alt=\"linkedIn\" sr-only=\"linked in account\">\n            </div>\n          </div>\n          <div class=\"col-6\">\n            <span class=\"footer-text\">Follow us on <a href=\"https://www.linkedin.com/company/amp-x-consulting-inc.?trk=top_nav_home\" target=\"_blank\" class=\"footer_href\"><strong>LinkedIn</strong></a></span>\n          </div>\n        </div>\n        <div class=\"row mt-2 footer-row\">\n          <div class=\"col-12\">\n            <div class=\"d-flex justify-content-center\">\n              <span class=\"footer-text text-center\">AMP X Consulting Inc. &copy; {{year}} | All Rights Reserved</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </ng-template>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/about-us/about-us.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutUsComponent = (function () {
    function AboutUsComponent() {
        this.sizeWindow = window.innerWidth;
    }
    AboutUsComponent.prototype.onResize = function (event) {
        event.target.innerWidth;
        this.sizeWindow = event.target.innerWidth;
    };
    AboutUsComponent.prototype.ngOnInit = function () {
        this.today = new Date();
        this.year = this.today.getFullYear();
        //header img >1200
        this.firstImg_1920 = 'assets/img/1920/aboutUs/Slider/firstImg.jpg';
        this.secondImg_1920 = 'assets/img/1920/aboutUs/Slider/secondImg.jpg';
        this.thirdImg_1920 = 'assets/img/1920/aboutUs/Slider/thirdImg.jpg';
        this.fourthImg_1920 = 'assets/img/1920/aboutUs/Slider/fourthImg.jpg';
        //header img 992- 1200
        this.firstImg_1200 = 'assets/img/1200/aboutUs/Slider/firstImg.jpg';
        this.secondImg_1200 = 'assets/img/1200/aboutUs/Slider/secondImg.jpg';
        this.thirdImg_1200 = 'assets/img/1200/aboutUs/Slider/thirdImg.jpg';
        this.fourthImg_1200 = 'assets/img/1200/aboutUs/Slider/fourthImg.jpg';
        //header img 768 - 992
        this.firstImg_992 = 'assets/img/992/aboutUs/Slider/firstImg.jpg';
        this.secondImg_992 = 'assets/img/992/aboutUs/Slider/secondImg.jpg';
        this.thirdImg_992 = 'assets/img/992/aboutUs/Slider/thirdImg.jpg';
        this.fourthImg_992 = 'assets/img/992/aboutUs/Slider/fourthImg.jpg';
        //header img 576 - 768
        this.firstImg_768 = 'assets/img/768/aboutUs/Slider/firstImg.jpg';
        this.secondImg_768 = 'assets/img/768/aboutUs/Slider/secondImg.jpg';
        this.thirdImg_768 = 'assets/img/768/aboutUs/Slider/thirdImg.jpg';
        this.fourthImg_768 = 'assets/img/768/aboutUs/Slider/fourthImg.jpg';
        //header img 576 - 768
        this.firstImg_576 = 'assets/img/576/aboutUs/Slider/firstImg.jpg';
        this.secondImg_576 = 'assets/img/576/aboutUs/Slider/secondImg.jpg';
        this.thirdImg_576 = 'assets/img/576/aboutUs/Slider/thirdImg.jpg';
        this.fourthImg_576 = 'assets/img/576/aboutUs/Slider/fourthImg.jpg';
        //body icons > 1200
        this.lightbulbIcon_1200 = 'assets/img/1200/aboutUs/icons/lightbulb-icon.png';
        this.graficIcon_1200 = 'assets/img/1200/aboutUs/icons/graphic-icon.png';
        this.computerIcon_1200 = 'assets/img/1200/aboutUs/icons/computer-icon.png';
        //body icons 768 - 1200
        this.lightbulbIcon_768 = 'assets/img/768/aboutUs/icons/lightbulb-icon.png';
        this.graficIcon_768 = 'assets/img/768/aboutUs/icons/graphic-icon.png';
        this.computerIcon_768 = 'assets/img/768/aboutUs/icons/computer-icon.png';
        //body icons 0 - 768
        this.lightbulbIcon_576 = 'assets/img/576/aboutUs/icons/lightbulb-icon.png';
        this.graficIcon_576 = 'assets/img/576/aboutUs/icons/graphic-icon.png';
        this.computerIcon_576 = 'assets/img/576/aboutUs/icons/computer-icon.png';
        //leader img
        this.leaderImg = "assets/img/1920/aboutUs/LeaderImage/greg-img.jpg";
        //footer image
        this.phoneImg = 'assets/img/1920/headerAndFooter/phone_1920.png';
        this.emailImg = 'assets/img/1920/headerAndFooter/email_1920.png';
        this.linkedInImg = 'assets/img/1920/headerAndFooter/linkedin_1920.png';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AboutUsComponent.prototype, "onResize", null);
    AboutUsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-about-us',
            template: __webpack_require__("../../../../../src/app/components/about-us/about-us.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/about-us/about-us.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutUsComponent);
    return AboutUsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/cable-item/cable-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "thead th {\r\n  font-size: 0.6rem;\r\n}\r\n\r\ntbody tr td  {\r\n  font-size: 0.6rem;\r\n}\r\n\r\n.achievements-wrapper {\r\n  height: auto; \r\n  overflow: auto;\r\n}\r\n  \r\nbutton.btnPlus {\r\n  border-radius: 0 0 0 0!important;\r\n  /*color: black;*/\r\n}\r\n  \r\nbutton.btnMinus {\r\n  border-radius: 0 .25rem .25rem 0!important;\r\n  /*color: black;*/\r\n}\r\n  \r\nselect.selectForOpenModal {\r\n  border-radius: .25rem 0 0 .25rem!important;\r\n}\r\n\r\n.cableTag {\r\n  padding-right: 5px!important;\r\n  padding-left: 5px!important;\r\n}\r\n\r\n.customContainer {\r\n  padding-right: 5px!important;\r\n  padding-left: 5px!important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/cable-item/cable-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ml-3 mr-3\" *ngIf=\"cabelItem\">\n  <div class=\"d-flex justify-content-center pt-3\">\n    <h1>Cable Tag <strong>{{cabelItem?.cableTagFirst}} {{cabelItem?.cableTagSecond}} {{cabelItem?.selectedCableTagIndex}} {{cabelItem?.cableTagThird}} {{cabelItem?.cableTagFourth}}</strong></h1>\n  </div>\n  <form (ngSubmit)=\"saveCable(cabelItem._id, cabelForm.value)\" #cabelForm=\"ngForm\">\n    <div class=\"row\">\n      <div class=\"col-12 col-sm-4 col-xl-2 align-self-start\">\n        <div class=\"d-flex justify-content-center\">\n          <span class=\"h4\">Info</span>\n        </div>\n          <div class=\"row\">\n            <div class=\"col-12 align-self-end\">\n              <div class=\"form-group\">\n                <label for=\"cableTag\">Create Cable Tag</label>\n                <div class=\"form-group row\">\n                  <div class=\"col-xl-3 cableTag\">\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"cabelItem.cableTagFirst\" name=\"cableTagFirst\">\n                  </div>\n                  <div class=\"col-xl-3 cableTag\">\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"cabelItem.cableTagSecond\" name=\"cableTagSecond\">\n                  </div>\n                  <div class=\"col-xl-3 cableTag\">\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"cabelItem.cableTagThird\" name=\"cableTagThird\">\n                  </div>\n                  <div class=\"col-xl-3 cableTag\">\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"cabelItem.cableTagFourth\" name=\"cableTagFourth\">\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-12 align-self-end\">\n              <div class=\"form-group\">\n                <label for=\"equipmentType\">Cable Type</label>\n                <div class=\"d-flex flex-row\">\n                  <select\n                    [disabled]=\"cabelItem.cableTagIndex.length == 0\"\n                    id=\"selectedCableTagIndex\"\n                    class=\"form-control selectForOpenModal\"\n                    [(ngModel)]=\"cabelItem.selectedCableTagIndex\"\n                    name=\"selectedCableTagIndex\"\n                  >\n                    <option\n                      *ngFor=\"let currentCableTagIndex of cabelItem.cableTagIndex\" \n                      [ngValue]=\"currentCableTagIndex\"\n                      [selected]=\"currentCableTagIndex==cabelItem.selectedCableTagIndex\">\n                        {{currentCableTagIndex}}\n                    </option>\n                  </select>\n                  <button\n                    type=\"button\"\n                    class=\"btn btn-outline-secondary btnPlus fa fa-plus\"\n                    data-toggle=\"tooltip\"\n                    data-placement=\"top\"\n                    title=\"Add new item\"\n                    (click)=\"cableType.showAddModal()\"\n                  ></button>\n                  <button\n                    type=\"button\"\n                    class=\"btn btn-outline-secondary btnMinus fa fa-minus\"\n                    data-toggle=\"tooltip\"\n                    data-placement=\"top\"\n                    title=\"Drop selected item\"\n                    (click)=\"cableType.showDropModal(dropElementFlag)\"\n                    [disabled]=\"cabelItem.cableTagIndex.length == 0\"\n                  ></button>\n                </div>\n              </div>            \n            </div>\n          </div>\n          <div class=\"row\" *ngIf=\"electricalList\">\n            <div class=\"col-12 align-self-end\">\n              <div class=\"form-group\">\n                <label for=\"selectedCableFrom\">Cable From</label>\n                <select\n                [disabled]=\"electricalList.length == 0\"\n                id=\"selectedCableFrom\"\n                class=\"form-control\"\n                [(ngModel)]=\"cabelItem.selectedCableFrom\"\n                (change)=\"getXYZValue(electricalList, cabelItem.selectedCableFrom, cabelItem.selectedCableTo)\"\n                name=\"selectedCableFrom\"\n              >\n                <option\n                  *ngFor=\"let currentCableFrom of electricalList\" \n                  [ngValue]=\"currentCableFrom.equipmentTag\"\n                  [selected]=\"currentCableFrom.equipmentTag==cabelItem.selectedCableFrom\">\n                    {{currentCableFrom.equipmentTag}}\n                </option>\n              </select>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\" *ngIf=\"electricalList\">\n            <div class=\"col-12 align-self-end\">\n              <div class=\"form-group\">\n                <label for=\"selectedCableTo\">Cable To</label>\n                <select\n                  [disabled]=\"electricalList.length == 0\"\n                  id=\"selectedCableTo\"\n                  class=\"form-control\"\n                  [(ngModel)]=\"cabelItem.selectedCableTo\"\n                  (change)=\"setCabelToConnectedFLA(electricalList, cabelItem.selectedCableTo);\n                    getXYZValue(electricalList, cabelItem.selectedCableFrom, cabelItem.selectedCableTo)\"\n                  name=\"selectedCableTo\"\n                >\n                <option\n                  *ngFor=\"let currentCableTo of electricalList\" \n                  [ngValue]=\"currentCableTo.equipmentTag\"\n                  [selected]=\"currentCableTo.equipmentTag==cabelItem.selectedCableTo\"\n                >\n                  {{currentCableTo.equipmentTag}}\n                </option>\n              </select>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-12 align-self-end\">\n              <div class=\"form-group\">\n                <label for=\"selectedPowerSystem\">System</label>\n                <select\n                  id=\"selectedPowerSystem\"\n                  class=\"form-control\"\n                  [(ngModel)]=\"cabelItem.selectedPowerSystem\"\n                  (change)=\"typeChanged()\"\n                  name=\"selectedPowerSystem\"\n                >\n                  <option\n                    *ngFor=\"let currentPowerSystem of cabelItem.powerSystem\" \n                    [ngValue]=\"currentPowerSystem\"\n                    [selected]=\"currentPowerSystem==cabelItem.selectedPowerSystem\"\n                  >\n                    {{currentPowerSystem}}\n                  </option>\n                </select>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-12 align-self-end\">\n              <div class=\"form-group\">\n                <label for=\"selectedConductorMaterial\">Conductor Material</label>\n                <select\n                  id=\"selectedConductorMaterial\"\n                  class=\"form-control\"\n                  [(ngModel)]=\"cabelItem.selectedConductorMaterial.name\"\n                  (change)=\"conductorMaterialChanged()\"\n                  name=\"selectedConductorMaterial\"\n                >\n                  <option\n                    *ngFor=\"let currentConductorMaterial of conductorMaterialAfterChangePowerSystem\" \n                    [ngValue]=\"currentConductorMaterial.name\"\n                    [selected]=\"currentConductorMaterial.name == cabelItem.selectedConductorMaterial.name\"\n                  >\n                    {{currentConductorMaterial.name}}\n                  </option>\n                </select>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-12 align-self-end\">\n              <div class=\"form-group\">\n                <label for=\"selectedVoltage\">Circuit Voltage</label>\n                <div class=\"d-flex flex-row\">\n                  <select\n                    id=\"selectedVoltage\"\n                    class=\"form-control selectForOpenModal\"\n                    [(ngModel)]=\"cabelItem.selectedVoltage.name\"\n                    name=\"selectedVoltage\"\n                    (change)=\"getVoltagePrefix(cabelItem.selectedVoltage.name)\"\n                  >\n                    <option\n                      *ngFor=\"let currentVoltage of voltageAfterChangePowerSystem\"\n                      [ngValue]=\"currentVoltage.name\"\n                      [selected]=\"currentVoltage.name == cabelItem.selectedVoltage.name\"\n                    >\n                      {{currentVoltage.name}}\n                    </option>\n                  </select>\n                  <button\n                    type=\"button\"\n                    class=\"btn btn-outline-secondary btnPlus fa fa-plus\"\n                    data-toggle=\"tooltip\"\n                    data-placement=\"top\"\n                    title=\"Add new item\"\n                    (click)=\"voltageModal.showAddModal()\"\n                  ></button>\n                  <button\n                    type=\"button\"\n                    class=\"btn btn-outline-secondary btnMinus fa fa-minus\"\n                    data-toggle=\"tooltip\"\n                    data-placement=\"top\"\n                    title=\"Drop selected item\"\n                    (click)=\"voltageModal.showDropModal(dropElementFlag)\"\n                    [disabled]=\"voltageAfterChangePowerSystem.length == 0\"\n                  ></button>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-12 align-self-end\">\n              <div class=\"form-group\">\n                <label for=\"selectedService\">Service</label>\n                <select\n                  id=\"selectedService\"\n                  class=\"form-control\"\n                  [(ngModel)]=\"cabelItem.selectedService\"\n                  name=\"selectedService\"\n                >\n                  <option\n                    *ngFor=\"let currentService of cabelItem.serviceArray\" \n                    [ngValue]=\"currentService\"\n                    [selected]=\"currentService==cabelItem.selectedService\"\n                  >\n                    {{currentService}}\n                  </option>\n                </select>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-12 align-self-end\">\n              <div class=\"form-group\">\n                <label for=\"selectedMaxAmbientTemp\">Max. Amb. Temp.</label>\n                <select\n                  id=\"selectedMaxAmbientTemp\"\n                  class=\"form-control\"\n                  [(ngModel)]=\"cabelItem.selectedMaxAmbientTemp\"\n                  name=\"selectedMaxAmbientTemp\"\n                >\n                  <option\n                    *ngFor=\"let currentMaxAmbientTemp of cabelItem.maxAmbientTempArray\" \n                    [ngValue]=\"currentMaxAmbientTemp\"\n                    [selected]=\"currentMaxAmbientTemp==cabelItem.selectedMaxAmbientTemp\"\n                  >\n                    {{currentMaxAmbientTemp}}\n                  </option>\n                </select>\n              </div>\n            </div>\n          </div>\n      </div>\n      <div class=\"col-12 col-sm-8 col-xl-4 align-self-start\">\n        <div class=\"d-flex justify-content-center\">\n          <span class=\"h4\">Physical</span>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-12 col-sm-6 col-xl-6 align-self-end\">\n           <div class=\"form-group\">\n            <label for=\"selectedCableType\">Cable Type</label>\n            <select\n              id=\"selectedCableType\"\n              class=\"form-control\"\n              [(ngModel)]=\"cabelItem.selectedCableType\"\n              name=\"selectedCableType\"\n            >\n              <option\n                *ngFor=\"let currentCableType of cabelItem.cableTypeArrayArray\" \n                [ngValue]=\"currentCableType\"\n                [selected]=\"currentCableType==cabelItem.selectedCableType\">\n                  {{currentCableType}}\n              </option>\n            </select>\n           </div>\n          </div>\n          <div class=\"col-12 col-sm-6 col-xl-6 align-self-end\">\n            <div class=\"form-group\">\n              <label for=\"outJacket\">Out Jacket</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"cabelItem.outJacket\" name=\"outJacket\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-12 col-sm-6 col-xl-6 align-self-end\">\n            <div class=\"form-group\">\n              <label for=\"selectedInsulationVoltage\">Insulation Voltage</label>\n              <select\n                id=\"selectedInsulationVoltage\"\n                class=\"form-control\"\n                [(ngModel)]=\"cabelItem.selectedInsulationVoltage\"\n                name=\"selectedInsulationVoltage\"\n              >\n                <option\n                  *ngFor=\"let currentInsulationVoltage of cabelItem.insulationVoltageArray\" \n                  [ngValue]=\"currentInsulationVoltage\"\n                  [selected]=\"currentInsulationVoltage==cabelItem.selectedInsulationVoltage\">\n                    {{currentInsulationVoltage}}\n                </option>\n              </select>\n            </div>\n          </div>\n          <div class=\"col-12 col-sm-6 col-xl-6 align-self-end\">\n            <div class=\"form-group\">\n              <label for=\"selectedJacketColor\">Jacket Color</label>\n              <select\n                id=\"selectedJacketColor\"\n                class=\"form-control\"\n                [(ngModel)]=\"cabelItem.selectedJacketColor\"\n                name=\"selectedJacketColor\"\n              >\n                <option\n                  *ngFor=\"let currentJacketColor of cabelItem.jacketColorArray\" \n                  [ngValue]=\"currentJacketColor\"\n                  [selected]=\"currentJacketColor==cabelItem.selectedJacketColor\">\n                    {{currentJacketColor}}\n                </option>\n              </select>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-12 col-sm-6 col-xl-6 align-self-end\">\n            <div class=\"form-group\">\n              <label for=\"selectedInsulationRating\">Ins. Rating</label>\n              <select\n                id=\"selectedInsulationRating\"\n                class=\"form-control\"\n                [(ngModel)]=\"cabelItem.selectedInsulationRating\"\n                name=\"selectedInsulationRating\"\n              >\n                <option\n                  *ngFor=\"let currentInsulationRating of cabelItem.insulationRatingArray\" \n                  [ngValue]=\"currentInsulationRating\"\n                  [selected]=\"currentInsulationRating==cabelItem.selectedInsulationRating\">\n                    {{currentInsulationRating}}\n                </option>\n              </select>\n            </div>\n          </div>\n          <div class=\"col-12 col-sm-6 col-xl-6 align-self-end\">\n            <div class=\"form-group\">\n              <label for=\"selectedRaceway\">Raceway</label>\n              <select\n                id=\"selectedRaceway\"\n                class=\"form-control\"\n                [(ngModel)]=\"cabelItem.selectedRaceway\"\n                name=\"selectedRaceway\"\n              >\n                <option\n                  *ngFor=\"let currentRaceway of cabelItem.racewayArray\" \n                  [ngValue]=\"currentRaceway\"\n                  [selected]=\"currentRaceway==cabelItem.selectedJacketColor\">\n                    {{currentRaceway}}\n                </option>\n              </select>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-12 col-sm-6 col-xl-6 align-self-end\">\n            <div class=\"form-group\">\n              <label for=\"selectedConductorInsulationType\">Conductor Ins Type</label>\n              <select\n                id=\"selectedConductorInsulationType\"\n                class=\"form-control\"\n                [(ngModel)]=\"cabelItem.selectedConductorInsulationType\"\n                name=\"selectedConductorInsulationType\"\n              >\n                <option\n                  *ngFor=\"let currentConductorInsulationType of cabelItem.conductorInsulationTypeArray\" \n                  [ngValue]=\"currentConductorInsulationType\"\n                  [selected]=\"currentConductorInsulationType==cabelItem.selectedConductorInsulationType\">\n                    {{currentConductorInsulationType}}\n                </option>\n              </select>\n            </div>\n          </div>\n          <div class=\"col-12 col-sm-6 col-xl-6 align-self-end\">\n            <div class=\"form-group\">\n              <label for=\"selectedFtRating\">Ft. Rating</label>\n              <select\n                id=\"selectedFtRating\"\n                class=\"form-control\"\n                [(ngModel)]=\"cabelItem.selectedFtRating\"\n                name=\"selectedFtRating\"\n              >\n                <option\n                  *ngFor=\"let currentFtRating of cabelItem.ftRatingArray\" \n                  [ngValue]=\"currentFtRating\"\n                  [selected]=\"currentFtRating==cabelItem.selectedFtRating\">\n                    {{currentFtRating}}\n                </option>\n              </select>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-12 col-sm-6 col-xl-6 align-self-end\">\n              <div class=\"form-group\">\n                <label for=\"selectedInsulationTemperatureRating\">Ins Temp Rating</label>\n                <select\n                  [disabled]=\"!cabelItem.selectedConductorMaterial.name || cabelItem.selectedConductorMaterial.name == 'Aluminium'\"\n                  id=\"selectedInsulationTemperatureRating\"\n                  class=\"form-control\"\n                  [(ngModel)]=\"cabelItem.selectedInsulationTemperatureRating.name\"\n                  name=\"selectedInsulationTemperatureRating\"\n                >\n                  <option\n                    *ngFor=\"let currentInsulationType of insTempRatingAfterChangeConductorMaterial\"\n                    [ngValue]=\"currentInsulationType.name\"\n                    [selected]=\"currentInsulationType.name == cabelItem.selectedInsulationTemperatureRating.name\"\n                  >\n                    {{currentInsulationType.name}}\n                  </option>\n                </select>\n              </div>\n            </div>\n            <div class=\"col-12 col-sm-6 col-xl-6 align-self-end\">\n              <div class=\"form-group\">\n                <label for=\"selectedWireColor\">Wire Color</label>\n                <select\n                  id=\"selectedWireColor\"\n                  class=\"form-control\"\n                  [(ngModel)]=\"cabelItem.selectedWireColor\"\n                  name=\"selectedWireColor\"\n                >\n                  <option\n                    *ngFor=\"let currentWireColor of cabelItem.wireColorArray\" \n                    [ngValue]=\"currentWireColor\"\n                    [selected]=\"currentWireColor==cabelItem.selectedWireColor\">\n                      {{currentWireColor}}\n                  </option>\n                </select>\n              </div>\n            </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-12 col-sm-6 col-xl-6 align-self-end\">\n            <div class=\"form-group\">\n              <label for=\"selectedShield\">Shield</label>\n              <select\n                id=\"selectedShield\"\n                class=\"form-control\"\n                [(ngModel)]=\"cabelItem.selectedShield\"\n                name=\"selectedShield\"\n              >\n                <option\n                  *ngFor=\"let currentShield of cabelItem.shieldArray\" \n                  [ngValue]=\"currentShield\"\n                  [selected]=\"currentShield==cabelItem.selectedShield\">\n                    {{currentShield}}\n                </option>\n              </select>\n            </div>\n          </div>\n          <div class=\"col-12 col-sm-6 col-xl-6 align-self-end\">\n            <div class=\"form-group\">\n              <label for=\"selectedApproval\">Approval</label>\n              <select\n                id=\"selectedApproval\"\n                class=\"form-control\"\n                [(ngModel)]=\"cabelItem.selectedApproval\"\n                name=\"selectedApproval\"\n              >\n                <option\n                  *ngFor=\"let currentApproval of cabelItem.approvalArray\" \n                  [ngValue]=\"currentApproval\"\n                  [selected]=\"currentApproval==cabelItem.selectedApproval\">\n                    {{currentApproval}}\n                </option>\n              </select>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-12 col-sm-6 col-xl-6 align-self-end\">\n            <div class=\"form-group\">\n              <label for=\"selectedArmour\">Armour</label>\n              <select\n                id=\"selectedArmour\"\n                class=\"form-control\"\n                [(ngModel)]=\"cabelItem.selectedArmour\"\n                name=\"selectedArmour\"\n              >\n                <option\n                  *ngFor=\"let currentArmour of cabelItem.armourArray\" \n                  [ngValue]=\"currentArmour\"\n                  [selected]=\"currentArmour==cabelItem.selectedArmour\">\n                    {{currentArmour}}\n                </option>\n              </select>\n            </div>\n          </div>\n          <div class=\"col-12 col-sm-6 col-xl-6 align-self-end\">\n            <div class=\"form-group\">\n              <label for=\"od\">O.D.</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"cabelItem.od\" name=\"od\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-12 col-sm-6 col-xl-6 align-self-end\">\n            <div class=\"form-group\">\n              <label for=\"kgPerMetr\">kg/m</label>\n              <input type=\"number\" class=\"form-control\" [(ngModel)]=\"cabelItem.kgPerMetr\" name=\"kgPerMetr\">\n            </div>\n          </div>\n          <div class=\"col-12 col-sm-6 col-xl-6 align-self-end\">\n            <div class=\"row\">\n              <div class=\"col-2\">\n                <div class=\"form-group\">\n                  <label for=\"itemNum\">No</label>\n                  <input type=\"number\" class=\"form-control\" [(ngModel)]=\"cabelItem.itemNum\" name=\"itemNum\">\n                </div>\n              </div>\n              <div class=\"col-4\">\n                <div class=\"form-group\">\n                  <label for=\"selectedItemType\">Type</label>\n                  <select\n                    id=\"selectedItemType\"\n                    class=\"form-control\"\n                    [(ngModel)]=\"cabelItem.selectedItemType\"\n                    name=\"selectedItemType\"\n                  >\n                  <option\n                    *ngFor=\"let currentItemType of cabelItem.itemTypeArray\" \n                    [ngValue]=\"currentItemType\"\n                    [selected]=\"currentItemType==cabelItem.selectedItemType\">\n                      {{currentItemType}}\n                  </option>\n                </select>\n                </div>\n              </div>\n              <div class=\"col-6\">\n                  <div class=\"form-group\">\n                    <label for=\"selectedCableSize\">Size</label>\n                    <select\n                      id=\"selectedCableSize\"\n                      class=\"form-control\"\n                      [(ngModel)]=\"cabelItem.selectedCableSize\"\n                      name=\"selectedCableSize\"\n                    >\n                    <option\n                      *ngFor=\"let currentCableSize of cabelItem.cableSizeArray\" \n                      [ngValue]=\"currentCableSize\"\n                      [selected]=\"currentCableSize==cabelItem.selectedCableSize\">\n                        {{currentCableSize}}\n                    </option>\n                  </select>\n                  </div>\n                </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- Start CONFIGURATION -->\n      <div class=\"col-12 col-sm-4 col-xl-2 align-self-start\">\n        <div class=\"d-flex justify-content-center\">\n          <span class=\"h4\">Configuration</span>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-12 align-self-end\">\n            <div class=\"form-group\">\n              <label for=\"selectedInstallMethod\">Install Method</label>\n              <select\n              id=\"selectedInstallMethod\"\n              class=\"form-control\"\n              [(ngModel)]=\"cabelItem.selectedInstallMethod\"\n              name=\"selectedInstallMethod\"\n            >\n              <option\n                *ngFor=\"let currentsInstallMethod of cabelItem.installMethodArray\" \n                [ngValue]=\"currentsInstallMethod\"\n                [selected]=\"currentsInstallMethod==cabelItem.selectedInstallMethod\">\n                  {{currentsInstallMethod}}\n              </option>\n            </select>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-12 align-self-end\">\n            <div class=\"form-group\">\n              <label for=\"selectedSpacing\">Spacing</label>\n              <select\n              id=\"selectedSpacing\"\n              class=\"form-control\"\n              [(ngModel)]=\"cabelItem.selectedSpacing\"\n              name=\"selectedSpacing\"\n            >\n              <option\n                *ngFor=\"let currentsSpacing of cabelItem.spacingArray\" \n                [ngValue]=\"currentsSpacing\"\n                [selected]=\"currentsSpacing==cabelItem.selectedSpacing\">\n                  {{currentsSpacing}}\n              </option>\n            </select>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-12 align-self-end\">\n            <div class=\"form-group\">\n              <label for=\"selectedSpacingCorrection\">Spacing Correction</label>\n              <select\n              id=\"selectedSpacingCorrection\"\n              class=\"form-control\"\n              [(ngModel)]=\"cabelItem.selectedSpacingCorrection\"\n              name=\"selectedSpacingCorrection\"\n            >\n              <option\n                *ngFor=\"let currentsSpacingCorrection of cabelItem.spacingCorrectionArray\" \n                [ngValue]=\"currentsSpacingCorrection\"\n                [selected]=\"currentsSpacingCorrection==cabelItem.selectedSpacingCorrection\">\n                  {{currentsSpacingCorrection}}\n              </option>\n            </select>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-12 align-self-end\">\n            <div class=\"form-group\">\n              <label for=\"tempCorrection\">Temp Correction</label>\n              <input type=\"number\" class=\"form-control\" [(ngModel)]=\"cabelItem.tempCorrection\" name=\"tempCorrection\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-12 align-self-end\">\n            <div class=\"form-group\">\n              <label for=\"selectedCec\">Cec 28-104</label>\n              <select\n              id=\"selectedCec\"\n              class=\"form-control\"\n              [(ngModel)]=\"cabelItem.selectedCec\"\n              name=\"selectedCec\"\n            >\n              <option\n                *ngFor=\"let currentsSelectedCec of cabelItem.cecArray\" \n                [ngValue]=\"currentsSelectedCec\"\n                [selected]=\"currentsSelectedCec==cabelItem.selectedCec\">\n                  {{currentsSelectedCec}}\n              </option>\n            </select>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-12 align-self-end\">\n            <div class=\"form-group\">\n              <label for=\"correctedCondAmp\">Corrected Cond. Amp</label>\n              <input type=\"number\" class=\"form-control\" [(ngModel)]=\"cabelItem.correctedCondAmp\" name=\"correctedCondAmp\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-12 align-self-end\">\n            <div class=\"form-group\">\n              <label for=\"numberOfRunsPerPhase\">No. of Runs Per Phase</label>\n              <input type=\"number\" class=\"form-control\" [(ngModel)]=\"cabelItem.numberOfRunsPerPhase\" name=\"numberOfRunsPerPhase\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-12 align-self-end\">\n            <div class=\"form-group\">\n              <label for=\"feederAmpacity\">Feeder Ampacity</label>\n              <input type=\"number\" class=\"form-control\" [(ngModel)]=\"cabelItem.feederAmpacity\" name=\"feederAmpacity\">\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- Edd CONFIGURATION -->\n      <!-- Strart VOLTAGE DROP section -->\n      <div class=\"col-12 col-sm-4 col-xl-2 align-self-start\">\n        <div class=\"d-flex justify-content-center\">\n          <span class=\"h4\">Voltage Drop</span>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-12 align-self-end\">\n            <div class=\"form-group\">\n              <label>Cable Distance Calc</label>\n              <button \n                type=\"button\"\n                class=\"btn btn-secondary btn-block\"\n                (click)=\"cabelDistanceModal.showModal()\"\n              >\n                Cable calculate\n              </button>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-12 align-self-end\">\n            <div class=\"form-group\">\n              <label for=\"cableLenth\">Total Length</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"cabelItem.cableLenth\" name=\"cableLenth\" disabled>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-12 align-self-end\">\n            <div class=\"form-group\">\n              <label for=\"voltageDropPercent\">Voltage Drop (%)</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"cabelItem.voltageDropPercent\" name=\"voltageDropPercent\" disabled>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!--End VOLTAGE DROP section -->\n      <!-- Strart LOAD section -->\n      <div class=\"col-12 col-sm-4 col-xl-2 align-self-start\">\n        <div class=\"d-flex justify-content-center\">\n          <span class=\"h4\">Load</span>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-12 align-self-end\">\n            <div class=\"form-group\">\n              <label for=\"connectedFla\">Connected FLA</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"cabelItem.connectedFLA\" name=\"connectedFla\" disabled>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-12 align-self-end\">\n            <div class=\"form-group\">\n              <label for=\"selectedAmpacityMultiplier\">Ampacity Multiplier</label>\n              <select\n              id=\"selectedAmpacityMultiplier\"\n              class=\"form-control\"\n              [(ngModel)]=\"cabelItem.selectedAmpacityMultiplier\"\n              name=\"selectedAmpacityMultiplier\"\n            >\n              <option\n                *ngFor=\"let currentAmpacityMultiplierArray of cabelItem.ampacityMultiplierArray\" \n                [ngValue]=\"currentAmpacityMultiplierArray\"\n                [selected]=\"currentAmpacityMultiplierArray==cabelItem.selectedAmpacityMultiplier\">\n                  {{currentAmpacityMultiplierArray}}\n              </option>\n            </select>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-12 align-self-end\">\n            <div class=\"form-group\">\n              <label for=\"minCondAmp\">Min. Cond. Amp.</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"cabelItem.minCondAmp\" name=\"minCondAmp\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-12 align-self-end\">\n            <div class=\"form-group\">\n              <label for=\"condAmpacity\">Cond. Ampacity</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"cabelItem.condAmpacity\" name=\"condAmpacity\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-12 align-self-end\">\n            <div class=\"form-group\">\n              <label for=\"ocAmpRating\">O/C Amp Rating</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"cabelItem.ocAmpRating\" name=\"ocAmpRating\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-12 align-self-end\">\n            <div class=\"form-group\">\n              <label for=\"internalNotes\">Internal Notes</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"cabelItem.internalNotes\" name=\"internalNotes\">\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"d-flex justify-content-end\">\n      <div class=\"mr-auto p-2\">\n        <a routerLink=\"/project/{{projectId}}/cables/\" class=\"btn btn-primary\">Back</a>\n      </div>\n      <div class=\"p-2 form-group\">\n        <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!cabelForm.form.valid\">Update/Create</button>\n      </div>\n    </div>\n    <div class=\"ml-3 mr-3\" *ngIf=\"sizeWindow > 576; else werticalTable\">\n      <div class=\"row achievements-wrapper\">\n        <table class=\"table table-bordered\">\n        <thead>\n          <tr>\n            <th>Rev.</th>                                                 <!-- 1 -->\n            <th>Cable Conduit Tag</th>                                    <!-- 2 -->\n            <th>Service</th>                                              <!-- 3 -->\n            <th>Load(A)</th>                                              <!-- 4 -->\n            <th>Volts</th>                                                <!-- 5 -->\n            <th>From Source</th>                                          <!-- 6 -->\n            <th>To Destination</th>                                       <!-- 7 -->\n            <th>Cable/Conduit Size/Type</th>                              <!-- 8 -->\n            <th>Cable/Conduit Lenth(m) etc.</th>                          <!-- 9 -->\n            <th>No. of Cond.</th>                                         <!-- 10 -->\n            <th>Type of Cond.</th>                                        <!-- 11 -->\n            <th>Cable Size</th>                                           <!-- 12 -->\n            <th>Conductor Insulation Type.</th>                           <!-- 13 -->\n            <th>Insul. Volts</th>                                         <!-- 14 -->\n            <th>Spare</th>                                                <!-- 15 -->\n            <th>Comments/Raceway Numbers</th>                             <!-- 16 -->\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td></td>                         <!-- 1 Rev. -->\n            <td></td>                     <!-- 2 Cable Conduit Tag -->\n            <td>{{cabelItem?.selectedService}}</td>     <!-- 3 Service -->\n            <td></td>            <!-- 4 Load(A) -->\n            <td>{{voltagePrefix}}</td>             <!-- 5 Volts -->\n            <td>{{cabelItem?.selectedCableFrom}}</td>              <!-- 6 From Source -->\n            <td>{{cabelItem?.selectedCableTo}}</td>                  <!-- 7 To Destination -->\n            <td>{{cabelItem?.selectedCableTagIndex}}</td>                    <!-- 8 Cable/Conduit Size/Type -->\n            <td>{{cableLenth}}</td>                          <!-- 9 Cable/Conduit Lenth(m) etc. -->\n            <td>{{cabelItem?.itemNum}}</td>                         <!-- 10 No. of Cond. -->\n            <td>{{cabelItem?.selectedItemType}}</td>                  <!-- 11 Type of Cond. -->\n            <td>{{cabelItem?.selectedCableSize}}</td>                <!-- 12 Cable Size -->\n            <td>{{cabelItem?.selectedConductorInsulationType}}</td>                       <!-- 13 Conductor Insulation Type. -->\n            <td>{{cabelItem?.selectedInsulationVoltage}}</td>                 <!-- 14 Insul. Volts -->\n            <td></td>                 <!-- 15 Spare -->\n            <td></td>                  <!-- 16 Comments/Raceway Numbers -->\n          </tr>\n        </tbody>\n        </table>\n    </div>\n    </div>\n    <ng-template class=\"ml-3 mr-3\" #werticalTable>\n      <div class=\"row\">\n        <table class=\"table table-bordered\">\n          <tr>\n            <td><strong>Rev.</strong></td>\n            <td></td>\n          </tr>\n          <tr>\n            <td><strong>Cable Conduit Tag</strong></td>\n            <td></td>\n          </tr>\n          <tr>\n            <td><strong>Service</strong></td>\n            <td>{{cabelItem?.selectedService}}</td>\n          </tr>\n          <tr>\n            <td><strong>Load(A)</strong></td>\n            <td></td>\n          </tr>\n          <tr>\n            <td><strong>Volts</strong></td>\n            <td>{{voltagePrefix}}</td>\n          </tr>\n          <tr>\n            <td><strong>From Source</strong></td>\n            <td>{{cabelItem?.selectedCableFrom}}</td>\n          </tr>\n          <tr>\n            <td><strong>To Destination</strong></td>\n            <td>{{cabelItem?.selectedCableTo}}</td>\n          </tr>\n          <tr>\n            <td><strong>Cable/Conduit Size/Type</strong></td>\n            <td>{{cabelItem?.selectedCableTagIndex}}</td>\n          </tr>\n          <tr>\n            <td><strong>Cable/Conduit Lenth(m) etc.</strong></td>\n            <td>{{cableLenth}}</td>\n          </tr>\n          <tr>\n            <td><strong>No. of Cond.</strong></td>\n            <td>{{cabelItem?.itemNum}}</td>\n          </tr>\n          <tr>\n            <td><strong>Type of Cond.</strong></td>\n            <td>{{cabelItem?.selectedItemType}}</td>\n          </tr>\n          <tr>\n            <td><strong>Cable Size</strong></td>\n            <td>{{cabelItem.selectedCableSize}}</td>\n          </tr>\n          <tr>\n            <td><strong>Conductor Insulation Type.</strong></td>\n            <td>{{cabelItem?.selectedConductorInsulationType}}</td>\n          </tr>\n          <tr>\n            <td><strong>Insul. Volts</strong></td>\n            <td>{{cabelItem?.selectedInsulationVoltage}}</td>\n          </tr>\n          <tr>\n            <td><strong>Spare</strong></td>\n            <td></td>\n          </tr>\n          <tr>\n            <td><strong>Comments/Raceway Numbers</strong></td>\n            <td></td>\n          </tr>\n        </table>\n      </div>\n    </ng-template>\n  </form>\n  <div class=\"row ml-3 mb-3\">\n    <button class=\"btn btn-danger\" (click)=\"deleteCable(cabelItem._id)\">Delete</button>\n  </div>\n</div>\n<div>\n  <app-electricals-modal [dataValue]=\"voltageAfterChangePowerSystem\" [selectedValue]=\"cabelItem?.selectedVoltage?.name\" [title]=\"voltage\" #voltageModal></app-electricals-modal>\n  <app-electricals-modal [dataValue]=\"cabelItem?.cableTagIndex\" [selectedValue]=\"cabelItem?.selectedCableTagIndex\" [title]=\"cableTypeModalName\" #cableType></app-electricals-modal>\n  <app-cable-distance-modal [firstElement]=\"cabelItem?.selectedCableFrom\" [secondElement]=\"cabelItem?.selectedCableTo\" [title]=\"cableDistanceModalHeader\" #cabelDistanceModal></app-cable-distance-modal>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/cable-item/cable-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CableItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_cable_service__ = __webpack_require__("../../../../../src/app/services/cable.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CableItemComponent = (function () {
    function CableItemComponent(router, route, cableService, spinnerService) {
        this.router = router;
        this.route = route;
        this.cableService = cableService;
        this.spinnerService = spinnerService;
        //
        this.dropElementFlag = true;
        this.voltage = "Voltage";
        this.cableTypeModalName = "Cable Type";
        this.cableDistanceModalHeader = "Cable Distance";
        this.voltageAfterChangePowerSystem = [];
        this.conductorMaterialAfterChangePowerSystem = [];
        this.insTempRatingAfterChangeConductorMaterial = [];
        this.projectId = this.route.snapshot.params['id'];
        this.cableId = this.route.snapshot.params['cableId'];
        this.sizeWindow = window.innerWidth;
    }
    CableItemComponent.prototype.onResize = function (event) {
        event.target.innerWidth;
        this.sizeWindow = event.target.innerWidth;
    };
    CableItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinnerService.show();
        this.cableService.getCableItem(this.projectId, this.cableId).subscribe(function (cables) {
            _this.cabelItem = cables.cabel;
            _this.voltageAfterChangePowerSystem = cables.cabel.voltage.filter(function (p) { return p.powerSystemType == cables.cabel.selectedPowerSystem; });
            _this.conductorMaterialAfterChangePowerSystem = cables.cabel.conductorMaterial.filter(function (cm) { return cm.powerSystemType == cables.cabel.selectedPowerSystem; });
            _this.insTempRatingAfterChangeConductorMaterial = cables.cabel.insulationTemperatureRatingArray.filter(function (itr) { return itr.conductorMaterialType == cables.cabel.selectedConductorMaterial.name; });
            _this.spinnerService.hide();
        }, function (err) {
            console.log(err);
            return false;
        });
        this.cableService.getElectricalName(this.projectId).subscribe(function (electricals) {
            _this.electricalList = electricals.electricals;
        });
    };
    CableItemComponent.prototype.setCabelToConnectedFLA = function (elecList, selectedCableTo) {
        var electricalsList = elecList;
        for (var key in electricalsList) {
            if (electricalsList[key].equipmentTag === selectedCableTo) {
                this.cabelItem.connectedFLA = electricalsList[key].totalConectedFla;
            }
            else {
            }
        }
    };
    CableItemComponent.prototype.getXYZValue = function (elList, from, to) {
        var listOfElecricals = elList;
        var cabelFrom = from;
        var cableTo = to;
        var cabelFromObject = {};
        var cabelToObject = {};
        if (!cabelFrom || !cableTo) {
            return;
        }
        else {
            for (var key in listOfElecricals) {
                if (listOfElecricals[key].equipmentTag === cabelFrom) {
                    cabelFromObject.coordForX = listOfElecricals[key].coordForX;
                    cabelFromObject.coordForY = listOfElecricals[key].coordForY;
                    cabelFromObject.coordForZ = listOfElecricals[key].coordForZ;
                }
            }
            ;
            for (var key in listOfElecricals) {
                if (listOfElecricals[key].equipmentTag === cableTo) {
                    cabelToObject.coordForX = listOfElecricals[key].coordForX;
                    cabelToObject.coordForY = listOfElecricals[key].coordForY;
                    cabelToObject.coordForZ = listOfElecricals[key].coordForZ;
                }
            }
            ;
            var sumCoordForX = cabelFromObject.coordForX - cabelToObject.coordForX;
            var absoluteCoordForX = Math.abs(sumCoordForX);
            var sumCoordForY = cabelFromObject.coordForY - cabelToObject.coordForY;
            var absoluteCoordForY = Math.abs(sumCoordForY);
            var sumCoordForZ = cabelFromObject.coordForZ - cabelToObject.coordForZ;
            var absoluteCoordForZ = Math.abs(sumCoordForZ);
            this.cabelItem.cableLenth = absoluteCoordForX + absoluteCoordForY + absoluteCoordForZ;
        }
    };
    CableItemComponent.prototype.getVoltagePrefix = function (voltageData) {
        this.voltagePrefix = voltageData;
        var index = this.voltagePrefix.lastIndexOf(' ');
        this.voltagePrefix = this.voltagePrefix.substring(index + 1);
    };
    CableItemComponent.prototype.typeChanged = function () {
        var _this = this;
        if (!this.cabelItem) {
            return;
        }
        else {
            this.voltageAfterChangePowerSystem = this.cabelItem.voltage.filter(function (p) { return p.powerSystemType == _this.cabelItem.selectedPowerSystem; });
            this.conductorMaterialAfterChangePowerSystem = this.cabelItem.conductorMaterial.filter(function (cm) { return cm.powerSystemType == _this.cabelItem.selectedPowerSystem; });
            this.cabelItem.selectedConductorMaterial.name = "";
            this.cabelItem.selectedInsulationVoltage = "";
            this.cabelItem.selectedRaceway = "";
            this.conductorMaterialChanged();
        }
    };
    CableItemComponent.prototype.conductorMaterialChanged = function () {
        var _this = this;
        if (!this.cabelItem) {
            return;
        }
        else {
            this.insTempRatingAfterChangeConductorMaterial = this.cabelItem.insulationTemperatureRatingArray.filter(function (itr) { return itr.conductorMaterialType == _this.cabelItem.selectedConductorMaterial.name; });
            this.cabelItem.selectedInsulationTemperatureRating.name = "";
        }
    };
    CableItemComponent.prototype.changeVoltageArrayObject = function (productsAfterChange, projectData) {
        var arayObjectsAfterFilter = projectData.filter(function (p) { return p.powerSystemType != productsAfterChange[0].powerSystemType; });
        for (var i = 0; i < productsAfterChange.length; ++i) {
            var itemElement = productsAfterChange[i];
            arayObjectsAfterFilter.push(itemElement);
        }
        return arayObjectsAfterFilter;
    };
    CableItemComponent.prototype.saveCable = function (idCable, data) {
        var _this = this;
        this.spinnerService.show();
        //Info part
        data.cableTagFirst = this.cabelItem.cableTagFirst;
        data.cableTagSecond = this.cabelItem.cableTagSecond;
        data.cableTagThird = this.cabelItem.cableTagThird;
        data.cableTagFourth = this.cabelItem.cableTagFourth;
        data.cableTagIndex = this.cabelItem.cableTagIndex;
        data.selectedCableTagIndex = this.cabelItem.selectedCableTagIndex;
        //START TODO chech how it save with electricalItem
        data.selectedCableFrom = this.cabelItem.selectedCableFrom;
        data.selectedCableTo = this.cabelItem.selectedCableTo;
        //END TODO
        this.selectedItemVoltage = data.selectedVoltage;
        data.selectedVoltage = {};
        data.selectedVoltage.name = this.selectedItemVoltage;
        data.voltage = this.changeVoltageArrayObject(this.voltageAfterChangePowerSystem, this.cabelItem.voltage);
        data.selectedVoltage.powerSystemType = data.selectedPowerSystem;
        data.selectedPowerSystem = this.cabelItem.selectedPowerSystem;
        data.selectedConductorMaterial = {};
        data.selectedConductorMaterial.name = this.cabelItem.selectedConductorMaterial.name;
        data.selectedConductorMaterial.powerSystemType = data.selectedPowerSystem;
        //
        data.selectedService = this.cabelItem.selectedService;
        data.selectedMaxAmbientTemp = this.cabelItem.selectedMaxAmbientTemp;
        //Physical part
        data.selectedCableType = this.cabelItem.selectedCableType;
        data.outJacket = this.cabelItem.outJacket;
        data.selectedInsulationVoltage = this.cabelItem.selectedInsulationVoltage;
        data.selectedJacketColor = this.cabelItem.selectedJacketColor;
        data.selectedInsulationRating = this.cabelItem.selectedInsulationRating;
        data.selectedRaceway = this.cabelItem.selectedRaceway;
        data.selectedConductorInsulationType = this.cabelItem.selectedConductorInsulationType;
        data.selectedFtRating = this.cabelItem.selectedFtRating;
        //TODO finish Ins Temp Rating
        data.selectedInsulationTemperatureRating = {};
        data.selectedInsulationTemperatureRating.name = this.cabelItem.selectedInsulationTemperatureRating.name;
        data.selectedInsulationTemperatureRating.conductorMaterialType = this.cabelItem.selectedConductorMaterial.name;
        //
        data.selectedWireColor = this.cabelItem.selectedWireColor;
        data.selectedShield = this.cabelItem.selectedShield;
        data.selectedApproval = this.cabelItem.selectedApproval;
        data.selectedArmour = this.cabelItem.selectedArmour;
        data.od = this.cabelItem.od;
        data.kgPerMetr = this.cabelItem.kgPerMetr;
        data.itemNum = this.cabelItem.itemNum;
        data.selectedItemType = this.cabelItem.selectedItemType;
        data.selectedCableSize = this.cabelItem.selectedCableSize;
        //Configuration part
        data.selectedInstallMethod = this.cabelItem.selectedInstallMethod;
        data.selectedSpacing = this.cabelItem.selectedSpacing;
        data.selectedSpacingCorrection = this.cabelItem.selectedSpacingCorrection;
        data.tempCorrection = this.cabelItem.tempCorrection;
        data.selectedCec = this.cabelItem.selectedCec;
        data.correctedCondAmp = this.cabelItem.correctedCondAmp;
        data.numberOfRunsPerPhase = this.cabelItem.numberOfRunsPerPhase;
        data.feederAmpacity = this.cabelItem.feederAmpacity;
        //Voltage Drop part
        data.cableLenth = this.cabelItem.cableLenth || 0;
        data.voltageDropPercent = this.cabelItem.voltageDropPercent || 0;
        //Load part
        data.connectedFLA = this.cabelItem.connectedFLA;
        data.selectedAmpacityMultiplier = this.cabelItem.selectedAmpacityMultiplier;
        data.minCondAmp = this.cabelItem.minCondAmp;
        data.condAmpacity = this.cabelItem.condAmpacity;
        data.ocAmpRating = this.cabelItem.ocAmpRating;
        data.internalNotes = this.cabelItem.internalNotes;
        this.cableService.updateCabelItem(this.projectId, idCable, data).subscribe(function (res) {
            _this.spinnerService.hide();
            _this.router.navigate(['project', _this.projectId, 'cables']);
        }, function (err) {
            console.log(err);
        });
    };
    CableItemComponent.prototype.deleteCable = function (cableItemId) {
        var _this = this;
        this.spinnerService.show();
        this.cableService.deleteCableItem(this.projectId, cableItemId).subscribe(function (res) {
            _this.spinnerService.hide();
            _this.router.navigate(['project', _this.projectId, 'cables']);
        }, function (err) {
            console.log(err);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], CableItemComponent.prototype, "onResize", null);
    CableItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-cable-item',
            template: __webpack_require__("../../../../../src/app/components/cable-item/cable-item.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/cable-item/cable-item.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__services_cable_service__["a" /* CableService */],
            __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__["Ng4LoadingSpinnerService"]])
    ], CableItemComponent);
    return CableItemComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/cable-list/cable-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@font-face {\r\n  font-family: \"Roboto-Light\";\r\n  src: url(" + __webpack_require__("../../../../../src/assets/fonts/Roboto-Light.ttf") + ");\r\n  font-style: normal;\r\n  font-weight: normal;\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Roboto-Bolt\";\r\n  src: url(" + __webpack_require__("../../../../../src/assets/fonts/Roboto-Bold.ttf") + ");\r\n  font-weight: bold;\r\n}\r\n.table-text-style{\r\n  font-family: Roboto-Bolt!important;\r\n  color: #4c4c4c!important;\r\n}\r\n\r\n.disable-decoration {\r\n  text-decoration: none!important;\r\n}\r\n\r\n.table-cursor {\r\n  cursor: pointer;\r\n}\r\n\r\nthead th {\r\n  font-size: 0.6rem;\r\n}\r\ntbody tr td  {\r\n  font-size: 0.6rem;\r\n}\r\n.achievements-wrapper {\r\n  height: auto; \r\n  overflow: auto;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/cable-list/cable-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"pt-2 text-center\">\n      <h1>Cables List\n        <a class=\"btn btn-primary\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Add new cable\" (click)=\"saveCable()\">\n          <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n        </a>\n      </h1>\n    </div>\n    <div class=\"row achievements-wrapper\">\n      <table class=\"table table-sm table-bordered table-hover table-text-style\">\n        <thead>\n          <tr>\n            <th></th>                                   <!-- 1 -->\n            <th>Rev.</th>                               <!-- 2 -->\n            <th>Cable Conduit Tag</th>                  <!-- 3 -->\n            <th>Service</th>                            <!-- 4 -->\n            <th>Load(A)</th>                            <!-- 5 -->\n            <th>Volts</th>                              <!-- 6 -->\n            <th>From Source</th>                        <!-- 7 -->\n            <th>To Destination</th>                     <!-- 8 -->\n            <th>Cable/Conduit Size/Type</th>            <!-- 9 -->\n            <th>Cable/Conduit Lenth(m) etc.</th>        <!-- 10 -->\n            <th>No. of Cond.</th>                       <!-- 11 -->\n            <th>Type of Cond</th>                       <!-- 12 -->\n            <th>Size (AWG)</th>                         <!-- 13 -->\n            <th>Insul</th>                              <!-- 14 -->\n            <th>Insul Volts</th>                        <!-- 15 -->\n            <th>Spare</th>                              <!-- 16 -->\n            <th>Comments/ Raceway/ Numbers</th>           <!-- 17 -->\n          </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let cabel of cables?.cabels\">\n              <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/cables/{{cabel._id}}\"><a class=\"table-cursor\"></a></td>                               <!-- 1 -->\n              <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/cables/{{cabel._id}}\"><a class=\"table-cursor\"></a></td>                               <!-- 2 Rev-->\n              <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/cables/{{cabel._id}}\">\n                  <a class=\"table-cursor\">\n                    {{cabel?.cableTagFirst}}-{{cabel?.cableTagSecond}}-{{cabel?.selectedCableTagIndex}}-{{cabel?.cableTagThird}}-{{cabel?.cableTagFourth}}\n                  </a>\n              </td>                                                                                                   <!-- 3 Cable Conduit Tag-->\n              <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/cables/{{cabel._id}}\"><a class=\"table-cursor\">{{cabel?.selectedService}}</a></td>     <!-- 4 Service -->\n              <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/cables/{{cabel._id}}\"><a class=\"table-cursor\"></a></td>                               <!-- 5 Load(A) -->\n              <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/cables/{{cabel._id}}\"><a class=\"table-cursor\"></a></td>                               <!-- 6 Volts -->\n              <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/cables/{{cabel._id}}\"><a class=\"table-cursor\">{{cabel?.selectedCableFrom}}</a></td>   <!-- 7 From Source -->\n              <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/cables/{{cabel._id}}\"><a class=\"table-cursor\">{{cabel?.selectedCableTo}}</a></td>     <!-- 8 To Destination -->\n              <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/cables/{{cabel._id}}\"><a class=\"table-cursor\">{{cabel?.selectedCableType}}</a></td>   <!-- 9 Cable/Conduit Size/Type-->\n              <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/cables/{{cabel._id}}\"><a class=\"table-cursor\"></a></td>                               <!-- 10 Cable/Conduit Lenth(m) etc.-->\n              <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/cables/{{cabel._id}}\"><a class=\"table-cursor\"></a></td>                               <!-- 11 -->\n              <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/cables/{{cabel._id}}\"><a class=\"table-cursor\"></a></td>                               <!-- 12 -->\n              <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/cables/{{cabel._id}}\"><a class=\"table-cursor\"></a></td>                               <!-- 13 -->\n              <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/cables/{{cabel._id}}\"><a class=\"table-cursor\">{{cabel?.selectedConductorInsulationType}}</a></td><!-- 14 Insul-->\n              <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/cables/{{cabel._id}}\"><a class=\"table-cursor\"></a></td>                               <!-- 15 -->\n              <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/cables/{{cabel._id}}\"><a class=\"table-cursor\"></a></td>                               <!-- 16 -->\n              <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/cables/{{cabel._id}}\"><a class=\"table-cursor\"></a></td>                               <!-- 17 -->\n            </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/cable-list/cable-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CableListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_cable_service__ = __webpack_require__("../../../../../src/app/services/cable.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CableListComponent = (function () {
    function CableListComponent(cableService, router, route, spinnerService) {
        this.cableService = cableService;
        this.router = router;
        this.route = route;
        this.spinnerService = spinnerService;
        this.projectId = this.route.snapshot.params['id'];
    }
    CableListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinnerService.show();
        this.cableService.getCables(this.projectId).subscribe(function (cableList) {
            _this.cables = cableList;
        }, function (err) {
            console.log(err);
            return false;
        });
        this.spinnerService.hide();
    };
    CableListComponent.prototype.saveCable = function () {
        var _this = this;
        this.cable = {};
        this.cable.length = 0;
        this.spinnerService.show();
        this.cableService.createCable(this.projectId, this.cable).subscribe(function (res) {
            var id = res['_id'];
            var responseId = res[res.length - 1]['_id'];
            var routeToCableItem = '/project/' + _this.route.snapshot.params['id'] + '/cables/' + responseId;
            _this.router.navigate([routeToCableItem]);
        }, function (err) {
            console.log(err);
        });
        this.spinnerService.hide();
    };
    CableListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-cable-list',
            template: __webpack_require__("../../../../../src/app/components/cable-list/cable-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/cable-list/cable-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_cable_service__["a" /* CableService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__["Ng4LoadingSpinnerService"]])
    ], CableListComponent);
    return CableListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/contact-us/contact-us.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input.ng-touched.ng-invalid {border:solid red 1px;}\r\ninput.ng-touched.ng-valid {border:solid green 1px;}\r\n\r\ninput::-webkit-input-placeholder {\r\n  color: gray;\r\n  font-style: italic;\r\n}\r\n\r\ninput:-ms-input-placeholder {\r\n  color: gray;\r\n  font-style: italic;\r\n}\r\n\r\ninput::placeholder {\r\n  color: gray;\r\n  font-style: italic;\r\n}\r\n  input:focus::-webkit-input-placeholder { color:transparent; }\r\n  input:focus:-moz-placeholder { color:transparent; } /* FF 4-18 */\r\n  input:focus::-moz-placeholder { color:transparent; } /* FF 19+ */\r\n  input:focus:-ms-input-placeholder { color:transparent; } /* IE 10+ */\r\n  \r\nhr {\r\n  background: #ffb248;\r\n  height: 0.25vw;\r\n  width: 5.2vw;\r\n  z-index: 2;\r\n  border: 0;\r\n}\r\n\r\n.img-block {\r\n  position:relative;\r\n}\r\n\r\n.img-captcha {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 10%;\r\n  width: 30%;\r\n  /*z-index: 2;*/\r\n  height: 100%;\r\n}\r\n\r\n.img-captcha-fone {\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: black;\r\n  opacity: .7;\r\n  position: absolute;\r\n}\r\n\r\n.max-height {\r\n  height: 100%;\r\n}\r\n\r\n.captcha-header {\r\n  color: white;\r\n  z-index: 2;\r\n  font-size: 3.7vw;\r\n}\r\n\r\n.captcha-footer{\r\n  color: white;\r\n  z-index: 2;\r\n  text-align: justify;\r\n  font-size: 1.3vw;\r\n}\r\n\r\n.form-element-height{\r\n  height:4.5rem;\r\n}\r\n.form-text-block{\r\n  margin-bottom: 0.95rem;\r\n}\r\n.validate-message {\r\n  color:#d9534f;\r\n}\r\n\r\n.template-footer {\r\n  position: absolute;\r\n  bottom: 0;\r\n  width: 100%;\r\n  display:block;\r\n}\r\n\r\n.custom-footer {\r\n  height:210px;\r\n  background-color:#2f3032;\r\n}\r\n\r\n.custom-footer-link{\r\n  text-decoration: none;\r\n}\r\n\r\na.footer_href {\r\n  color: #ffffff;\r\n  text-decoration: none;\r\n}\r\n\r\nspan.footer-text {\r\n  color:white;\r\n}\r\n\r\n.footer-row {\r\n  margin-right:0px!important;\r\n  margin-left:0px!important\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/contact-us/contact-us.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"img-block\">\n    <picture>\n      <source media=\"(min-width: 1200px)\" [srcset]=\"contactUsImg_1920\">\n      <source media=\"(min-width: 992px)\" [srcset]=\"contactUsImg_1200\">\n      <source media=\"(min-width: 768px)\" [srcset]=\"contactUsImg_992\">\n      <source media=\"(min-width: 576px)\" [srcset]=\"contactUsImg_768\">\n      <source [srcset]=\"contactUsImg_576\">\n      <img class=\"d-block img-fluid\" [src]=\"contactUsImg_1920\" alt=\"contactUs\" sr-only=\"Contact Us\">\n    </picture>\n    <div class=\"img-captcha\">\n        <div class=\"img-captcha-fone\"></div>\n        <div class=\"d-flex align-items-start flex-column max-height\">\n          <p class=\"carousel-caption-header-text pl-4 mt-auto mb-auto captcha-header\"><strong>How can we help you?</strong></p>\n          <hr class=\"mb-auto ml-4 mt-auto\">\n          <p class=\"pl-4 pr-4 mt-auto mb-auto captcha-footer\">\n            We are eager to help your business. Please contact us directly via telephone or email, or submit an inquiry using the form below.\n          </p>\n        </div>\n    </div>\n  </div>\n  <div class=\"container\">\n    <form [formGroup]=\"contactUsForm\" novalidate (ngSubmit)=\"submit()\">\n      <div class=\"row justify-content-center mt-5\">\n        <div class=\"col-12 col-md-6 col-lg-4 col-xl-6\">\n          <div class=\"row\">\n            <div class=\"col-12 form-element-height\">\n              <div class=\"form-group\">\n                <input class=\"form-control\" type=\"text\" name=\"userName\" formControlName=\"userName\" placeholder=\"Name\" />\n                <div class=\"form-control-feedback validate-message\" *ngIf=\"contactUsForm.controls['userName'].invalid && contactUsForm.controls['userName'].touched\">\n                  <span>Name is required</span>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-12 form-element-height\">\n              <div class=\"form-group\">\n                <input class=\"form-control\" type=\"email\" name=\"userEmail\" formControlName=\"userEmail\" placeholder=\"Email\" />\n                <div class=\"form-control-feedback validate-message\" *ngIf=\"contactUsForm.controls['userEmail'].invalid && contactUsForm.controls['userEmail'].touched\">\n                  Invalid email address\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-12 form-element-height\">\n              <div class=\"form-group\">\n                <input class=\"form-control\" type=\"text\" name=\"userPhone\" formControlName=\"userPhone\" (keypress)=\"keyPress($event)\" placeholder=\"Phone number (optional)\" />\n                <div class=\"form-control-feedback validate-message\" *ngIf=\"contactUsForm.controls['userPhone'].invalid\">\n                    Invalid phone number\n                  </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-12 col-md-6 col-lg-4 col-xl-6\">\n          <div class=\"form-group\" class=\"form-text-block\">\n            <textarea class=\"form-control\" formControlName=\"message\" rows=\"7\"></textarea>\n          </div>\n        </div>\n      </div>\n \n    </form>\n  </div>\n  <footer *ngIf=\"sizeWindow > 992; else werticalFooter\">\n    <div class=\"custom-footer\">\n        <div class=\"d-flex align-items-center justify-content-around custom-footer-link max-height\">\n            <div class=\"p-1 bd-highlight\">\n              <div class=\"row align-items-center\">\n                <div class=\"col-4\">\n                  <img class=\"d-block\" [src]=\"phoneImg\" alt=\"phone:\" sr-only=\"phone number\">\n                </div>\n                <div class=\"col-8\">\n                  <span> <a href=\"tel:1.403.863.0893\" class=\"footer_href\">1.403.863.0893</a></span>\n                </div>\n              </div>\n            </div>\n            <div class=\"p-1 bd-highlight\">\n              <div class=\"row align-items-center\">\n                <div class=\"col-4\">\n                  <img class=\"d-block\" [src]=\"emailImg\" alt=\"email address\" sr-only=\"email\">\n                </div>\n                <div class=\"col-8\">\n                  <span><a class=\"footer_href\" href=\"mailto:info@ampx.ca\">info@ampx.ca</a></span>\n                </div>\n              </div>\n            </div>\n            <div class=\"p-1 bd-highlight\">\n              <div class=\"row align-items-center\">\n                <div class=\"col-3\">\n                  <img class=\"d-block\" [src]=\"linkedInImg\" alt=\"linkedIn\" sr-only=\"linked in account\">\n                </div>\n                <div class=\"col-9\">\n                  <span class=\"footer-text\">Follow us on <a href=\"https://www.linkedin.com/company/amp-x-consulting-inc.?trk=top_nav_home\" target=\"_blank\" class=\"footer_href\"><strong>LinkedIn</strong></a></span>\n                </div>\n              </div>\n            </div>\n            <div class=\"p-1 bd-highlight\">\n                <span class=\"footer-text\">AMP X Consulting Inc. &copy; {{year}} | All Rights Reserved</span>\n            </div>\n          </div>\n        </div>\n  </footer>\n  <ng-template class=\"template-footer\" #werticalFooter>\n    <div class=\"custom-footer\">\n      <div class=\"d-flex flex-column\">\n        <div class=\"row mt-2 footer-row\">\n          <div class=\"col-6\">\n            <div class=\"float-right\">\n              <img class=\"d-block\" [src]=\"phoneImg\" alt=\"phone:\" sr-only=\"phone number\">\n            </div>\n          </div>\n          <div class=\"col-6 mr-a\">\n            <span> <a href=\"tel:1.403.863.0893\" class=\"footer_href\">1.403.863.0893</a></span>\n          </div>\n        </div>\n        <div class=\"row mt-2 footer-row\">\n          <div class=\"col-6\">\n            <div class=\"float-right\">\n              <img class=\"d-block\" [src]=\"emailImg\" alt=\"email address\" sr-only=\"email\">\n            </div>\n          </div>\n          <div class=\"col-6\">\n            <span><a class=\"footer_href\" href=\"mailto:info@ampx.ca\">info@ampx.ca</a></span>\n          </div>\n        </div>\n        <div class=\"row mt-2 footer-row\">\n          <div class=\"col-6\">\n            <div class=\"float-right\">\n              <img class=\"d-block\" [src]=\"linkedInImg\" alt=\"linkedIn\" sr-only=\"linked in account\">\n            </div>\n          </div>\n          <div class=\"col-6\">\n            <span class=\"footer-text\">Follow us on <a href=\"https://www.linkedin.com/company/amp-x-consulting-inc.?trk=top_nav_home\" target=\"_blank\" class=\"footer_href\"><strong>LinkedIn</strong></a></span>\n          </div>\n        </div>\n        <div class=\"row mt-2 footer-row\">\n          <div class=\"col-12\">\n            <div class=\"d-flex justify-content-center\">\n              <span class=\"footer-text text-center\">AMP X Consulting Inc. &copy; {{year}} | All Rights Reserved</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </ng-template>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/contact-us/contact-us.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactUsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_contact_us_service__ = __webpack_require__("../../../../../src/app/services/contact-us.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ContactUsComponent = (function () {
    function ContactUsComponent(flashMessage, router, contactUsService, spinnerService) {
        this.flashMessage = flashMessage;
        this.router = router;
        this.contactUsService = contactUsService;
        this.spinnerService = spinnerService;
        this.textValue = 'Message';
        this.today = new Date();
        this.year = this.today.getFullYear();
        this.sizeWindow = window.innerWidth;
        this.contactUsForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            "userName": new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required),
            "userEmail": new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]("", [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
            ]),
            "userPhone": new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](""),
            "message": new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required),
        });
    }
    ContactUsComponent.prototype.onResize = function (event) {
        event.target.innerWidth;
        this.sizeWindow = event.target.innerWidth;
    };
    ContactUsComponent.prototype.ngOnInit = function () {
        this.phoneImg = 'assets/img/1920/headerAndFooter/phone_1920.png';
        this.emailImg = 'assets/img/1920/headerAndFooter/email_1920.png';
        this.linkedInImg = 'assets/img/1920/headerAndFooter/linkedin_1920.png';
        //header img
        this.contactUsImg_1920 = 'assets/img/1920/contactUs/contact_us.jpg';
        this.contactUsImg_1200 = 'assets/img/1200/contactUs/contact_us.jpg';
        this.contactUsImg_992 = 'assets/img/992/contactUs/contact_us.jpg';
        this.contactUsImg_768 = 'assets/img/768/contactUs/contact_us.jpg';
        this.contactUsImg_576 = 'assets/img/576/contactUs/contact_us.jpg';
    };
    ContactUsComponent.prototype.keyPress = function (event) {
        var pattern = /[0-9\+\-\(\)\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    ContactUsComponent.prototype.submit = function () {
        var _this = this;
        this.spinnerService.show();
        var user = {
            name: this.contactUsForm.value.userName,
            email: this.contactUsForm.value.userEmail,
            phone: this.contactUsForm.value.userPhone,
            message: this.contactUsForm.value.message
        };
        this.contactUsService.sendContactUsEmail(user).subscribe(function (data) {
            if (data.success) {
                _this.spinnerService.hide();
                _this.flashMessage.show('Your message has been sent to the site administrator.', { cssClass: 'alert-success', timeout: 3000, showCloseBtn: true });
                _this.router.navigate(['/']);
            }
            else {
                _this.spinnerService.hide();
                _this.flashMessage.show('Something went wrong.', { cssClass: 'alert-danger', timeout: 3000, showCloseBtn: true });
                _this.router.navigate(['/']);
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ContactUsComponent.prototype, "onResize", null);
    ContactUsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-contact-us',
            template: __webpack_require__("../../../../../src/app/components/contact-us/contact-us.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/contact-us/contact-us.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__services_contact_us_service__["a" /* ContactUsService */],
            __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__["Ng4LoadingSpinnerService"]])
    ], ContactUsComponent);
    return ContactUsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/electrical-item/electrical-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "thead th {\r\n    font-size: 0.6rem;\r\n  }\r\n  tbody tr td  {\r\n    font-size: 0.6rem;\r\n  }\r\n  .achievements-wrapper {\r\n    height: auto; \r\n    overflow: auto;\r\n  }\r\n  \r\n  button.btnPlus {\r\n    border-radius: 0 0 0 0!important;\r\n    /*color: black;*/\r\n  }\r\n  \r\n  button.btnMinus {\r\n    border-radius: 0 .25rem .25rem 0!important;\r\n    /*color: black;*/\r\n  }\r\n  \r\n  select.selectForOpenModal {\r\n    border-radius: .25rem 0 0 .25rem!important;\r\n  }\r\n\r\n  .border-eh-raiting {\r\n    border: 1px solid;\r\n    border-radius: 8px;\r\n  }\r\n\r\n  .inner-padding-eh-rating {\r\n    padding-bottom: 1.3rem!important;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/electrical-item/electrical-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ml-3 mr-3\" (window:resize)=\"onResize($event)\" *ngIf=\"electricalItem\">\n    <div class=\"d-flex justify-content-center pt-3\">\n      <h1>Electrical <strong>{{electricalItem?.equipmentTag}}</strong></h1>\n    </div>\n    <form (ngSubmit)=\"saveElectrical(electricalItem._id, electricalForm.value)\" #electricalForm=\"ngForm\">\n      <div class=\"row\">\n        <div class=\"col-12 col-xl-6 align-self-start\">\n          <div class=\"d-flex justify-content-center\">\n            <span class=\"h4\">Electrical Equipment Entry</span>\n          </div>\n            <div class=\"row\">\n              <div class=\"col-12 col-sm-3 align-self-end\">\n                <div class=\"form-group\">\n                  <label for=\"itemNumber\">Item number</label>\n                  <input type=\"text\" class=\"form-control\"  name=\"itemNumber\" disabled>\n                </div>\n              </div>\n              <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\n                <div class=\"form-group\">\n                  <label for=\"dateCreate\">Date added</label>\n                  <!--\n                  <my-date-picker [options]=\"myDatePickerOptions\"\n                    [(ngModel)]=\"electricalItem.dateCreate\" name=\"dateCreate\">\n                  </my-date-picker>\n                -->\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"date\" name=\"dateCreate\" disabled>\n                </div>\n              </div>\n              <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\n                <div class=\"form-group\">\n                  <label for=\"revision\">Revision</label>\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"electricalItem.revision\" name=\"revision\">\n                </div>\n              </div>\n              <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\n                <div class=\"form-group\">\n                  <label for=\"quantity\">Quantity</label>\n                  <input type=\"number\" class=\"form-control\" [(ngModel)]=\"electricalItem.quantity\" name=\"quantity\">\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\n                <div class=\"form-group\">\n                  <label for=\"equipmentType\">Equipment Type</label>\n                  <div class=\"d-flex flex-row\">\n                    <select\n                      [disabled]=\"electricalItem.equipmentType.length == 0\"\n                      id=\"selectedEquipmentType\"\n                      class=\"form-control selectForOpenModal\"\n                      [(ngModel)]=\"electricalItem.selectedEquipmentType\"\n                      name=\"selectedEquipmentType\"\n                    >\n                      <option\n                        *ngFor=\"let currentEquipmentType of electricalItem.equipmentType\" \n                        [ngValue]=\"currentEquipmentType\"\n                        [selected]=\"currentEquipmentType==electricalItem.selectedEquipmentType\">\n                          {{currentEquipmentType}}\n                      </option>\n                    </select>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnPlus fa fa-plus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Add new item\"\n                      (click)=\"equipmentTypeModal.showAddModal()\"\n                    ></button>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnMinus fa fa-minus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Drop selected item\"\n                      (click)=\"equipmentTypeModal.showDropModal(dropElementFlag)\"\n                      [disabled]=\"electricalItem.equipmentType.length == 0\"\n                    ></button>\n                  </div>\n                </div>            \n              </div>\n              <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\n                <div class=\"form-group\">\n                  <label for=\"selectedPidDrawing\">Pid Drawing</label>\n                  <div class=\"d-flex flex-row\">\n                    <select \n                      [disabled]=\"electricalItem.pidDrawing.length == 0\"\n                      id=\"selectedPidDrawing\"\n                      class=\"form-control selectForOpenModal\"\n                      [(ngModel)]=\"electricalItem.selectedPidDrawing\"\n                      name=\"selectedPidDrawing\"\n                    >\n                      <option\n                        *ngFor=\"let currentPidDrawing of electricalItem.pidDrawing\" \n                        [ngValue]=\"currentPidDrawing\"\n                        [selected]=\"currentPidDrawing==electricalItem.selectedPidDrawing\">\n                          {{currentPidDrawing}}\n                      </option>\n                    </select>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnPlus fa fa-plus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Add new item\"\n                      (click)=\"pidDrawingModal.showAddModal()\"\n                    ></button>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnMinus fa fa-minus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Drop selected item\"\n                      (click)=\"pidDrawingModal.showDropModal(dropElementFlag)\"\n                      [disabled]=\"electricalItem.pidDrawing.length == 0\"\n                    ></button>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\n                <div class=\"form-group\">\n                  <label for=\"layoutDrawing\">Layout Drawing</label>\n                  <div class=\"d-flex flex-row\">\n                    <select [disabled]=\"electricalItem.layoutDrawing.length == 0\"\n                      id=\"selectedLayoutDrawing\"\n                      class=\"form-control selectForOpenModal\"\n                      [(ngModel)]=\"electricalItem.selectedLayoutDrawing\"\n                      name=\"selectedLayoutDrawing\"\n                    >\n                      <option\n                        *ngFor=\"let currentLayoutDrawing of electricalItem.layoutDrawing\" \n                        [ngValue]=\"currentLayoutDrawing\"\n                        [selected]=\"currentLayoutDrawing==electricalItem.selectedLayoutDrawing\">\n                          {{currentLayoutDrawing}}\n                      </option>\n                    </select>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnPlus fa fa-plus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Add new item\"\n                      (click)=\"layoutDrawingModal.showAddModal()\"\n                    ></button>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnMinus fa fa-minus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Drop selected item\"\n                      (click)=\"layoutDrawingModal.showDropModal(dropElementFlag)\"\n                      [disabled]=\"electricalItem.layoutDrawing.length == 0\"\n                    ></button>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\n                <div class=\"form-group\">\n                  <label for=\"sldDraving\">SLD Drawing</label>\n                  <div class=\"d-flex flex-row\">\n                    <select [disabled]=\"electricalItem.sldDraving.length == 0\"\n                      id=\"selectedSldDraving\"\n                      class=\"form-control selectForOpenModal\"\n                      [(ngModel)]=\"electricalItem.selectedSldDraving\"\n                      name=\"selectedSldDraving\"\n                    >\n                      <option\n                        *ngFor=\"let currentSldDraving of electricalItem.sldDraving\" \n                        [ngValue]=\"currentSldDraving\"\n                        [selected]=\"currentSldDraving==electricalItem.selectedSldDraving\">\n                          {{currentSldDraving}}\n                      </option>\n                    </select>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnPlus fa fa-plus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Add new item\"\n                      (click)=\"sldDravingModal.showAddModal()\"\n                    ></button>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnMinus fa fa-minus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Drop selected item\"\n                      (click)=\"sldDravingModal.showDropModal(dropElementFlag)\"\n                      [disabled]=\"electricalItem.sldDraving.length == 0\"\n                    ></button>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\n                <div class=\"form-group\">\n                  <label for=\"equipmentTag\">Equipment Tag</label>\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"electricalItem.equipmentTag\" name=\"equipmentTag\" >\n                </div>\n              </div>\n              <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\n                <div class=\"form-group\">\n                  <label for=\"equipmentTag2\">Equipment Tag 2</label>\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"electricalItem.equipmentTag\" name=\"equipmentTag2\" disabled>\n                </div>\n              </div>\n              <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\n                <div class=\"form-group\">\n                  <label for=\"parentTag\">Parent Tag</label>\n                  <select [disabled]=\"parentList?.length == 0\"\n                  id=\"selectedParentTag\"\n                  class=\"form-control selectForOpenModal\"\n                  [(ngModel)]=\"electricalItem.selectedParentTag\"\n                  name=\"selectedParentTag\"\n                >\n                  <option\n                    *ngFor=\"let currentParentTag of parentList\" \n                    [ngValue]=\"currentParentTag\"\n                    [selected]=\"currentParentTag==electricalItem.selectedParentTag\">\n                      {{currentParentTag}}\n                  </option>\n                </select>\n                </div>\n              </div>\n              <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\n                <div class=\"form-group\">\n                  <label for=\"equipmentNotes\">Equipment Notes</label>\n                  <input type=\"number\" class=\"form-control\" [(ngModel)]=\"electricalItem.equipmentNotes\" name=\"equipmentNotes\">\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\n                <div class=\"form-group\">\n                  <label for=\"locationArea\">Location/Area</label>\n                  <div class=\"d-flex flex-row\">\n                    <select [disabled]=\"electricalItem.locationArea.length == 0\"\n                      id=\"selectedLocationArea\"\n                      class=\"form-control selectForOpenModal\"\n                      [(ngModel)]=\"electricalItem.selectedLocationArea\"\n                      name=\"selectedLocationArea\"\n                    >\n                      <option\n                        *ngFor=\"let currentLocationArea of electricalItem.locationArea\" \n                        [ngValue]=\"currentLocationArea\"\n                        [selected]=\"currentLocationArea==electricalItem.selectedLocationArea\">\n                          {{currentLocationArea}}\n                      </option>\n                    </select>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnPlus fa fa-plus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Add new item\"\n                      (click)=\"locationAreaModal.showAddModal()\"\n                    ></button>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnMinus fa fa-minus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Drop selected item\"\n                      (click)=\"locationAreaModal.showDropModal(dropElementFlag)\"\n                      [disabled]=\"electricalItem.locationArea.length == 0\"\n                    >\n                    </button>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\n                <div class=\"form-group\">\n                  <label for=\"selectedEquipmentDescription\">Equipment Description</label>\n                  <div class=\"d-flex flex-row\">\n                    <select [disabled]=\"electricalItem.equipmentDescription.length == 0\"\n                      id=\"selectedEquipmentDescription\"\n                      class=\"form-control selectForOpenModal\"\n                      [(ngModel)]=\"electricalItem.selectedEquipmentDescription\"\n                      name=\"selectedEquipmentDescription\"\n                    >\n                      <option\n                        *ngFor=\"let currentEquipmentDescription of electricalItem.equipmentDescription\" \n                        [ngValue]=\"currentEquipmentDescription\"\n                        [selected]=\"currentEquipmentDescription==electricalItem.selectedEquipmentDescription\">\n                          {{currentEquipmentDescription}}\n                      </option>\n                    </select>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnPlus fa fa-plus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Add new item\"\n                      (click)=\"equipmentDescriptionModal.showAddModal()\"\n                    ></button>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnMinus fa fa-minus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Drop selected item\"\n                      (click)=\"equipmentDescriptionModal.showDropModal(dropElementFlag)\"\n                      [disabled]=\"electricalItem.equipmentDescription.length == 0\"\n                    ></button>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\n                <div class=\"form-group\">\n                  <label for=\"cloneTag\">Clone Tag</label>\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"electricalItem.cloneTag\" name=\"cloneTag\" disabled>\n                </div>\n              </div>\n              <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\n                <div class=\"form-group\">\n                  <label for=\"newTag\">New Tag</label>\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"electricalItem.newTag\" name=\"newTag\">\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-12 col-sm-6 align-self-end\" *ngIf=\"electricalItem\">\n                <div class=\"form-group\">\n                  <div class=\"form-row\">\n                    <div class=\"col\">\n                      <label for=\"length\">Length(mm)</label>\n                    </div>\n                    <div class=\"col\">\n                      <label for=\"depth\">Depth(mm)</label>\n                    </div>\n                    <div class=\"col\">\n                        <label for=\"height\">Height(mm)</label>\n                    </div>\n                  </div>\n                  <div class=\"form-row\">\n                    <div class=\"col\">\n                      <input type=\"number\" class=\"form-control\" [(ngModel)]=\"electricalItem.length\" name=\"length\" >\n                    </div>\n                    <div class=\"col\">\n                      <input type=\"number\" class=\"form-control\" [(ngModel)]=\"electricalItem.depth\" name=\"depth\">\n                    </div>\n                    <div class=\"col\">\n                      <input type=\"number\" class=\"form-control\" [(ngModel)]=\"electricalItem.height\" name=\"height\">\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-12 col-sm-6 align-self-end\" *ngIf=\"electricalItem\">\n                <div class=\"form-group\">\n                  <div class=\"form-row\">\n                    <div class=\"col\">\n                      <label for=\"coordForX\">X Coord(m)</label>\n                    </div>\n                    <div class=\"col\">\n                      <label for=\"coordForY\">Y Coord(m)</label>\n                    </div>\n                    <div class=\"col\">\n                      <label for=\"coordForZ\">Z Coord(m)</label>\n                    </div>\n                  </div>\n                  <div class=\"form-row\">\n                    <div class=\"col\">\n                      <input type=\"number\" class=\"form-control\" [(ngModel)]=\"electricalItem.coordForX\" name=\"coordForX\" >\n                    </div>\n                    <div class=\"col\">\n                      <input type=\"number\" class=\"form-control\" [(ngModel)]=\"electricalItem.coordForY\" name=\"coordForY\">\n                    </div>\n                    <div class=\"col\">\n                      <input type=\"number\" class=\"form-control\" [(ngModel)]=\"electricalItem.coordForZ\" name=\"coordForZ\">\n                    </div>\n                  </div>\n                </div>\n              <!--\n              <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\n                <div class=\"form-group\">\n                  <label for=\"length\">Length(mm)</label>\n                  <input type=\"number\" class=\"form-control\" [(ngModel)]=\"electricalItem.length\" name=\"length\" >\n                </div>\n              </div>\n              <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\n                <div class=\"form-group\">\n                  <label for=\"depth\">Depth(mm)</label>\n                  <input type=\"number\" class=\"form-control\" [(ngModel)]=\"electricalItem.depth\" name=\"depth\">\n                </div>\n              </div>\n              <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\n                <div class=\"form-group\">\n                  <label for=\"height\">Height(mm)</label>\n                  <input type=\"number\" class=\"form-control\" [(ngModel)]=\"electricalItem.height\" name=\"height\">\n                </div>\n              </div>\n              <div class=\"col-12 col-sm-6 align-self-end\" *ngIf=\"electricalItem\">\n                <div class=\"form-group\">\n                  <label for=\"weight\">Weight(kg)</label>\n                  <input type=\"number\" class=\"form-control\" [(ngModel)]=\"electricalItem.weight\" name=\"weight\">\n                </div>\n              </div>\n            -->\n              </div>\n            </div>\n            <div class=\"row\">\n              <!--\n              <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\n                <div class=\"form-group\">\n                  <label for=\"coordForX\">X Coord(m)</label>\n                  <input type=\"number\" class=\"form-control\" [(ngModel)]=\"electricalItem.coordForX\" name=\"coordForX\" >\n                </div>\n              </div>\n              <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\n                <div class=\"form-group\">\n                  <label for=\"coordForY\">Y Coord(m)</label>\n                  <input type=\"number\" class=\"form-control\" [(ngModel)]=\"electricalItem.coordForY\" name=\"coordForY\">\n                </div>\n              </div>\n              <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\n                <div class=\"form-group\">\n                  <label for=\"coordForZ\">Z Coord(m)</label>\n                  <input type=\"number\" class=\"form-control\" [(ngModel)]=\"electricalItem.coordForZ\" name=\"coordForZ\">\n                </div>\n              </div>\n              <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\n                <div class=\"form-group\">\n                  <label for=\"heatDissipation\">Heat Dissipation (W)</label>\n                  <input type=\"number\" class=\"form-control\" [(ngModel)]=\"electricalItem.heatDissipation\" name=\"heatDissipation\">\n                </div>\n              </div>\n            -->\n            </div>\n            <div class=\"row\">\n              <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\n                <div class=\"form-group\">\n                  <label for=\"scenarioFirstLoadFactor\">Scenario 1 Load Factor %</label>\n                  <input type=\"number\" class=\"form-control\" [(ngModel)]=\"electricalItem.scenarioFirstLoadFactor\" name=\"scenarioFirstLoadFactor\" >\n                </div>\n              </div>\n              <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\n                <div class=\"form-group\">\n                  <label for=\"heatDissipation\">Heat Dissipation (W)</label>\n                  <input type=\"number\" class=\"form-control\" [(ngModel)]=\"electricalItem.heatDissipation\" name=\"heatDissipation\">\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-12 col-xl-6 align-self-start\">\n            <div class=\"d-flex justify-content-center\">\n              <span class=\"h4\">General Rating</span>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\n                <div class=\"form-group\">\n                  <label for=\"selectedPowerSystem\">Power System</label>\n                  <select\n                    id=\"selectedPowerSystem\"\n                    class=\"form-control\"\n                    [(ngModel)]=\"electricalItem.selectedPowerSystem\"\n                    (change)=\"typeChanged()\"\n                    name=\"selectedPowerSystem\"\n                  >\n                    <option\n                      *ngFor=\"let currentPowerSystem of electricalItem.powerSystem\" \n                      [ngValue]=\"currentPowerSystem\"\n                      [selected]=\"currentPowerSystem==electricalItem.selectedPowerSystem\"\n                    >\n                      {{currentPowerSystem}}\n                    </option>\n                  </select>\n                </div>\n              </div>\n              <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\n                <div class=\"form-group\">\n                  <label for=\"selectedVoltage\">Voltage</label>\n                  <div class=\"d-flex flex-row\">\n                    <select\n                      id=\"selectedVoltage\"\n                      class=\"form-control selectForOpenModal\"\n                      [(ngModel)]=\"electricalItem.selectedVoltage.name\"\n                      name=\"selectedVoltage\"\n                    >\n                      <option\n                        *ngFor=\"let currentVoltage of productsAfterChangeEvent\"\n                        [ngValue]=\"currentVoltage.name\"\n                        [selected]=\"currentVoltage.name == electricalItem.selectedVoltage.name\"\n                      >\n                        {{currentVoltage.name}}\n                      </option>\n                    </select>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnPlus fa fa-plus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Add new item\"\n                      (click)=\"voltageModal.showAddModal()\"\n                    ></button>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnMinus fa fa-minus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Drop selected item\"\n                      (click)=\"voltageModal.showDropModal(dropElementFlag)\"\n                      [disabled]=\"productsAfterChangeEvent.length == 0\"\n                    ></button>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\n                <div class=\"form-group\">\n                  <label for=\"totalPF\">Total % P.F.</label>\n                  <input type=\"number\" class=\"form-control\" [(ngModel)]=\"electricalItem.totalPF\" name=\"totalPF\">\n                </div>\n              </div>\n              <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\n                <div class=\"form-group\">\n                  <label for=\"totalEFF\">Total % EFF.</label>\n                  <input type=\"number\" class=\"form-control\" [(ngModel)]=\"electricalItem.totalEFF\" name=\"totalEFF\">\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\n                <div class=\"form-group\">\n                  <label for=\"nameplateRating\">Nameplate Rating</label>\n                  <input type=\"number\" class=\"form-control\" [(ngModel)]=\"electricalItem.nameplateRating\" name=\"nameplateRating\">\n                </div>\n              </div>\n              <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\n                <div class=\"form-group\">\n                  <label for=\"units\">Units</label>\n                  <select\n                    id=\"selectedUnits\"\n                    class=\"form-control\"\n                    [(ngModel)]=\"electricalItem.selectedUnits\"\n                    name=\"selectedUnits\"\n                  >\n                    <option\n                      *ngFor=\"let currentUnit of electricalItem.units\" \n                      [ngValue]=\"currentUnit\"\n                      [selected]=\"currentUnit==electricalItem.selectedUnits\"\n                    >\n                      {{currentUnit}}\n                    </option>\n                  </select>\n                </div>\n              </div>\n              <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\n                <div class=\"form-group\">\n                  <label for=\"selectedMotorSF\">Motor S.F.</label>\n                  <select\n                    id=\"selectedMotorSF\"\n                    class=\"form-control\"\n                    [(ngModel)]=\"electricalItem.selectedMotorSF\"\n                    name=\"selectedMotorSF\"\n                  >\n                    <option\n                      *ngFor=\"let currentMotorSF of electricalItem.motorSF\" \n                      [ngValue]=\"currentMotorSF\"\n                      [selected]=\"currentMotorSF==electricalItem.selectedMotorSF\"\n                    >\n                      {{currentMotorSF}}\n                    </option>\n                  </select>\n                </div>\n              </div>\n              <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\n                <div class=\"form-group\">\n                  <label for=\"motorCode\">Motor Code</label>\n                  <select\n                    id=\"selectedMotorCode\"\n                    class=\"form-control\"\n                    [(ngModel)]=\"electricalItem.selectedMotorCode\"\n                    name=\"selectedMotorCode\"\n                  >\n                    <option\n                      *ngFor=\"let currentMotorCode of electricalItem.motorCode\" \n                      [ngValue]=\"currentMotorCode\"\n                      [selected]=\"currentMotorCode==electricalItem.selectedMotorCode\"\n                    >\n                      {{currentMotorCode}}\n                    </option>\n                  </select>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\n                <div class=\"form-group\">\n                  <label for=\"selectedSccRating\">SCC Rating</label>\n                  <select\n                    id=\"selectedSccRating\"\n                    class=\"form-control\"\n                    [(ngModel)]=\"electricalItem.selectedSccRating\"\n                    name=\"selectedSccRating\"\n                  >\n                    <option\n                      *ngFor=\"let currentSccRating of electricalItem.sccRating\" \n                      [ngValue]=\"currentSccRating\"\n                      [selected]=\"currentSccRating==electricalItem.selectedSccRating\"\n                    >\n                      {{currentSccRating}}\n                    </option>\n                    </select>\n                </div>\n              </div>\n              <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\n                <div class=\"form-group\">\n                  <label for=\"selectedEnclosureRating\">Enclosure Rating</label>\n                  <select\n                  id=\"selectedEnclosureRating\"\n                  class=\"form-control\"\n                  [(ngModel)]=\"electricalItem.selectedEnclosureRating\"\n                  name=\"selectedEnclosureRating\"\n                  >\n                    <option\n                      *ngFor=\"let currentEnclosureRating of electricalItem.enclosureRating\" \n                      [ngValue]=\"currentEnclosureRating\"\n                      [selected]=\"currentEnclosureRating==electricalItem.selectedEnclosureRating\"\n                    >\n                      {{currentEnclosureRating}}\n                    </option>\n                  </select>\n                </div>\n              </div>\n              <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\n                <div class=\"form-group\">\n                  <label for=\"loadFactor\">Load Factor (%)</label>\n                  <input type=\"number\" class=\"form-control\" [(ngModel)]=\"electricalItem.loadFactor\" name=\"loadFactor\">\n                </div>\n              </div>\n              <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\n                <div class=\"form-group\">\n                  <label for=\"selectedLoadDuty\">Load Duty</label>\n                  <select\n                    id=\"selectedLoadDuty\"\n                    class=\"form-control\"\n                    [(ngModel)]=\"electricalItem.selectedLoadDuty\"\n                    name=\"selectedLoadDuty\"\n                    >\n                    <option\n                      *ngFor=\"let currentLoadDuty of electricalItem.loadDuty\" \n                      [ngValue]=\"currentLoadDuty\"\n                      [selected]=\"currentLoadDuty==electricalItem.selectedLoadDuty\"\n                    >\n                      {{currentLoadDuty}}\n                    </option>\n                  </select>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-12 col-sm-6 align-self-end\">\n                <div class=\"row\">\n                  <div class=\"col-12 col-sm-6 align-self-end\" *ngIf=\"electricalItem\">\n                    <div class=\"form-group\">\n                      <label for=\"ambientTemp\">Ambient Temp (°C)</label>\n                      <input id=\"ambientTemp\" type=\"number\" class=\"form-control\" [(ngModel)]=\"electricalItem.ambientTemp\" name=\"ambientTemp\">\n                    </div>\n                  </div>\n                  <div class=\"col-12 col-sm-6 align-self-end\" *ngIf=\"electricalItem\">\n                    <div class=\"form-group\">\n                      <label for=\"selectedTerminationTemp\">Termination Temp (°C)</label>\n                      <select\n                        id=\"selectedTerminationTemp\"\n                        class=\"form-control\"\n                        [(ngModel)]=\"electricalItem.selectedTerminationTemp\"\n                        name=\"selectedTerminationTemp\"\n                      >\n                        <option\n                          *ngFor=\"let currentTerminationTemp of electricalItem.terminationTemp\" \n                          [ngValue]=\"currentTerminationTemp\"\n                          [selected]=\"currentTerminationTemp==electricalItem.selectedTerminationTemp\"\n                        >\n                          {{currentTerminationTemp}}\n                        </option>\n                      </select>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-12 col-sm-6 align-self-end\" *ngIf=\"electricalItem\">\n                    <div class=\"form-group\">\n                      <label for=\"operationTempMin\">Operating T Min.(°C)</label>\n                      <input id=\"operationTempMin\" type=\"number\" class=\"form-control\" [(ngModel)]=\"electricalItem.operationTempMin\" name=\"operationTempMin\">\n                    </div>\n                  </div>\n                  <div class=\"col-12 col-sm-6 align-self-end\" *ngIf=\"electricalItem\">\n                    <div class=\"form-group\">\n                      <label for=\"operationTempMax\">Operating T Max.(°C)</label>\n                      <input id=\"operationTempMax\" type=\"number\" class=\"form-control\" [(ngModel)]=\"electricalItem.operationTempMax\" name=\"operationTempMax\">\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-12 col-sm-6 align-self-end\" *ngIf=\"electricalItem\">\n                    <div class=\"form-group\">\n                      <label for=\"selectedInsulDescription\">Insul. Designation</label>\n                      <select\n                        id=\"selectedInsulDescription\"\n                        class=\"form-control\"\n                        [(ngModel)]=\"electricalItem.selectedInsulDescription\"\n                        name=\"selectedInsulDescription\"\n                      >\n                        <option\n                          *ngFor=\"let currentInsulDescription of electricalItem.insulDescription\" \n                          [ngValue]=\"currentInsulDescription\"\n                          [selected]=\"currentInsulDescription==electricalItem.selectedInsulDescription\"\n                        >\n                          {{currentInsulDescription}}\n                        </option>\n                      </select>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-12 col-sm-6 align-self-end border-eh-raiting\">\n                <div class=\"row d-flex justify-content-center inner-padding-eh-rating\">\n                  <label><strong>Equipment Hazloc Rating</strong></label>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-3\">\n                    <label><strong>{{electricalItem?.selectedHazlocClass}}</strong></label>\n                  </div>\n                  <div class=\"col-3\">\n                    <label><strong>{{electricalItem?.selectedHazlocZone}}</strong></label>\n                  </div>\n                  <div class=\"col-3\">\n                    <label><strong>{{electricalItem?.selectedHazlocGroup}}</strong></label>\n                  </div>\n                  <div class=\"col-3\">\n                    <label><strong>{{electricalItem?.selectedHazlocTemperature}}</strong></label>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-12 col-sm-6 align-self-end\" *ngIf=\"electricalItem\">\n                    <div class=\"form-group\">\n                      <label for=\"selectedHazlocClass\">Hazloc Class</label>\n                      <select\n                        id=\"selectedHazlocClass\"\n                        class=\"form-control selectForOpenModal\"\n                        [(ngModel)]=\"electricalItem.selectedHazlocClass\"\n  \n                        (ngModelChange)=\"optionChanged($event)\"\n                        name=\"selectedHazlocClass\"\n                      >\n                        <option\n                          *ngFor=\"let currentHazlocClass of electricalItem.hazlocClass\" \n                          [ngValue]=\"currentHazlocClass\"\n                          [selected]=\"currentHazlocClass==electricalItem.selectedHazlocClass\"\n                        >\n                          {{currentHazlocClass}}\n                        </option>\n                      </select>\n                    </div>\n                  </div>\n                  <div class=\"col-12 col-sm-6 align-self-end\" *ngIf=\"electricalItem\">\n                    <div class=\"form-group\">\n                      <label for=\"selectedHazlocZone\">Hazloc Zone</label>\n                      <div class=\"d-flex flex-row\">\n                        <select \n                          [disabled]=\"electricalItem.selectedHazlocClass == electricalItem.hazlocClass[0] || !electricalItem.selectedHazlocClass\"\n                          id=\"selectedHazlocZone\"\n                          class=\"form-control selectForOpenModal\"\n                          [(ngModel)]=\"electricalItem.selectedHazlocZone\"\n                          #selectedHazlocZone=\"ngModel\"\n                          name=\"selectedHazlocZone\"\n                        >\n                          <option\n                            *ngFor=\"let currentHazlocZone of electricalItem.hazlocZone\" \n                            [ngValue]=\"currentHazlocZone\"\n                            [selected]=\"currentHazlocZone==electricalItem.selectedHazlocZone\"\n                          >\n                            {{currentHazlocZone}}\n                          </option>\n                        </select>\n                        <button\n                          type=\"button\"\n                          class=\"btn btn-outline-secondary btnPlus fa fa-plus\"\n                          data-toggle=\"tooltip\"\n                          data-placement=\"top\"\n                          title=\"Add new item\"\n                          [disabled]=\"!electricalItem.selectedHazlocClass || electricalItem.selectedHazlocClass == 'General'\"\n                          (click)=\"hazlocZoneModal.showAddModal()\"\n                        ></button>\n                        <button\n                          type=\"button\"\n                          class=\"btn btn-outline-secondary btnMinus fa fa-minus\"\n                          data-toggle=\"tooltip\"\n                          data-placement=\"top\"\n                          title=\"Drop selected item\"\n                          (click)=\"hazlocZoneModal.showDropModal(dropElementFlag)\"\n                          [disabled]=\"electricalItem.hazlocZone.length == 0 || !electricalItem.selectedHazlocClass || electricalItem.selectedHazlocClass == 'General'\"\n                        ></button>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-12 col-sm-6 align-self-end\" *ngIf=\"electricalItem\">\n                    <div class=\"form-group\">\n                      <label for=\"selectedHazlocGroup\">Hazloc Group</label>\n                      <select [disabled]=\"electricalItem.selectedHazlocClass == electricalItem.hazlocClass[0] || !electricalItem.selectedHazlocClass\"\n                        id=\"selectedHazlocGroup\"\n                        class=\"form-control selectForOpenModal\"\n                        [(ngModel)]=\"electricalItem.selectedHazlocGroup\"\n                        #selectedHazlocGroup=\"ngModel\"\n                        name=\"selectedHazlocGroup\"\n                      >\n                        <option\n                          *ngFor=\"let currentHazlocGroup of electricalItem.hazlocGroup\" \n                          [ngValue]=\"currentHazlocGroup\"\n                          [selected]=\"currentHazlocGroup==electricalItem.selectedHazlocGroup\"\n                        >\n                          {{currentHazlocGroup}}\n                        </option>\n                      </select>\n                    </div>\n                  </div>\n                  <div class=\"col-12 col-sm-6 align-self-end\" *ngIf=\"electricalItem\">\n                    <div class=\"form-group\">\n                      <label for=\"selectedHazlocTemperature\">Hazloc Temperature</label>\n                      <div class=\"d-flex flex-row\">\n                        <select [disabled]=\"electricalItem.selectedHazlocClass == electricalItem.hazlocClass[0] || !electricalItem.selectedHazlocClass\"\n                          id=\"selectedHazlocTemperature\"\n                          class=\"form-control selectForOpenModal\"\n                          [(ngModel)]=\"electricalItem.selectedHazlocTemperature\"\n                          #selectedHazlocTemperature=\"ngModel\"\n                          name=\"selectedHazlocTemperature\"\n                        >\n                          <option\n                            *ngFor=\"let currentHazlocTemperature of electricalItem.hazlocTemperature\" \n                            [ngValue]=\"currentHazlocTemperature\"\n                            [selected]=\"currentHazlocTemperature==electricalItem.selectedHazlocTemperature\"\n                          >\n                            {{currentHazlocTemperature}}\n                          </option>\n                        </select>\n                        <button\n                          type=\"button\"\n                          class=\"btn btn-outline-secondary btnPlus fa fa-plus\"\n                          data-toggle=\"tooltip\"\n                          data-placement=\"top\"\n                          title=\"Add new item\"\n                          [disabled]=\"!electricalItem.selectedHazlocClass || electricalItem.selectedHazlocClass == 'General'\"\n                          (click)=\"hazlocTemperatureModal.showAddModal()\"\n                        ></button>\n                        <button\n                          type=\"button\"\n                          class=\"btn btn-outline-secondary btnMinus fa fa-minus\"\n                          data-toggle=\"tooltip\"\n                          data-placement=\"top\"\n                          title=\"Drop selected item\"\n                          (click)=\"hazlocTemperatureModal.showDropModal(dropElementFlag)\"\n                          [disabled]=\"electricalItem.hazlocTemperature.length == 0 || !electricalItem.selectedHazlocClass || electricalItem.selectedHazlocClass == 'General'\"\n                        ></button>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n      </div>\n      <div class=\"d-flex justify-content-end\">\n        <!--<div class=\"d-flex justify-content-end\">-->\n          <div class=\"mr-auto p-2\">\n            <a routerLink=\"/project/{{projectId}}/electricals/\" class=\"btn btn-primary\">Back</a>\n          </div>\n          <div class=\"p-2 form-group\">\n            <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!electricalForm.form.valid\">Update/Create</button>\n          </div>\n      <!--  </div>-->\n  <!--      <div class=\"form-group\">\n          <a routerLink=\"/project/{{projectId}}/electricals/\" class=\"btn btn-primary\">Back</a>\n          <button class=\"btn btn-danger\">Delete</button>\n          <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!electricalForm.form.valid\">Update/Create</button>\n        </div>\n      -->\n      </div>\n      <div class=\"ml-3 mr-3\" *ngIf=\"sizeWindow > 576; else werticalTable\">\n        <div class=\"row achievements-wrapper\">\n          <table class=\"table table-bordered\">\n          <thead>\n            <tr>\n              <th>Rev.</th>\n              <th>Equipment Tag</th>\n              <th>Equipment Description</th>\n              <th>Load Type</th>\n              <th>System Voltage</th>\n              <th>Power System</th>\n              <th>Nameplate Rating</th>\n              <th>Units</th>\n              <th>Total % PF</th>\n              <th>Total % EFF</th>\n              <th>Motor SF</th>\n              <th>Motor Code</th>\n              <th>Load Factor %</th>\n              <th>Load Duty</th>\n              <th>Total Connected FLA</th>\n              <th>Total Connected KW</th>\n              <th>Total Connected KVAR</th>\n              <th>Total Connected KVA</th>\n              <th>Total Demand FLA</th>\n              <th>Total Demand KW</th>\n              <th>Total Demand KVAR</th>\n              <th>Total Demand KVA</th>\n              <th>Total Scenario 1 Load Factor %</th>\n              <th>Total Scenario 1 FLA</th>\n              <th>Total Scenario 1 KW</th>\n              <th>Total Scenario 1 KVAR</th>\n              <th>Total Scenario 1 KVA</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td>{{electricalItem?.revision}}</td>                         <!-- Rev. -->\n              <td>{{electricalItem?.equipmentTag}}</td>                     <!-- Equipment Tag -->\n              <td>{{electricalItem?.selectedEquipmentDescription}}</td>     <!-- Equipment Description -->\n              <td>{{electricalItem?.selectedEquipmentType}}</td>            <!-- Load Type -->\n              <td>{{electricalItem?.selectedVoltage?.name}}</td>             <!-- System Voltage -->\n              <td>{{electricalItem?.selectedPowerSystem}}</td>              <!-- Power System -->\n              <td>{{electricalItem?.nameplateRating}}</td>                  <!-- Nameplate Rating -->\n              <td>{{electricalItem?.selectedUnits}}</td>                    <!-- Units -->\n              <td>{{electricalItem?.totalPF}}</td>                          <!-- Total % PF -->\n              <td>{{electricalItem?.totalEFF}}</td>                         <!-- Total % EFF -->\n              <td>{{electricalItem?.selectedMotorSF}}</td>                  <!-- Motor SF -->\n              <td>{{electricalItem?.selectedMotorCode}}</td>                <!-- Motor Code -->\n              <td>{{electricalItem?.loadFactor}}</td>                       <!-- Load Factor % -->\n              <td>{{electricalItem?.selectedLoadDuty}}</td>                 <!-- Load Duty -->\n              <td>{{electricalItem?.totalConectedFla}}</td>                 <!-- Total Connected FLA -->\n              <td>{{electricalItem?.totalConectedKW}}</td>                  <!-- Total Connected KW -->\n              <td>{{electricalItem?.totalConnectedKVAR}}</td>               <!-- Total Connected KVAR -->\n              <td>{{electricalItem?.totalConnectedKVA}}</td>                <!-- Total Connected KVA -->\n              <td>{{electricalItem?.totalDemandFLA}}</td>                   <!-- Total Demand FLA -->\n              <td>{{electricalItem?.totalDemandKW}}</td>                    <!-- Total Demand KW -->\n              <td>{{electricalItem?.totalDemandKVAR}}</td>                  <!-- Total Demand KVAR -->\n              <td>{{electricalItem?.totalDemandKVA}}</td>                    <!-- Total Demand KVA -->\n              <td>{{electricalItem?.scenarioFirstLoadFactor}}</td>          <!-- Total Scenario 1 Load Factor % -->\n              <td>{{electricalItem?.scenarioFirstFLA}}</td>                  <!-- Total Scenario 1 FLA -->\n              <td>{{electricalItem?.scenarioFirstKW}}</td>                   <!-- Total Scenario 1 KW -->\n              <td>{{electricalItem?.scenarioFirstKVAR}}</td>                 <!-- Total Scenario 1 KVAR -->\n              <td>{{electricalItem?.scenarioFirstKVA}}</td>                  <!-- Total Scenario 1 KVA -->\n            </tr>\n          </tbody>\n          </table>\n      </div>\n      </div>\n      <ng-template #werticalTable>\n        <div class=\"row\">\n          <table class=\"table table-bordered\">\n            <tr>\n              <td><strong>Rev.</strong></td>\n              <td>{{electricalItem?.revision}}</td>\n            </tr>\n            <tr>\n              <td><strong>Equipment Tag</strong></td>\n              <td>{{electricalItem?.equipmentTag}}</td>\n            </tr>\n            <tr>\n              <td><strong>Equipment Description</strong></td>\n              <td>{{electricalItem?.selectedEquipmentDescription}}</td>\n            </tr>\n            <tr>\n              <td><strong>Load Type</strong></td>\n              <td>{{electricalItem?.selectedEquipmentType}}</td>\n            </tr>\n            <tr>\n              <td><strong>System Voltage</strong></td>\n              <td>{{electricalItem?.selectedVoltage?.name}}</td>\n            </tr>\n            <tr>\n              <td><strong>Power System</strong></td>\n              <td>{{electricalItem?.selectedPowerSystem}}</td>\n            </tr>\n            <tr>\n              <td><strong>Nameplate Rating</strong></td>\n              <td>{{electricalItem?.nameplateRating}}</td>\n            </tr>\n            <tr>\n              <td><strong>Units</strong></td>\n              <td>{{electricalItem?.selectedUnits}}</td>\n            </tr>\n            <tr>\n              <td><strong>Total % PF</strong></td>\n              <td>{{electricalItem?.totalPF}}</td>\n            </tr>\n            <tr>\n              <td><strong>Total % EFF</strong></td>\n              <td>{{electricalItem?.totalEFF}}</td>\n            </tr>\n            <tr>\n              <td><strong>Motor SF</strong></td>\n              <td>{{electricalItem?.selectedMotorSF}}</td>\n            </tr>\n            <tr>\n              <td><strong>Motor Code</strong></td>\n              <td>{{electricalItem?.selectedMotorCode}}</td>\n            </tr>\n            <tr>\n              <td><strong>Load Factor %</strong></td>\n              <td>{{electricalItem?.loadFactor}}</td>\n            </tr>\n            <tr>\n              <td><strong>Load Duty</strong></td>\n              <td>{{electricalItem?.selectedLoadDuty}}</td>\n            </tr>\n            <tr>\n              <td><strong>Total Connected FLA</strong></td>\n              <td>{{electricalItem?.totalConectedFla}}</td>\n            </tr>\n            <tr>\n              <td><strong>Total Connected KW</strong></td>\n              <td>{{electricalItem?.totalConectedKW}}</td>\n            </tr>\n            <tr>\n              <td><strong>Total Connected KVAR</strong></td>\n              <td>{{electricalItem?.totalConnectedKVAR}}</td>\n            </tr>\n            <tr>\n              <td><strong>Total Connected KVA</strong></td>\n              <td>{{electricalItem?.totalConnectedKVA}}</td>\n            </tr>\n            <tr>\n              <td><strong>Total Demand FLA</strong></td>\n              <td>{{electricalItem?.totalDemandFLA}}</td>\n            </tr>\n            <tr>\n              <td><strong>Total Demand KW</strong></td>\n              <td>{{electricalItem?.totalDemandKW}}</td>\n            </tr>\n            <tr>\n              <td><strong>Total Demand KVAR</strong></td>\n              <td>{{electricalItem?.totalDemandKVAR}}</td>\n            </tr>\n            <tr>\n              <td><strong>Total Demand KVA</strong></td>\n              <td>{{electricalItem?.totalDemandKVA}}</td>\n            </tr>\n            <tr>\n              <td><strong>Total Scenario 1 Load Factor %</strong></td>\n              <td>{{electricalItem?.scenarioFirstLoadFactor}}</td>\n            </tr>\n            <tr>\n              <td><strong>Total Scenario 1 FLA</strong></td>\n              <td>{{electricalItem?.scenarioFirstFLA}}</td>\n            </tr>\n            <tr>\n              <td><strong>Total Scenario 1 KW</strong></td>\n              <td>{{electricalItem?.scenarioFirstKW}}</td>\n            </tr>\n            <tr>\n              <td><strong>Total Scenario 1 KVAR</strong></td>\n              <td>{{electricalItem?.scenarioFirstKVAR}}</td>\n            </tr>\n            <tr>\n              <td><strong>Total Scenario 1 KVA</strong></td>\n              <td>{{electricalItem?.scenarioFirstKVA}}</td>\n            </tr>\n          </table>\n        </div>\n      </ng-template>\n    </form>\n    <div class=\"row m-3\">\n      <button class=\"btn btn-danger\" (click)=\"deleteElectrical(electricalItem._id)\">Delete</button>\n    </div>\n    <!--START MODALS -->\n    <app-electricals-modal [dataValue]=\"electricalItem?.equipmentType\" [selectedValue]=\"electricalItem?.selectedEquipmentType\" [title]=\"equipmentType\" #equipmentTypeModal></app-electricals-modal>\n    <app-electricals-modal [dataValue]=\"electricalItem?.pidDrawing\" [selectedValue]=\"electricalItem?.selectedPidDrawing\" [title]=\"pidDraving\" #pidDrawingModal></app-electricals-modal>\n    <app-electricals-modal [dataValue]=\"electricalItem?.layoutDrawing\" [selectedValue]=\"electricalItem?.selectedLayoutDrawing\" [title]=\"layoutDrawing\" #layoutDrawingModal></app-electricals-modal>\n    <app-electricals-modal [dataValue]=\"electricalItem?.sldDraving\" [selectedValue]=\"electricalItem?.selectedSldDraving\" [title]=\"sldDraving\" #sldDravingModal></app-electricals-modal>\n    <app-electricals-modal [dataValue]=\"electricalItem?.locationArea\" [selectedValue]=\"electricalItem?.selectedLocationArea\" [title]=\"locationArea\" #locationAreaModal></app-electricals-modal>\n    <app-electricals-modal [dataValue]=\"productsAfterChangeEvent\" [selectedValue]=\"electricalItem?.selectedVoltage?.name\" [title]=\"voltage\" #voltageModal></app-electricals-modal>\n    <app-electricals-modal [dataValue]=\"electricalItem?.equipmentDescription\" [selectedValue]=\"electricalItem?.selectedEquipmentDescription\" [title]=\"equipmentDescription\" #equipmentDescriptionModal></app-electricals-modal>\n    <app-electricals-modal [dataValue]=\"electricalItem?.hazlocZone\" [selectedValue]=\"electricalItem?.selectedHazlocZone\" [title]=\"hazlocZone\" #hazlocZoneModal></app-electricals-modal>\n    <app-electricals-modal [dataValue]=\"electricalItem?.hazlocTemperature\" [selectedValue]=\"electricalItem?.selectedHazlocTemperature\" [title]=\"hazlocTemperature\" #hazlocTemperatureModal></app-electricals-modal>\n    <!-- END MODALS -->\n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/electrical-item/electrical-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElectricalItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_electrical_service__ = __webpack_require__("../../../../../src/app/services/electrical.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ElectricalItemComponent = (function () {
    function ElectricalItemComponent(router, route, electricalService, spinnerService) {
        this.router = router;
        this.route = route;
        this.electricalService = electricalService;
        this.spinnerService = spinnerService;
        this.productsAfterChangeEvent = [];
        //
        this.dropElementFlag = true;
        //
        this.equipmentType = "Equipment Type";
        this.pidDraving = "Pid Drawing";
        this.layoutDrawing = "Layout Drawing";
        this.sldDraving = "SLD Drawing";
        this.locationArea = "Location/Area";
        this.equipmentDescription = "Equipment Description";
        this.voltage = "Voltage";
        this.hazlocZone = "Hazloc Zone";
        this.hazlocTemperature = "Hazloc Temperature";
        //
        this.myDatePickerOptions = {
            // other options...
            dateFormat: 'dd.mm.yyyy',
        };
        this.projectId = this.route.snapshot.params['id'];
        this.electricalId = this.route.snapshot.params['electricalid'];
        this.sizeWindow = window.innerWidth;
    }
    //
    ElectricalItemComponent.prototype.onResize = function (event) {
        event.target.innerWidth;
        this.sizeWindow = event.target.innerWidth;
    };
    ElectricalItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinnerService.show();
        this.electricalService.getElectricalItem(this.projectId, this.electricalId).subscribe(function (electricals) {
            _this.electricalItem = electricals.electrical;
            _this.date = (new Date(_this.electricalItem.dateCreate)).toLocaleDateString();
            //console.log(tempDate.toLocaleDateString());
            _this.productsAfterChangeEvent = electricals.electrical.voltage.filter(function (p) { return p.powerSystemType == electricals.electrical.selectedPowerSystem; });
        }, function (err) {
            console.log(err);
            return false;
        });
        this.electricalService.getElectricals(this.projectId).subscribe(function (electricalList) {
            _this.project = electricalList;
            _this.parentList = [];
            for (var key in _this.project.electricals) {
                if (_this.project.electricals[key]._id == _this.electricalId) {
                }
                else {
                    _this.parentList.push(_this.project.electricals[key].equipmentTag);
                }
            }
        }, function (err) {
            console.log(err);
            return false;
        });
        this.spinnerService.hide();
    };
    ElectricalItemComponent.prototype.ngDoCheck = function () {
        if (!this.electricalItem) {
            return;
        }
        else {
            this.recalculationDependentValues();
        }
    };
    ElectricalItemComponent.prototype.electricalChildList = function () {
        if (this.electricalItem.selectedParentTag) {
            if (this.presetParentTag == this.electricalItem.selectedParentTag) {
                return;
            }
            else {
                for (var i = 0; i < this.project.electricals.length; ++i) {
                    var tempElectricalItem = this.project.electricals[i];
                    for (var j = 0; j < tempElectricalItem.chiildList.length; ++j) {
                        var childElement = tempElectricalItem.chiildList[j];
                        if (childElement._id == this.electricalItem._id) {
                            tempElectricalItem.chiildList.splice(j, 1);
                            this.electricalService.updateElectricalItem(this.projectId, tempElectricalItem._id, tempElectricalItem).subscribe(function (res) {
                                //console.log(res);
                            }, function (err) {
                                console.log(err);
                            });
                        }
                    }
                    if (tempElectricalItem.equipmentTag == this.electricalItem.selectedParentTag) {
                        this.project.electricals[i].chiildList.push(this.electricalItem);
                        var temp = this.project.electricals[i];
                        this.electricalService.updateElectricalItem(this.projectId, tempElectricalItem._id, temp).subscribe(function (res) {
                            //console.log(res);
                        }, function (err) {
                            console.log(err);
                        });
                        return;
                    }
                }
            }
        }
        else {
            return;
        }
    };
    ElectricalItemComponent.prototype.optionChanged = function ($event) {
        this.selectedHazlocZone.reset(null);
        this.selectedHazlocTemperature.reset(null);
        this.selectedHazlocGroup.reset(null);
    };
    ElectricalItemComponent.prototype.typeChanged = function () {
        var _this = this;
        if (!this.electricalItem) {
            return;
        }
        else {
            this.productsAfterChangeEvent = this.electricalItem.voltage.filter(function (p) { return p.powerSystemType == _this.electricalItem.selectedPowerSystem; });
        }
    };
    ElectricalItemComponent.prototype.saveElectrical = function (idElectrical, data) {
        var _this = this;
        this.spinnerService.show();
        this.selectedItemVoltage = data.selectedVoltage;
        data.selectedVoltage = {};
        data.selectedVoltage.name = this.selectedItemVoltage;
        data.voltage = this.changeVoltageArrayObject(this.productsAfterChangeEvent, this.electricalItem.voltage);
        data.selectedVoltage.powerSystemType = data.selectedPowerSystem;
        data.dateCreate = this.date;
        //console.log(data.dateCreate);
        data.pidDrawing = this.electricalItem.pidDrawing;
        data.layoutDrawing = this.electricalItem.layoutDrawing;
        data.sldDraving = this.electricalItem.sldDraving;
        data.equipmentType = this.electricalItem.equipmentType;
        data.locationArea = this.electricalItem.locationArea;
        data.equipmentDescription = this.electricalItem.equipmentDescription;
        data.hazlocZone = this.electricalItem.hazlocZone;
        data.hazlocTemperature = this.electricalItem.hazlocTemperature;
        //
        data.totalConectedFla = this.electricalItem.totalConectedFla || 0;
        data.totalConectedKW = this.electricalItem.totalConectedKW || 0;
        data.totalConnectedKVAR = this.electricalItem.totalConnectedKVAR || 0;
        data.totalConnectedKVA = this.electricalItem.totalConnectedKVA || 0;
        data.totalDemandFLA = this.electricalItem.totalDemandFLA || 0;
        data.totalDemandKW = this.electricalItem.totalDemandKW || 0;
        data.totalDemandKVAR = this.electricalItem.totalDemandKVAR || 0;
        data.totalDemandKVA = this.electricalItem.totalDemandKVA || 0;
        data.scenarioFirstFLA = this.electricalItem.scenarioFirstFLA || 0;
        data.scenarioFirstKW = this.electricalItem.scenarioFirstKW || 0;
        data.scenarioFirstKVAR = this.electricalItem.scenarioFirstKVAR || 0;
        data.scenarioFirstKVA = this.electricalItem.scenarioFirstKVA || 0;
        //
        this.electricalService.updateElectricalItem(this.projectId, idElectrical, data).subscribe(function (res) {
            _this.spinnerService.hide();
            //let id = res['_id'];
            _this.router.navigate(['project', _this.projectId, 'electricals']);
        }, function (err) {
            console.log(err);
        });
        this.electricalChildList();
    };
    ElectricalItemComponent.prototype.deleteElectrical = function (electricalItemId) {
        var _this = this;
        this.spinnerService.show();
        if (this.electricalItem.chiildList.length >= 1) {
            for (var i = 0; i < this.project.electricals.length; ++i) {
                var temporaryElectricalItem = this.project.electricals[i];
                if (temporaryElectricalItem.selectedParentTag === this.electricalItem.equipmentTag) {
                    temporaryElectricalItem.selectedParentTag = '';
                    //console.log(temporaryElectricalItem);
                    this.electricalService.updateElectricalItem(this.projectId, temporaryElectricalItem._id, temporaryElectricalItem).subscribe(function (res) {
                        //console.log(res);
                    }, function (err) {
                        console.log(err);
                    });
                }
            }
        }
        for (var j = 0; j < this.project.electricals.length; ++j) {
            var electricalItemElment = this.project.electricals[j];
            for (var k = 0; k < electricalItemElment.chiildList.length; ++k) {
                var temporalChildElement = electricalItemElment.chiildList[k];
                if (temporalChildElement._id === this.electricalItem._id) {
                    electricalItemElment.chiildList.splice(j, 1);
                    this.electricalService.updateElectricalItem(this.projectId, electricalItemElment._id, electricalItemElment).subscribe(function (res) {
                        //console.log(res);
                    }, function (err) {
                        console.log(err);
                    });
                }
                //console.log(electricalItemElment);
            }
        }
        ;
        this.electricalService.deleteElectricalItem(this.projectId, electricalItemId).subscribe(function (res) {
            _this.spinnerService.hide();
            _this.router.navigate(['project', _this.projectId, 'electricals']);
        }, function (err) {
            console.log(err);
        });
    };
    ElectricalItemComponent.prototype.changeVoltageArrayObject = function (productsAfterChange, projectData) {
        var arayObjectsAfterFilter = projectData.filter(function (p) { return p.powerSystemType != productsAfterChange[0].powerSystemType; });
        for (var i = 0; i < productsAfterChange.length; ++i) {
            var itemElement = productsAfterChange[i];
            arayObjectsAfterFilter.push(itemElement);
        }
        return arayObjectsAfterFilter;
    };
    //method for calculate dependencies
    ElectricalItemComponent.prototype.recalculationDependentValues = function () {
        this.electricalItem.totalConectedFla = 0;
        this.electricalItem.totalConectedKW = 0;
        this.electricalItem.totalConnectedKVA = 0;
        this.electricalItem.totalConnectedKVAR = 0;
        this.electricalItem.totalDemandFLA = 0;
        this.electricalItem.totalDemandKW = 0;
        this.electricalItem.totalDemandKVAR = 0;
        this.electricalItem.totalDemandKVA = 0;
        this.electricalItem.scenarioFirstFLA = 0;
        this.electricalItem.scenarioFirstKW = 0;
        this.electricalItem.scenarioFirstKVAR = 0;
        this.electricalItem.scenarioFirstKVA = 0;
        //
        var voltageValue = this.electricalItem.selectedVoltage.name;
        var toSimbol = voltageValue.search(" ");
        var voltageCalcValue = voltageValue.substring(0, toSimbol);
        var parsingValue = parseInt(voltageCalcValue);
        //
        if (this.electricalItem.selectedPowerSystem == this.electricalItem.powerSystem[0]) {
            if (!this.electricalItem.totalPF) {
                this.electricalItem.totalPF = 0;
            }
            if (!this.electricalItem.totalEFF) {
                this.electricalItem.totalEFF = 0;
            }
            switch (this.electricalItem.selectedUnits) {
                case this.electricalItem.units[0]:// A check+2
                    this.electricalItem.totalConectedFla = parseFloat(this.electricalItem.nameplateRating);
                    break;
                case this.electricalItem.units[1]:// HP check+2
                    if (this.electricalItem.selectedVoltage.name && this.electricalItem.totalPF != 0 && this.electricalItem.totalEFF != 0) {
                        var temporalTotalConectedFla = (parseFloat(this.electricalItem.nameplateRating) * 746) / (parsingValue * 1.73 * this.electricalItem.totalPF * this.electricalItem.totalEFF) * 10000;
                        this.electricalItem.totalConectedFla = Math.ceil(temporalTotalConectedFla * 100) / 100;
                    }
                    else {
                        this.electricalItem.totalConectedFla = 0;
                    }
                    break;
                case this.electricalItem.units[2]:// KW check+2
                    if (this.electricalItem.selectedVoltage.name && this.electricalItem.totalPF != 0) {
                        var temporalTotalConectedFla = (parseFloat(this.electricalItem.nameplateRating) * 1000) / (parsingValue * 1.73 * this.electricalItem.totalPF / 100);
                        this.electricalItem.totalConectedFla = Math.ceil(temporalTotalConectedFla * 100) / 100;
                    }
                    else {
                        this.electricalItem.totalConectedFla = 0;
                    }
                    break;
                case this.electricalItem.units[3]:// KVA check+2
                    if (this.electricalItem.selectedVoltage.name) {
                        var temporalTotalConectedFla = (parseFloat(this.electricalItem.nameplateRating) * 1000) / (parsingValue * 1.73);
                        this.electricalItem.totalConectedFla = Math.ceil(temporalTotalConectedFla * 100) / 100;
                    }
                    break;
                default:
                    break;
            }
            var tempTotalConnectedKVA = this.electricalItem.totalConectedFla * parsingValue * 1.73 / 1000;
            this.electricalItem.totalConnectedKVA = Math.ceil(tempTotalConnectedKVA * 100) / 100;
            var tempTotalConectedKW = this.electricalItem.totalConnectedKVA * this.electricalItem.totalPF / 100;
            this.electricalItem.totalConectedKW = Math.ceil(tempTotalConectedKW * 100) / 100;
            if (this.electricalItem.totalConectedKW == 0) {
                this.electricalItem.totalConnectedKVAR = 0;
            }
            else {
                var tempTotalConnectedKVAR = Math.sqrt(Math.pow(this.electricalItem.totalConnectedKVA, 2) - Math.pow(this.electricalItem.totalConectedKW, 2));
                this.electricalItem.totalConnectedKVAR = Math.ceil(tempTotalConnectedKVAR * 100) / 100;
            }
        }
        else if (this.electricalItem.selectedPowerSystem == this.electricalItem.powerSystem[1]) {
            if (!this.electricalItem.totalPF) {
                this.electricalItem.totalPF = 0;
            }
            if (!this.electricalItem.totalEFF) {
                this.electricalItem.totalEFF = 0;
            }
            switch (this.electricalItem.selectedUnits) {
                case this.electricalItem.units[0]://A check+2
                    this.electricalItem.totalConectedFla = parseFloat(this.electricalItem.nameplateRating);
                    break;
                case this.electricalItem.units[1]:// HP check+2
                    if (this.electricalItem.selectedVoltage.name && this.electricalItem.totalPF != 0 && this.electricalItem.totalEFF != 0) {
                        var temporalTotalConectedFla = (parseFloat(this.electricalItem.nameplateRating) * 746) / (parsingValue * this.electricalItem.totalPF * this.electricalItem.totalEFF) * 10000;
                        this.electricalItem.totalConectedFla = Math.ceil(temporalTotalConectedFla * 100) / 100;
                    }
                    else {
                        this.electricalItem.totalConectedFla = 0;
                    }
                    break;
                case this.electricalItem.units[2]:// KW check+2
                    if (this.electricalItem.selectedVoltage.name && this.electricalItem.totalPF != 0) {
                        var temporalTotalConectedFla = (parseFloat(this.electricalItem.nameplateRating) * 1000) / (parsingValue * this.electricalItem.totalPF / 100);
                        this.electricalItem.totalConectedFla = Math.ceil(temporalTotalConectedFla * 100) / 100;
                    }
                    else {
                        this.electricalItem.totalConectedFla = 0;
                    }
                    break;
                case this.electricalItem.units[3]:// KVA check+2
                    if (this.electricalItem.selectedVoltage.name) {
                        var temporalTotalConectedFla = (parseFloat(this.electricalItem.nameplateRating) * 1000) / (parsingValue);
                        this.electricalItem.totalConectedFla = Math.ceil(temporalTotalConectedFla * 100) / 100;
                    }
                    break;
                default:
                    break;
            }
            var tempTotalConnectedKVA = this.electricalItem.totalConectedFla * parsingValue / 1000;
            this.electricalItem.totalConnectedKVA = Math.ceil(tempTotalConnectedKVA * 100) / 100;
            var tempTotalConectedKW = this.electricalItem.totalConnectedKVA * this.electricalItem.totalPF / 100;
            this.electricalItem.totalConectedKW = Math.ceil(tempTotalConectedKW * 100) / 100;
            var tempTotalConnectedKVAR = Math.sqrt(Math.pow(this.electricalItem.totalConnectedKVA, 2) - Math.pow(this.electricalItem.totalConectedKW, 2));
            this.electricalItem.totalConnectedKVAR = Math.ceil(tempTotalConnectedKVAR * 100) / 100;
        }
        else if (this.electricalItem.selectedPowerSystem == this.electricalItem.powerSystem[2]) {
            if (!this.electricalItem.totalEFF) {
                this.electricalItem.totalEFF = 0;
            }
            switch (this.electricalItem.selectedUnits) {
                case this.electricalItem.units[0]://A check+2
                    this.electricalItem.totalConectedFla = parseFloat(this.electricalItem.nameplateRating);
                    this.electricalItem.totalConnectedKVA = 0;
                    this.electricalItem.totalConnectedKVAR = 0;
                    break;
                case this.electricalItem.units[1]:// HP check+2
                    if (this.electricalItem.selectedVoltage.name && this.electricalItem.totalEFF != 0) {
                        var temporalTotalConectedFla = (parseFloat(this.electricalItem.nameplateRating) * 746) / (parsingValue * this.electricalItem.totalEFF) * 100;
                        this.electricalItem.totalConectedFla = Math.ceil(temporalTotalConectedFla * 100) / 100;
                    }
                    else {
                        this.electricalItem.totalConectedFla = 0;
                    }
                    this.electricalItem.totalConnectedKVA = 0;
                    this.electricalItem.totalConnectedKVAR = 0;
                    break;
                case this.electricalItem.units[2]:// KW check+2
                    if (this.electricalItem.selectedVoltage.name) {
                        var temporalTotalConectedFla = (parseFloat(this.electricalItem.nameplateRating) * 1000) / parsingValue;
                        this.electricalItem.totalConectedFla = Math.ceil(temporalTotalConectedFla * 100) / 100;
                    }
                    else {
                        this.electricalItem.totalConectedFla = 0;
                    }
                    this.electricalItem.totalConnectedKVA = 0;
                    this.electricalItem.totalConnectedKVAR = 0;
                    break;
                default:
                    this.electricalItem.totalConectedFla = 0;
                    this.electricalItem.totalConectedKW = 0;
                    this.electricalItem.totalConnectedKVA = 0;
                    this.electricalItem.totalConnectedKVAR = 0;
                    break;
            }
            var tempTotalConectedKW = this.electricalItem.totalConectedFla * parsingValue / 1000;
            this.electricalItem.totalConectedKW = Math.ceil(tempTotalConectedKW * 100) / 100;
        }
        var temporalTotalDemandFLA = (this.electricalItem.totalConectedFla * this.electricalItem.loadFactor) / 100;
        this.electricalItem.totalDemandFLA = Math.ceil(temporalTotalDemandFLA * 100) / 100;
        var temporalTotalDemandKW = (this.electricalItem.totalConectedKW * this.electricalItem.loadFactor) / 100;
        this.electricalItem.totalDemandKW = Math.ceil(temporalTotalDemandKW * 100) / 100;
        var temporalTotalDemandKVAR = (this.electricalItem.totalConnectedKVAR * this.electricalItem.loadFactor) / 100;
        this.electricalItem.totalDemandKVAR = Math.ceil(temporalTotalDemandKVAR * 100) / 100;
        var temporalTotalDemandKVA = (this.electricalItem.totalConnectedKVA * this.electricalItem.loadFactor) / 100;
        this.electricalItem.totalDemandKVA = Math.ceil(temporalTotalDemandKVA * 100) / 100;
        var scenarioFirstLoadFactor = parseFloat(this.electricalItem.scenarioFirstLoadFactor);
        var temporalScenarioFirstFLA = (this.electricalItem.totalConectedFla * scenarioFirstLoadFactor) / 100;
        this.electricalItem.scenarioFirstFLA = Math.ceil(temporalScenarioFirstFLA * 100) / 100;
        var temporalScenarioFirstKW = (this.electricalItem.totalConectedKW * scenarioFirstLoadFactor) / 100;
        this.electricalItem.scenarioFirstKW = Math.ceil(temporalScenarioFirstKW * 100) / 100;
        var temporalScenarioFirstKVAR = (this.electricalItem.totalConnectedKVAR * scenarioFirstLoadFactor) / 100;
        this.electricalItem.scenarioFirstKVAR = Math.ceil(temporalScenarioFirstKVAR * 100) / 100;
        var temporalScenarioFirstKVA = (this.electricalItem.totalConnectedKVA * scenarioFirstLoadFactor) / 100;
        this.electricalItem.scenarioFirstKVA = Math.ceil(temporalScenarioFirstKVA * 100) / 100;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('selectedHazlocZone'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* NgModel */])
    ], ElectricalItemComponent.prototype, "selectedHazlocZone", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('selectedHazlocTemperature'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* NgModel */])
    ], ElectricalItemComponent.prototype, "selectedHazlocTemperature", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('selectedHazlocGroup'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* NgModel */])
    ], ElectricalItemComponent.prototype, "selectedHazlocGroup", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ElectricalItemComponent.prototype, "onResize", null);
    ElectricalItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-electrical-item',
            template: __webpack_require__("../../../../../src/app/components/electrical-item/electrical-item.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/electrical-item/electrical-item.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__services_electrical_service__["a" /* ElectricalService */],
            __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__["Ng4LoadingSpinnerService"]])
    ], ElectricalItemComponent);
    return ElectricalItemComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/electrical-list/electrical-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@font-face {\r\n  font-family: \"Roboto-Light\";\r\n  src: url(" + __webpack_require__("../../../../../src/assets/fonts/Roboto-Light.ttf") + ");\r\n  font-style: normal;\r\n  font-weight: normal;\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Roboto-Bolt\";\r\n  src: url(" + __webpack_require__("../../../../../src/assets/fonts/Roboto-Bold.ttf") + ");\r\n  font-weight: bold;\r\n}\r\n.table-text-style{\r\n  font-family: Roboto-Bolt!important;\r\n  color: #4c4c4c!important;\r\n}\r\n\r\nthead th {\r\n  font-size: 0.6rem;\r\n}\r\ntbody tr td  {\r\n  font-size: 0.6rem;\r\n}\r\n.achievements-wrapper {\r\n  height: auto; \r\n  overflow: auto;\r\n}\r\n\r\n.disable-decoration {\r\n  text-decoration: none!important;\r\n}\r\n\r\n.table-cursor {\r\n  cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/electrical-list/electrical-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"pt-2 text-center\">\n    <h1>Electricals List\n      <a class=\"btn btn-primary\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Add new electrical\" (click)=\"saveElectrical()\">\n        <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n      </a>\n    </h1>\n  </div>\n  <div class=\"row achievements-wrapper ml-3 mr-3\">\n    <table class=\"table table-sm table-bordered table-hover table-text-style\">\n      <thead>\n        <tr>\n          <th></th>\n          <th>Rev.</th>\n          <th>Equipment Tag</th>\n          <th>Equipment Description</th>\n          <th>Load Type</th>\n          <th>System Voltage</th>\n          <th>Power System</th>\n          <th>Nameplate Rating</th>\n          <th>Units</th>\n          <th>Total % PF</th>\n          <th>Total % EFF</th>\n          <th>Motor Sf</th>\n          <th>Motor Code</th>\n          <th>Load Duty</th>\n          <th>Total Connected FLA</th>\n          <th>Total Connected KW</th>\n          <th>Total Connected KVAR</th>\n          <th>Total Connected KVA</th>\n          <th>Load Factor %</th>\n          <th>Total Demand FLA</th>\n          <th>Total Demand KW</th>\n          <th>Total Demand KVAR</th>\n          <th>Total Demand KVA</th>\n          <th>Total Scenario 1 LoadFactor %</th>\n          <th>Total Scenario 1 FLA</th>\n          <th>Total Scenario 1 KW</th>\n          <th>Total Scenario 1 KVAR</th>\n          <th>Total Scenario1 KVA</th>\n        </tr>\n      </thead>\n      <tbody>\n        <ng-container *ngFor=\"let electrical of electricals?.electricals\">\n          <tr *ngIf=\"!electrical.selectedParentTag\">\n            <td></td>\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electrical._id}}\"><a class=\"table-cursor\">{{electrical.revision}}</a></td>                 <!-- Rev -->\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electrical._id}}\"><a class=\"table-cursor\">{{electrical?.equipmentTag}}</a></td>            <!-- Equipment Tag -->\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electrical._id}}\"><a class=\"table-cursor\"></a></td>                                        <!-- Equipment Description -->\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electrical._id}}\"><a class=\"table-cursor\">{{electrical?.selectedEquipmentType}}</a></td>   <!-- Load Type -->\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electrical._id}}\"><a class=\"table-cursor\">{{electrical?.selectedVoltage.name}}</a></td>    <!-- System Voltage -->\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electrical._id}}\"><a class=\"table-cursor\">{{electrical?.selectedPowerSystem}}</a></td>     <!-- Power System -->\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electrical._id}}\"><a class=\"table-cursor\">{{electrical?.nameplateRating}}</a></td>         <!-- Nameplate Rating -->\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electrical._id}}\"><a class=\"table-cursor\">{{electrical?.selectedUnits}}</a></td>           <!-- Units -->\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electrical._id}}\"><a class=\"table-cursor\">{{electrical?.totalPF}}</a></td>                 <!-- Total % PF -->\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electrical._id}}\"><a class=\"table-cursor\">{{electrical?.totalEFF}}</a></td>                <!-- Total % EFF -->\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electrical._id}}\"><a class=\"table-cursor\">{{electrical?.selectedMotorSF}}</a></td>         <!-- Motor Sf -->\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electrical._id}}\"><a class=\"table-cursor\">{{electrical?.selectedMotorCode}}</a></td>       <!-- Motor Code -->\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electrical._id}}\"><a class=\"table-cursor\">{{electrical?.selectedLoadDuty}}</a></td>        <!-- Load Duty -->\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electrical._id}}\"><a class=\"table-cursor\">{{electrical?.totalConectedFla}}</a></td>        <!-- Total Connected FLA -->\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electrical._id}}\"><a class=\"table-cursor\">{{electrical?.totalConectedKW}}</a></td>         <!-- Total Connected KW -->\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electrical._id}}\"><a class=\"table-cursor\">{{electrical?.totalConnectedKVAR}}</a></td>      <!-- Total Connected KVAR -->\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electrical._id}}\"><a class=\"table-cursor\">{{electrical?.totalConnectedKVA}}</a></td>       <!-- Total Connected KVA -->\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electrical._id}}\"><a class=\"table-cursor\">{{electrical?.loadFactor}}</a></td>              <!-- Load Factor % -->\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electrical._id}}\"><a class=\"table-cursor\">{{electrical?.totalDemandFLA}}</a></td>          <!-- Total Demand FLA -->\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electrical._id}}\"><a class=\"table-cursor\">{{electrical?.totalDemandKW}}</a></td>           <!-- Total Demand KW -->\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electrical._id}}\"><a class=\"table-cursor\">{{electrical?.totalDemandKVAR}}</a></td>         <!-- Total Demand KVAR -->\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electrical._id}}\"><a class=\"table-cursor\">{{electrical?.totalDemandKVA}}</a></td>          <!-- Total Demand KVA -->\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electrical._id}}\"><a class=\"table-cursor\">{{electrical?.scenarioFirstLoadFactor}}</a></td> <!-- Total Scenario 1 LoadFactor % -->\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electrical._id}}\"><a class=\"table-cursor\">{{electrical?.scenarioFirstFLA}}</a></td>        <!-- Total Scenario 1 FLA -->\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electrical._id}}\"><a class=\"table-cursor\">{{electrical?.scenarioFirstKW}}</a></td>         <!-- Total Scenario 1 KW -->\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electrical._id}}\"><a class=\"table-cursor\">{{electrical?.scenarioFirstKVAR}}</a></td>       <!-- Total Scenario 1 KVAR -->\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electrical._id}}\"><a class=\"table-cursor\">{{electrical?.scenarioFirstKVA}}</a></td>        <!-- Total Scenario1 KVA -->\n          </tr>\n          <tr class=\"childs\" bgcolor=\"#F5F5F5\" *ngFor=\"let electricalChilds of electrical.chiildList\">\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electricalChilds._id}}\"><a class=\"table-cursor\"></a></td>\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electricalChilds._id}}\"><a class=\"table-cursor\">{{electricalChilds.revision}}</a></td>               <!-- Rev -->\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electricalChilds._id}}\"><a class=\"table-cursor\">{{electricalChilds?.equipmentTag}}</a></td>          <!-- Equipment Tag -->\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electricalChilds._id}}\"><a class=\"table-cursor\"></a></td>                                            <!-- Equipment Description -->\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electricalChilds._id}}\"><a class=\"table-cursor\">{{electricalChilds.selectedEquipmentType}}</a></td>  <!-- Load Type -->\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electricalChilds._id}}\"><a class=\"table-cursor\">{{electricalChilds.selectedVoltage.name}}</a></td>   <!-- System Voltage -->\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electricalChilds._id}}\"><a class=\"table-cursor\">{{electricalChilds.selectedPowerSystem}}</a></td>    <!-- Power System -->\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electricalChilds._id}}\"><a class=\"table-cursor\">{{electricalChilds.nameplateRating}}</a></td>        <!-- Nameplate Rating -->\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electricalChilds._id}}\"><a class=\"table-cursor\">{{electricalChilds.selectedUnits}}</a></td>          <!-- Units -->\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electricalChilds._id}}\"><a class=\"table-cursor\">{{electricalChilds.totalPF}}</a></td>                <!-- Total % PF -->\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electricalChilds._id}}\"><a class=\"table-cursor\">{{electricalChilds.totalEFF}}</a></td>               <!-- Total % EFF -->\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electricalChilds._id}}\"><a class=\"table-cursor\">{{electricalChilds.selectedMotorSF}}</a></td>        <!-- Motor Sf -->\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electricalChilds._id}}\"><a class=\"table-cursor\">{{electricalChilds.selectedMotorCode}}</a></td>      <!-- Motor Code -->\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electricalChilds._id}}\"><a class=\"table-cursor\">{{electricalChilds.selectedLoadDuty}}</a></td>       <!-- Load Duty -->\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electricalChilds._id}}\"><a class=\"table-cursor\">{{electricalChilds.totalConectedFla}}</a></td>       <!-- Total Connected FLA -->\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electricalChilds._id}}\"><a class=\"table-cursor\">{{electricalChilds.totalConectedKW}}</a></td>        <!-- Total Connected KW -->\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electricalChilds._id}}\"><a class=\"table-cursor\">{{electricalChilds.totalConnectedKVAR}}</a></td>     <!-- Total Connected KVAR -->\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electricalChilds._id}}\"><a class=\"table-cursor\">{{electricalChilds.totalConnectedKVA}}</a></td>      <!-- Total Connected KVA -->\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electricalChilds._id}}\"><a class=\"table-cursor\">{{electricalChilds.loadFactor}}</a></td>             <!-- Load Factor % -->\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electricalChilds._id}}\"><a class=\"table-cursor\">{{electricalChilds.totalDemandFLA}}</a></td>         <!-- Total Demand FLA -->\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electricalChilds._id}}\"><a class=\"table-cursor\">{{electricalChilds.totalDemandKW}}</a></td>          <!-- Total Demand KW -->\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electricalChilds._id}}\"><a class=\"table-cursor\">{{electricalChilds.totalDemandKVAR}}</a></td>        <!-- Total Demand KVAR -->\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electricalChilds._id}}\"><a class=\"table-cursor\">{{electricalChilds.totalDemandKVA}}</a></td>         <!-- Total Demand KVA -->\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electricalChilds._id}}\"><a class=\"table-cursor\">{{electricalChilds.scenarioFirstLoadFactor}}</a></td><!-- Total Scenario 1 LoadFactor % -->\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electricalChilds._id}}\"><a class=\"table-cursor\">{{electricalChilds.scenarioFirstFLA}}</a></td>       <!-- Total Scenario 1 FLA -->\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electricalChilds._id}}\"><a class=\"table-cursor\">{{electricalChilds.scenarioFirstKW}}</a></td>        <!-- Total Scenario 1 KW -->\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electricalChilds._id}}\"><a class=\"table-cursor\">{{electricalChilds.scenarioFirstKVAR}}</a></td>      <!-- Total Scenario 1 KVAR -->\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electricalChilds._id}}\"><a class=\"table-cursor\">{{electricalChilds.scenarioFirstKVA}}</a></td>       <!-- Total Scenario1 KVA -->\n          </tr>\n        </ng-container>\n      </tbody>\n    </table>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/electrical-list/electrical-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElectricalListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_electrical_service__ = __webpack_require__("../../../../../src/app/services/electrical.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ElectricalListComponent = (function () {
    function ElectricalListComponent(electricalService, router, route, spinnerService) {
        this.electricalService = electricalService;
        this.router = router;
        this.route = route;
        this.spinnerService = spinnerService;
        this.projectId = this.route.snapshot.params['id'];
    }
    ElectricalListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinnerService.show();
        this.electricalService.getElectricals(this.projectId).subscribe(function (electricalList) {
            _this.electricals = electricalList;
            _this.spinnerService.hide();
            _this.recalculationParentValeu(electricalList);
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ElectricalListComponent.prototype.saveElectrical = function () {
        var _this = this;
        this.spinnerService.show();
        this.electrical = {};
        this.electrical.length = 0;
        this.electricalService.createElectrical(this.projectId, this.electrical).subscribe(function (res) {
            var id = res['_id'];
            var responseId = res[res.length - 1]['_id'];
            var routeToElectricalItem = '/project/' + _this.route.snapshot.params['id'] + '/electricals/' + responseId;
            _this.spinnerService.hide();
            _this.router.navigate([routeToElectricalItem]);
        }, function (err) {
            console.log(err);
        });
    };
    ElectricalListComponent.prototype.recalculationParentValeu = function (projects) {
        for (var i = 0; i < projects.electricals.length; i++) {
            var electricalItem = projects.electricals[i];
            if (electricalItem.chiildList.length > 0) {
                electricalItem.totalPF = 0;
                electricalItem.totalEFF = 0;
                electricalItem.loadFactor = 0;
                electricalItem.scenarioFirstLoadFactor = 0;
                electricalItem.totalConnectedKVAR = 0;
                electricalItem.totalConnectedKVA = 0;
                electricalItem.totalDemandFLA = 0;
                electricalItem.totalDemandKW = 0;
                electricalItem.totalDemandKVAR = 0;
                electricalItem.totalDemandKVA = 0;
                electricalItem.scenarioFirstFLA = 0;
                electricalItem.scenarioFirstKW = 0;
                electricalItem.scenarioFirstKVAR = 0;
                electricalItem.scenarioFirstKVA = 0;
                for (var j = 0; j < electricalItem.chiildList.length; ++j) {
                    var childElement = electricalItem.chiildList[j];
                    electricalItem.totalConectedFla += childElement.totalConectedFla;
                    electricalItem.totalConectedKW += childElement.totalConectedKW;
                    electricalItem.totalConnectedKVAR += childElement.totalConnectedKVAR;
                    electricalItem.totalConnectedKVA += childElement.totalConnectedKVA;
                    //
                    electricalItem.totalPF += childElement.totalPF;
                    electricalItem.totalEFF += childElement.totalEFF;
                    electricalItem.loadFactor += childElement.loadFactor;
                    //
                    electricalItem.totalDemandFLA += childElement.totalDemandFLA;
                    electricalItem.totalDemandKW += childElement.totalDemandKW;
                    electricalItem.totalDemandKVAR += childElement.totalDemandKVAR;
                    electricalItem.totalDemandKVA += childElement.totalDemandKVA;
                    //
                    electricalItem.scenarioFirstLoadFactor += childElement.scenarioFirstLoadFactor;
                    //
                    electricalItem.scenarioFirstFLA += childElement.scenarioFirstFLA;
                    electricalItem.scenarioFirstKW += childElement.scenarioFirstKW;
                    electricalItem.scenarioFirstKVAR += childElement.scenarioFirstKVAR;
                    electricalItem.scenarioFirstKVA += childElement.scenarioFirstKVA;
                }
                electricalItem.totalConectedFla = Math.ceil(electricalItem.totalConectedFla * 100) / 100;
                electricalItem.totalConectedKW = Math.ceil(electricalItem.totalConectedKW * 100) / 100;
                electricalItem.totalConnectedKVAR = Math.ceil(electricalItem.totalConnectedKVAR * 100) / 100;
                electricalItem.totalConnectedKVA = Math.ceil(electricalItem.totalConnectedKVA * 100) / 100;
                electricalItem.totalDemandKW = Math.ceil(electricalItem.totalDemandKW * 100) / 100;
                electricalItem.totalDemandFLA = Math.ceil(electricalItem.totalDemandFLA * 100) / 100;
                electricalItem.totalDemandKVAR = Math.ceil(electricalItem.totalDemandKVAR * 100) / 100;
                electricalItem.totalDemandKVA = Math.ceil(electricalItem.totalDemandKVA * 100) / 100;
                electricalItem.scenarioFirstFLA = Math.ceil(electricalItem.scenarioFirstFLA * 100) / 100;
                electricalItem.scenarioFirstKW = Math.ceil(electricalItem.scenarioFirstKW * 100) / 100;
                electricalItem.scenarioFirstKVAR = Math.ceil(electricalItem.scenarioFirstKVAR * 100) / 100;
                electricalItem.scenarioFirstKVA = Math.ceil(electricalItem.scenarioFirstKVA * 100) / 100;
                //console.log(electricalItem.totalDemandFLA);
                electricalItem.totalPF = Math.ceil((electricalItem.totalPF / electricalItem.chiildList.length) * 100) / 100;
                electricalItem.totalEFF = Math.ceil((electricalItem.totalEFF / electricalItem.chiildList.length) * 100) / 100;
                electricalItem.loadFactor = Math.ceil((electricalItem.loadFactor / electricalItem.chiildList.length) * 100) / 100;
                //electricalItem.selectedMotorSF
                electricalItem.scenarioFirstLoadFactor = Math.ceil((electricalItem.scenarioFirstLoadFactor / electricalItem.chiildList.length) * 100) / 100;
            }
        }
    };
    ElectricalListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-electrical-list',
            template: __webpack_require__("../../../../../src/app/components/electrical-list/electrical-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/electrical-list/electrical-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_electrical_service__["a" /* ElectricalService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__["Ng4LoadingSpinnerService"]])
    ], ElectricalListComponent);
    return ElectricalListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@font-face {\r\n  font-family: \"Roboto-Light\";\r\n  src: url(" + __webpack_require__("../../../../../src/assets/fonts/Roboto-Light.ttf") + ");\r\n  font-style: normal;\r\n  font-weight: normal;\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Roboto-Bolt\";\r\n  src: url(" + __webpack_require__("../../../../../src/assets/fonts/Roboto-Bold.ttf") + ");\r\n  font-weight: bold;\r\n}\r\n\r\n@media (max-width: 575px) {\r\n  span.home-page-text {\r\n    font-size: 13px;\r\n  }\r\n  .carousel-caption-header-text{\r\n    font-size: 12px;\r\n    line-height: 10px;\r\n  }\r\n  .custom-carousel-caption hr {\r\n    height: 2px;\r\n    width: 30px;\r\n  }\r\n  .carousel-indicators {\r\n    bottom: -15px;\r\n  }\r\n  li.active {\r\n    height: 5px;\r\n    width: 5px;\r\n  }\r\n  li {\r\n    height: 5px;\r\n    width: 5px;\r\n  }\r\n}\r\n\r\n@media (min-width: 576px) and (max-width: 767px) {\r\n  span.home-page-text {\r\n    font-size: 13px;\r\n  }\r\n  .carousel-caption-header-text{\r\n    font-size: 22px;\r\n    line-height: 20px;\r\n  }\r\n  .custom-carousel-caption hr {\r\n    height: 3px;\r\n    width: 40px;\r\n  }\r\n  .carousel-indicators {\r\n    bottom: -10px;\r\n  }\r\n  li.active {\r\n    height: 10px;\r\n    width: 10px;\r\n  }\r\n  li {\r\n    height: 10px;\r\n    width: 10px;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) and (max-width: 991px) {\r\n  .carousel-caption-header-text{\r\n    font-size: 34px;\r\n  }\r\n  .custom-carousel-caption hr {\r\n    height: 3px;\r\n    width: 60px;\r\n  }\r\n  .carousel-indicators {\r\n    bottom: -10px;\r\n  }\r\n}\r\n\r\n@media (min-width: 992px) and (max-width: 1199px) {\r\n  .carousel-caption-header-text{\r\n    font-size: 44px;\r\n  }\r\n  .custom-carousel-caption hr {\r\n    height: 4px;\r\n    width: 80px;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) and (max-width: 1199px) {\r\n  span.home-page-text {\r\n    font-size: 14px;\r\n  }\r\n  li.active {\r\n    height: 10px;\r\n    width: 10px;\r\n  }\r\n  li {\r\n    height: 10px;\r\n    width: 10px;\r\n  }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n  span.home-page-text {\r\n    font-size: 20px;\r\n  }\r\n  .carousel-caption-header-text{\r\n    font-size: 54px;\r\n  }\r\n\r\n  .custom-carousel-caption hr {\r\n    height: 5px;\r\n    width: 100px;\r\n  }\r\n  li.active {\r\n    height: 10px;\r\n    width: 10px;\r\n  }\r\n  li {\r\n    height: 10px;\r\n    width: 10px;\r\n  }\r\n}\r\n\r\nspan.home-page-text {\r\n  font-family: Roboto-Light;\r\n  color: #4c4c4c;\r\n  text-align: justify;\r\n}\r\n\r\n\r\n.carousel-item.active,\r\n.carousel-item-next,\r\n.carousel-item-prev {\r\n  display: block;\r\n}\r\n\r\n.home-page-black-line{\r\n  margin-top: 25px; \r\n  background-color: black; \r\n  width: 97%; \r\n  height: 2px; \r\n  position: absolute;\r\n}\r\n\r\nspan.affiliations-text{\r\n  background-color: white; \r\n  padding-left: 5px; \r\n  padding-right: 5px; \r\n  z-index: 2;\r\n}\r\n\r\n.custom-carousel-caption{\r\n  right: 60%!important;\r\n  left: 10%!important;\r\n  background-color: rgba(0, 0, 0, 0.7);\r\n  height: 100%;\r\n  bottom: 0px!important;\r\n}\r\n\r\n.carousel-caption-header-text{\r\n  color: rgba(255, 255, 255, 1);\r\n  font-weight: bold;\r\n  font-family: Roboto-Bolt;\r\n}\r\n\r\n.custom-carousel-caption hr {\r\n  background: #ffb248;\r\n  text-align: end;\r\n  border: 0;\r\n}\r\n\r\n.carousel-text-container {\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.description-carousel-caption{\r\n  text-align: justify;\r\n  font-size: 1vw;\r\n}\r\nli.active {\r\n  background-color: #FFB248!important;\r\n  border-radius: 5px 5px 5px 5px;\r\n}\r\n\r\nli {\r\n  margin: 5px!important;\r\n  background-color: white!important;\r\n  border-radius: 5px 5px 5px 5px;\r\n}\r\n\r\n.carousel-indicators-position {\r\n  right: 50%!important;\r\n}\r\n\r\n.template-footer {\r\n  display:block;\r\n}\r\n\r\n.custom-footer {\r\n  height:210px;\r\n  background-color:#2f3032\r\n}\r\n\r\na.footer_href {\r\n  color: #ffffff;\r\n  text-decoration: none;\r\n}\r\n\r\nspan.footer-text {\r\n  color:white;\r\n}\r\n\r\n.footer-row {\r\n  margin-right:0px!important;\r\n  margin-left:0px!important\r\n}\r\n.h-100{\r\n  height: 100%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n    <ol class=\"carousel-indicators carousel-indicators-position\">\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n    </ol>\n    <div class=\"carousel-inner\">\n      <div class=\"carousel-item active\">\n        <picture>\n          <source media=\"(min-width: 1200px)\" [srcset]=\"engenieeringOptimization_1920\">\n          <source media=\"(min-width: 992px)\" [srcset]=\"engenieeringOptimization_1200\">\n          <source media=\"(min-width: 768px)\" [srcset]=\"engenieeringOptimization_992\">\n          <source media=\"(min-width: 576px)\" [srcset]=\"engenieeringOptimization_768\">\n          <source [srcset]=\"engenieeringOptimization_576\">\n          <img class=\"d-block img-fluid\" [src]=\"engenieeringOptimization_1920\" alt=\"Engenieering Optimization\" sr-only=\"Engenieering Optimization\">\n        </picture>\n        <div class=\"carousel-caption custom-carousel-caption\">\n          <div class=\"d-flex align-items-start flex-column carousel-text-container\">\n            <div class=\"mb-auto mt-auto\">\n              <p class=\"carousel-caption-header-text pl-4\"><strong>Engineering</strong></p>\n              <p class=\"carousel-caption-header-text pl-4\"><strong>Optimization</strong></p>\n            </div>\n            <hr class=\"ml-4 mb-auto mt-auto\">\n            <p class=\"pl-4 pr-2 mb-auto mt-auto description-carousel-caption\">Through our AMP X CORE technology and practical project delivery methods that enable thoughtful engineering, we help customers improve their bottom lines.</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"carousel-item\">\n        <picture>\n          <source media=\"(min-width: 1200px)\" [srcset]=\"trusted_Experts_1920\">\n          <source media=\"(min-width: 992px)\" [srcset]=\"trusted_Experts_1200\">\n          <source media=\"(min-width: 768px)\" [srcset]=\"trusted_Experts_992\">\n          <source media=\"(min-width: 576px)\" [srcset]=\"trusted_Experts_768\">\n          <source [srcset]=\"trusted_Experts_576\">\n          <img class=\"d-block img-fluid\" [src]=\"trusted_Experts_1920\" alt=\"Lifecycle Solutions\" sr-only=\"Lifecycle Solutions\">\n        </picture>\n        <div class=\"carousel-caption custom-carousel-caption\">\n            <div class=\"d-flex align-items-start flex-column carousel-text-container\">\n              <div class=\"mb-auto mt-auto\">\n                <p class=\"carousel-caption-header-text pl-4\"><strong>Lifecycle</strong></p>\n                <p class=\"carousel-caption-header-text pl-4\"><strong>Solutions</strong></p>\n              </div>\n              <hr class=\"ml-4 mb-auto mt-auto\">\n              <p class=\"pl-4 pr-2 mb-auto mt-auto description-carousel-caption\">Our comprehensive design packages and data solutions support other project stakeholders, operations, future projects and long-term asset management.</p>\n            </div>\n        </div>\n      </div>\n      <div class=\"carousel-item\">\n        <picture>\n          <source media=\"(min-width: 1200px)\" [srcset]=\"lifecycle_Solutionos_1920\">\n          <source media=\"(min-width: 992px)\" [srcset]=\"lifecycle_Solutionos_1200\">\n          <source media=\"(min-width: 768px)\" [srcset]=\"lifecycle_Solutionos_992\">\n          <source media=\"(min-width: 576px)\" [srcset]=\"lifecycle_Solutionos_768\">\n          <source [srcset]=\"lifecycle_Solutionos_576\">\n          <img class=\"d-block img-fluid\" [src]=\"lifecycle_Solutionos_1920\" alt=\"Trusted Experts\" sr-only=\"Trusted Experts\">\n        </picture>\n        <div class=\"carousel-caption custom-carousel-caption\">\n          <div class=\"d-flex align-items-start flex-column carousel-text-container\">\n            <div class=\"mb-auto mt-auto\">\n              <p class=\"carousel-caption-header-text pl-4\"><strong>Trusted</strong></p>\n              <p class=\"carousel-caption-header-text pl-4\"><strong>Experts</strong></p>\n            </div>\n            <hr class=\"ml-4 mb-auto mt-auto\">\n            <p class=\"pl-4 pr-2 mb-auto mt-auto description-carousel-caption\">Our foundation includes subject matter expertise in engineering, regulations and codes, construction and inspection.</p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n  </div>\n  <div class=\"container\">\n    <div class=\"d-flex mt-3\">\n      <span class=\"home-page-text\">\n        <strong>AMP X Consulting Inc.</strong> (AMP X) is a company that’s <strong>20 years</strong> in the making. With multiple decades of experience and \n        lessons-learned acquired from the completion of more than 100 electrical, instrumentation and controls (E, I and C) \n        projects, we have developed a solution we feel can truly help our customers deliver their projects better. Through our \n        AMP X CORE technology and practical project delivery methods that enable thoughtful engineering, we help customers \n        improve their bottom lines.\n      </span>\n    </div>\n    <div class=\"d-flex mt-3\">\n      <span class=\"home-page-text\">\n        Using our AMP X CORE technology, paired with subject matter expertise that spans engineering, inspection and hands-on construction, \n        we go beyond end-to-end E, I and C services. The AMP X CORE technology is a powerful combination that includes a proprietary database \n        and design tools that are easy to use, inexpensive for our customers and promote the highest safety and quality.\n      </span>\n    </div>\n    <div class=\"d-flex mt-3\">\n      <span class=\"home-page-text\">\n      An important feature of our project delivery model is that we are able to leave customers with not only a complete set of deliverables, \n      but also a comprehensive data package to support other project stakeholders, operations, future projects and long-term asset management… \n      <strong>For no additional cost.</strong>\n      </span>\n    </div>\n    <div class=\"d-flex mt-3\">\n      <span class=\"home-page-text\">\n        Customers who can benefit from our solutions include end-users such as oil & gas companies, as well as equipment vendors, other engineering service \n        providers and construction contractors.\n      </span>\n    </div>\n    <div class=\"d-flex mt-3 mb-3\">\n      <span class=\"home-page-text\">\n        Please refer to the <a class=\"text-warning\" routerLink=\"/about_us\">‘About Us’</a> page for more information, or <a class=\"text-warning\" routerLink=\"/contact_us\">contact us</a> directly.\n      </span>\n    </div>\n    <div class=\"d-flex justify-content-center position-relative\">\n      <div class=\"home-page-black-line\"></div>\n      <span class=\"h1 affiliations-text\">Affiliations</span>\n    </div>\n    <div class=\"d-flex justify-content-between align-items-center mt-3 mb-3\">\n      <a class=\"nounderline ml-1 mr-1\" href=\"http://www.apega.ca\">\n        <img class=\"d-block img-fluid\" [src]=\"apegaImg\" alt=\"apega\" sr-only=\"Association of Professional Engineers and Geoscientists of Alberta\">\n      </a>\n      <a class=\"nounderline ml-1 mr-1\" href=\"http://www.aset.ab.ca\">\n        <img class=\"d-block img-fluid\" [src]=\"asetImg\" alt=\"aset\" sr-only=\"The Association of Science & Engineering Technology Professionals of Alberta\">\n      </a>\n      <a class=\"nounderline ml-1 mr-1\" href=\"http://www.safetycodes.ab.ca\">\n        <img class=\"d-block img-fluid\" [src]=\"ccImg\" alt=\"sc\" sr-only=\"Safety Codes\">\n      </a>\n      <a class=\"nounderline ml-1 mr-1\" href=\"http://www.ecaa.ab.ca\">\n        <img class=\"d-block img-fluid\" [src]=\"ecaaImg\" alt=\"ecaa\" sr-only=\"Electrical Contractors Association of Alberta\">\n      </a>\n    </div>\n  </div>\n  <footer *ngIf=\"sizeWindow > 992; else werticalFooter\">\n    <div class=\"custom-footer\">\n      <div class=\"d-flex align-items-center justify-content-around h-100\">\n        <div class=\"p-1 bd-highlight\">\n          <div class=\"row align-items-center\">\n            <div class=\"col-4\">\n              <img class=\"d-block\" [src]=\"phoneImg\" alt=\"phone:\" sr-only=\"phone number\">\n            </div>\n            <div class=\"col-8\">\n              <span> <a href=\"tel:1.403.863.0893\" class=\"footer_href\">1.403.863.0893</a></span>\n            </div>\n          </div>\n        </div>\n        <div class=\"p-1 bd-highlight\">\n          <div class=\"row align-items-center\">\n            <div class=\"col-4\">\n              <img class=\"d-block\" [src]=\"emailImg\" alt=\"email address\" sr-only=\"email\">\n            </div>\n            <div class=\"col-8\">\n              <span><a class=\"footer_href\" href=\"mailto:info@ampx.ca\">info@ampx.ca</a></span>\n            </div>\n          </div>\n        </div>\n        <div class=\"p-1 bd-highlight\">\n          <div class=\"row align-items-center\">\n            <div class=\"col-3\">\n              <img class=\"d-block\" [src]=\"linkedInImg\" alt=\"linkedIn\" sr-only=\"linked in account\">\n            </div>\n            <div class=\"col-9\">\n              <span class=\"footer-text\">Follow us on <a href=\"https://www.linkedin.com/company/amp-x-consulting-inc.?trk=top_nav_home\" target=\"_blank\" class=\"footer_href\"><strong>LinkedIn</strong></a></span>\n            </div>\n          </div>\n        </div>\n        <div class=\"p-1 bd-highlight\">\n            <span class=\"footer-text\">AMP X Consulting Inc. &copy; {{year}} | All Rights Reserved</span>\n        </div>\n      </div>\n    </div>\n  </footer>\n  <ng-template class=\"template-footer\" #werticalFooter>\n    <div class=\"custom-footer\">\n      <div class=\"d-flex flex-column\">\n        <div class=\"row mt-2 footer-row\">\n          <div class=\"col-6\">\n            <div class=\"float-right\">\n              <img class=\"d-block\" [src]=\"phoneImg\" alt=\"phone:\" sr-only=\"phone number\">\n            </div>\n          </div>\n          <div class=\"col-6 mr-a\">\n            <span> <a href=\"tel:1.403.863.0893\" class=\"footer_href\" >1.403.863.0893</a></span>\n          </div>\n        </div>\n        <div class=\"row mt-2 footer-row\">\n          <div class=\"col-6\">\n            <div class=\"float-right\">\n              <img class=\"d-block\" [src]=\"emailImg\" alt=\"email address\" sr-only=\"email\">\n            </div>\n          </div>\n          <div class=\"col-6\">\n            <span><a class=\"footer_href\" href=\"mailto:info@ampx.ca\" >info@ampx.ca</a></span>\n          </div>\n        </div>\n        <div class=\"row mt-2 footer-row\">\n          <div class=\"col-6\">\n            <div class=\"float-right\">\n              <img class=\"d-block\" [src]=\"linkedInImg\" alt=\"linkedIn\" sr-only=\"linked in account\">\n            </div>\n          </div>\n          <div class=\"col-6\">\n            <span class=\"footer-text\">Follow us on <a href=\"https://www.linkedin.com/company/amp-x-consulting-inc.?trk=top_nav_home\" target=\"_blank\" class=\"footer_href\"><strong>LinkedIn</strong></a></span>\n          </div>\n        </div>\n        <div class=\"row mt-2 footer-row\">\n          <div class=\"col-12\">\n            <div class=\"d-flex justify-content-center\">\n              <span class=\"footer-text text-center\">AMP X Consulting Inc. &copy; {{year}} | All Rights Reserved</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </ng-template>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
        this.sizeWindow = window.innerWidth;
    }
    HomeComponent.prototype.onResize = function (event) {
        event.target.innerWidth;
        this.sizeWindow = event.target.innerWidth;
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.today = new Date();
        this.year = this.today.getFullYear();
        //carousel images 1920
        this.engenieeringOptimization_1920 = 'assets/img/1920/home/Engenieering_Optimization_1920.jpg';
        this.trusted_Experts_1920 = 'assets/img/1920/home/Trusted_Experts_1920.jpg';
        this.lifecycle_Solutionos_1920 = 'assets/img/1920/home/Lifecycle_Solutionos_1920.jpg';
        //carousel images 1200
        this.engenieeringOptimization_1200 = 'assets/img/1200/home/Engenieering_Optimization.jpg';
        this.trusted_Experts_1200 = 'assets/img/1200/home/Trusted_Experts.jpg';
        this.lifecycle_Solutionos_1200 = 'assets/img/1200/home/Lifecycle_Solutionos.jpg';
        //carousel images 992
        this.engenieeringOptimization_992 = 'assets/img/992/home/Engenieering_Optimization.jpg';
        this.trusted_Experts_992 = 'assets/img/992/home/Trusted_Experts.jpg';
        this.lifecycle_Solutionos_992 = 'assets/img/992/home/Lifecycle_Solutionos.jpg';
        //carousel images 768
        this.engenieeringOptimization_768 = 'assets/img/768/home/Engenieering_Optimization.jpg';
        this.trusted_Experts_768 = 'assets/img/768/home/Trusted_Experts.jpg';
        this.lifecycle_Solutionos_768 = 'assets/img/768/home/Lifecycle_Solutionos.jpg';
        //carousel images 576
        this.engenieeringOptimization_576 = 'assets/img/576/home/Engenieering_Optimization.jpg';
        this.trusted_Experts_576 = 'assets/img/576/home/Trusted_Experts.jpg';
        this.lifecycle_Solutionos_576 = 'assets/img/576/home/Lifecycle_Solutionos.jpg';
        this.apegaImg = 'assets/img/1920/home/LogoLinks/apega.png';
        this.asetImg = 'assets/img/1920/home/LogoLinks/aset.png';
        this.ccImg = 'assets/img/1920/home/LogoLinks/cc.png';
        this.ecaaImg = 'assets/img/1920/home/LogoLinks/ecaa.png';
        this.phoneImg = 'assets/img/1920/headerAndFooter/phone_1920.png';
        this.emailImg = 'assets/img/1920/headerAndFooter/email_1920.png';
        this.linkedInImg = 'assets/img/1920/headerAndFooter/linkedin_1920.png';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], HomeComponent.prototype, "onResize", null);
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Login</h2>\n<form (submit)=\"onLoginSubmit()\">\n  <div class=\"form-group\">\n    <label>Company name</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"companyName\" name=\"companyName\">\n  </div>\n  <div class=\"form-group\">\n    <label>Email</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\">\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\"  name=\"password\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            companyName: this.companyName,
            email: this.email,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show('You are now logged in.', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['project']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['login']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/modals/cabels-modals/cable-distance-modal/cable-distance-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal {\r\n    background: rgba(0,0,0,0.6);\r\n    padding-top: 3rem;\r\n  }\r\n  \r\n  .modal-dialog {\r\n    max-width: 540px!important;\r\n  }\r\n  input::-webkit-input-placeholder {\r\n    color: gray;\r\n    font-style: italic;\r\n  }\r\n  input:-ms-input-placeholder {\r\n    color: gray;\r\n    font-style: italic;\r\n  }\r\n  input::placeholder {\r\n    color: gray;\r\n    font-style: italic;\r\n  }\r\n\r\n  .modal-padding {\r\n    padding-top: 10rem;\r\n  }\r\n  \r\n  input:focus::-webkit-input-placeholder { color:transparent; }\r\n  input:focus:-moz-placeholder { color:transparent; } /* FF 4-18 */\r\n  input:focus::-moz-placeholder { color:transparent; } /* FF 19+ */\r\n  input:focus:-ms-input-placeholder { color:transparent; } /* IE 10+ */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/modals/cabels-modals/cable-distance-modal/cable-distance-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-padding\"\n(click)=\"onContainerClicked($event)\" class=\"modal fade\" tabindex=\"-1\" [ngClass]=\"{'in': visibleAnimate}\"\n[ngStyle]=\"{'display': visible ? 'block' : 'none', 'opacity': visibleAnimate ? 1 : 0}\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"myModalLabel\">{{title}}</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"close()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"row\">\n          <div class=\"col-2\">\n            <div class=\"form-group\">\n              <label>Tag</label>\n            </div>\n          </div>\n          <div class=\"col-3\">\n            <div class=\"form-group\">\n              <label>Northing</label>\n            </div>\n          </div>\n          <div class=\"col-3\">\n            <div class=\"form-group\">\n              <label>Easting</label>\n            </div>\n          </div>\n          <div class=\"col-3\">\n            <div class=\"form-group\">\n              <label>Elevation</label>\n            </div>  \n          </div>\n          <div class=\"col-1\">\n\n          </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-2\">\n              <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control\" disabled/>\n              </div>\n            </div>\n            <div class=\"col-3\">\n              <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control\" disabled/>\n              </div>\n            </div>\n            <div class=\"col-3\">\n              <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control\" disabled/>\n              </div>\n            </div>\n            <div class=\"col-3\">\n              <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control\" disabled/>\n              </div>  \n            </div>\n            <div class=\"col-1\">\n  \n            </div>\n          </div>\n          <div class=\"row\">\n              <div class=\"col-2\">\n                <div class=\"form-group\">\n                  <input type=\"text\" class=\"form-control\" disabled/>\n                </div>\n              </div>\n              <div class=\"col-3\">\n                <div class=\"form-group\">\n                  <input type=\"text\" class=\"form-control\" disabled/>\n                </div>\n              </div>\n              <div class=\"col-3\">\n                <div class=\"form-group\">\n                  <input type=\"text\" class=\"form-control\" disabled/>\n                </div>\n              </div>\n              <div class=\"col-3\">\n                <div class=\"form-group\">\n                  <input type=\"text\" class=\"form-control\" disabled/>\n                </div>  \n              </div>\n              <div class=\"col-1\">\n    \n              </div>\n            </div>\n      </div>\n      <div class=\"modal-footer\">\n        <!--\n        <div class=\"row\">\n          <div class=\"d-flex justify-content-end\">\n            <div class=\"form-group pr-1\">\n              <button *ngIf=\"modalFlag\" class=\"btn btn-danger\" (click)=\"deleteItem(selectedValue)\">Delete</button>\n              <button *ngIf=\"!modalFlag\" class=\"btn btn-success\" (click)=\"addItem(itenElement)\" [disabled]=\"!itenElement\">Add</button>\n            </div>\n            <div class=\"pl-1 pr-2\">\n              <button class=\"btn btn-primary\" (click)=\"close()\">Close</button>\n            </div>\n          </div>\n        </div>\n      -->\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/modals/cabels-modals/cable-distance-modal/cable-distance-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CableDistanceModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CableDistanceModalComponent = (function () {
    function CableDistanceModalComponent() {
        this.visible = false;
        this.visibleAnimate = false;
    }
    CableDistanceModalComponent.prototype.showModal = function () {
        var _this = this;
        this.visible = true;
        setTimeout(function () { return _this.visibleAnimate = true; }, 100);
    };
    CableDistanceModalComponent.prototype.showDropModal = function (flag) {
        var _this = this;
        this.modalFlag = flag;
        this.visible = true;
        setTimeout(function () { return _this.visibleAnimate = true; }, 100);
    };
    CableDistanceModalComponent.prototype.hide = function () {
        var _this = this;
        this.visibleAnimate = false;
        setTimeout(function () { return _this.visible = false; }, 300);
        this.modalFlag = false;
    };
    CableDistanceModalComponent.prototype.onContainerClicked = function (event) {
        if (event.target.classList.contains('modal')) {
            this.hide();
        }
    };
    /*
      public addItem(itenEl: string){
        if(typeof this.dataValue[0] == 'string' || typeof this.dataValue[0] == 'undefined' ){
          this.dataValue.push(itenEl);
          this.visible = false;
          setTimeout(() => this.visible = false, 300);
          this.itenElement = null;
        } else {
          let elementArrayObject = {};
          elementArrayObject['name'] = itenEl;
          elementArrayObject['powerSystemType'] = this.dataValue[0].powerSystemType;
          this.dataValue.push(elementArrayObject);
          this.visible = false;
          setTimeout(() => this.visible = false, 300);
          this.itenElement = null;
        }
      }
    
      public deleteItem(itenEl: string){
        let elementIndex: number;
        for(let i=0; i<this.dataValue.length; ++i){
          let arrayElement = this.dataValue[i];
          if(itenEl === arrayElement){
            elementIndex = i;
          }
        }
        this.dataValue.splice(elementIndex, 1);
        this.visible = false;
        this.modalFlag = false;
      }
    */
    CableDistanceModalComponent.prototype.close = function () {
        var _this = this;
        this.visible = false;
        setTimeout(function () { return _this.visible = false; }, 300);
        this.modalFlag = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CableDistanceModalComponent.prototype, "firstElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CableDistanceModalComponent.prototype, "secondElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CableDistanceModalComponent.prototype, "selectedValue", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CableDistanceModalComponent.prototype, "title", void 0);
    CableDistanceModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-cable-distance-modal',
            template: __webpack_require__("../../../../../src/app/components/modals/cabels-modals/cable-distance-modal/cable-distance-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/modals/cabels-modals/cable-distance-modal/cable-distance-modal.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CableDistanceModalComponent);
    return CableDistanceModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/modals/electricals-modal/electricals-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal {\r\n    background: rgba(0,0,0,0.6);\r\n    padding-top: 3rem;\r\n  }\r\n  \r\n  .modal-dialog {\r\n    max-width: 350px!important;\r\n  }\r\n  input::-webkit-input-placeholder {\r\n    color: gray;\r\n    font-style: italic;\r\n  }\r\n  input:-ms-input-placeholder {\r\n    color: gray;\r\n    font-style: italic;\r\n  }\r\n  input::placeholder {\r\n    color: gray;\r\n    font-style: italic;\r\n  }\r\n  .modal-padding {\r\n    padding-top: 10rem;\r\n  }\r\n  \r\n  input:focus::-webkit-input-placeholder { color:transparent; }\r\n  input:focus:-moz-placeholder { color:transparent; } /* FF 4-18 */\r\n  input:focus::-moz-placeholder { color:transparent; } /* FF 19+ */\r\n  input:focus:-ms-input-placeholder { color:transparent; } /* IE 10+ */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/modals/electricals-modal/electricals-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-padding\"\n(click)=\"onContainerClicked($event)\" class=\"modal fade\" tabindex=\"-1\" [ngClass]=\"{'in': visibleAnimate}\"\n[ngStyle]=\"{'display': visible ? 'block' : 'none', 'opacity': visibleAnimate ? 1 : 0}\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"myModalLabel\">{{title}}</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"close()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div *ngIf=\"modalFlag\">\n          <div>\n            <p>Are you sure you want to delete <strong>{{selectedValue}}</strong> item</p>\n          </div>\n        </div>\n        <div *ngIf=\"!modalFlag\" class=\"form-inline\">\n          <label class=\"pr-2\"><strong>Item name:</strong></label>\n          <input \n            class=\"form-control\" \n            name=\"itenElement\" \n            [(ngModel)]=\"itenElement\" \n            placeholder='Input new name value'\n            onfocus=\"this.placeholder = ''\"\n            onblur=\"this.placeholder = 'Input new name value'\"\n          />\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <div class=\"row\">\n          <div class=\"d-flex justify-content-end\">\n            <div class=\"form-group pr-1\">\n              <button *ngIf=\"modalFlag\" class=\"btn btn-danger\" (click)=\"deleteItem(selectedValue)\">Delete</button>\n              <button *ngIf=\"!modalFlag\" class=\"btn btn-success\" (click)=\"addItem(itenElement)\" [disabled]=\"!itenElement\">Add</button>\n            </div>\n            <div class=\"pl-1 pr-2\">\n              <button class=\"btn btn-primary\" (click)=\"close()\">Close</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/modals/electricals-modal/electricals-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElectricalsModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ElectricalsModalComponent = (function () {
    function ElectricalsModalComponent() {
        this.visible = false;
        this.visibleAnimate = false;
    }
    ElectricalsModalComponent.prototype.showAddModal = function () {
        var _this = this;
        this.visible = true;
        setTimeout(function () { return _this.visibleAnimate = true; }, 100);
    };
    ElectricalsModalComponent.prototype.showDropModal = function (flag) {
        var _this = this;
        this.modalFlag = flag;
        this.visible = true;
        setTimeout(function () { return _this.visibleAnimate = true; }, 100);
    };
    ElectricalsModalComponent.prototype.hide = function () {
        var _this = this;
        this.visibleAnimate = false;
        setTimeout(function () { return _this.visible = false; }, 300);
        this.modalFlag = false;
    };
    ElectricalsModalComponent.prototype.onContainerClicked = function (event) {
        if (event.target.classList.contains('modal')) {
            this.hide();
        }
    };
    ElectricalsModalComponent.prototype.addItem = function (itenEl) {
        var _this = this;
        if (typeof this.dataValue[0] == 'string' || typeof this.dataValue[0] == 'undefined') {
            this.dataValue.push(itenEl);
            this.visible = false;
            setTimeout(function () { return _this.visible = false; }, 300);
            this.itenElement = null;
        }
        else {
            var elementArrayObject = {};
            elementArrayObject['name'] = itenEl;
            elementArrayObject['powerSystemType'] = this.dataValue[0].powerSystemType;
            this.dataValue.push(elementArrayObject);
            this.visible = false;
            setTimeout(function () { return _this.visible = false; }, 300);
            this.itenElement = null;
        }
    };
    ElectricalsModalComponent.prototype.deleteItem = function (itenEl) {
        var elementIndex;
        for (var i = 0; i < this.dataValue.length; ++i) {
            var arrayElement = this.dataValue[i];
            if (itenEl === arrayElement) {
                elementIndex = i;
            }
        }
        this.dataValue.splice(elementIndex, 1);
        this.visible = false;
        this.modalFlag = false;
    };
    ElectricalsModalComponent.prototype.close = function () {
        var _this = this;
        this.visible = false;
        setTimeout(function () { return _this.visible = false; }, 300);
        this.modalFlag = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ElectricalsModalComponent.prototype, "dataValue", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ElectricalsModalComponent.prototype, "selectedValue", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ElectricalsModalComponent.prototype, "title", void 0);
    ElectricalsModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-electricals-modal',
            template: __webpack_require__("../../../../../src/app/components/modals/electricals-modal/electricals-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/modals/electricals-modal/electricals-modal.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ElectricalsModalComponent);
    return ElectricalsModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/modals/projects-modal/projects-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal {\r\n    background: rgba(0,0,0,0.6);\r\n    padding-top: 3rem;\r\n  }\r\n  \r\n  .modal-dialog {\r\n    max-width: 350px!important;\r\n  }\r\n  input::-webkit-input-placeholder {\r\n    color: gray;\r\n    font-style: italic;\r\n  }\r\n  input:-ms-input-placeholder {\r\n    color: gray;\r\n    font-style: italic;\r\n  }\r\n  input::placeholder {\r\n    color: gray;\r\n    font-style: italic;\r\n  }\r\n  .modal-padding {\r\n    padding-top: 10rem;\r\n  }\r\n  \r\n  input:focus::-webkit-input-placeholder { color:transparent; }\r\n  input:focus:-moz-placeholder { color:transparent; } /* FF 4-18 */\r\n  input:focus::-moz-placeholder { color:transparent; } /* FF 19+ */\r\n  input:focus:-ms-input-placeholder { color:transparent; } /* IE 10+ */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/modals/projects-modal/projects-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-padding\"\n(click)=\"onContainerClicked($event)\" class=\"modal fade\" tabindex=\"-1\" [ngClass]=\"{'in': visibleAnimate}\"\n[ngStyle]=\"{'display': visible ? 'block' : 'none', 'opacity': visibleAnimate ? 1 : 0}\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"myModalLabel\">{{title}}</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"close()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div *ngIf=\"dropFlag == true\">\n          <div>\n            <p>Are you sure you want to delete <strong>{{project.title}}</strong> project</p>\n          </div>\n        </div>\n        <div class=\"form-inline\" *ngIf=\"changeFlag == true\">\n            <label class=\"pr-2\"><strong>Project name: </strong></label>\n            <input \n              class=\"form-control\" \n              name=\"itemElement\" \n              [(ngModel)]=\"project.title\" \n            />\n        </div>\n        <div class=\"form-inline\" *ngIf=\"createFlag == true\">\n          <label class=\"pr-2\"><strong>Project name: </strong></label>\n          <input \n            class=\"form-control\" \n            name=\"itemElement\" \n            [(ngModel)]=\"itemElement\" \n            placeholder='Input new project name'\n            onfocus=\"this.placeholder = ''\"\n            onblur=\"this.placeholder = 'Input new project name'\"  \n          />\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <div class=\"row\">\n          <div class=\"d-flex justify-content-end\">\n            <div class=\"form-group pr-1\">\n              <button *ngIf=\"dropFlag == true\" class=\"btn btn-danger\" (click)=\"deleteItem(project)\">Delete</button>\n              <button *ngIf=\"changeFlag == true\" class=\"btn btn-success\" (click)=\"changeItem(project, project.title)\">Change</button>\n              <button *ngIf=\"createFlag == true\" class=\"btn btn-success\" (click)=\"addItem(itemElement)\" [disabled]=\"!itemElement\">Add</button>\n            </div>\n            <div class=\"pl-1 pr-2\">\n              <button class=\"btn btn-primary\" (click)=\"close()\">Close</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/modals/projects-modal/projects-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectsModalComponent = (function () {
    function ProjectsModalComponent(projectService) {
        this.projectService = projectService;
        this.visible = false;
        this.dropFlag = false;
        this.changeFlag = false;
        this.createFlag = false;
        this.visibleAnimate = false;
    }
    ProjectsModalComponent.prototype.showAddModal = function (flag) {
        var _this = this;
        this.createFlag = flag;
        this.visible = true;
        setTimeout(function () { return _this.visibleAnimate = true; }, 100);
    };
    ProjectsModalComponent.prototype.showDropModal = function (flag, itemProject) {
        var _this = this;
        this.dropFlag = flag;
        this.project = itemProject;
        this.visible = true;
        setTimeout(function () { return _this.visibleAnimate = true; }, 100);
    };
    ProjectsModalComponent.prototype.showChangeProjectModal = function (chengeProject, itemProject) {
        var _this = this;
        this.changeFlag = chengeProject;
        this.project = itemProject;
        this.visible = true;
        setTimeout(function () { return _this.visibleAnimate = true; }, 100);
    };
    ProjectsModalComponent.prototype.hide = function () {
        var _this = this;
        this.visibleAnimate = false;
        setTimeout(function () { return _this.visible = false; }, 300);
        this.dropFlag = false;
        this.changeFlag = false;
        this.createFlag = false;
    };
    ProjectsModalComponent.prototype.onContainerClicked = function (event) {
        if (event.target.classList.contains('modal')) {
            this.hide();
        }
    };
    ProjectsModalComponent.prototype.addItem = function (itenEl) {
        var _this = this;
        var project = {};
        project['title'] = itenEl;
        this.projectService.postProject(project).subscribe(function (data) {
            if (data.success) {
                _this.dataValue.push(project);
            }
            else {
            }
        });
        this.visible = false;
        this.dropFlag = false;
        this.changeFlag = false;
        this.createFlag = false;
        setTimeout(function () { return _this.visible = false; }, 300);
        this.itemElement = null;
    };
    ProjectsModalComponent.prototype.changeItem = function (project, projectTitle) {
        var _this = this;
        var prj = project;
        var prjName = projectTitle;
        for (var key in this.dataValue) {
            if (this.dataValue[key]._id === project._id) {
                this.dataValue[key].title = prjName;
                //console.log(this.dataValue[key].title);
                this.projectService.updateProject(project._id, this.dataValue[key]).subscribe(function (data) {
                    if (data.success) {
                        console.log(true);
                    }
                    else {
                        console.log(false);
                    }
                });
            }
        }
        this.visible = false;
        this.dropFlag = false;
        this.changeFlag = false;
        this.createFlag = false;
        setTimeout(function () { return _this.visible = false; }, 300);
        this.itemElement = null;
    };
    ProjectsModalComponent.prototype.deleteItem = function (itenEl) {
        var _this = this;
        var elementIndex = itenEl._id;
        this.projectService.deleteProject(elementIndex).subscribe(function (data) {
            if (data.success) {
                _this.dataValue.splice(0, 1);
            }
            else {
                console.log(false);
            }
        });
        this.visible = false;
        this.dropFlag = false;
        this.changeFlag = false;
        this.createFlag = false;
    };
    ProjectsModalComponent.prototype.close = function () {
        var _this = this;
        this.visible = false;
        setTimeout(function () { return _this.visible = false; }, 300);
        this.dropFlag = false;
        this.changeFlag = false;
        this.createFlag = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProjectsModalComponent.prototype, "dataValue", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProjectsModalComponent.prototype, "selectedValue", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ProjectsModalComponent.prototype, "title", void 0);
    ProjectsModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-projects-modal',
            template: __webpack_require__("../../../../../src/app/components/modals/projects-modal/projects-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/modals/projects-modal/projects-modal.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_project_service__["a" /* ProjectService */]])
    ], ProjectsModalComponent);
    return ProjectsModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@font-face {\r\n  font-family: \"Roboto-Light\";\r\n  src: url(" + __webpack_require__("../../../../../src/assets/fonts/Roboto-Light.ttf") + ");\r\n  font-style: normal;\r\n  font-weight: normal;\r\n}\r\n\r\na {\r\n  font-family: Roboto-Light;\r\n}\r\n\r\n.ampx-tools-button {\r\n  background: #ffb248;\r\n  color: #FFFFFF!important;\r\n  border-radius: 25px;\r\n  padding: 8px 20px;\r\n  width: 180px;\r\n  border: 0;\r\n}\r\n\r\n.text-center {\r\n  text-align:center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-white\">\n    <a class=\"navbar-brand d-block img-fluid\" routerLink=\"/\">\n      <picture>\n          <source media=\"(min-width: 1200px)\" [srcset]=\"companyLogo_1200\">\n          <source media=\"(min-width: 992px)\" [srcset]=\"companyLogo_768\">\n          <source [srcset]=\"companyLogo_768\">\n          <img class=\"d-block img-fluid\" [src]=\"companyLogo_1200\" alt=\"companyLogo\" sr-only=\"AMPX\">\n        </picture>\n    </a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo02\" aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo02\">\n      <ul class=\"navbar-nav ml-auto mt-2 mt-lg-0\">\n        <li *ngIf=\"!authService.loggedIn()\" class=\"nav-item\">\n          <div class=\"d-flex justify-content-center\">\n            <a class=\"nav-link h4\" routerLink=\"/\">Home <span class=\"sr-only\"> Home </span></a>\n          </div>\n        </li>\n        <li *ngIf=\"!authService.loggedIn()\" class=\"nav-item\">\n          <div class=\"d-flex justify-content-center\">\n            <a class=\"nav-link h4\" routerLink=\"/about_us\"> About Us <span class=\"sr-only\"> About Us </span></a>\n          </div>\n        </li>\n        <li *ngIf=\"!authService.loggedIn()\" class=\"nav-item\">\n          <div class=\"d-flex justify-content-center\">\n            <a class=\"nav-link h4\" routerLink=\"/services\"> Services <span class=\"sr-only\"> Services </span></a>\n          </div>\n        </li>\n        <li *ngIf=\"!authService.loggedIn()\" class=\"nav-item\">\n          <div class=\"d-flex justify-content-center\">\n            <a class=\"nav-link h4\" routerLink=\"/contact_us\"> Contact Us <span class=\"sr-only\"> Contact Us </span></a>\n          </div>\n        </li>\n        <li *ngIf=\"authService.loggedIn()\" class=\"nav-item\">\n          <div class=\"d-flex justify-content-center\">\n            <a class=\"nav-link h4\" routerLink=\"/project\">Project <span class=\"sr-only\"> Project </span></a>\n          </div>\n        </li>\n        <!--\n        <li *ngIf=\"!authService.loggedIn()\" class=\"nav-item\">\n          <a class=\"nav-link h3\" routerLink=\"/login\"> Login <span class=\"sr-only\"> Login </span></a>\n        </li>\n        <li *ngIf=\"!authService.loggedIn()\" class=\"nav-item\">\n          <a class=\"nav-link h3\" routerLink=\"/register\"> Register <span class=\"sr-only\"> Register </span></a>\n        </li>\n      -->\n        <!-- -->\n        <li *ngIf=\"!authService.loggedIn()\" class=\"nav-item\">\n          <div class=\"d-flex justify-content-center\">\n            <a class=\"nav-link h4 ampx-tools-button text-center\" routerLink=\"/signin\"> AMP X CORE <span class=\"sr-only\"> AMP X CORE </span></a>\n          </div>\n        </li>\n        <!-- -->\n        <li *ngIf=\"authService.loggedIn()\" class=\"nav-item\">\n          <div class=\"d-flex justify-content-center\">\n            <a class=\"nav-link h4\" (click)=\"onLogoutClick()\" href=\"#\"> Logout <span class=\"sr-only\"> Logout </span></a>\n          </div>\n        </li>\n        <li *ngIf=\"authService.loggedIn()\" class=\"nav-item\">\n          <div class=\"d-flex justify-content-center\">\n            <a class=\"nav-link h4\" routerLink=\"/profile\"> Profile <span class=\"sr-only\"> Profile </span></a>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </nav>"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.companyLogo_1200 = 'assets/img/1200/header/AMP-X-logo.png';
        this.companyLogo_768 = 'assets/img/768/header/AMP-X-logo.png';
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('You are logged out', { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['/signin']);
        return false;
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n  <h2 class=\"page-header\">{{user.userName}}</h2>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">User email address: {{user.email}}</li>\n    <li class=\"list-group-item\">User first name: {{user.firstName}}</li>\n    <li class=\"list-group-item\">User last name: {{user.lastName}}</li>\n    <li class=\"list-group-item\">User company name: {{user.companyName}}</li>\n    <li class=\"list-group-item\">User from city: {{user.city}}</li>\n    <li class=\"list-group-item\">User phone number: {{user.phone}}</li>\n  </ul>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/project-dashboard/project-dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@font-face {\r\n  font-family: \"Roboto-Light\";\r\n  src: url(" + __webpack_require__("../../../../../src/assets/fonts/Roboto-Light.ttf") + ");\r\n  font-style: normal;\r\n  font-weight: normal;\r\n}\r\n  \r\n@font-face {\r\n  font-family: \"Roboto-Bolt\";\r\n  src: url(" + __webpack_require__("../../../../../src/assets/fonts/Roboto-Bold.ttf") + ");\r\n  font-weight: bold;\r\n}\r\n\r\n.breadcrumb {\r\n  background-color: white !important;\r\n}\r\n\r\n.text-style{\r\n  font-family: Roboto-Bolt!important;\r\n  color: #4c4c4c!important;\r\n}\r\n\r\n.temporary-text-style {\r\n  font-family: Roboto-Light!important;\r\n  color: #4c4c4c!important;\r\n}\r\n\r\n.disable-decoration {\r\n  text-decoration: none!important;\r\n}\r\n\r\n.cursor-style {\r\n  cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/project-dashboard/project-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container text-style\" *ngIf=\"project\">\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\"><a class=\"cursor-style disable-decoration text-style\" routerLink=\"/projects\">Projects</a></li>\n      <li class=\"breadcrumb-item\"><a class=\"cursor-style disable-decoration text-style\" [routerLink]=\"['/project-edit', projectId]\">{{project.title}}</a></li>\n      <li class=\"breadcrumb-item active\">Dashboard</li>\n    </ol>\n    <div class=\"d-flex justify-content-center pt-3\">\n      <h1>Project <strong>{{project.title}}</strong></h1>\n    </div>\n    <div class=\"d-flex justify-content-center pt-2\">\n      <h4>To start working</h4>\n    </div>\n    <div class=\"d-flex justify-content-center\">\n      <div class=\"d-flex flex-column\">\n        <div class=\"p-2 h5\">\n          <a class=\"cursor-style disable-decoration text-style\" [routerLink]=\"['/project', projectId, 'electricals']\"><strong>\n            Electrical Load List\n          </strong>\n          </a>\n        </div>\n        <div class=\"p-2 h5 temporary-text-style\">Electrical Equipment List</div>\n        <div class=\"p-2 h5\">\n          <a class=\"cursor-style disable-decoration text-style\" [routerLink]=\"['/project', projectId, 'cables']\"><strong>\n            Cable Schedule\n          </strong>\n          </a>\n        </div>\n        <div class=\"p-2 h5 temporary-text-style\">Controller Schedule</div>\n        <div class=\"p-2 h5 temporary-text-style\">Instrumentation Index</div>\n        <div class=\"p-2 h5 temporary-text-style\">IO Assignment</div>\n        <div class=\"p-2 h5 temporary-text-style\">IO List</div>\n      </div>\n    </div>    \n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/project-dashboard/project-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectDashboardComponent = (function () {
    function ProjectDashboardComponent(route, projectService, spinnerService) {
        this.route = route;
        this.projectService = projectService;
        this.spinnerService = spinnerService;
        this.projectId = this.route.snapshot.params['id'];
    }
    ProjectDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinnerService.show();
        this.projectService.getProjectById(this.projectId).subscribe(function (project) {
            _this.project = project;
            _this.spinnerService.hide();
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProjectDashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-project-dashboard',
            template: __webpack_require__("../../../../../src/app/components/project-dashboard/project-dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/project-dashboard/project-dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__services_project_service__["a" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__["Ng4LoadingSpinnerService"]])
    ], ProjectDashboardComponent);
    return ProjectDashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/project/project.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@font-face {\r\n    font-family: \"Roboto-Light\";\r\n    src: url(" + __webpack_require__("../../../../../src/assets/fonts/Roboto-Light.ttf") + ");\r\n    font-style: normal;\r\n    font-weight: normal;\r\n  }\r\n  \r\n  @font-face {\r\n    font-family: \"Roboto-Bolt\";\r\n    src: url(" + __webpack_require__("../../../../../src/assets/fonts/Roboto-Bold.ttf") + ");\r\n    font-weight: bold;\r\n  }\r\n\r\n  .table-text-style{\r\n    font-family: Roboto-Bolt!important;\r\n    color: #4c4c4c!important;\r\n  }\r\n\r\n  .disable-decoration {\r\n    text-decoration: none!important;\r\n  }\r\n  \r\n  .table-cursor {\r\n    cursor: pointer;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/project/project.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n<div *ngIf=\"project\">\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\" *ngFor=\"let itemProject of project\">Project Title: {{itemProject.title}}</li>\n  </ul>\n</div>\n\n[routerLink]=\"['/project-create']\"\n\n-->\n<div class=\"container\">\n  <div class=\"d-flex justify-content-center\">\n    <h1>List of projects\n      <a \n        class=\"btn btn-primary\"\n        data-toggle=\"tooltip\"\n        data-placement=\"top\"\n        title=\"Add new project\"\n        (click)=\"addProjectModal.showAddModal(createProject)\"\n      >\n        <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n      </a>\n    </h1>\n  </div>\n  <div *ngIf=\"project\">\n    <table class=\"table table-sm table-text-style\">\n      <thead>\n        <tr>\n          <th>Title</th>\n<!--          <th>Date create</th>\n          <th>Date update</th>-->\n          <th>Action</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let itemProject of project\">\n          <td><a class=\"table-link table-cursor disable-decoration table-text-style\" [routerLink]=\"['/project', itemProject._id]\"><strong>{{itemProject.title}}</strong></a></td>\n<!--\n  \n  [routerLink]=\"['/project', project._id]\"\n\n  <td>{{project.date_create | date : \"medium\"}}</td>\n          <td>{{project.updated_date | date : \"medium\"}}</td>-->\n          <td>\n            <div class=\"row\">\n              <div class=\"col-6\">\n                <a \n                  class=\"btn btn-success\"\n                  data-toggle=\"tooltip\"\n                  data-placement=\"top\"\n                  title=\"Change project\"\n                  (click)=\"addProjectModal.showChangeProjectModal(chengeProject, itemProject)\"\n                >\n                  <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n                </a>\n              </div>\n              <div class=\"col-6\">\n                <a \n                  class=\"btn btn-danger\"\n                  data-toggle=\"tooltip\"\n                  data-placement=\"top\"\n                  title=\"Delete project\"\n                  (click)=\"addProjectModal.showDropModal(dropProject, itemProject)\"\n                >\n                  <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\n                </a>\n              </div>\n            </div>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <!--START MODALS -->\n  <app-projects-modal [dataValue]=\"project\" [title]=\"createProjectModalHeader\" #addProjectModal></app-projects-modal>\n  <!-- END MODAL -->\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/project/project.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectComponent = (function () {
    function ProjectComponent(projectService, router, spinnerService) {
        this.projectService = projectService;
        this.router = router;
        this.spinnerService = spinnerService;
        this.createProjectModalHeader = "Project functionality";
        this.createProject = true;
        this.dropProject = true;
        this.chengeProject = true;
    }
    ProjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinnerService.show();
        this.projectService.getProject().subscribe(function (projectList) {
            _this.project = projectList;
            _this.projectLenth = projectList.length;
            _this.spinnerService.hide();
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProjectComponent.prototype.ngDoCheck = function () {
        var _this = this;
        if (!this.project) {
            return;
        }
        else if (this.projectLenth < Object.keys(this.project).length || this.projectLenth > Object.keys(this.project).length) {
            this.projectService.getProject().subscribe(function (projectList) {
                _this.project = projectList;
                _this.projectLenth = projectList.length;
            }, function (err) {
                console.log(err);
                return false;
            });
        }
        else {
            return;
        }
    };
    ProjectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-project',
            template: __webpack_require__("../../../../../src/app/components/project/project.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/project/project.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_project_service__["a" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__["Ng4LoadingSpinnerService"]])
    ], ProjectComponent);
    return ProjectComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Register</h2>\n<form (submit)=\"onRegisterSubmit()\">\n  <div class=\"form-group\">\n    <label>User Name</label>\n    <input type=\"text\" [(ngModel)]=\"userName\" name=\"userName\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Email</label>\n    <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>First Name</label>\n    <input type=\"text\" [(ngModel)]=\"firstName\" name=\"firstName\" class=\"form-control\" >\n  </div>\n  <div class=\"form-group\">\n      <label>Last Name</label>\n      <input type=\"text\" [(ngModel)]=\"lastName\" name=\"lastName\" class=\"form-control\" >\n  </div>\n  <div class=\"form-group\">\n      <label>Company Name</label>\n      <input type=\"text\" [(ngModel)]=\"companyName\" name=\"companyName\" class=\"form-control\" >\n  </div>\n  <div class=\"form-group\">\n    <label>City</label>\n    <input type=\"text\" [(ngModel)]=\"city\" name=\"city\" class=\"form-control\" >\n  </div>\n  <div class=\"form-group\">\n    <label>Phone Number</label>\n    <input type=\"text\" [(ngModel)]=\"phone\" name=\"phone\" class=\"form-control\" >\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            email: this.email,
            userName: this.userName,
            firstName: this.firstName,
            lastName: this.lastName,
            companyName: this.companyName,
            city: this.city,
            phone: this.phone,
            password: this.password
        };
        //Required Fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        //Validate Email
        if (!this.validateService.validateEmeil(user.email)) {
            this.flashMessage.show('Please use a valid email', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        //Register user
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('You are now registered and can log in!', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show('Something went wrong!!', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/services/services.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@font-face {\r\n  font-family: \"Roboto-Light\";\r\n  src: url(" + __webpack_require__("../../../../../src/assets/fonts/Roboto-Light.ttf") + ");\r\n  font-style: normal;\r\n  font-weight: normal;\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Roboto-Bolt\";\r\n  src: url(" + __webpack_require__("../../../../../src/assets/fonts/Roboto-Bold.ttf") + ");\r\n  font-weight: bold;\r\n}\r\n\r\n@media (max-width: 575px) {\r\n  .general-text-size {\r\n    font-family: Roboto-Light;\r\n    font-size:12px;\r\n  }\r\n  .smoll-subparagraph {\r\n    font-family: Roboto-Bolt;\r\n    font-size: 16px;\r\n    color: #4c4c4c;\r\n  }\r\n  .big-subparagraf {\r\n    font-family: Roboto-Bolt;\r\n    font-size: 30px;\r\n    color: #4c4c4c;\r\n  }\r\n  .before-ul-textsize {\r\n    font-size: 16px;\r\n  }\r\n  .carousel-caption-header-text{\r\n    color: rgba(255, 255, 255, 1);\r\n    font-size: 15px;\r\n    font-family: Roboto-Bolt;\r\n  }\r\n  .carousel-caption-header-long-text {\r\n    color: rgba(255, 255, 255, 1);\r\n    font-size: 10px;\r\n    font-family: Roboto-Bolt;\r\n  }\r\n\r\n  ol li.active {\r\n    height: 5px;\r\n    width: 5px;\r\n    background-color: #FFB248!important;\r\n    border-radius: 5px 5px 5px 5px;\r\n  }\r\n\r\n  ol li {\r\n    height: 5px;\r\n    width: 5px;\r\n    background-color: white!important;\r\n    border-radius: 5px 5px 5px 5px;\r\n  }\r\n\r\n  .carousel-indicators {\r\n    bottom: -10px;\r\n  }\r\n}\r\n\r\n@media (min-width: 576px) and (max-width: 767px) {\r\n  .general-text-size {\r\n    font-family: Roboto-Light;\r\n    font-size:14px;\r\n  }\r\n\r\n  .smoll-subparagraph {\r\n    font-size: 20px;\r\n    font-family: Roboto-Bolt;\r\n    color: #4c4c4c;\r\n  }\r\n\r\n  .big-subparagraf {\r\n    font-family: Roboto-Bolt;\r\n    font-size: 40px;\r\n    color: #4c4c4c;\r\n  }\r\n\r\n  .carousel-caption-header-text{\r\n    color: rgba(255, 255, 255, 1);\r\n    font-size: 25px;\r\n    font-family: Roboto-Bolt;\r\n  }\r\n  .carousel-caption-header-long-text {\r\n    color: rgba(255, 255, 255, 1);\r\n    font-size: 16px;\r\n    font-family: Roboto-Bolt;\r\n  }\r\n\r\n  ol li.active {\r\n    height: 10px;\r\n    width: 10px;\r\n    background-color: #FFB248!important;\r\n    border-radius: 5px 5px 5px 5px;\r\n  }\r\n  \r\n  ol li {\r\n    height: 10px;\r\n    width: 10px;\r\n    background-color: white!important;\r\n    border-radius: 5px 5px 5px 5px;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) and (max-width: 992px) {\r\n  .general-text-size {\r\n    font-family: Roboto-Light;\r\n    font-size:16px;\r\n  }\r\n  \r\n  .smoll-subparagraph {\r\n    font-size: 20px;\r\n    font-family: Roboto-Bolt;\r\n    color: #4c4c4c;\r\n  }\r\n\r\n  .big-subparagraf {\r\n    font-family: Roboto-Bolt;\r\n    font-size: 40px;\r\n    color: #4c4c4c;\r\n  }\r\n\r\n  .carousel-caption-header-text{\r\n    color: rgba(255, 255, 255, 1);\r\n    font-size: 30px;\r\n    font-family: Roboto-Bolt;\r\n  }\r\n  .carousel-caption-header-long-text {\r\n    color: rgba(255, 255, 255, 1);\r\n    font-size: 30px;\r\n    font-family: Roboto-Bolt;\r\n  }\r\n\r\n  ol li.active {\r\n    height: 10px;\r\n    width: 10px;\r\n    background-color: #FFB248!important;\r\n    border-radius: 5px 5px 5px 5px;\r\n  }\r\n  \r\n  ol li {\r\n    height: 10px;\r\n    width: 10px;\r\n    background-color: white!important;\r\n    border-radius: 5px 5px 5px 5px;\r\n  }\r\n}\r\n\r\n@media (min-width: 992px) and (max-width: 1199px) {\r\n  .general-text-size {\r\n    font-family: Roboto-Light;\r\n    font-size:18px;\r\n  }\r\n  \r\n  .smoll-subparagraph {\r\n    font-size: 20px;\r\n    font-family: Roboto-Bolt;\r\n    color: #4c4c4c;\r\n  }\r\n\r\n  .big-subparagraf {\r\n    font-family: Roboto-Bolt;\r\n    font-size: 40px;\r\n    color: #4c4c4c;\r\n    line-height: 10px;\r\n  }\r\n\r\n  .carousel-caption-header-text{\r\n    color: rgba(255, 255, 255, 1);\r\n    font-size: 40px;\r\n    font-family: Roboto-Bolt;\r\n  }\r\n  .carousel-caption-header-long-text {\r\n    color: rgba(255, 255, 255, 1);\r\n    font-size: 40px;\r\n    font-family: Roboto-Bolt;\r\n  }\r\n\r\n  ol li.active {\r\n    height: 10px;\r\n    width: 10px;\r\n    background-color: #FFB248!important;\r\n    border-radius: 5px 5px 5px 5px;\r\n  }\r\n  \r\n  ol li {\r\n    height: 10px;\r\n    width: 10px;\r\n    background-color: white!important;\r\n    border-radius: 5px 5px 5px 5px;\r\n  }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n  .general-text-size {\r\n    font-family: Roboto-Light;\r\n    font-size:20px;\r\n  }\r\n  \r\n  .smoll-subparagraph {\r\n    font-family: Roboto-Bolt;\r\n    font-size: 30px;\r\n    color: #4c4c4c;\r\n  }\r\n\r\n  .big-subparagraf {\r\n    font-family: Roboto-Bolt;\r\n    font-size: 50px;\r\n    color: #4c4c4c;\r\n    line-height: 10px;\r\n  }\r\n\r\n  .carousel-caption-header-text{\r\n    color: rgba(255, 255, 255, 1);\r\n    font-size: 80px;\r\n    font-family: Roboto-Bolt;\r\n  }\r\n\r\n  .carousel-caption-header-long-text {\r\n    color: rgba(255, 255, 255, 1);\r\n    font-size: 55px;\r\n    font-family: Roboto-Bolt;\r\n  }\r\n\r\n  ol li.active {\r\n    height: 10px;\r\n    width: 10px;\r\n    background-color: #FFB248!important;\r\n    border-radius: 5px 5px 5px 5px;\r\n  }\r\n  \r\n  ol li {\r\n    height: 10px;\r\n    width: 10px;\r\n    background-color: white!important;\r\n    border-radius: 5px 5px 5px 5px;\r\n  }\r\n\r\n}\r\n\r\n.carousel-item.active,\r\n.carousel-item-next,\r\n.carousel-item-prev {\r\n  display: block;\r\n}\r\n\r\n.circle_style {\r\n  list-style-type: circle;\r\n}\r\n\r\n.inner-circle-style{\r\nlist-style-type: disc;\r\n}\r\n\r\n.li_color_style {\r\n  color: #ffb248;\r\n  list-style-type: disc;\r\n}\r\n\r\n.custom-carousel-caption{\r\n  right: 60%!important;\r\n  left: 10%!important;\r\n  background-color: rgba(0, 0, 0, 0.7);\r\n  height: 100%;\r\n  bottom: 0px!important;\r\n}\r\n\r\n.carousel-indicators-position {\r\n  right: 50%!important;\r\n}\r\n\r\n.text-justify {\r\n  text-align:justify;\r\n}\r\n\r\n.text-color {\r\n  color: #4c4c4c;\r\n  font-family: Roboto-Light;\r\n}\r\n\r\nspan.industry-text{\r\n  background-color: white;\r\n  padding-left: 5px; \r\n  padding-right: 5px; \r\n  z-index: 2;\r\n}\r\n\r\n.black-line{\r\n  margin-top: 20px; \r\n  background-color: black; \r\n  width: 100%; \r\n  height: 2px; \r\n  position: absolute;\r\n}\r\n\r\n.template-footer {\r\n  display:block;\r\n}\r\n\r\n.custom-footer {\r\n  height:210px;\r\n  background-color:#2f3032\r\n}\r\n\r\na.footer_href {\r\n  color: #ffffff;\r\n  text-decoration: none;\r\n}\r\n\r\nspan.footer-text {\r\n  color:white;\r\n}\r\n\r\n.footer-row {\r\n  margin-right:0px!important;\r\n  margin-left:0px!important\r\n}\r\n\r\n.h-100{\r\n  height: 100%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/services/services.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div id=\"carouselExampleIndicators3\" class=\"carousel slide\" data-ride=\"carousel\">\n    <ol class=\"carousel-indicators carousel-indicators-position\">\n      <li data-target=\"#carouselExampleIndicators3\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#carouselExampleIndicators3\" data-slide-to=\"1\"></li>\n      <li data-target=\"#carouselExampleIndicators3\" data-slide-to=\"2\"></li>\n      <li data-target=\"#carouselExampleIndicators3\" data-slide-to=\"3\"></li>\n      <li data-target=\"#carouselExampleIndicators3\" data-slide-to=\"4\"></li>\n      <li data-target=\"#carouselExampleIndicators3\" data-slide-to=\"5\"></li>\n    </ol>\n    <div class=\"carousel-inner\" role=\"listbox\">\n      <div class=\"carousel-item active\">\n          <picture>\n            <source media=\"(min-width: 1200px)\" [srcset]=\"projectServices_1920\">\n            <source media=\"(min-width: 992px)\" [srcset]=\"projectServices_1200\">\n            <source media=\"(min-width: 768px)\" [srcset]=\"projectServices_992\">\n            <source media=\"(min-width: 576px)\" [srcset]=\"projectServices_768\">\n            <source [srcset]=\"projectServices_576\">\n            <img class=\"d-block img-fluid\" [src]=\"projectServices_1920\" alt=\"Project Services\" sr-only=\"Project Services\">\n          </picture>\n        <div class=\"carousel-caption custom-carousel-caption d-none d-block\">\n          <div class=\"d-flex align-items-start flex-column carousel-text-container\">\n            <p class=\"carousel-caption-header-text pl-4\"><strong>Project</strong></p>\n            <p class=\"carousel-caption-header-text pl-4\"><strong>Services</strong></p>\n          </div>\n        </div>\n      </div>\n      <div class=\"carousel-item\">\n        <picture>\n          <source media=\"(min-width: 1200px)\" [srcset]=\"engineeringAnalysis_1920\">\n          <source media=\"(min-width: 992px)\" [srcset]=\"engineeringAnalysis_1200\">\n          <source media=\"(min-width: 768px)\" [srcset]=\"engineeringAnalysis_992\">\n          <source media=\"(min-width: 576px)\" [srcset]=\"engineeringAnalysis_768\">\n          <source [srcset]=\"engineeringAnalysis_576\">\n          <img class=\"d-block img-fluid\" [src]=\"engineeringAnalysis_1920\" alt=\"Engineering analysys and studies\" sr-only=\"Engineering analysys and studies\">\n        </picture>\n        <div class=\"carousel-caption custom-carousel-caption d-none d-block\">\n          <div class=\"d-flex align-items-start flex-column carousel-text-container\">\n            <p class=\"carousel-caption-header-long-text pl-4\"><strong>Engineering</strong></p>\n            <p class=\"carousel-caption-header-long-text pl-4\"><strong>Analysys and</strong></p>\n            <p class=\"carousel-caption-header-long-text pl-4\"><strong>Studies</strong></p>\n          </div>\n        </div>\n      </div>\n      <div class=\"carousel-item\">\n        <picture>\n          <source media=\"(min-width: 1200px)\" [srcset]=\"fieldServices_1920\">\n          <source media=\"(min-width: 992px)\" [srcset]=\"fieldServices_1200\">\n          <source media=\"(min-width: 768px)\" [srcset]=\"fieldServices_992\">\n          <source media=\"(min-width: 576px)\" [srcset]=\"fieldServices_768\">\n          <source [srcset]=\"fieldServices_576\">\n          <img class=\"d-block img-fluid\" [src]=\"fieldServices_1920\" alt=\"Field services\" sr-only=\"Field services\">\n        </picture>\n        <div class=\"carousel-caption custom-carousel-caption d-none d-block\">\n          <div class=\"d-flex align-items-start flex-column carousel-text-container\">\n            <p class=\"carousel-caption-header-text pl-4\"><strong>Field</strong></p>\n            <p class=\"carousel-caption-header-text pl-4\"><strong>Services</strong></p>\n          </div>\n        </div>\n      </div>\n      <div class=\"carousel-item\">\n        <picture>\n          <source media=\"(min-width: 1200px)\" [srcset]=\"oilAndGas_1920\">\n          <source media=\"(min-width: 992px)\" [srcset]=\"oilAndGas_1200\">\n          <source media=\"(min-width: 768px)\" [srcset]=\"oilAndGas_992\">\n          <source media=\"(min-width: 576px)\" [srcset]=\"oilAndGas_768\">\n          <source [srcset]=\"oilAndGas_576\">\n          <img class=\"d-block img-fluid\" [src]=\"oilAndGas_1920\" alt=\"Oil & Gas\" sr-only=\"Oil & Gas\">\n        </picture>\n        <div class=\"carousel-caption custom-carousel-caption d-none d-block\">\n          <div class=\"d-flex align-items-start flex-column carousel-text-container\">\n            <p class=\"carousel-caption-header-text pl-4\"><strong>Oil & Gas</strong></p>\n          </div>\n        </div>\n      </div>\n      <div class=\"carousel-item\">\n        <picture>\n          <source media=\"(min-width: 1200px)\" [srcset]=\"powerSystem_1920\">\n          <source media=\"(min-width: 992px)\" [srcset]=\"powerSystem_1200\">\n          <source media=\"(min-width: 768px)\" [srcset]=\"powerSystem_992\">\n          <source media=\"(min-width: 576px)\" [srcset]=\"powerSystem_768\">\n          <source [srcset]=\"powerSystem_576\">\n          <img class=\"d-block img-fluid\" [src]=\"powerSystem_1920\" alt=\"Power systems\" sr-only=\"Power systems\">\n        </picture>\n        <div class=\"carousel-caption custom-carousel-caption d-none d-block\">\n          <div class=\"d-flex align-items-start flex-column carousel-text-container\">\n            <p class=\"carousel-caption-header-text pl-4\"><strong>Power</strong></p>\n            <p class=\"carousel-caption-header-text pl-4\"><strong>Systems</strong></p>\n          </div>\n        </div>\n      </div>\n      <div class=\"carousel-item\">\n        <picture>\n          <source media=\"(min-width: 1200px)\" [srcset]=\"renewables_1920\">\n          <source media=\"(min-width: 992px)\" [srcset]=\"renewables_1200\">\n          <source media=\"(min-width: 768px)\" [srcset]=\"renewables_992\">\n          <source media=\"(min-width: 576px)\" [srcset]=\"renewables_768\">\n          <source [srcset]=\"renewables_576\">\n          <img class=\"d-block img-fluid\" [src]=\"renewables_1920\" alt=\"Renewables\" sr-only=\"Renewables\">\n        </picture>\n        <div class=\"carousel-caption custom-carousel-caption d-none d-block\">\n          <div class=\"d-flex align-items-start flex-column carousel-text-container\">\n            <p class=\"carousel-caption-header-text pl-4\"><strong>Renewables</strong></p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators3\" role=\"button\" data-slide=\"prev\">\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators3\" role=\"button\" data-slide=\"next\">\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n  </div>\n  <div class=\"container pb-3\">\n    <div class=\"row justify-content-between\">\n      <div class=\"col-12 pt-4 text-justify general-text-size\">\n        <span>At AMP X, we provide electrical, instrumentation and controls (E, I and C) services for greenfield or brownfield projects ranging from studies, to small management of change (MOC) scopes, to capital projects. We also provide a wide range of field and project support services.\n        </span>\n      </div>\n    </div>\n    <div class=\"row justify-content-between\">\n      <div class=\"col-12 pt-4 text-justify general-text-size\">\n        <span>Our customers include end-users such as oil & gas companies, as well as equipment vendors, other engineering service providers and construction contractors. To support our customers’ varying project requirements, we are able to complete our engineering using multiple industry standards.\n        </span>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <hr/>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-12\" >\n        <p class=\"smoll-subparagraph\">Our</p>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <p class=\"big-subparagraf\"><strong>Services</strong></p>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-12 mb-3 mt-3\">\n        <picture>\n          <source media=\"(min-width: 1200px)\" [srcset]=\"gearIcon_1200\">\n          <source media=\"(min-width: 768px)\" [srcset]=\"gearIcon_768\">\n          <source [srcset]=\"gearIcon_576\">\n          <img class=\"d-block img-fluid\" [src]=\"gearIcon_1200\" alt=\"gear\" sr-only=\"gear\">\n        </picture>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <p class=\"smoll-subparagraph\"><strong>Engineering Design and Project Services</strong></p>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-12 col-md-6 text-color\">\n        <ul class=\"general-text-size\">\n          <li class=\"circle_style\">\n            <span class=\"text-color\"><strong>Front end and detailed engineering phases</strong></span>\n          </li>\n          <li class=\"circle_style\">\n            <span class=\"text-color\"><strong>Electrical engineering services:</strong></span>\n            <ul>\n              <li class=\"li_color_style\">\n                <span class=\"text-color\">Specification development</span>\n              </li>\n              <li class=\"li_color_style\">\n                <span class=\"text-color\">Area classification and fugitive emissions studies </span>\n              </li>\n              <li class=\"li_color_style\">\n                <span class=\"text-color\">Power distribution systems</span>\n              </li>\n              <li class=\"li_color_style\">\n                <span class=\"text-color\">Grounding systems</span>\n              </li>\n              <li class=\"li_color_style\">\n                <span class=\"text-color\">Electric heat trace systems</span>\n              </li>\n              <li class=\"li_color_style\">\n                <span class=\"text-color\">Complete electrical design packages for new and existing facilities</span>\n              </li>\n              <li class=\"li_color_style\">\n                <span class=\"text-color\">Installation details and layouts</span>\n              </li>\n            </ul>\n          </li>\n          <li class=\"circle_style\">\n            <span><strong class=\"text-color\">Instrumentation engineering services:</strong></span>\n            <ul>\n              <li class=\"li_color_style\">\n                <span class=\"text-color\">Instrument selection and sizing</span>\n              </li>\n              <li class=\"li_color_style\">\n                <span class=\"text-color\">Specification and data sheet development</span>\n              </li>\n              <li class=\"li_color_style\">\n                <span class=\"text-color\">Burner management systems</span>\n              </li>\n              <li class=\"li_color_style\">\n                <span class=\"text-color\">Installation details and layouts</span>\n              </li>\n            </ul>\n          </li>\n      </ul>\n      </div>\n      <div class=\"col-12 col-md-6 text-color\">\n        <ul class=\"general-text-size\">\n          <li class=\"circle_style\">\n            <span class=\"text-color\"><strong>Control systems engineering services:</strong></span>\n            <ul>\n              <li class=\"li_color_style\">\n                  <span class=\"text-color\">Control room and I/O building designs</span>\n              </li>\n              <li class=\"li_color_style\">\n                  <span class=\"text-color\">Control narratives; logic diagrams; cause & effects</span>\n              </li>\n              <li class=\"li_color_style\">\n                  <span class=\"text-color\">Process control and safety system design and architectural layouts</span>\n              </li>\n              <li class=\"li_color_style\">\n                  <span class=\"text-color\">Programming services – vendor neutral; multiple systems and platforms supported</span>\n              </li>\n            </ul>\n          </li>\n          <li class=\"circle_style\">\n            <span class=\"text-color\"><strong>Facilitation; design/model review and HAZOP support</strong></span>\n          </li>\n          <li class=\"circle_style\">\n            <span class=\"text-color\"><strong>Project services:</strong></span>\n            <ul>\n              <li class=\"li_color_style\">\n                <span class=\"text-color\">Project management</span>\n              </li>\n              <li class=\"li_color_style\">\n                <span class=\"text-color\">Procurement and contracts support </span>\n              </li>\n              <li class=\"li_color_style\">\n                <span class=\"text-color\">Project controls</span>\n              </li>\n              <li class=\"li_color_style\">\n                <span class=\"text-color\">Capital cost estimating</span>\n              </li>\n              <li class=\"li_color_style\">\n                <span class=\"text-color\">Project execution plan development – using Project</span>\n              </li>\n              <li class=\"li_color_style\">\n                <span class=\"text-color\">Management Institute (PMI) or company-specific frameworks</span>\n              </li>\n            </ul>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-12 col-md-6\">\n        <div class=\"row\">\n          <div class=\"col-12\">\n            <div class=\"row\">\n              <div class=\"col-12 mt-3 mb-3\">\n                <picture>\n                  <source media=\"(min-width: 1200px)\" [srcset]=\"calculator_1200\">\n                  <source media=\"(min-width: 768px)\" [srcset]=\"calculator_768\">\n                  <source [srcset]=\"calculator_576\">\n                  <img class=\"d-block img-fluid\" [src]=\"calculator_1200\" alt=\"calculator\" sr-only=\"calculator\">\n                </picture>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-12\">\n                <p class=\"smoll-subparagraph\"><strong>Engineering Analysis and Studies</strong></p>\n              </div>\n              <div class=\"col-12 text-color\">\n                <ul class=\"general-text-size\">\n                  <li class=\"circle_style\">\n                    <span class=\"text-color\"><strong>Feasibility studies and alternatives analysis</strong></span>\n                  </li>\n                  <li class=\"circle_style\">\n                    <span class=\"text-color\"><strong>Facility assessments and audits for safety, reliability, capacity, system performance and future expansion capabilities</strong></span>\n                  </li>\n                  <li class=\"circle_style\">\n                    <span class=\"text-color\"><strong>Power systems studies:</strong></span>\n                    <ul>\n                      <li class=\"li_color_style\">\n                        <span class=\"text-color\">Fault and load flow</span>\n                      </li>\n                      <li class=\"li_color_style\">\n                        <span class=\"text-color\">Motor starting</span>\n                      </li>\n                      <li class=\"li_color_style\">\n                        <span class=\"text-color\">Protective relay settings and coordination</span>\n                      </li>\n                      <li class=\"li_color_style\">\n                        <span class=\"text-color\">Arc flash hazard analysis</span>\n                      </li>\n                      <li class=\"li_color_style\">\n                        <span class=\"text-color\">Touch and step potential</span>\n                      </li>\n                    </ul>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-12 col-md-6\">\n        <div class=\"row\">\n          <div class=\"col-12\">\n            <div class=\"row\">\n              <div class=\"col-12 mt-3 mb-3\">\n                <picture>\n                  <source media=\"(min-width: 1200px)\" [srcset]=\"tools_1200\">\n                  <source media=\"(min-width: 768px)\" [srcset]=\"tools_768\">\n                  <source [srcset]=\"tools_576\">\n                  <img class=\"d-block img-fluid\" [src]=\"tools_1200\" alt=\"tools\" sr-only=\"tools\">\n                </picture>\n              </div>\n              <div class=\"col-12 text-color\">\n                <p class=\"smoll-subparagraph\"><strong>Field Services</strong></p>\n              </div>\n              <div class=\"col-12 text-color\">\n                <ul class=\"general-text-size\">\n                  <li class=\"circle_style\">\n                    <span><strong>Construction work package development</strong></span>\n                  </li>\n                  <li class=\"circle_style\">\n                    <span><strong>Construction management/support</strong></span>\n                  </li>\n                  <li class=\"circle_style\">\n                    <span><strong>Field inspections (certified safety codes officer)</strong></span>\n                  </li>\n                  <li class=\"circle_style\">\n                    <span><strong>Pre-commissioning, commissioning and start-up support</strong></span>\n                  </li>\n                  <li class=\"circle_style\">\n                    <span><strong>As-building and asset management:</strong></span>\n                    <ul>\n                      <li class=\"li_color_style\">\n                        <span class=\"text-color\">Creating asset and design databases to as-built conditions for new and existing facilities</span>\n                      </li>\n                    </ul>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <hr/>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <p class=\"smoll-subparagraph\">Our</p>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <p class=\"big-subparagraf\"><strong>Specialties</strong></p>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-12 col-md-6\">\n        <div class=\"row\">\n          <div class=\"col-12\">\n            <div class=\"row\">\n              <div class=\"col-12 mt-3 mb-3\">\n                <picture>\n                  <source media=\"(min-width: 1200px)\" [srcset]=\"pumpjack_1200\">\n                  <source media=\"(min-width: 768px)\" [srcset]=\"pumpjack_768\">\n                  <source [srcset]=\"pumpjack_576\">\n                  <img class=\"d-block img-fluid\" [src]=\"pumpjack_1200\" alt=\"pump jack\" sr-only=\"pump jack\">\n                </picture>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-12\">\n                <p class=\"smoll-subparagraph\"><strong>Oil & Gas</strong></p>\n              </div>\n              <div class=\"col-12 text-color\">\n                <ul  class=\"general-text-size\">\n                  <li class=\"circle_style\">\n                    <span><strong>Gathering systems</strong></span>\n                  </li>\n                  <li class=\"circle_style\">\n                    <span><strong>Gas processing plants</strong></span>\n                  </li>\n                  <li class=\"circle_style\">\n                    <span><strong>LNG Facilities</strong></span>\n                  </li>\n                  <li class=\"circle_style\">\n                    <span><strong>Well sites and oil batteries</strong></span>\n                  </li>\n                  <li class=\"circle_style\">\n                    <span><strong>Pipelines and midstream facilities: pump stations, terminals, compression</strong></span>\n                  </li>\n                  <li class=\"circle_style\">\n                    <span><strong>Oil sands facilities: in-situ, mining, upgrading</strong></span>\n                  </li>\n                  <li class=\"circle_style\">\n                    <span><strong>Tank farms</strong></span>\n                  </li>\n                  <li class=\"circle_style\">\n                    <span><strong>Loading facilities</strong></span>\n                  </li>\n                  <li class=\"circle_style\">\n                    <span><strong>Refineries</strong></span>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-12 col-md-6\">\n        <div class=\"row\">\n          <div class=\"col-12\">\n            <div class=\"row\">\n              <div class=\"col-12 mt-3 mb-3\">\n                <picture>\n                  <source media=\"(min-width: 1200px)\" [srcset]=\"lighting_1200\">\n                  <source media=\"(min-width: 768px)\" [srcset]=\"lighting_768\">\n                  <source [srcset]=\"lighting_576\">\n                  <img class=\"d-block img-fluid\" [src]=\"lighting_1200\" alt=\"lighting\" sr-only=\"lighting\">\n                </picture>\n              </div>\n              <div class=\"col-12 text-color\">\n                <p class=\"smoll-subparagraph\"><strong>Power Systems</strong></p>\n              </div>\n              <div class=\"col-12 text-color\">\n                <ul class=\"general-text-size\">\n                  <li class=\"circle_style\">\n                    <span><strong>Power generation and co-generation</strong></span>\n                  </li>\n                  <li class=\"circle_style\">\n                    <span><strong>Substations and distribution</strong></span>\n                  </li>\n                  <li class=\"circle_style\">\n                    <span><strong>Temporary power solutions</strong></span>\n                  </li>\n                  <li class=\"circle_style\">\n                    <span><strong>Commercial: new services and service upgrades</strong></span>\n                  </li>\n                </ul>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-12 mt-3 mb-3\">\n                <picture>\n                  <source media=\"(min-width: 1200px)\" [srcset]=\"solar_1200\">\n                  <source media=\"(min-width: 768px)\" [srcset]=\"solar_768\">\n                  <source [srcset]=\"solar_576\">\n                  <img class=\"d-block img-fluid\" [src]=\"solar_1200\" alt=\"solar\" sr-only=\"solar\">\n                </picture>\n              </div>\n              <div class=\"col-12 text-color\">\n                <p class=\"smoll-subparagraph\"><strong>Renewables</strong></p>\n              </div>\n              <div class=\"col-12\">\n                <ul class=\"general-text-size\">\n                  <li class=\"circle_style\">\n                    <span><strong>Solar</strong></span>\n                  </li>\n                  <li class=\"circle_style\">\n                    <span><strong>Wind</strong></span>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"d-flex justify-content-center position-relative\">\n      <div class=\"black-line\"></div>\n      <span class=\"h3 industry-text\">Industry Standards</span>\n    </div>\n    <div class=\"d-flex justify-content-between align-items-center mt-3 mb-3\">\n      <a class=\"nounderline ml-1 mr-1\" href=\"https://www.isa.org/\">\n        <picture>\n          <source media=\"(min-width: 1200px)\" [srcset]=\"isa_1200\">\n          <source media=\"(min-width: 768px)\" [srcset]=\"isa_768\">\n          <source [srcset]=\"isa_576\">\n          <img class=\"d-block img-fluid\" [src]=\"isa_1200\" alt=\"isa\" sr-only=\"The International Society of Automation\">\n        </picture>\n      </a>\n      <a class=\"nounderline ml-1 mr-1\" href=\"http://www.csagroup.org/\">\n        <picture>\n          <source media=\"(min-width: 1200px)\" [srcset]=\"csa_1200\">\n          <source media=\"(min-width: 768px)\" [srcset]=\"csa_768\">\n          <source [srcset]=\"csa_576\">\n          <img class=\"d-block img-fluid\" [src]=\"csa_1200\" alt=\"csa\" sr-only=\"CSA Group\">\n        </picture>\n      </a>\n      <a class=\"nounderline ml-1 mr-1\" href=\"https://www.ieee.org\">\n        <picture>\n          <source media=\"(min-width: 1200px)\" [srcset]=\"ieee_1200\">\n          <source media=\"(min-width: 768px)\" [srcset]=\"ieee_768\">\n          <source [srcset]=\"ieee_576\">\n          <img class=\"d-block img-fluid\" [src]=\"ieee_1200\" alt=\"ieee\" sr-only=\"The Institute of Electrical and Electronics Engineers, Incorporated\">\n        </picture>\n      </a>\n      <a class=\"nounderline ml-1 mr-1\" href=\"https://www.nfpa.org/nec\">\n        <picture>\n          <source media=\"(min-width: 1200px)\" [srcset]=\"nec_1200\">\n          <source media=\"(min-width: 768px)\" [srcset]=\"nec_768\">\n          <source [srcset]=\"nec_576\">\n          <img class=\"d-block img-fluid\" [src]=\"nec_1200\" alt=\"nec\" sr-only=\"National Electrical Code\">\n        </picture>\n      </a>\n      <a class=\"nounderline ml-1 mr-1\" href=\"http://www.iec.ch\">\n        <picture>\n          <source media=\"(min-width: 1200px)\" [srcset]=\"iec_1200\">\n          <source media=\"(min-width: 768px)\" [srcset]=\"iec_768\">\n          <source [srcset]=\"iec_576\">\n          <img class=\"d-block img-fluid\" [src]=\"iec_1200\" alt=\"iec\" sr-only=\"International Electrotechnical Commission\">\n        </picture>\n      </a>\n    </div>\n  </div>\n  <footer *ngIf=\"sizeWindow > 992; else werticalFooter\">\n    <div class=\"custom-footer\">\n      <div class=\"d-flex align-items-center justify-content-around h-100\">\n        <div class=\"p-1 bd-highlight\">\n          <div class=\"row align-items-center\">\n            <div class=\"col-4\">\n              <img class=\"d-block\" [src]=\"phoneImg\" alt=\"phone:\" sr-only=\"phone number\">\n            </div>\n            <div class=\"col-8\">\n              <span> <a href=\"tel:1.403.863.0893\" class=\"footer_href\">1.403.863.0893</a></span>\n            </div>\n          </div>\n        </div>\n        <div class=\"p-1 bd-highlight\">\n          <div class=\"row align-items-center\">\n            <div class=\"col-4\">\n              <img class=\"d-block\" [src]=\"emailImg\" alt=\"email address\" sr-only=\"email\">\n            </div>\n            <div class=\"col-8\">\n              <span><a class=\"footer_href\" href=\"mailto:info@ampx.ca\">info@ampx.ca</a></span>\n            </div>\n          </div>\n        </div>\n        <div class=\"p-1 bd-highlight\">\n          <div class=\"row align-items-center\">\n            <div class=\"col-3\">\n              <img class=\"d-block\" [src]=\"linkedInImg\" alt=\"linkedIn\" sr-only=\"linked in account\">\n            </div>\n            <div class=\"col-9\">\n              <span class=\"footer-text\">Follow us on <a href=\"https://www.linkedin.com/company/amp-x-consulting-inc.?trk=top_nav_home\" target=\"_blank\" class=\"footer_href\"><strong>LinkedIn</strong></a></span>\n            </div>\n          </div>\n        </div>\n        <div class=\"p-1 bd-highlight\">\n            <span class=\"footer-text\">AMP X Consulting Inc. &copy; {{year}} | All Rights Reserved</span>\n        </div>\n      </div>\n    </div>\n  </footer>\n  <ng-template class=\"template-footer\" #werticalFooter>\n    <div class=\"custom-footer\">\n      <div class=\"d-flex flex-column\">\n        <div class=\"row mt-2 footer-row\">\n          <div class=\"col-6\">\n            <div class=\"float-right\">\n              <img class=\"d-block\" [src]=\"phoneImg\" alt=\"phone:\" sr-only=\"phone number\">\n            </div>\n          </div>\n          <div class=\"col-6 mr-a\">\n            <span> <a href=\"tel:1.403.863.0893\" class=\"footer_href\">1.403.863.0893</a></span>\n          </div>\n        </div>\n        <div class=\"row mt-2 footer-row\">\n          <div class=\"col-6\">\n            <div class=\"float-right\">\n              <img class=\"d-block\" [src]=\"emailImg\" alt=\"email address\" sr-only=\"email\">\n            </div>\n          </div>\n          <div class=\"col-6\">\n            <span><a class=\"footer_href\" href=\"mailto:info@ampx.ca\">info@ampx.ca</a></span>\n          </div>\n        </div>\n        <div class=\"row mt-2 footer-row\">\n          <div class=\"col-6\">\n            <div class=\"float-right\">\n              <img class=\"d-block\" [src]=\"linkedInImg\" alt=\"linkedIn\" sr-only=\"linked in account\">\n            </div>\n          </div>\n          <div class=\"col-6\">\n            <span class=\"footer-text\">Follow us on <a href=\"https://www.linkedin.com/company/amp-x-consulting-inc.?trk=top_nav_home\" target=\"_blank\" class=\"footer_href\"><strong>LinkedIn</strong></a></span>\n          </div>\n        </div>\n        <div class=\"row mt-2 footer-row\">\n          <div class=\"col-12\">\n            <div class=\"d-flex justify-content-center\">\n              <span class=\"footer-text text-center\">AMP X Consulting Inc. &copy; {{year}} | All Rights Reserved</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </ng-template>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/services/services.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServicesComponent = (function () {
    function ServicesComponent() {
        this.sizeWindow = window.innerWidth;
    }
    ServicesComponent.prototype.onResize = function (event) {
        event.target.innerWidth;
        this.sizeWindow = event.target.innerWidth;
    };
    ServicesComponent.prototype.ngOnInit = function () {
        //date value
        this.today = new Date();
        this.year = this.today.getFullYear();
        //carousel images 1920
        this.projectServices_1920 = 'assets/img/1920/service/Slider/Project_Services.jpg';
        this.engineeringAnalysis_1920 = 'assets/img/1920/service/Slider/Engineering_Analysis.jpg';
        this.fieldServices_1920 = 'assets/img/1920/service/Slider/Field_Services.jpg';
        this.oilAndGas_1920 = 'assets/img/1920/service/Slider/Oil_And_Gas.jpg';
        this.powerSystem_1920 = 'assets/img/1920/service/Slider/Power_System.jpg';
        this.renewables_1920 = 'assets/img/1920/service/Slider/Renewables.jpg';
        //carousel images 1200
        this.projectServices_1200 = 'assets/img/1200/service/Slider/Project_Services.jpg';
        this.engineeringAnalysis_1200 = 'assets/img/1200/service/Slider/Engineering_Analysis.jpg';
        this.fieldServices_1200 = 'assets/img/1200/service/Slider/Field_Services.jpg';
        this.oilAndGas_1200 = 'assets/img/1200/service/Slider/Oil_And_Gas.jpg';
        this.powerSystem_1200 = 'assets/img/1200/service/Slider/Power_System.jpg';
        this.renewables_1200 = 'assets/img/1200/service/Slider/Renewables.jpg';
        //carousel images 992
        this.projectServices_992 = 'assets/img/992/service/Slider/Project_Services.jpg';
        this.engineeringAnalysis_992 = 'assets/img/992/service/Slider/Engineering_Analysis.jpg';
        this.fieldServices_992 = 'assets/img/992/service/Slider/Field_Services.jpg';
        this.oilAndGas_992 = 'assets/img/992/service/Slider/Oil_And_Gas.jpg';
        this.powerSystem_992 = 'assets/img/992/service/Slider/Power_System.jpg';
        this.renewables_992 = 'assets/img/992/service/Slider/Renewables.jpg';
        //carousel images 768
        this.projectServices_768 = 'assets/img/992/service/Slider/Project_Services.jpg';
        this.engineeringAnalysis_768 = 'assets/img/768/services/Slider/Engineering_Analysis.jpg';
        this.fieldServices_768 = 'assets/img/768/services/Slider/Field_Services.jpg';
        this.oilAndGas_768 = 'assets/img/768/services/Slider/Oil_And_Gas.jpg';
        this.powerSystem_768 = 'assets/img/768/services/Slider/Power_System.jpg';
        this.renewables_768 = 'assets/img/768/services/Slider/Renewables.jpg';
        //carousel images 576
        this.projectServices_576 = 'assets/img/576/services/Slider/Project_Services.jpg';
        this.engineeringAnalysis_576 = 'assets/img/576/services/Slider/Engineering_Analysis.jpg';
        this.fieldServices_576 = 'assets/img/576/services/Slider/Field_Services.jpg';
        this.oilAndGas_576 = 'assets/img/576/services/Slider/Oil_And_Gas.jpg';
        this.powerSystem_576 = 'assets/img/576/services/Slider/Power_System.jpg';
        this.renewables_576 = 'assets/img/576/services/Slider/Renewables.jpg';
        //companis logo > 1200
        this.csa_1200 = 'assets/img/1200/service/LogoLinks/csa.png';
        this.iec_1200 = 'assets/img/1200/service/LogoLinks/iec.png';
        this.ieee_1200 = 'assets/img/1200/service/LogoLinks/ieee.png';
        this.isa_1200 = 'assets/img/1200/service/LogoLinks/isa.png';
        this.nec_1200 = 'assets/img/1200/service/LogoLinks/nec.png';
        //companis 768 - 1200
        this.csa_768 = 'assets/img/768/services/LogoLinks/csa.png';
        this.iec_768 = 'assets/img/768/services/LogoLinks/iec.png';
        this.ieee_768 = 'assets/img/768/services/LogoLinks/ieee.png';
        this.isa_768 = 'assets/img/768/services/LogoLinks/isa.png';
        this.nec_768 = 'assets/img/768/services/LogoLinks/nec.png';
        //companis 576 - 768
        this.csa_576 = 'assets/img/576/services/LogoLinks/csa.png';
        this.iec_576 = 'assets/img/576/services/LogoLinks/iec.png';
        this.ieee_576 = 'assets/img/576/services/LogoLinks/ieee.png';
        this.isa_576 = 'assets/img/576/services/LogoLinks/isa.png';
        this.nec_576 = 'assets/img/576/services/LogoLinks/nec.png';
        //body icons > 1200
        this.gearIcon_1200 = 'assets/img/1200/service/icons/gear.png';
        this.calculator_1200 = 'assets/img/1200/service/icons/calculator.png';
        this.tools_1200 = 'assets/img/1200/service/icons/tools.png';
        this.pumpjack_1200 = 'assets/img/1200/service/icons/pumpjack.png';
        this.lighting_1200 = 'assets/img/1200/service/icons/lighting.png';
        this.solar_1200 = 'assets/img/1200/service/icons/solar.png';
        //body icons 768 - 1200
        this.gearIcon_768 = 'assets/img/768/services/icons/gear.png';
        this.calculator_768 = 'assets/img/768/services/icons/calculator.png';
        this.tools_768 = 'assets/img/768/services/icons/tools.png';
        this.pumpjack_768 = 'assets/img/768/services/icons/pumpjack.png';
        this.lighting_768 = 'assets/img/768/services/icons/lighting.png';
        this.solar_768 = 'assets/img/768/services/icons/solar.png';
        //body icons 0 - 768
        this.gearIcon_576 = 'assets/img/576/services/icons/gear.png';
        this.calculator_576 = 'assets/img/576/services/icons/calculator.png';
        this.tools_576 = 'assets/img/576/services/icons/tools.png';
        this.pumpjack_576 = 'assets/img/576/services/icons/pumpjack.png';
        this.lighting_576 = 'assets/img/576/services/icons/lighting.png';
        this.solar_576 = 'assets/img/576/services/icons/lighting.png';
        //footer images
        this.phoneImg = 'assets/img/1920/headerAndFooter/phone_1920.png';
        this.emailImg = 'assets/img/1920/headerAndFooter/email_1920.png';
        this.linkedInImg = 'assets/img/1920/headerAndFooter/linkedin_1920.png';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ServicesComponent.prototype, "onResize", null);
    ServicesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-services',
            template: __webpack_require__("../../../../../src/app/components/services/services.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/services/services.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/signin/matchOtherValidator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = matchOtherValidator;
function matchOtherValidator(otherControlName) {
    var thisControl;
    var otherControl;
    return function matchOtherValidate(control) {
        if (!control.parent) {
            return null;
        }
        // Initializing the validator.
        if (!thisControl) {
            thisControl = control;
            otherControl = control.parent.get(otherControlName);
            if (!otherControl) {
                throw new Error('matchOtherValidator(): other control is not found in parent group');
            }
            otherControl.valueChanges.subscribe(function () {
                thisControl.updateValueAndValidity();
            });
        }
        if (!otherControl) {
            return null;
        }
        if (otherControl.value !== thisControl.value) {
            return {
                matchOther: true
            };
        }
        return null;
    };
}


/***/ }),

/***/ "../../../../../src/app/components/signin/signin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input::-webkit-input-placeholder {\r\n  color: gray;\r\n  font-style: italic;\r\n}\r\n  input:-ms-input-placeholder {\r\n  color: gray;\r\n  font-style: italic;\r\n}\r\n  input::placeholder {\r\n  color: gray;\r\n  font-style: italic;\r\n}\r\n  input:focus::-webkit-input-placeholder { color:transparent; }\r\n  input:focus:-moz-placeholder { color:transparent; } /* FF 4-18 */\r\n  input:focus::-moz-placeholder { color:transparent; } /* FF 19+ */\r\n  input:focus:-ms-input-placeholder { color:transparent; } /* IE 10+ */\r\n\r\n#cover {\r\n  background: url('https://i.imgur.com/1CNbOMG.jpg') center center no-repeat;\r\n  background-size: cover;\r\n  height: 750px;\r\n  text-align: center;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n\r\ninput.ng-touched.ng-invalid {border:solid red 1px;}\r\ninput.ng-touched.ng-valid {border:solid green 1px;}\r\n#cover-caption {\r\n  width: 100%;\r\n}\r\n\r\n.form-element-height {\r\n  height:3.5rem;\r\n}\r\n\r\n.template-footer {\r\n  display:block;\r\n}\r\n\r\n.custom-footer {\r\n  height:210px;\r\n  background-color:#2f3032\r\n}\r\n\r\na.footer_href {\r\n  color: #ffffff;\r\n  text-decoration: none;\r\n}\r\n\r\nspan.footer-text {\r\n  color:white;\r\n}\r\n\r\n.footer-row {\r\n  margin-right:0px!important;\r\n  margin-left:0px!important\r\n}\r\n\r\n.max-height {\r\n  height: 100%;\r\n}\r\n.form-style {\r\n  background-color: white;\r\n  border-radius: 25px;\r\n}\r\n.rocket-style{\r\n  background-color: white;\r\n  padding: 10px;\r\n  border-radius: 75px;\r\n}\r\n.form-margin {\r\n  margin-top: -60px;\r\n}\r\n.error-color{\r\n  color:#d9534f;\r\n}\r\n.cursor-pointer{\r\n  cursor:pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/signin/signin.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <section id=\"cover\">\n    <div id=\"cover-caption\">\n      <div id=\"container\" class=\"container\">\n        <div [ngSwitch]=\"windowType\">\n          <!-- START ForgotPass Section -->\n          <div *ngSwitchCase=\"1\">\n              <div class=\"row justify-content-center\">\n                  <div class=\"col-11 col-md-6 col-lg-5 form-style\">\n                    <div class=\"position-relative form-margin\">\n                      <img  class=\"img-responsive rocket-style\" src=\"https://i.imgur.com/zl9teOq.png\">\n                      <p class=\"h5\">Customer Portal Forgot Password</p>\n                    </div>\n                    <form [formGroup]=\"forgotPassForm\" novalidate (ngSubmit)=\"submit()\">\n                      <div class=\"form-group form-element-height\">\n                        <input class=\"form-control\" type=\"text\" name=\"companyName\" formControlName=\"companyName\" placeholder=\"Company name\"/>\n                        <div class=\"form-control-feedback error-color\" *ngIf=\"forgotPassForm.controls['companyName'].invalid && forgotPassForm.controls['companyName'].touched\">\n                          Company name is required\n                        </div>\n                      </div>\n                      <div class=\"form-group form-element-height\">\n                        <input class=\"form-control\" type=\"email\" name=\"email\" formControlName=\"userEmail\" placeholder=\"Email\" />\n                        <div class=\"form-control-feedback error-color\" *ngIf=\"forgotPassForm.controls['userEmail'].invalid && forgotPassForm.controls['userEmail'].touched\">\n                          Invalid email address\n                        </div>\n                      </div>\n                      <div>\n                        <button class=\"btn btn-warning form-control\" [disabled]=\"forgotPassForm.invalid\">\n                          Send\n                        </button>\n                      </div>\n                    </form>\n                    <div class=\"d-flex justify-content-around\">\n                      <a class=\"cursor-pointer\" (click)=\"setMenuValue(0)\">Login</a>\n                    </div>\n                  </div>\n                </div>\n          </div>\n          <!-- END ForgotPass Section -->\n          <!-- START Register section -->\n          <div *ngSwitchCase=\"2\">\n            <div class=\"row justify-content-center\">\n                <div class=\"col-11 col-md-6 col-lg-5 form-style\">\n                  <div class=\"position-relative form-margin\">\n                    <img  class=\"img-responsive rocket-style\" src=\"https://i.imgur.com/zl9teOq.png\">\n                    <p class=\"h5\">Customer Portal Register</p>\n                  </div>\n                  <form [formGroup]=\"registerForm\" novalidate (ngSubmit)=\"onRegisterSubmit()\">\n                    <div class=\"form-group\">\n                      <div class=\"row\">\n                        <div class=\"col-6 form-element-height\">\n                          <input class=\"form-control\" type=\"email\" name=\"email\" formControlName=\"userEmail\" placeholder=\"Email\" />\n                          <div class=\"form-control-feedback error-color\" *ngIf=\"registerForm.controls['userEmail'].errors && registerForm.controls['userEmail'].touched\">\n                            <div *ngIf=\"registerForm.controls['userEmail'].errors.required\">Email is required</div>\n                            <div *ngIf=\"!registerForm.controls['userEmail'].errors.required && registerForm.controls['userEmail'].errors.email\">Email is invalid</div>\n                          </div>\n                        </div>\n                        <div class=\"col-6 form-element-height\">\n                          <input class=\"form-control\" type=\"text\" formControlName=\"confirmUserEmail\" placeholder=\"Confirm Email\"/>\n                          <div class=\"form-control-feedback error-color\" *ngIf=\"registerForm.controls['confirmUserEmail'].invalid && registerForm.controls['confirmUserEmail'].touched\">\n                            <div class=\"text-left pl-1\" *ngIf=\"!registerForm.controls['confirmUserEmail'].errors.required && registerForm.controls['confirmUserEmail'].errors.matchOther\">Email is not confirm</div>\n                            <div class=\"text-left pl-1\" *ngIf=\"registerForm.controls['confirmUserEmail'].errors.required\">Confirm email is required</div>\n                            <!--\n                            <div class=\"text-left pl-1\" *ngIf=\"!registerForm.controls['confirmUserEmail'].errors.required && registerForm.controls['confirmUserEmail'].errors.email\">Confirm email is invalid</div>\n                            -->\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"form-group\">\n                      <div class=\"row\">\n                        <div class=\"col-6 form-element-height\">\n                          <input class=\"form-control\" type=\"text\" name=\"userName\" formControlName=\"userName\" placeholder=\"User name\"/>\n                          <div class=\"form-control-feedback error-color\" *ngIf=\"registerForm.controls['userName'].invalid && registerForm.controls['userName'].touched\">\n                            User name is required\n                          </div>\n                        </div>\n                        <div class=\"col-6 form-element-height\">\n                          <input class=\"form-control\" type=\"text\" name=\"firstName\" formControlName=\"firstName\" placeholder=\"First name\"/>\n                          <div class=\"form-control-feedback error-color\" *ngIf=\"registerForm.controls['firstName'].invalid && registerForm.controls['firstName'].touched\">\n                            First Name is required\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"form-group\">\n                      <div class=\"row\">\n                        <div class=\"col-6 form-element-height\">\n                          <input class=\"form-control\" type=\"text\" name=\"companyName\" formControlName=\"companyName\" placeholder=\"Company name\"/>\n                          <div class=\"form-control-feedback error-color\" *ngIf=\"registerForm.controls['companyName'].invalid && registerForm.controls['companyName'].touched\">\n                            Company name is required\n                          </div>\n                        </div>\n                        <div class=\"col-6 form-element-height\">\n                          <input class=\"form-control\" type=\"text\" name=\"lastName\" formControlName=\"lastName\" placeholder=\"Last name\"/>\n                          <div class=\"form-control-feedback error-color\" *ngIf=\"registerForm.controls['lastName'].invalid && registerForm.controls['lastName'].touched\">\n                            Last name is required\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"form-group\">\n                      <div class=\"row\">\n                        <div class=\"col-6 form-element-height\">\n                          <input class=\"form-control\" type=\"text\" name=\"city\" formControlName=\"city\" placeholder=\"City\"/>\n                          <div class=\"form-control-feedback error-color\" *ngIf=\"registerForm.controls['city'].invalid && registerForm.controls['city'].touched\">\n                            City is required\n                          </div>\n                        </div>\n                        <div class=\"col-6 form-element-height\">\n                          <input class=\"form-control\" type=\"text\" formControlName=\"phoneNumber\" (keypress)=\"keyPress($event)\" placeholder=\"Phone number\"/>\n                          <div class=\"form-control-feedback error-color\" *ngIf=\"registerForm.controls['phoneNumber'].invalid && registerForm.controls['phoneNumber'].touched\">\n                            Invalid phone number\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"form-group\">\n                      <div class=\"row\">\n                        <div class=\"col-6 form-element-height\">\n                          <input class=\"form-control\" type=\"password\" name=\"password\" formControlName=\"userPassword\" placeholder=\"Password\" />\n                          <div class=\"form-control-feedback error-color\" *ngIf=\"registerForm.controls['userPassword'].invalid && registerForm.controls['userPassword'].touched\">\n                            <div *ngIf=\"registerForm.controls['userPassword'].errors.required\">Password is required</div>\n                            <div *ngIf=\"!registerForm.controls['userPassword'].errors.required && registerForm.controls['userPassword'].errors.minlength\">Minimum 6 characters</div>\n                          </div>\n                        </div>\n                        <div class=\"col-6 form-element-height\">\n                          <input class=\"form-control\" type=\"password\" formControlName=\"userConfirmPassword\" placeholder=\"Confirm password\"/>\n                          <div class=\"form-control-feedback error-color\" *ngIf=\"registerForm.controls['userConfirmPassword'].invalid && registerForm.controls['userConfirmPassword'].touched\">\n                            <div *ngIf=\"!registerForm.controls['userConfirmPassword'].errors.required && registerForm.controls['userConfirmPassword'].errors.matchOther\">Password is not confirm</div>\n                            <div *ngIf=\"registerForm.controls['userConfirmPassword'].errors.required\">Password is required</div>\n                            <!--\n                            <div *ngIf=\"registerForm.controls['userConfirmPassword'].errors.minlength\">Minimum 6 characters</div>\n                            -->\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div>\n                      <button class=\"btn btn-warning form-control\" [disabled]=\"registerForm.invalid\">\n                        Send\n                      </button>\n                    </div>\n                  </form>\n                  <div class=\"d-flex justify-content-around\">\n                    <a class=\"cursor-pointer\" (click)=\"setMenuValue(0)\">Login</a>\n                    <a class=\"cursor-pointer\" (click)=\"setMenuValue(1)\">Forgot password?</a>\n                  </div>\n                </div>\n              </div>\n          </div>\n          <!-- END Register Section -->\n          <!-- START Login Section -->\n          <div *ngSwitchDefault>\n            <div class=\"row justify-content-center\">\n              <div class=\"col-11 col-md-6 col-lg-5 form-style\">\n                <div class=\"position-relative form-margin\">\n                  <img  class=\"img-responsive rocket-style\" src=\"https://i.imgur.com/zl9teOq.png\">\n                  <p class=\"h5\">Customer Portal Login</p>\n                </div>\n                <form [formGroup]=\"loginForm\" novalidate (ngSubmit)=\"onLoginSubmit()\">\n                  <div class=\"form-group form-element-height\">\n                    <input class=\"form-control\" type=\"text\" name=\"companyName\" formControlName=\"companyName\" placeholder=\"Company name\"/>\n                    <div class=\"form-control-feedback error-color\" *ngIf=\"loginForm.controls['companyName'].invalid && loginForm.controls['companyName'].touched\">\n                      Company name is required\n                    </div>\n                  </div>\n                  <div class=\"form-group form-element-height\">\n                    <input class=\"form-control\" type=\"email\" name=\"email\" formControlName=\"userEmail\" placeholder=\"Email\" />\n                    <div class=\"form-control-feedback error-color\" *ngIf=\"loginForm.controls['userEmail'].invalid && loginForm.controls['userEmail'].touched\">\n                      Invalid email address\n                    </div>\n                  </div>\n                  <div class=\"form-group form-element-height\">\n                    <input class=\"form-control\" type=\"password\" name=\"password\" formControlName=\"userPassword\" placeholder=\"Password\" />\n                    <div class=\"form-control-feedback error-color\" *ngIf=\"loginForm.controls['userPassword'].invalid && loginForm.controls['userPassword'].touched\">\n                      <div *ngIf=\"loginForm.controls['userPassword'].errors.required\">Password is required</div>\n                      <div *ngIf=\"loginForm.controls['userPassword'].errors.minlength\">Password should be minimum 6 characters</div>\n                    </div>\n                  </div>\n                  <div>\n                    <button class=\"btn btn-warning form-control\" [disabled]=\"loginForm.invalid\">\n                      Send\n                    </button>\n                  </div>\n                </form>\n                <div class=\"d-flex justify-content-around\">\n                  <a class=\"cursor-pointer\" (click)=\"setMenuValue(2)\">Register</a>\n                  <a class=\"cursor-pointer\" (click)=\"setMenuValue(1)\">Forgot password?</a>\n                </div>\n              </div>\n            </div>\n          </div>\n          <!-- END Login Section -->\n        </div>\n      </div>\n    </div>\n  </section>\n</div>\n<footer *ngIf=\"sizeWindow > 992; else werticalFooter\">\n    <div class=\"custom-footer\">\n        <div class=\"d-flex align-items-center justify-content-around custom-footer-link max-height\">\n            <div class=\"p-1 bd-highlight\">\n              <div class=\"row align-items-center\">\n                <div class=\"col-4\">\n                  <img class=\"d-block\" [src]=\"phoneImg\" alt=\"phone:\" sr-only=\"phone number\">\n                </div>\n                <div class=\"col-8\">\n                  <span> <a href=\"tel:1.403.863.0893\" class=\"footer_href\">1.403.863.0893</a></span>\n                </div>\n              </div>\n            </div>\n            <div class=\"p-1 bd-highlight\">\n              <div class=\"row align-items-center\">\n                <div class=\"col-4\">\n                  <img class=\"d-block\" [src]=\"emailImg\" alt=\"email address\" sr-only=\"email\">\n                </div>\n                <div class=\"col-8\">\n                  <span><a class=\"footer_href\" href=\"mailto:info@ampx.ca\">info@ampx.ca</a></span>\n                </div>\n              </div>\n            </div>\n            <div class=\"p-1 bd-highlight\">\n              <div class=\"row align-items-center\">\n                <div class=\"col-3\">\n                  <img class=\"d-block\" [src]=\"linkedInImg\" alt=\"linkedIn\" sr-only=\"linked in account\">\n                </div>\n                <div class=\"col-9\">\n                  <span class=\"footer-text\">Follow us on <a href=\"https://www.linkedin.com/company/amp-x-consulting-inc.?trk=top_nav_home\" target=\"_blank\" class=\"footer_href\"><strong>LinkedIn</strong></a></span>\n                </div>\n              </div>\n            </div>\n            <div class=\"p-1 bd-highlight\">\n                <span class=\"footer-text\">AMP X Consulting Inc. &copy; {{year}} | All Rights Reserved</span>\n            </div>\n          </div>\n        </div>\n  </footer>\n  <ng-template class=\"template-footer\" #werticalFooter>\n    <div class=\"custom-footer\">\n      <div class=\"d-flex flex-column\">\n        <div class=\"row mt-2 footer-row\">\n          <div class=\"col-6\">\n            <div class=\"float-right\">\n              <img class=\"d-block\" [src]=\"phoneImg\" alt=\"phone:\" sr-only=\"phone number\">\n            </div>\n          </div>\n          <div class=\"col-6 mr-a\">\n            <span> <a href=\"tel:1.403.863.0893\" class=\"footer_href\">1.403.863.0893</a></span>\n          </div>\n        </div>\n        <div class=\"row mt-2 footer-row\">\n          <div class=\"col-6\">\n            <div class=\"float-right\">\n              <img class=\"d-block\" [src]=\"emailImg\" alt=\"email address\" sr-only=\"email\">\n            </div>\n          </div>\n          <div class=\"col-6\">\n            <span><a class=\"footer_href\" href=\"mailto:info@ampx.ca\">info@ampx.ca</a></span>\n          </div>\n        </div>\n        <div class=\"row mt-2 footer-row\">\n          <div class=\"col-6\">\n            <div class=\"float-right\">\n              <img class=\"d-block\" [src]=\"linkedInImg\" alt=\"linkedIn\" sr-only=\"linked in account\">\n            </div>\n          </div>\n          <div class=\"col-6\">\n            <span class=\"footer-text\">Follow us on <a href=\"https://www.linkedin.com/company/amp-x-consulting-inc.?trk=top_nav_home\" target=\"_blank\" class=\"footer_href\"><strong>LinkedIn</strong></a></span>\n          </div>\n        </div>\n        <div class=\"row mt-2 footer-row\">\n          <div class=\"col-12\">\n            <div class=\"d-flex justify-content-center\">\n              <span class=\"footer-text text-center\">AMP X Consulting Inc. &copy; {{year}} | All Rights Reserved</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/components/signin/signin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__matchOtherValidator__ = __webpack_require__("../../../../../src/app/components/signin/matchOtherValidator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng4_loading_spinner__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SigninComponent = (function () {
    function SigninComponent(flashMessage, router, authService, spinnerService) {
        this.flashMessage = flashMessage;
        this.router = router;
        this.authService = authService;
        this.spinnerService = spinnerService;
        this.windowType = 0;
        this.today = new Date();
        this.year = this.today.getFullYear();
        this.sizeWindow = window.innerWidth;
        //login form
        this.loginForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            "companyName": new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required),
            "userEmail": new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]("", [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].email
            ]),
            "userPassword": new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]("", [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(6)
            ])
        });
        //forgot pass form
        this.forgotPassForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            "companyName": new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required),
            "userEmail": new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]("", [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].pattern("/^(([^<>()\[\]\\.,;:\s@']+(\.[^<>()\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/")
            ]),
        });
        //register form
        this.registerForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            "companyName": new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required),
            "userEmail": new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]("", [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].email
            ]),
            "confirmUserEmail": new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]("", [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].email,
                Object(__WEBPACK_IMPORTED_MODULE_4__matchOtherValidator__["a" /* matchOtherValidator */])('userEmail')
            ]),
            "userName": new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required),
            "firstName": new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required),
            "lastName": new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required),
            "city": new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required),
            "phoneNumber": new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]("", [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(6)
            ]),
            "userPassword": new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]("", [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(6)
            ]),
            "userConfirmPassword": new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]("", [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(6),
                Object(__WEBPACK_IMPORTED_MODULE_4__matchOtherValidator__["a" /* matchOtherValidator */])('userPassword')
            ])
        });
    }
    SigninComponent.prototype.onResize = function (event) {
        event.target.innerWidth;
        this.sizeWindow = event.target.innerWidth;
    };
    SigninComponent.prototype.ngOnInit = function () {
        this.phoneImg = 'assets/img/1920/headerAndFooter/phone_1920.png';
        this.emailImg = 'assets/img/1920/headerAndFooter/email_1920.png';
        this.linkedInImg = 'assets/img/1920/headerAndFooter/linkedin_1920.png';
    };
    SigninComponent.prototype.setMenuValue = function (num) {
        this.windowType = num;
    };
    SigninComponent.prototype.keyPress = function (event) {
        var pattern = /[0-9\+\-\(\)\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    SigninComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        this.spinnerService.show();
        var user = {
            companyName: this.loginForm.value.companyName,
            email: this.loginForm.value.userEmail,
            password: this.loginForm.value.userPassword
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.spinnerService.hide();
                _this.flashMessage.show('You are now logged in.', { cssClass: 'alert-success', timeout: 3000, showCloseBtn: true });
                _this.router.navigate(['project']);
            }
            else {
                _this.spinnerService.hide();
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['signin']);
            }
        });
    };
    SigninComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            email: this.registerForm.value.userEmail,
            userName: this.registerForm.value.userName,
            firstName: this.registerForm.value.firstName,
            lastName: this.registerForm.value.lastName,
            companyName: this.registerForm.value.companyName,
            city: this.registerForm.value.city,
            phone: this.registerForm.value.phoneNumber,
            password: this.registerForm.value.userPassword
        };
        //Register user
        this.spinnerService.show();
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.spinnerService.hide();
                _this.flashMessage.show('You are now registered and can log in!', { cssClass: 'alert-success', timeout: 3000, showCloseBtn: true });
                _this.router.navigate(['/']);
            }
            else {
                _this.spinnerService.hide();
                _this.flashMessage.show('Something went wrong!!', { cssClass: 'alert-danger', timeout: 3000, showCloseBtn: true });
                _this.router.navigate(['/signin']);
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SigninComponent.prototype, "onResize", null);
    SigninComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__("../../../../../src/app/components/signin/signin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/signin/signin.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_6_ng4_loading_spinner__["Ng4LoadingSpinnerService"]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //for dev use
        /*
        return this.http.post('http://localhost:3000/users/register', user, {headers: headers})
        .map(res => res.json());
        */
        //for deploy use
        return this.http.post('users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        //for dev use
        /*
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/authenticate', user, {headers: headers})
          .map(res => res.json());
          //for deploy use
        */
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        //for dev use
        /*
        return this.http.get('http://localhost:3000/users/profile', {headers: headers})
          .map(res => res.json());
        //for deploy
        */
        return this.http.get('users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/cable.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CableService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CableService = (function () {
    function CableService(http) {
        this.http = http;
    }
    CableService.prototype.getCables = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        //for dev use
        /*
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/project/'+id+'/cables', {headers: headers})
          .map(res => res.json());
        //for deploy
        */
        headers.append('Content-Type', 'application/json');
        return this.http.get('project/' + id + '/cables', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    CableService.prototype.getElectricalName = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        //for dev use
        /*
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/project/'+id+'/electrical', {headers: headers})
          .map(res => res.json());
        //for deploy
        */
        headers.append('Content-Type', 'application/json');
        return this.http.get('project/' + id + '/electrical', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    CableService.prototype.createCable = function (id, cable) {
        //  createElectrical(id, electrical){
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        //for dev use
        /*
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/project/'+id+'/cable-create/', cable, {headers: headers})
          .map(res => res.json());
        //for deploy
        */
        headers.append('Content-Type', 'application/json');
        return this.http.post('project/' + id + '/cable-create/', cable, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    CableService.prototype.getCableItem = function (projectId, cableId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        //for dev use
        /*
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/project/'+projectId+'/cables/'+cableId, {headers: headers})
          .map(res => res.json());
        //for deploy
        */
        headers.append('Content-Type', 'application/json');
        return this.http.get('project/' + projectId + '/cables/' + cableId, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    CableService.prototype.updateCabelItem = function (projectId, cabelId, cabelItem) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        //for dev use
        /*
        headers.append('Content-Type', 'application/json');
        return this.http.patch('http://localhost:3000/project/'+ projectId+'/cable-update/'+cabelId, cabelItem, {headers: headers})
          .map(res => res.json());
        //for deploy
        */
        headers.append('Content-Type', 'application/json');
        return this.http.patch('project/' + projectId + '/cable-update/' + cabelId, cabelItem, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    CableService.prototype.deleteCableItem = function (projectId, cableId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        //for dev use
        /*
        headers.append('Content-Type', 'application/json');
        return this.http.delete('http://localhost:3000/project/' + projectId + '/cables/' + cableId, {headers: headers})
          .map(res => res.json());
        //for deploy
        */
        headers.append('Content-Type', 'application/json');
        return this.http.delete('project/' + projectId + '/cables/' + cableId, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    CableService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], CableService);
    return CableService;
}());



/***/ }),

/***/ "../../../../../src/app/services/contact-us.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactUsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactUsService = (function () {
    function ContactUsService(http) {
        this.http = http;
    }
    ContactUsService.prototype.sendContactUsEmail = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        //console.log(user);
        headers.append('Content-Type', 'application/json');
        //for dev use
        /*
        return this.http.post('http://localhost:3000/users/contacts', user, {headers: headers})
        .map(res => res.json());
        //for deploy use
        */
        return this.http.post('users/contacts', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ContactUsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], ContactUsService);
    return ContactUsService;
}());



/***/ }),

/***/ "../../../../../src/app/services/electrical.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElectricalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ElectricalService = (function () {
    function ElectricalService(http) {
        this.http = http;
    }
    ElectricalService.prototype.getElectricals = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        //for dev use
        /*
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/project/'+id+'/electricals', {headers: headers})
          .map(res => res.json());
        //for deploy
        */
        headers.append('Content-Type', 'application/json');
        return this.http.get('project/' + id + '/electricals', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ElectricalService.prototype.createElectrical = function (id, electrical) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        //for dev use
        /*
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/project/'+id+'/electrical-create/', electrical, {headers: headers})
          .map(res => res.json());
        //for deploy
        */
        headers.append('Content-Type', 'application/json');
        return this.http.post('project/' + id + '/electrical-create/', electrical, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ElectricalService.prototype.getElectricalItem = function (projectId, electricalId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        //for dev use
        /*
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/project/'+projectId+'/electricals/'+electricalId, {headers: headers})
          .map(res => res.json());
        //for deploy
        */
        headers.append('Content-Type', 'application/json');
        return this.http.get('project/' + projectId + '/electricals/' + electricalId, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ElectricalService.prototype.updateElectricalItem = function (projectId, electricalId, electricalItem) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        //for dev use
        /*
        headers.append('Content-Type', 'application/json');
        return this.http.patch('http://localhost:3000/project/'+ projectId+'/electrical-update/'+electricalId, electricalItem, {headers: headers})
          .map(res => res.json());
        //for deploy
        */
        headers.append('Content-Type', 'application/json');
        return this.http.patch('project/' + projectId + '/electrical-update/' + electricalId, electricalItem, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ElectricalService.prototype.deleteElectricalItem = function (projectId, electricalId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        //for dev use
        /*
        headers.append('Content-Type', 'application/json');
        return this.http.delete('http://localhost:3000/project/' + projectId + '/electricals/' + electricalId, {headers: headers})
          .map(res => res.json());
        //for deploy
        */
        headers.append('Content-Type', 'application/json');
        return this.http.delete('project/' + projectId + '/electricals/' + electricalId, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ElectricalService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], ElectricalService);
    return ElectricalService;
}());



/***/ }),

/***/ "../../../../../src/app/services/project.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectService = (function () {
    function ProjectService(http) {
        this.http = http;
    }
    ProjectService.prototype.getProject = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        //for dev use
        /*
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/project', {headers: headers})
          .map(res => res.json());
        //for deploy
        */
        headers.append('Content-Type', 'application/json');
        return this.http.get('project', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ProjectService.prototype.postProject = function (project) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        //for dev use
        /*
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/project/project-create', project, {headers: headers})
          .map(res => res.json());
        //for deploy
        */
        headers.append('Content-Type', 'application/json');
        return this.http.post('project/project-create', project, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ProjectService.prototype.updateProject = function (id, project) {
        //for dev use
        /*
        return this.http.put('http://localhost:3000/project/'+ id, project)
        .map(res => res.json());
        //for deploy
        */
        return this.http.put('project/' + id, project)
            .map(function (res) { return res.json(); });
    };
    ProjectService.prototype.deleteProject = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        //for dev use
        /*
        headers.append('Content-Type', 'application/json');
        return this.http.delete('http://localhost:3000/project/'+ id, {headers: headers})
          .map(res => res.json());
        //for deploy
        */
        headers.append('Content-Type', 'application/json');
        return this.http.delete('project/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ProjectService.prototype.getProjectById = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        //for dev use
        /*
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/project/'+id, {headers: headers})
          .map(res => res.json());
        //for deploy
        */
        headers.append('Content-Type', 'application/json');
        return this.http.get('project/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ProjectService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], ProjectService);
    return ProjectService;
}());



/***/ }),

/***/ "../../../../../src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.email == undefined || user.userName == undefined || user.firstName == undefined ||
            user.lastName == undefined || user.companyName == undefined || user.city == undefined ||
            user.phone == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmeil = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email.toLowerCase());
    };
    ValidateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "../../../../../src/assets/fonts/Roboto-Bold.ttf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Roboto-Bold.e31fcf1885e371e19f57.ttf";

/***/ }),

/***/ "../../../../../src/assets/fonts/Roboto-Light.ttf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Roboto-Light.46e48ce0628835f68a73.ttf";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
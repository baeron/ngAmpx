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

module.exports = "<app-navbar></app-navbar>\n<div>\n  <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n</div>"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_project_project_component__ = __webpack_require__("../../../../../src/app/components/project/project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_electrical_service__ = __webpack_require__("../../../../../src/app/services/electrical.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_modals_projects_modal_projects_modal_component__ = __webpack_require__("../../../../../src/app/components/modals/projects-modal/projects-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_project_dashboard_project_dashboard_component__ = __webpack_require__("../../../../../src/app/components/project-dashboard/project-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_electrical_list_electrical_list_component__ = __webpack_require__("../../../../../src/app/components/electrical-list/electrical-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_electrical_item_electrical_item_component__ = __webpack_require__("../../../../../src/app/components/electrical-item/electrical-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_modals_electricals_modal_electricals_modal_component__ = __webpack_require__("../../../../../src/app/components/modals/electricals-modal/electricals-modal.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























//move to separate component
var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'project', component: __WEBPACK_IMPORTED_MODULE_10__components_project_project_component__["a" /* ProjectComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'project/:id', component: __WEBPACK_IMPORTED_MODULE_19__components_project_dashboard_project_dashboard_component__["a" /* ProjectDashboardComponent */] },
    { path: 'project/:id/electricals', component: __WEBPACK_IMPORTED_MODULE_20__components_electrical_list_electrical_list_component__["a" /* ElectricalListComponent */] },
    { path: 'project/:id/electricals/:electricalid', component: __WEBPACK_IMPORTED_MODULE_21__components_electrical_item_electrical_item_component__["a" /* ElectricalItemComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__guards_auth_guard__["a" /* AuthGuard */]] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_project_project_component__["a" /* ProjectComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_modals_projects_modal_projects_modal_component__["a" /* ProjectsModalComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_project_dashboard_project_dashboard_component__["a" /* ProjectDashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_electrical_list_electrical_list_component__["a" /* ElectricalListComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_electrical_item_electrical_item_component__["a" /* ElectricalItemComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_modals_electricals_modal_electricals_modal_component__["a" /* ElectricalsModalComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_16_angular2_flash_messages__["FlashMessagesModule"].forRoot()
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_13__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_17__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_14__services_project_service__["a" /* ProjectService */], __WEBPACK_IMPORTED_MODULE_15__services_electrical_service__["a" /* ElectricalService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/electrical-item/electrical-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "thead th {\r\n    font-size: 0.6rem;\r\n  }\r\n  tbody tr td  {\r\n    font-size: 0.6rem;\r\n  }\r\n  .achievements-wrapper {\r\n    height: auto; \r\n    overflow: auto;\r\n  }\r\n  \r\n  button.btnPlus {\r\n    border-radius: 0 0 0 0!important;\r\n    /*color: black;*/\r\n  }\r\n  \r\n  button.btnMinus {\r\n    border-radius: 0 .25rem .25rem 0!important;\r\n    /*color: black;*/\r\n  }\r\n  \r\n  select.selectForOpenModal {\r\n    border-radius: .25rem 0 0 .25rem!important;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/electrical-item/electrical-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" (window:resize)=\"onResize($event)\" *ngIf=\"electricalItem\">\n    <div class=\"d-flex justify-content-center pt-3\">\n      <h1>Electrical <strong>{{electricalItem?.equipmentTag}}</strong></h1>\n    </div>\n    <form (ngSubmit)=\"saveElectrical(electricalItem._id, electricalForm.value)\" #electricalForm=\"ngForm\">\n      <div class=\"row\">\n        <div class=\"col-12 col-xl-6 align-self-start\">\n          <div class=\"d-flex justify-content-center\">\n            <span class=\"h4\">Electrical Equipment Entry</span>\n          </div>\n            <div class=\"row\">\n              <div class=\"col-12 col-sm-3 align-self-end\">\n                <div class=\"form-group\">\n                  <label for=\"itemNumber\">Item number</label>\n                  <input type=\"text\" class=\"form-control\"  name=\"itemNumber\" disabled>\n                </div>\n              </div>\n              <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\n                <div class=\"form-group\">\n                  <label for=\"dateCreate\">Date added</label>\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"electricalItem.dateCreate\" name=\"dateCreate\">\n                </div>\n              </div>\n              <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\n                <div class=\"form-group\">\n                  <label for=\"revision\">Revision</label>\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"electricalItem.revision\" name=\"revision\">\n                </div>\n              </div>\n              <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\n                <div class=\"form-group\">\n                  <label for=\"quantity\">Quantity</label>\n                  <input type=\"number\" class=\"form-control\" [(ngModel)]=\"electricalItem.quantity\" name=\"quantity\">\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\n                <div class=\"form-group\">\n                  <label for=\"equipmentType\">Equipment Type</label>\n                  <div class=\"d-flex flex-row\">\n                    <select\n                      [disabled]=\"electricalItem.equipmentType.length == 0\"\n                      id=\"selectedEquipmentType\"\n                      class=\"form-control selectForOpenModal\"\n                      [(ngModel)]=\"electricalItem.selectedEquipmentType\"\n                      name=\"selectedEquipmentType\"\n                    >\n                      <option\n                        *ngFor=\"let currentEquipmentType of electricalItem.equipmentType\" \n                        [ngValue]=\"currentEquipmentType\"\n                        [selected]=\"currentEquipmentType==electricalItem.selectedEquipmentType\">\n                          {{currentEquipmentType}}\n                      </option>\n                    </select>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnPlus fa fa-plus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Add new item\"\n                      (click)=\"equipmentTypeModal.showAddModal()\"\n                    ></button>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnMinus fa fa-minus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Drop selected item\"\n                      (click)=\"equipmentTypeModal.showDropModal(dropElementFlag)\"\n                      [disabled]=\"electricalItem.equipmentType.length == 0\"\n                    ></button>\n                  </div>\n                </div>            \n              </div>\n              <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\n                <div class=\"form-group\">\n                  <label for=\"selectedPidDrawing\">Pid Drawing</label>\n                  <div class=\"d-flex flex-row\">\n                    <select \n                      [disabled]=\"electricalItem.pidDrawing.length == 0\"\n                      id=\"selectedPidDrawing\"\n                      class=\"form-control selectForOpenModal\"\n                      [(ngModel)]=\"electricalItem.selectedPidDrawing\"\n                      name=\"selectedPidDrawing\"\n                    >\n                      <option\n                        *ngFor=\"let currentPidDrawing of electricalItem.pidDrawing\" \n                        [ngValue]=\"currentPidDrawing\"\n                        [selected]=\"currentPidDrawing==electricalItem.selectedPidDrawing\">\n                          {{currentPidDrawing}}\n                      </option>\n                    </select>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnPlus fa fa-plus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Add new item\"\n                      (click)=\"pidDrawingModal.showAddModal()\"\n                    ></button>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnMinus fa fa-minus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Drop selected item\"\n                      (click)=\"pidDrawingModal.showDropModal(dropElementFlag)\"\n                      [disabled]=\"electricalItem.pidDrawing.length == 0\"\n                    ></button>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\n                <div class=\"form-group\">\n                  <label for=\"layoutDrawing\">Layout Drawing</label>\n                  <div class=\"d-flex flex-row\">\n                    <select [disabled]=\"electricalItem.layoutDrawing.length == 0\"\n                      id=\"selectedLayoutDrawing\"\n                      class=\"form-control selectForOpenModal\"\n                      [(ngModel)]=\"electricalItem.selectedLayoutDrawing\"\n                      name=\"selectedLayoutDrawing\"\n                    >\n                      <option\n                        *ngFor=\"let currentLayoutDrawing of electricalItem.layoutDrawing\" \n                        [ngValue]=\"currentLayoutDrawing\"\n                        [selected]=\"currentLayoutDrawing==electricalItem.selectedLayoutDrawing\">\n                          {{currentLayoutDrawing}}\n                      </option>\n                    </select>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnPlus fa fa-plus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Add new item\"\n                      (click)=\"layoutDrawingModal.showAddModal()\"\n                    ></button>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnMinus fa fa-minus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Drop selected item\"\n                      (click)=\"layoutDrawingModal.showDropModal(dropElementFlag)\"\n                      [disabled]=\"electricalItem.layoutDrawing.length == 0\"\n                    ></button>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\n                <div class=\"form-group\">\n                  <label for=\"sldDraving\">SLD Drawing</label>\n                  <div class=\"d-flex flex-row\">\n                    <select [disabled]=\"electricalItem.sldDraving.length == 0\"\n                      id=\"selectedSldDraving\"\n                      class=\"form-control selectForOpenModal\"\n                      [(ngModel)]=\"electricalItem.selectedSldDraving\"\n                      name=\"selectedSldDraving\"\n                    >\n                      <option\n                        *ngFor=\"let currentSldDraving of electricalItem.sldDraving\" \n                        [ngValue]=\"currentSldDraving\"\n                        [selected]=\"currentSldDraving==electricalItem.selectedSldDraving\">\n                          {{currentSldDraving}}\n                      </option>\n                    </select>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnPlus fa fa-plus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Add new item\"\n                      (click)=\"sldDravingModal.showAddModal()\"\n                    ></button>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnMinus fa fa-minus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Drop selected item\"\n                      (click)=\"sldDravingModal.showDropModal(dropElementFlag)\"\n                      [disabled]=\"electricalItem.sldDraving.length == 0\"\n                    ></button>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\n                <div class=\"form-group\">\n                  <label for=\"equipmentTag\">Equipment Tag</label>\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"electricalItem.equipmentTag\" name=\"equipmentTag\" >\n                </div>\n              </div>\n              <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\n                <div class=\"form-group\">\n                  <label for=\"equipmentTag2\">Equipment Tag 2</label>\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"electricalItem.equipmentTag\" name=\"equipmentTag2\" disabled>\n                </div>\n              </div>\n              <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\n                <div class=\"form-group\">\n                  <label for=\"parentTag\">Parent Tag</label>\n                  <select [disabled]=\"parentList?.length == 0\"\n                  id=\"selectedParentTag\"\n                  class=\"form-control selectForOpenModal\"\n                  [(ngModel)]=\"electricalItem.selectedParentTag\"\n                  name=\"selectedParentTag\"\n                >\n                  <option\n                    *ngFor=\"let currentParentTag of parentList\" \n                    [ngValue]=\"currentParentTag\"\n                    [selected]=\"currentParentTag==electricalItem.selectedParentTag\">\n                      {{currentParentTag}}\n                  </option>\n                </select>\n                </div>\n              </div>\n              <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\n                <div class=\"form-group\">\n                  <label for=\"equipmentNotes\">Equipment Notes</label>\n                  <input type=\"number\" class=\"form-control\" [(ngModel)]=\"electricalItem.equipmentNotes\" name=\"equipmentNotes\">\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\n                <div class=\"form-group\">\n                  <label for=\"locationArea\">Location/Area</label>\n                  <div class=\"d-flex flex-row\">\n                    <select [disabled]=\"electricalItem.locationArea.length == 0\"\n                      id=\"selectedLocationArea\"\n                      class=\"form-control selectForOpenModal\"\n                      [(ngModel)]=\"electricalItem.selectedLocationArea\"\n                      name=\"selectedLocationArea\"\n                    >\n                      <option\n                        *ngFor=\"let currentLocationArea of electricalItem.locationArea\" \n                        [ngValue]=\"currentLocationArea\"\n                        [selected]=\"currentLocationArea==electricalItem.selectedLocationArea\">\n                          {{currentLocationArea}}\n                      </option>\n                    </select>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnPlus fa fa-plus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Add new item\"\n                      (click)=\"locationAreaModal.showAddModal()\"\n                    ></button>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnMinus fa fa-minus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Drop selected item\"\n                      (click)=\"locationAreaModal.showDropModal(dropElementFlag)\"\n                      [disabled]=\"electricalItem.locationArea.length == 0\"\n                    >\n                    </button>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\n                <div class=\"form-group\">\n                  <label for=\"selectedEquipmentDescription\">Equipment Description</label>\n                  <div class=\"d-flex flex-row\">\n                    <select [disabled]=\"electricalItem.equipmentDescription.length == 0\"\n                      id=\"selectedEquipmentDescription\"\n                      class=\"form-control selectForOpenModal\"\n                      [(ngModel)]=\"electricalItem.selectedEquipmentDescription\"\n                      name=\"selectedEquipmentDescription\"\n                    >\n                      <option\n                        *ngFor=\"let currentEquipmentDescription of electricalItem.equipmentDescription\" \n                        [ngValue]=\"currentEquipmentDescription\"\n                        [selected]=\"currentEquipmentDescription==electricalItem.selectedEquipmentDescription\">\n                          {{currentEquipmentDescription}}\n                      </option>\n                    </select>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnPlus fa fa-plus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Add new item\"\n                      (click)=\"equipmentDescriptionModal.showAddModal()\"\n                    ></button>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnMinus fa fa-minus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Drop selected item\"\n                      (click)=\"equipmentDescriptionModal.showDropModal(dropElementFlag)\"\n                      [disabled]=\"electricalItem.equipmentDescription.length == 0\"\n                    ></button>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\n                <div class=\"form-group\">\n                  <label for=\"cloneTag\">Clone Tag</label>\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"electricalItem.cloneTag\" name=\"cloneTag\" disabled>\n                </div>\n              </div>\n              <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\n                <div class=\"form-group\">\n                  <label for=\"newTag\">New Tag</label>\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"electricalItem.newTag\" name=\"newTag\">\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\n                <div class=\"form-group\">\n                  <label for=\"length\">Length(mm)</label>\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"electricalItem.length\" name=\"length\" >\n                </div>\n              </div>\n              <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\n                <div class=\"form-group\">\n                  <label for=\"depth\">Depth(mm)</label>\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"electricalItem.depth\" name=\"depth\">\n                </div>\n              </div>\n              <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\n                <div class=\"form-group\">\n                  <label for=\"height\">Height(mm)</label>\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"electricalItem.height\" name=\"height\">\n                </div>\n              </div>\n              <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\n                <div class=\"form-group\">\n                  <label for=\"weight\">Weight(kg)</label>\n                  <input type=\"number\" class=\"form-control\" [(ngModel)]=\"electricalItem.weight\" name=\"weight\">\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\n                <div class=\"form-group\">\n                  <label for=\"coordForX\">X Coord(m)</label>\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"electricalItem.coordForX\" name=\"coordForX\" >\n                </div>\n              </div>\n              <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\n                <div class=\"form-group\">\n                  <label for=\"coordForY\">Y Coord(m)</label>\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"electricalItem.coordForY\" name=\"coordForY\">\n                </div>\n              </div>\n              <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\n                <div class=\"form-group\">\n                  <label for=\"coordForZ\">Z Coord(m)</label>\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"electricalItem.coordForZ\" name=\"coordForZ\">\n                </div>\n              </div>\n              <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\n                <div class=\"form-group\">\n                  <label for=\"heatDissipation\">Heat Dissipation (W)</label>\n                  <input type=\"number\" class=\"form-control\" [(ngModel)]=\"electricalItem.heatDissipation\" name=\"heatDissipation\">\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\n                <div class=\"form-group\">\n                  <label for=\"scenarioFirstLoadFactor\">Scenario 1 Load Factor %</label>\n                  <input type=\"number\" class=\"form-control\" [(ngModel)]=\"electricalItem.scenarioFirstLoadFactor\" name=\"scenarioFirstLoadFactor\" >\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-12 col-xl-6 align-self-start\">\n            <div class=\"d-flex justify-content-center\">\n              <span class=\"h4\">General Rating</span>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\n                <div class=\"form-group\">\n                  <label for=\"selectedPowerSystem\">Power System</label>\n                  <select\n                    id=\"selectedPowerSystem\"\n                    class=\"form-control\"\n                    [(ngModel)]=\"electricalItem.selectedPowerSystem\"\n                    (change)=\"typeChanged()\"\n                    name=\"selectedPowerSystem\"\n                  >\n                    <option\n                      *ngFor=\"let currentPowerSystem of electricalItem.powerSystem\" \n                      [ngValue]=\"currentPowerSystem\"\n                      [selected]=\"currentPowerSystem==electricalItem.selectedPowerSystem\"\n                    >\n                      {{currentPowerSystem}}\n                    </option>\n                  </select>\n                </div>\n              </div>\n              <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\n                <div class=\"form-group\">\n                  <label for=\"selectedVoltage\">Voltage</label>\n                  <div class=\"d-flex flex-row\">\n                    <select\n                      id=\"selectedVoltage\"\n                      class=\"form-control selectForOpenModal\"\n                      [(ngModel)]=\"electricalItem.selectedVoltage.name\"\n                      name=\"selectedVoltage\"\n                    >\n                      <option\n                        *ngFor=\"let currentVoltage of productsAfterChangeEvent\"\n                        [ngValue]=\"currentVoltage.name\"\n                        [selected]=\"currentVoltage.name == electricalItem.selectedVoltage.name\"\n                      >\n                        {{currentVoltage.name}}\n                      </option>\n                    </select>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnPlus fa fa-plus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Add new item\"\n                      (click)=\"voltageModal.showAddModal()\"\n                    ></button>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnMinus fa fa-minus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Drop selected item\"\n                      (click)=\"voltageModal.showDropModal(dropElementFlag)\"\n                      [disabled]=\"productsAfterChangeEvent.length == 0\"\n                    ></button>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\n                <div class=\"form-group\">\n                  <label for=\"totalPF\">Total % P.F.</label>\n                  <input type=\"number\" class=\"form-control\" [(ngModel)]=\"electricalItem.totalPF\" name=\"totalPF\">\n                </div>\n              </div>\n              <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\n                <div class=\"form-group\">\n                  <label for=\"totalEFF\">Total % EFF.</label>\n                  <input type=\"number\" class=\"form-control\" [(ngModel)]=\"electricalItem.totalEFF\" name=\"totalEFF\">\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\n                <div class=\"form-group\">\n                  <label for=\"nameplateRating\">Nameplate Rating</label>\n                  <input type=\"number\" class=\"form-control\" [(ngModel)]=\"electricalItem.nameplateRating\" name=\"nameplateRating\">\n                </div>\n              </div>\n              <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\n                <div class=\"form-group\">\n                  <label for=\"units\">Units</label>\n                  <select\n                    id=\"selectedUnits\"\n                    class=\"form-control\"\n                    [(ngModel)]=\"electricalItem.selectedUnits\"\n                    name=\"selectedUnits\"\n                  >\n                    <option\n                      *ngFor=\"let currentUnit of electricalItem.units\" \n                      [ngValue]=\"currentUnit\"\n                      [selected]=\"currentUnit==electricalItem.selectedUnits\"\n                    >\n                      {{currentUnit}}\n                    </option>\n                  </select>\n                </div>\n              </div>\n              <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\n                <div class=\"form-group\">\n                  <label for=\"selectedMotorSF\">Motor S.F.</label>\n                  <select\n                    id=\"selectedMotorSF\"\n                    class=\"form-control\"\n                    [(ngModel)]=\"electricalItem.selectedMotorSF\"\n                    name=\"selectedMotorSF\"\n                  >\n                    <option\n                      *ngFor=\"let currentMotorSF of electricalItem.motorSF\" \n                      [ngValue]=\"currentMotorSF\"\n                      [selected]=\"currentMotorSF==electricalItem.selectedMotorSF\"\n                    >\n                      {{currentMotorSF}}\n                    </option>\n                  </select>\n                </div>\n              </div>\n              <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\n                <div class=\"form-group\">\n                  <label for=\"motorCode\">Motor Code</label>\n                  <select\n                    id=\"selectedMotorCode\"\n                    class=\"form-control\"\n                    [(ngModel)]=\"electricalItem.selectedMotorCode\"\n                    name=\"selectedMotorCode\"\n                  >\n                    <option\n                      *ngFor=\"let currentMotorCode of electricalItem.motorCode\" \n                      [ngValue]=\"currentMotorCode\"\n                      [selected]=\"currentMotorCode==electricalItem.selectedMotorCode\"\n                    >\n                      {{currentMotorCode}}\n                    </option>\n                  </select>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\n                <div class=\"form-group\">\n                  <label for=\"selectedSccRating\">SCC Rating</label>\n                  <select\n                    id=\"selectedSccRating\"\n                    class=\"form-control\"\n                    [(ngModel)]=\"electricalItem.selectedSccRating\"\n                    name=\"selectedSccRating\"\n                  >\n                    <option\n                      *ngFor=\"let currentSccRating of electricalItem.sccRating\" \n                      [ngValue]=\"currentSccRating\"\n                      [selected]=\"currentSccRating==electricalItem.selectedSccRating\"\n                    >\n                      {{currentSccRating}}\n                    </option>\n                    </select>\n                </div>\n              </div>\n              <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\n                <div class=\"form-group\">\n                  <label for=\"selectedEnclosureRating\">Enclosure Rating</label>\n                  <select\n                  id=\"selectedEnclosureRating\"\n                  class=\"form-control\"\n                  [(ngModel)]=\"electricalItem.selectedEnclosureRating\"\n                  name=\"selectedEnclosureRating\"\n                  >\n                    <option\n                      *ngFor=\"let currentEnclosureRating of electricalItem.enclosureRating\" \n                      [ngValue]=\"currentEnclosureRating\"\n                      [selected]=\"currentEnclosureRating==electricalItem.selectedEnclosureRating\"\n                    >\n                      {{currentEnclosureRating}}\n                    </option>\n                  </select>\n                </div>\n              </div>\n              <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\n                <div class=\"form-group\">\n                  <label for=\"loadFactor\">Load Factor (%)</label>\n                  <input type=\"number\" class=\"form-control\" [(ngModel)]=\"electricalItem.loadFactor\" name=\"loadFactor\">\n                </div>\n              </div>\n              <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\n                <div class=\"form-group\">\n                  <label for=\"selectedLoadDuty\">Load Duty</label>\n                  <select\n                    id=\"selectedLoadDuty\"\n                    class=\"form-control\"\n                    [(ngModel)]=\"electricalItem.selectedLoadDuty\"\n                    name=\"selectedLoadDuty\"\n                    >\n                    <option\n                      *ngFor=\"let currentLoadDuty of electricalItem.loadDuty\" \n                      [ngValue]=\"currentLoadDuty\"\n                      [selected]=\"currentLoadDuty==electricalItem.selectedLoadDuty\"\n                    >\n                      {{currentLoadDuty}}\n                    </option>\n                  </select>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-12 col-sm-6 align-self-end\">\n                <div class=\"row\">\n                  <div class=\"col-12 col-sm-6 align-self-end\" *ngIf=\"electricalItem\">\n                    <div class=\"form-group\">\n                      <label for=\"ambientTemp\">Ambient Temp (°C)</label>\n                      <input id=\"ambientTemp\" type=\"number\" class=\"form-control\" [(ngModel)]=\"electricalItem.ambientTemp\" name=\"ambientTemp\">\n                    </div>\n                  </div>\n                  <div class=\"col-12 col-sm-6 align-self-end\" *ngIf=\"electricalItem\">\n                    <div class=\"form-group\">\n                      <label for=\"selectedTerminationTemp\">Termination Temp (°C)</label>\n                      <select\n                        id=\"selectedTerminationTemp\"\n                        class=\"form-control\"\n                        [(ngModel)]=\"electricalItem.selectedTerminationTemp\"\n                        name=\"selectedTerminationTemp\"\n                      >\n                        <option\n                          *ngFor=\"let currentTerminationTemp of electricalItem.terminationTemp\" \n                          [ngValue]=\"currentTerminationTemp\"\n                          [selected]=\"currentTerminationTemp==electricalItem.selectedTerminationTemp\"\n                        >\n                          {{currentTerminationTemp}}\n                        </option>\n                      </select>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-12 col-sm-6 align-self-end\" *ngIf=\"electricalItem\">\n                    <div class=\"form-group\">\n                      <label for=\"operationTempMin\">Operating T Min.(°C)</label>\n                      <input id=\"operationTempMin\" type=\"number\" class=\"form-control\" [(ngModel)]=\"electricalItem.operationTempMin\" name=\"operationTempMin\">\n                    </div>\n                  </div>\n                  <div class=\"col-12 col-sm-6 align-self-end\" *ngIf=\"electricalItem\">\n                    <div class=\"form-group\">\n                      <label for=\"operationTempMax\">Operating T Max.(°C)</label>\n                      <input id=\"operationTempMax\" type=\"number\" class=\"form-control\" [(ngModel)]=\"electricalItem.operationTempMax\" name=\"operationTempMax\">\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-12 col-sm-6 align-self-end\" *ngIf=\"electricalItem\">\n                    <div class=\"form-group\">\n                      <label for=\"selectedInsulDescription\">Insul. Designation</label>\n                      <select\n                        id=\"selectedInsulDescription\"\n                        class=\"form-control\"\n                        [(ngModel)]=\"electricalItem.selectedInsulDescription\"\n                        name=\"selectedInsulDescription\"\n                      >\n                        <option\n                          *ngFor=\"let currentInsulDescription of electricalItem.insulDescription\" \n                          [ngValue]=\"currentInsulDescription\"\n                          [selected]=\"currentInsulDescription==electricalItem.selectedInsulDescription\"\n                        >\n                          {{currentInsulDescription}}\n                        </option>\n                      </select>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-12 col-sm-6 align-self-end\" style=\"border: 1px solid; border-radius: 8px\">\n                <div class=\"row d-flex justify-content-center\" style=\"padding-bottom: 1.3rem!important;\">\n                  <label><strong>Equipment Hazloc Rating</strong></label>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-3\">\n                    <label><strong>{{electricalItem?.selectedHazlocClass}}</strong></label>\n                  </div>\n                  <div class=\"col-3\">\n                    <label><strong>{{electricalItem?.selectedHazlocZone}}</strong></label>\n                  </div>\n                  <div class=\"col-3\">\n                    <label><strong>{{electricalItem?.selectedHazlocGroup}}</strong></label>\n                  </div>\n                  <div class=\"col-3\">\n                    <label><strong>{{electricalItem?.selectedHazlocTemperature}}</strong></label>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-12 col-sm-6 align-self-end\" *ngIf=\"electricalItem\">\n                    <div class=\"form-group\">\n                      <label for=\"selectedHazlocClass\">Hazloc Class</label>\n                      <select\n                        id=\"selectedHazlocClass\"\n                        class=\"form-control selectForOpenModal\"\n                        [(ngModel)]=\"electricalItem.selectedHazlocClass\"\n  \n                        (ngModelChange)=\"optionChanged($event)\"\n                        name=\"selectedHazlocClass\"\n                      >\n                        <option\n                          *ngFor=\"let currentHazlocClass of electricalItem.hazlocClass\" \n                          [ngValue]=\"currentHazlocClass\"\n                          [selected]=\"currentHazlocClass==electricalItem.selectedHazlocClass\"\n                        >\n                          {{currentHazlocClass}}\n                        </option>\n                      </select>\n                    </div>\n                  </div>\n                  <div class=\"col-12 col-sm-6 align-self-end\" *ngIf=\"electricalItem\">\n                    <div class=\"form-group\">\n                      <label for=\"selectedHazlocZone\">Hazloc Zone</label>\n                      <div class=\"d-flex flex-row\">\n                        <select \n                          [disabled]=\"electricalItem.selectedHazlocClass == electricalItem.hazlocClass[0] || !electricalItem.selectedHazlocClass\"\n                          id=\"selectedHazlocZone\"\n                          class=\"form-control selectForOpenModal\"\n                          [(ngModel)]=\"electricalItem.selectedHazlocZone\"\n                          #selectedHazlocZone=\"ngModel\"\n                          name=\"selectedHazlocZone\"\n                        >\n                          <option\n                            *ngFor=\"let currentHazlocZone of electricalItem.hazlocZone\" \n                            [ngValue]=\"currentHazlocZone\"\n                            [selected]=\"currentHazlocZone==electricalItem.selectedHazlocZone\"\n                          >\n                            {{currentHazlocZone}}\n                          </option>\n                        </select>\n                        <button\n                          type=\"button\"\n                          class=\"btn btn-outline-secondary btnPlus fa fa-plus\"\n                          data-toggle=\"tooltip\"\n                          data-placement=\"top\"\n                          title=\"Add new item\"\n                          [disabled]=\"!electricalItem.selectedHazlocClass || electricalItem.selectedHazlocClass == 'General'\"\n                          (click)=\"hazlocZoneModal.showAddModal()\"\n                        ></button>\n                        <button\n                          type=\"button\"\n                          class=\"btn btn-outline-secondary btnMinus fa fa-minus\"\n                          data-toggle=\"tooltip\"\n                          data-placement=\"top\"\n                          title=\"Drop selected item\"\n                          (click)=\"hazlocZoneModal.showDropModal(dropElementFlag)\"\n                          [disabled]=\"electricalItem.hazlocZone.length == 0 || !electricalItem.selectedHazlocClass || electricalItem.selectedHazlocClass == 'General'\"\n                        ></button>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-12 col-sm-6 align-self-end\" *ngIf=\"electricalItem\">\n                    <div class=\"form-group\">\n                      <label for=\"selectedHazlocGroup\">Hazloc Group</label>\n                      <select [disabled]=\"electricalItem.selectedHazlocClass == electricalItem.hazlocClass[0] || !electricalItem.selectedHazlocClass\"\n                        id=\"selectedHazlocGroup\"\n                        class=\"form-control selectForOpenModal\"\n                        [(ngModel)]=\"electricalItem.selectedHazlocGroup\"\n                        #selectedHazlocGroup=\"ngModel\"\n                        name=\"selectedHazlocGroup\"\n                      >\n                        <option\n                          *ngFor=\"let currentHazlocGroup of electricalItem.hazlocGroup\" \n                          [ngValue]=\"currentHazlocGroup\"\n                          [selected]=\"currentHazlocGroup==electricalItem.selectedHazlocGroup\"\n                        >\n                          {{currentHazlocGroup}}\n                        </option>\n                      </select>\n                    </div>\n                  </div>\n                  <div class=\"col-12 col-sm-6 align-self-end\" *ngIf=\"electricalItem\">\n                    <div class=\"form-group\">\n                      <label for=\"selectedHazlocTemperature\">Hazloc Temperature</label>\n                      <div class=\"d-flex flex-row\">\n                        <select [disabled]=\"electricalItem.selectedHazlocClass == electricalItem.hazlocClass[0] || !electricalItem.selectedHazlocClass\"\n                          id=\"selectedHazlocTemperature\"\n                          class=\"form-control selectForOpenModal\"\n                          [(ngModel)]=\"electricalItem.selectedHazlocTemperature\"\n                          #selectedHazlocTemperature=\"ngModel\"\n                          name=\"selectedHazlocTemperature\"\n                        >\n                          <option\n                            *ngFor=\"let currentHazlocTemperature of electricalItem.hazlocTemperature\" \n                            [ngValue]=\"currentHazlocTemperature\"\n                            [selected]=\"currentHazlocTemperature==electricalItem.selectedHazlocTemperature\"\n                          >\n                            {{currentHazlocTemperature}}\n                          </option>\n                        </select>\n                        <button\n                          type=\"button\"\n                          class=\"btn btn-outline-secondary btnPlus fa fa-plus\"\n                          data-toggle=\"tooltip\"\n                          data-placement=\"top\"\n                          title=\"Add new item\"\n                          [disabled]=\"!electricalItem.selectedHazlocClass || electricalItem.selectedHazlocClass == 'General'\"\n                          (click)=\"hazlocTemperatureModal.showAddModal()\"\n                        ></button>\n                        <button\n                          type=\"button\"\n                          class=\"btn btn-outline-secondary btnMinus fa fa-minus\"\n                          data-toggle=\"tooltip\"\n                          data-placement=\"top\"\n                          title=\"Drop selected item\"\n                          (click)=\"hazlocTemperatureModal.showDropModal(dropElementFlag)\"\n                          [disabled]=\"electricalItem.hazlocTemperature.length == 0 || !electricalItem.selectedHazlocClass || electricalItem.selectedHazlocClass == 'General'\"\n                        ></button>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n      </div>\n      <div class=\"d-flex justify-content-end\">\n        <!--<div class=\"d-flex justify-content-end\">-->\n          <div class=\"mr-auto p-2\">\n            <a routerLink=\"/project/{{projectId}}/electricals/\" class=\"btn btn-primary\">Back</a>\n          </div>\n          <div class=\"p-2 form-group\">\n            <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!electricalForm.form.valid\">Update/Create</button>\n          </div>\n      <!--  </div>-->\n  <!--      <div class=\"form-group\">\n          <a routerLink=\"/project/{{projectId}}/electricals/\" class=\"btn btn-primary\">Back</a>\n          <button class=\"btn btn-danger\">Delete</button>\n          <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!electricalForm.form.valid\">Update/Create</button>\n        </div>\n      -->\n      </div>\n      <div *ngIf=\"sizeWindow > 576; else werticalTable\">\n        <div class=\"row achievements-wrapper\">\n          <table class=\"table table-bordered\">\n          <thead>\n            <tr>\n              <th>Rev.</th>\n              <th>Equipment Tag</th>\n              <th>Equipment Description</th>\n              <th>Load Type</th>\n              <th>System Voltage</th>\n              <th>Power System</th>\n              <th>Nameplate Rating</th>\n              <th>Units</th>\n              <th>Total % PF</th>\n              <th>Total % EFF</th>\n              <th>Motor SF</th>\n              <th>Motor Code</th>\n              <th>Load Factor %</th>\n              <th>Load Duty</th>\n              <th>Total Connected FLA</th>\n              <th>Total Connected KW</th>\n              <th>Total Connected KVAR</th>\n              <th>Total Connected KVA</th>\n              <th>Total Demand FLA</th>\n              <th>Total Demand KW</th>\n              <th>Total Demand KVAR</th>\n              <th>Total Demand KVA</th>\n              <th>Total Scenario 1 Load Factor %</th>\n              <th>Total Scenario 1 FLA</th>\n              <th>Total Scenario 1 KW</th>\n              <th>Total Scenario 1 KVAR</th>\n              <th>Total Scenario 1 KVA</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td>{{electricalItem?.revision}}</td>                         <!-- Rev. -->\n              <td>{{electricalItem?.equipmentTag}}</td>                     <!-- Equipment Tag -->\n              <td>{{electricalItem?.selectedEquipmentDescription}}</td>     <!-- Equipment Description -->\n              <td>{{electricalItem?.selectedEquipmentType}}</td>            <!-- Load Type -->\n              <td>{{electricalItem?.selectedVoltage?.name}}</td>             <!-- System Voltage -->\n              <td>{{electricalItem?.selectedPowerSystem}}</td>              <!-- Power System -->\n              <td>{{electricalItem?.nameplateRating}}</td>                  <!-- Nameplate Rating -->\n              <td>{{electricalItem?.selectedUnits}}</td>                    <!-- Units -->\n              <td>{{electricalItem?.totalPF}}</td>                          <!-- Total % PF -->\n              <td>{{electricalItem?.totalEFF}}</td>                         <!-- Total % EFF -->\n              <td>{{electricalItem?.selectedMotorSF}}</td>                  <!-- Motor SF -->\n              <td>{{electricalItem?.selectedMotorCode}}</td>                <!-- Motor Code -->\n              <td>{{electricalItem?.loadFactor}}</td>                       <!-- Load Factor % -->\n              <td>{{electricalItem?.selectedLoadDuty}}</td>                 <!-- Load Duty -->\n              <td>{{electricalItem?.totalConectedFla}}</td>                 <!-- Total Connected FLA -->\n              <td>{{electricalItem?.totalConectedKW}}</td>                  <!-- Total Connected KW -->\n              <td>{{electricalItem?.totalConnectedKVAR}}</td>               <!-- Total Connected KVAR -->\n              <td>{{electricalItem?.totalConnectedKVA}}</td>                <!-- Total Connected KVA -->\n              <td>{{electricalItem?.totalDemandFLA}}</td>                   <!-- Total Demand FLA -->\n              <td>{{electricalItem?.totalDemandKW}}</td>                    <!-- Total Demand KW -->\n              <td>{{electricalItem?.totalDemandKVAR}}</td>                  <!-- Total Demand KVAR -->\n              <td>{{electricalItem?.totalDemandKVA}}</td>                    <!-- Total Demand KVA -->\n              <td>{{electricalItem?.scenarioFirstLoadFactor}}</td>          <!-- Total Scenario 1 Load Factor % -->\n              <td>{{electricalItem?.scenarioFirstFLA}}</td>                  <!-- Total Scenario 1 FLA -->\n              <td>{{electricalItem?.scenarioFirstKW}}</td>                   <!-- Total Scenario 1 KW -->\n              <td>{{electricalItem?.scenarioFirstKVAR}}</td>                 <!-- Total Scenario 1 KVAR -->\n              <td>{{electricalItem?.scenarioFirstKVA}}</td>                  <!-- Total Scenario 1 KVA -->\n            </tr>\n          </tbody>\n          </table>\n      </div>\n      </div>\n      <ng-template #werticalTable>\n        <div class=\"row\">\n          <table class=\"table table-bordered\">\n            <tr>\n              <td><strong>Rev.</strong></td>\n              <td>{{electricalItem?.revision}}</td>\n            </tr>\n            <tr>\n              <td><strong>Equipment Tag</strong></td>\n              <td>{{electricalItem?.equipmentTag}}</td>\n            </tr>\n            <tr>\n              <td><strong>Equipment Description</strong></td>\n              <td>{{electricalItem?.selectedEquipmentDescription}}</td>\n            </tr>\n            <tr>\n              <td><strong>Load Type</strong></td>\n              <td>{{electricalItem?.selectedEquipmentType}}</td>\n            </tr>\n            <tr>\n              <td><strong>System Voltage</strong></td>\n              <td>{{electricalItem?.selectedVoltage?.name}}</td>\n            </tr>\n            <tr>\n              <td><strong>Power System</strong></td>\n              <td>{{electricalItem?.selectedPowerSystem}}</td>\n            </tr>\n            <tr>\n              <td><strong>Nameplate Rating</strong></td>\n              <td>{{electricalItem?.nameplateRating}}</td>\n            </tr>\n            <tr>\n              <td><strong>Units</strong></td>\n              <td>{{electricalItem?.selectedUnits}}</td>\n            </tr>\n            <tr>\n              <td><strong>Total % PF</strong></td>\n              <td>{{electricalItem?.totalPF}}</td>\n            </tr>\n            <tr>\n              <td><strong>Total % EFF</strong></td>\n              <td>{{electricalItem?.totalEFF}}</td>\n            </tr>\n            <tr>\n              <td><strong>Motor SF</strong></td>\n              <td>{{electricalItem?.selectedMotorSF}}</td>\n            </tr>\n            <tr>\n              <td><strong>Motor Code</strong></td>\n              <td>{{electricalItem?.selectedMotorCode}}</td>\n            </tr>\n            <tr>\n              <td><strong>Load Factor %</strong></td>\n              <td>{{electricalItem?.loadFactor}}</td>\n            </tr>\n            <tr>\n              <td><strong>Load Duty</strong></td>\n              <td>{{electricalItem?.selectedLoadDuty}}</td>\n            </tr>\n            <tr>\n              <td><strong>Total Connected FLA</strong></td>\n              <td>{{electricalItem?.totalConectedFla}}</td>\n            </tr>\n            <tr>\n              <td><strong>Total Connected KW</strong></td>\n              <td>{{electricalItem?.totalConectedKW}}</td>\n            </tr>\n            <tr>\n              <td><strong>Total Connected KVAR</strong></td>\n              <td>{{electricalItem?.totalConnectedKVAR}}</td>\n            </tr>\n            <tr>\n              <td><strong>Total Connected KVA</strong></td>\n              <td>{{electricalItem?.totalConnectedKVA}}</td>\n            </tr>\n            <tr>\n              <td><strong>Total Demand FLA</strong></td>\n              <td>{{electricalItem?.totalDemandFLA}}</td>\n            </tr>\n            <tr>\n              <td><strong>Total Demand KW</strong></td>\n              <td>{{electricalItem?.totalDemandKW}}</td>\n            </tr>\n            <tr>\n              <td><strong>Total Demand KVAR</strong></td>\n              <td>{{electricalItem?.totalDemandKVAR}}</td>\n            </tr>\n            <tr>\n              <td><strong>Total Demand KVA</strong></td>\n              <td>{{electricalItem?.totalDemandKVA}}</td>\n            </tr>\n            <tr>\n              <td><strong>Total Scenario 1 Load Factor %</strong></td>\n              <td>{{electricalItem?.scenarioFirstLoadFactor}}</td>\n            </tr>\n            <tr>\n              <td><strong>Total Scenario 1 FLA</strong></td>\n              <td>{{electricalItem?.scenarioFirstFLA}}</td>\n            </tr>\n            <tr>\n              <td><strong>Total Scenario 1 KW</strong></td>\n              <td>{{electricalItem?.scenarioFirstKW}}</td>\n            </tr>\n            <tr>\n              <td><strong>Total Scenario 1 KVAR</strong></td>\n              <td>{{electricalItem?.scenarioFirstKVAR}}</td>\n            </tr>\n            <tr>\n              <td><strong>Total Scenario 1 KVA</strong></td>\n              <td>{{electricalItem?.scenarioFirstKVA}}</td>\n            </tr>\n          </table>\n        </div>\n      </ng-template>\n    </form>\n    <div class=\"row\">\n      <button class=\"btn btn-danger\" (click)=\"deleteElectrical(electricalItem._id)\">Delete</button>\n    </div>\n    <!--START MODALS -->\n    <app-electricals-modal [dataValue]=\"electricalItem?.equipmentType\" [selectedValue]=\"electricalItem?.selectedEquipmentType\" [title]=\"equipmentType\" #equipmentTypeModal></app-electricals-modal>\n    <app-electricals-modal [dataValue]=\"electricalItem?.pidDrawing\" [selectedValue]=\"electricalItem?.selectedPidDrawing\" [title]=\"pidDraving\" #pidDrawingModal></app-electricals-modal>\n    <app-electricals-modal [dataValue]=\"electricalItem?.layoutDrawing\" [selectedValue]=\"electricalItem?.selectedLayoutDrawing\" [title]=\"layoutDrawing\" #layoutDrawingModal></app-electricals-modal>\n    <app-electricals-modal [dataValue]=\"electricalItem?.sldDraving\" [selectedValue]=\"electricalItem?.selectedSldDraving\" [title]=\"sldDraving\" #sldDravingModal></app-electricals-modal>\n    <app-electricals-modal [dataValue]=\"electricalItem?.locationArea\" [selectedValue]=\"electricalItem?.selectedLocationArea\" [title]=\"locationArea\" #locationAreaModal></app-electricals-modal>\n    <app-electricals-modal [dataValue]=\"productsAfterChangeEvent\" [selectedValue]=\"electricalItem?.selectedVoltage?.name\" [title]=\"voltage\" #voltageModal></app-electricals-modal>\n    <app-electricals-modal [dataValue]=\"electricalItem?.equipmentDescription\" [selectedValue]=\"electricalItem?.selectedEquipmentDescription\" [title]=\"equipmentDescription\" #equipmentDescriptionModal></app-electricals-modal>\n    <app-electricals-modal [dataValue]=\"electricalItem?.hazlocZone\" [selectedValue]=\"electricalItem?.selectedHazlocZone\" [title]=\"hazlocZone\" #hazlocZoneModal></app-electricals-modal>\n    <app-electricals-modal [dataValue]=\"electricalItem?.hazlocTemperature\" [selectedValue]=\"electricalItem?.selectedHazlocTemperature\" [title]=\"hazlocTemperature\" #hazlocTemperatureModal></app-electricals-modal>\n    <!-- END MODALS -->\n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/electrical-item/electrical-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElectricalItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_electrical_service__ = __webpack_require__("../../../../../src/app/services/electrical.service.ts");
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
    function ElectricalItemComponent(router, route, electricalService) {
        this.router = router;
        this.route = route;
        this.electricalService = electricalService;
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
        this.electricalService.getElectricalItem(this.projectId, this.electricalId).subscribe(function (electricals) {
            _this.electricalItem = electricals.electrical;
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
                                console.log(res);
                            }, function (err) {
                                console.log(err);
                            });
                        }
                        console.log(tempElectricalItem.chiildList);
                    }
                    if (tempElectricalItem.equipmentTag == this.electricalItem.selectedParentTag) {
                        this.project.electricals[i].chiildList.push(this.electricalItem);
                        var temp = this.project.electricals[i];
                        this.electricalService.updateElectricalItem(this.projectId, tempElectricalItem._id, temp).subscribe(function (res) {
                            console.log(res);
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
        this.selectedItemVoltage = data.selectedVoltage;
        data.selectedVoltage = {};
        data.selectedVoltage.name = this.selectedItemVoltage;
        data.voltage = this.changeVoltageArrayObject(this.productsAfterChangeEvent, this.electricalItem.voltage);
        data.selectedVoltage.powerSystemType = data.selectedPowerSystem;
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
            var id = res['_id'];
            _this.router.navigate(['project', _this.projectId, 'electricals']);
        }, function (err) {
            console.log(err);
        });
        this.electricalChildList();
    };
    ElectricalItemComponent.prototype.deleteElectrical = function (electricalItemId) {
        var _this = this;
        if (this.electricalItem.chiildList.length >= 1) {
            for (var i = 0; i < this.project.electricals.length; ++i) {
                var temporaryElectricalItem = this.project.electricals[i];
                if (temporaryElectricalItem.selectedParentTag === this.electricalItem.equipmentTag) {
                    temporaryElectricalItem.selectedParentTag = '';
                    console.log(temporaryElectricalItem);
                    this.electricalService.updateElectricalItem(this.projectId, temporaryElectricalItem._id, temporaryElectricalItem).subscribe(function (res) {
                        console.log(res);
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
                        console.log(res);
                    }, function (err) {
                        console.log(err);
                    });
                }
                console.log(electricalItemElment);
            }
        }
        this.electricalService.deleteElectricalItem(this.projectId, electricalItemId).subscribe(function (res) {
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
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* NgModel */])
    ], ElectricalItemComponent.prototype, "selectedHazlocZone", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('selectedHazlocTemperature'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* NgModel */])
    ], ElectricalItemComponent.prototype, "selectedHazlocTemperature", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('selectedHazlocGroup'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* NgModel */])
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
            __WEBPACK_IMPORTED_MODULE_3__services_electrical_service__["a" /* ElectricalService */]])
    ], ElectricalItemComponent);
    return ElectricalItemComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/electrical-list/electrical-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "thead th {\r\n    font-size: 0.6rem;\r\n  }\r\n  tbody tr td  {\r\n    font-size: 0.6rem;\r\n  }\r\n  .achievements-wrapper {\r\n    height: auto; \r\n    overflow: auto;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/electrical-list/electrical-list.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n<div class=\"container\">\n  <div class=\"pt-2\">\n    <h1>Electricals List\n      <a class=\"btn btn-primary\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Add new electrical\" (click)=\"saveElectrical()\">\n        <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n      </a>\n    </h1>\n  </div>\n  <div class=\"row achievements-wrapper\">\n    <table class=\"table table-sm table-bordered table-hover\">\n      <thead>\n        <tr>\n          <th></th>\n          <th>Rev.</th>\n          <th>Equipment Tag</th>\n          <th>Equipment Description</th>\n          <th>Load Type</th>\n          <th>System Voltage</th>\n          <th>Power System</th>\n          <th>Nameplate Rating</th>\n          <th>Units</th>\n          <th>Total % PF</th>\n          <th>Total % EFF</th>\n          <th>Motor Sf</th>\n          <th>Motor Code</th>\n          <th>Load Duty</th>\n          <th>Total Connected FLA</th>\n          <th>Total Connected KW</th>\n          <th>Total Connected KVAR</th>\n          <th>Total Connected KVA</th>\n          <th>Load Factor %</th>\n          <th>Total Demand FLA</th>\n          <th>Total Demand KW</th>\n          <th>Total Demand KVAR</th>\n          <th>Total Demand KVA</th>\n          <th>Total Scenario 1 LoadFactor %</th>\n          <th>Total Scenario 1 FLA</th>\n          <th>Total Scenario 1 KW</th>\n          <th>Total Scenario 1 KVAR</th>\n          <th>Total Scenario1 KVA</th>\n        </tr>\n      </thead>\n      <tbody>\n        <ng-container *ngFor=\"let electrical of electricals?.electricals\">\n          <tr *ngIf=\"!electrical.selectedParentTag\">\n            <td></td>\n            <td>\n              <a routerLink=\"/project/{{projectId}}/electricals/{{electrical._id}}\">{{electrical.revision}}</a>\n            </td>                                                                                                               Rev \n            <td>{{electrical?.equipmentTag}}</td>                                                                               Equipment Tag \n            <td></td>                                                                                                           Equipment Description \n            <td>{{electrical?.selectedEquipmentType}}</td>                                                                      Load Type \n            <td>{{electrical?.selectedVoltage.name}}</td>                                                                       System Voltage \n            <td>{{electrical?.selectedPowerSystem}}</td>                                                                        Power System \n            <td>{{electrical?.nameplateRating}}</td>                                                                            Nameplate Rating \n            <td>{{electrical?.selectedUnits}}</td>                                                                              Units \n            <td>{{electrical?.totalPF}}</td>                                                                                    Total % PF \n            <td>{{electrical?.totalEFF}}</td>                                                                                   Total % EFF \n            <td>{{electrical?.selectedMotorSF}}</td>                                                                            Motor Sf \n            <td>{{electrical?.selectedMotorCode}}</td>                                                                          Motor Code \n            <td>{{electrical?.selectedLoadDuty}}</td>                                                                           Load Duty \n            <td>{{electrical?.totalConectedFla}}</td>                                                                           Total Connected FLA \n            <td>{{electrical?.totalConectedKW}}</td>                                                                            Total Connected KW \n            <td>{{electrical?.totalConnectedKVAR}}</td>                                                                         Total Connected KVAR \n            <td>{{electrical?.totalConnectedKVA}}</td>                                                                          Total Connected KVA \n            <td>{{electrical?.loadFactor}}</td>                                                                                 Load Factor % \n            <td>{{electrical?.totalDemandFLA}}</td>                                                                             Total Demand FLA \n            <td>{{electrical?.totalDemandKW}}</td>                                                                              Total Demand KW \n            <td>{{electrical?.totalDemandKVAR}}</td>                                                                            Total Demand KVAR \n            <td>{{electrical?.totalDemandKVA}}</td>                                                                             Total Demand KVA \n            <td>{{electrical?.scenarioFirstLoadFactor}}</td>                                                                    Total Scenario 1 LoadFactor % \n            <td>{{electrical?.scenarioFirstFLA}}</td>                                                                           Total Scenario 1 FLA \n            <td>{{electrical?.scenarioFirstKW}}</td>                                                                            Total Scenario 1 KW \n            <td>{{electrical?.scenarioFirstKVAR}}</td>                                                                          Total Scenario 1 KVAR \n            <td>{{electrical?.scenarioFirstKVA}}</td>                                                                           Total Scenario1 KVA \n          </tr>\n          <tr class=\"childs\" bgcolor=\"#F5F5F5\" *ngFor=\"let electricalChilds of electrical.chiildList\">\n            <td></td>\n            <td><a routerLink=\"/project/{{projectId}}/electricals/{{electricalChilds._id}}\">{{electricalChilds.revision}}</a></td>Rev\n            <td>{{electricalChilds?.equipmentTag}}</td>                                                                         Equipment Tag \n            <td></td>                                                                                                           Equipment Description \n            <td>{{electricalChilds.selectedEquipmentType}}</td>                                                                 Load Type \n            <td>{{electricalChilds.selectedVoltage.name}}</td>                                                                  System Voltage \n            <td>{{electricalChilds.selectedPowerSystem}}</td>                                                                   Power System \n            <td>{{electricalChilds.nameplateRating}}</td>                                                                       Nameplate Rating \n            <td>{{electricalChilds.selectedUnits}}</td>                                                                         Units \n            <td>{{electricalChilds.totalPF}}</td>                                                                               Total % PF \n            <td>{{electricalChilds.totalEFF}}</td>                                                                              Total % EFF \n            <td>{{electricalChilds.selectedMotorSF}}</td>                                                                       Motor Sf \n            <td>{{electricalChilds.selectedMotorCode}}</td>                                                                     Motor Code \n            <td>{{electricalChilds.selectedLoadDuty}}</td>                                                                      Load Duty \n            <td>{{electricalChilds.totalConectedFla}}</td>                                                                      Total Connected FLA \n            <td>{{electricalChilds.totalConectedKW}}</td>                                                                       Total Connected KW \n            <td>{{electricalChilds.totalConnectedKVAR}}</td>                                                                    Total Connected KVAR \n            <td>{{electricalChilds.totalConnectedKVA}}</td>                                                                     Total Connected KVA \n            <td>{{electricalChilds.loadFactor}}</td>                                                                            Load Factor % \n            <td>{{electricalChilds.totalDemandFLA}}</td>                                                                        Total Demand FLA \n            <td>{{electricalChilds.totalDemandKW}}</td>                                                                         Total Demand KW \n            <td>{{electricalChilds.totalDemandKVAR}}</td>                                                                       Total Demand KVAR \n            <td>{{electricalChilds.totalDemandKVA}}</td>                                                                        Total Demand KVA \n            <td>{{electricalChilds.scenarioFirstLoadFactor}}</td>                                                               Total Scenario 1 LoadFactor % \n            <td>{{electricalChilds.scenarioFirstFLA}}</td>                                                                      Total Scenario 1 FLA \n            <td>{{electricalChilds.scenarioFirstKW}}</td>                                                                       Total Scenario 1 KW \n            <td>{{electricalChilds.scenarioFirstKVAR}}</td>                                                                     Total Scenario 1 KVAR \n            <td>{{electricalChilds.scenarioFirstKVA}}</td>                                                                      Total Scenario1 KVA \n          </tr>\n        </ng-container>\n      </tbody>\n    </table>\n  </div>\n</div>\n-->\n<div class=\"container\">\n  <div class=\"pt-2\">\n    <h1>Electricals List\n      <a class=\"btn btn-primary\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Add new electrical\" (click)=\"saveElectrical()\">\n        <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n      </a>\n    </h1>\n  </div>\n  <div class=\"row achievements-wrapper\">\n    <table class=\"table table-sm table-bordered table-hover\">\n      <thead>\n        <tr>\n          <th></th>\n          <th>Rev.</th>\n          <th>Equipment Tag</th>\n          <th>Equipment Description</th>\n          <th>Load Type</th>\n          <th>System Voltage</th>\n          <th>Power System</th>\n          <th>Nameplate Rating</th>\n          <th>Units</th>\n          <th>Total % PF</th>\n          <th>Total % EFF</th>\n          <th>Motor Sf</th>\n          <th>Motor Code</th>\n          <th>Load Duty</th>\n          <th>Total Connected FLA</th>\n          <th>Total Connected KW</th>\n          <th>Total Connected KVAR</th>\n          <th>Total Connected KVA</th>\n          <th>Load Factor %</th>\n          <th>Total Demand FLA</th>\n          <th>Total Demand KW</th>\n          <th>Total Demand KVAR</th>\n          <th>Total Demand KVA</th>\n          <th>Total Scenario 1 LoadFactor %</th>\n          <th>Total Scenario 1 FLA</th>\n          <th>Total Scenario 1 KW</th>\n          <th>Total Scenario 1 KVAR</th>\n          <th>Total Scenario1 KVA</th>\n        </tr>\n      </thead>\n      <tbody>\n        <ng-container *ngFor=\"let electrical of electricals?.electricals\">\n          <tr *ngIf=\"!electrical.selectedParentTag\">\n            <td></td>\n            <td><a routerLink=\"/project/{{projectId}}/electricals/{{electrical._id}}\">{{electrical.revision}}</a></td>  <!-- Rev -->\n            <td>{{electrical?.equipmentTag}}</td>                                                                             <!-- Equipment Tag -->\n            <td></td>                                                                                                         <!-- Equipment Description -->\n            <td>{{electrical?.selectedEquipmentType}}</td>                                                                     <!-- Load Type -->\n            <td>{{electrical?.selectedVoltage.name}}</td>                                                                      <!-- System Voltage -->\n            <td>{{electrical?.selectedPowerSystem}}</td>                                                                       <!-- Power System -->\n            <td>{{electrical?.nameplateRating}}</td>                                                                           <!-- Nameplate Rating -->\n            <td>{{electrical?.selectedUnits}}</td>                                                                             <!-- Units -->\n            <td>{{electrical?.totalPF}}</td>                                                                                   <!-- Total % PF -->\n            <td>{{electrical?.totalEFF}}</td>                                                                                  <!-- Total % EFF -->\n            <td>{{electrical?.selectedMotorSF}}</td>                                                                           <!-- Motor Sf -->\n            <td>{{electrical?.selectedMotorCode}}</td>                                                                         <!-- Motor Code -->\n            <td>{{electrical?.selectedLoadDuty}}</td>                                                                          <!-- Load Duty -->\n            <td>{{electrical?.totalConectedFla}}</td>                                                                          <!-- Total Connected FLA -->\n            <td>{{electrical?.totalConectedKW}}</td>                                                                           <!-- Total Connected KW -->\n            <td>{{electrical?.totalConnectedKVAR}}</td>                                                                        <!-- Total Connected KVAR -->\n            <td>{{electrical?.totalConnectedKVA}}</td>                                                                         <!-- Total Connected KVA -->\n            <td>{{electrical?.loadFactor}}</td>                                                                                <!-- Load Factor % -->\n            <td>{{electrical?.totalDemandFLA}}</td>                                                                            <!-- Total Demand FLA -->\n            <td>{{electrical?.totalDemandKW}}</td>                                                                             <!-- Total Demand KW -->\n            <td>{{electrical?.totalDemandKVAR}}</td>                                                                           <!-- Total Demand KVAR -->\n            <td>{{electrical?.totalDemandKVA}}</td>                                                                            <!-- Total Demand KVA -->\n            <td>{{electrical?.scenarioFirstLoadFactor}}</td>                                                                   <!-- Total Scenario 1 LoadFactor % -->\n            <td>{{electrical?.scenarioFirstFLA}}</td>                                                                          <!-- Total Scenario 1 FLA -->\n            <td>{{electrical?.scenarioFirstKW}}</td>                                                                           <!-- Total Scenario 1 KW -->\n            <td>{{electrical?.scenarioFirstKVAR}}</td>                                                                         <!-- Total Scenario 1 KVAR -->\n            <td>{{electrical?.scenarioFirstKVA}}</td>                                                                          <!-- Total Scenario1 KVA -->\n          </tr>\n          <tr class=\"childs\" bgcolor=\"#F5F5F5\" *ngFor=\"let electricalChilds of electrical.chiildList\">\n            <td></td>\n            <td><a routerLink=\"/project/{{projectId}}/electricals/{{electricalChilds._id}}\">{{electricalChilds.revision}}</a></td>  <!-- Rev -->\n            <td>{{electricalChilds?.equipmentTag}}</td>                                                                       <!-- Equipment Tag -->\n            <td></td>                                                                                                         <!-- Equipment Description -->\n            <td>{{electricalChilds.selectedEquipmentType}}</td>                                                               <!-- Load Type -->\n            <td>{{electricalChilds.selectedVoltage.name}}</td>                                                                <!-- System Voltage -->\n            <td>{{electricalChilds.selectedPowerSystem}}</td>                                                                 <!-- Power System -->\n            <td>{{electricalChilds.nameplateRating}}</td>                                                                     <!-- Nameplate Rating -->\n            <td>{{electricalChilds.selectedUnits}}</td>                                                                       <!-- Units -->\n            <td>{{electricalChilds.totalPF}}</td>                                                                             <!-- Total % PF -->\n            <td>{{electricalChilds.totalEFF}}</td>                                                                            <!-- Total % EFF -->\n            <td>{{electricalChilds.selectedMotorSF}}</td>                                                                     <!-- Motor Sf -->\n            <td>{{electricalChilds.selectedMotorCode}}</td>                                                                   <!-- Motor Code -->\n            <td>{{electricalChilds.selectedLoadDuty}}</td>                                                                    <!-- Load Duty -->\n            <td>{{electricalChilds.totalConectedFla}}</td>                                                                    <!-- Total Connected FLA -->\n            <td>{{electricalChilds.totalConectedKW}}</td>                                                                     <!-- Total Connected KW -->\n            <td>{{electricalChilds.totalConnectedKVAR}}</td>                                                                  <!-- Total Connected KVAR -->\n            <td>{{electricalChilds.totalConnectedKVA}}</td>                                                                   <!-- Total Connected KVA -->\n            <td>{{electricalChilds.loadFactor}}</td>                                                                          <!-- Load Factor % -->\n            <td>{{electricalChilds.totalDemandFLA}}</td>                                                                      <!-- Total Demand FLA -->\n            <td>{{electricalChilds.totalDemandKW}}</td>                                                                       <!-- Total Demand KW -->\n            <td>{{electricalChilds.totalDemandKVAR}}</td>                                                                     <!-- Total Demand KVAR -->\n            <td>{{electricalChilds.totalDemandKVA}}</td>                                                                      <!-- Total Demand KVA -->\n            <td>{{electricalChilds.scenarioFirstLoadFactor}}</td>                                                             <!-- Total Scenario 1 LoadFactor % -->\n            <td>{{electricalChilds.scenarioFirstFLA}}</td>                                                                    <!-- Total Scenario 1 FLA -->\n            <td>{{electricalChilds.scenarioFirstKW}}</td>                                                                     <!-- Total Scenario 1 KW -->\n            <td>{{electricalChilds.scenarioFirstKVAR}}</td>                                                                   <!-- Total Scenario 1 KVAR -->\n            <td>{{electricalChilds.scenarioFirstKVA}}</td>                                                                    <!-- Total Scenario1 KVA -->\n          </tr>\n        </ng-container>\n      </tbody>\n    </table>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/electrical-list/electrical-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElectricalListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_electrical_service__ = __webpack_require__("../../../../../src/app/services/electrical.service.ts");
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
    function ElectricalListComponent(electricalService, router, route) {
        this.electricalService = electricalService;
        this.router = router;
        this.route = route;
        this.projectId = this.route.snapshot.params['id'];
    }
    ElectricalListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.electricalService.getElectricals(this.projectId).subscribe(function (electricalList) {
            _this.electricals = electricalList;
            _this.recalculationParentValeu(electricalList);
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ElectricalListComponent.prototype.saveElectrical = function () {
        var _this = this;
        this.electrical = {};
        this.electrical.length = 0;
        this.electricalService.createElectrical(this.projectId, this.electrical).subscribe(function (res) {
            var id = res['_id'];
            var responseId = res[res.length - 1]['_id'];
            var routeToElectricalItem = '/project/' + _this.route.snapshot.params['id'] + '/electricals/' + responseId;
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
            console.log(electricalItem);
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
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], ElectricalListComponent);
    return ElectricalListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".carousel-item.active,\r\n.carousel-item-next,\r\n.carousel-item-prev {\r\n  display: block;\r\n}\r\nspan.home-page-text {\r\n  text-align: justify;\r\n}\r\n.home-page-black-line{\r\n  margin-top: 25px; \r\n  background-color: black; \r\n  width: 97%; \r\n  height: 2px; \r\n  position: absolute;\r\n}\r\n\r\nspan.affiliations-text{\r\n  background-color: white; \r\n  padding-left: 5px; \r\n  padding-right: 5px; \r\n  z-index: 2;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n    <ol class=\"carousel-indicators\">\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n    </ol>\n    <div class=\"carousel-inner\" role=\"listbox\">\n      <div class=\"carousel-item active\">\n        <img class=\"d-block img-fluid\" src=\"https://i.imgur.com/KErzwkm.jpg\">\n      </div>\n      <div class=\"carousel-item\">\n        <img class=\"d-block img-fluid\" src=\"https://i.imgur.com/A9YA3cY.jpg\">\n      </div>\n      <div class=\"carousel-item\">\n        <img class=\"d-block img-fluid\" src=\"https://i.imgur.com/zkEkmZT.jpg\">\n      </div>\n    </div>\n    <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n  </div>\n  <div class=\"container\">\n    <div class=\"d-flex mt-3\">\n      <span class=\"home-page-text\">\n        <strong>AMP X Consulting Inc.</strong> (AMP X) is a company that’s <strong>20 years</strong> in the making. With multiple decades of experience and \n        lessons-learned acquired from the completion of more than 100 electrical, instrumentation and controls (E, I and C) \n        projects, we have developed a solution we feel can truly help our customers deliver their projects better. Through our \n        AMP X CORE technology and practical project delivery methods that enable thoughtful engineering, we help customers \n        improve their bottom lines.\n      </span>\n    </div>\n    <div class=\"d-flex mt-3\">\n      <span class=\"home-page-text\">\n        Using our AMP X CORE technology, paired with subject matter expertise that spans engineering, inspection and hands-on construction, \n        we go beyond end-to-end E, I and C services. The AMP X CORE technology is a powerful combination that includes a proprietary database \n        and design tools that are easy to use, inexpensive for our customers and promote the highest safety and quality.\n      </span>\n    </div>\n    <div class=\"d-flex mt-3\">\n      <span class=\"home-page-text\">\n      An important feature of our project delivery model is that we are able to leave customers with not only a complete set of deliverables, \n      but also a comprehensive data package to support other project stakeholders, operations, future projects and long-term asset management… \n      <strong>For no additional cost.</strong>\n      </span>\n    </div>\n    <div class=\"d-flex mt-3\">\n      <span class=\"home-page-text\">\n        Customers who can benefit from our solutions include end-users such as oil & gas companies, as well as equipment vendors, other engineering service \n        providers and construction contractors.\n      </span>\n    </div>\n    <div class=\"d-flex mt-3 mb-3\">\n      <span class=\"home-page-text\">\n        Please refer to the <a class=\"text-warning\" routerLink=\"/about\">‘About Us’</a> page for more information, or <a class=\"text-warning\" routerLink=\"/contacts\">contact us</a> directly.\n      </span>\n    </div>\n    <div class=\"d-flex justify-content-center position-relative\">\n      <div class=\"home-page-black-line\"></div>\n      <span class=\"h1 affiliations-text\">Affiliations</span>\n    </div>\n    <div class=\"d-flex justify-content-between align-items-center mt-3 mb-3\">\n      <a class=\"nounderline ml-1 mr-1\" href=\"http://www.apega.ca\">\n        <img class=\"d-block img-fluid\" src=\"https://i.imgur.com/JeRCYyi.png\">\n      </a>\n      <a class=\"nounderline ml-1 mr-1\" href=\"http://www.aset.ab.ca\">\n        <img class=\"d-block img-fluid\" src=\"https://i.imgur.com/8K2ITFj.png\">\n      </a>\n      <a class=\"nounderline ml-1 mr-1\" href=\"http://www.safetycodes.ab.ca\">\n        <img class=\"d-block img-fluid\" src=\"https://i.imgur.com/C8OAZHC.png\">\n      </a>\n      <a class=\"nounderline ml-1 mr-1\" href=\"http://www.ecaa.ab.ca\">\n        <img class=\"d-block img-fluid\" src=\"https://i.imgur.com/yHWgTeV.png\">\n      </a>\n    </div>\n  </div>\n</div>\n"

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
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
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

/***/ "../../../../../src/app/components/modals/electricals-modal/electricals-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal {\r\n    background: rgba(0,0,0,0.6);\r\n    padding-top: 3rem;\r\n  }\r\n  \r\n  .modal-dialog {\r\n    max-width: 350px!important;\r\n  }\r\n  input::-webkit-input-placeholder {\r\n    color: gray;\r\n    font-style: italic;\r\n  }\r\n  input:-ms-input-placeholder {\r\n    color: gray;\r\n    font-style: italic;\r\n  }\r\n  input::placeholder {\r\n    color: gray;\r\n    font-style: italic;\r\n  }\r\n  \r\n  input:focus::-webkit-input-placeholder { color:transparent; }\r\n  input:focus:-moz-placeholder { color:transparent; } /* FF 4-18 */\r\n  input:focus::-moz-placeholder { color:transparent; } /* FF 19+ */\r\n  input:focus:-ms-input-placeholder { color:transparent; } /* IE 10+ */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/modals/electricals-modal/electricals-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"padding-top: 10rem;\"\n(click)=\"onContainerClicked($event)\" class=\"modal fade\" tabindex=\"-1\" [ngClass]=\"{'in': visibleAnimate}\"\n[ngStyle]=\"{'display': visible ? 'block' : 'none', 'opacity': visibleAnimate ? 1 : 0}\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"myModalLabel\">{{title}}</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"close()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div *ngIf=\"modalFlag\">\n          <div>\n            <p>Are you sure you want to delete <strong>{{selectedValue}}</strong> item</p>\n          </div>\n        </div>\n        <div *ngIf=\"!modalFlag\" class=\"form-inline\">\n          <label class=\"pr-2\"><strong>Item name:</strong></label>\n          <input \n            class=\"form-control\" \n            name=\"itenElement\" \n            [(ngModel)]=\"itenElement\" \n            placeholder='Input new name value'\n            onfocus=\"this.placeholder = ''\"\n            onblur=\"this.placeholder = 'Input new name value'\"  \n          />\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <div class=\"row\">\n          <div class=\"d-flex justify-content-end\">\n            <div class=\"form-group pr-1\">\n              <button *ngIf=\"modalFlag\" class=\"btn btn-danger\" (click)=\"deleteItem(selectedValue)\">Delete</button>\n              <button *ngIf=\"!modalFlag\" class=\"btn btn-success\" (click)=\"addItem(itenElement)\" [disabled]=\"!itenElement\">Add</button>\n            </div>\n            <div class=\"pl-1 pr-2\">\n              <button class=\"btn btn-primary\" (click)=\"close()\">Close</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

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
//import { Component, OnInit } from '@angular/core';

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
exports.push([module.i, ".modal {\r\n    background: rgba(0,0,0,0.6);\r\n    padding-top: 3rem;\r\n  }\r\n  \r\n  .modal-dialog {\r\n    max-width: 350px!important;\r\n  }\r\n  input::-webkit-input-placeholder {\r\n    color: gray;\r\n    font-style: italic;\r\n  }\r\n  input:-ms-input-placeholder {\r\n    color: gray;\r\n    font-style: italic;\r\n  }\r\n  input::placeholder {\r\n    color: gray;\r\n    font-style: italic;\r\n  }\r\n  \r\n  input:focus::-webkit-input-placeholder { color:transparent; }\r\n  input:focus:-moz-placeholder { color:transparent; } /* FF 4-18 */\r\n  input:focus::-moz-placeholder { color:transparent; } /* FF 19+ */\r\n  input:focus:-ms-input-placeholder { color:transparent; } /* IE 10+ */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/modals/projects-modal/projects-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"padding-top: 10rem;\"\n(click)=\"onContainerClicked($event)\" class=\"modal fade\" tabindex=\"-1\" [ngClass]=\"{'in': visibleAnimate}\"\n[ngStyle]=\"{'display': visible ? 'block' : 'none', 'opacity': visibleAnimate ? 1 : 0}\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"myModalLabel\">{{title}}</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"close()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div *ngIf=\"dropFlag == true\">\n          <div>\n            <p>Are you sure you want to delete <strong>{{project.title}}</strong> project</p>\n          </div>\n        </div>\n        <div class=\"form-inline\" *ngIf=\"changeFlag == true\">\n            <label class=\"pr-2\"><strong>Project name: </strong></label>\n            <input \n              class=\"form-control\" \n              name=\"itemElement\" \n              [(ngModel)]=\"project.title\" \n            />\n        </div>\n        <div class=\"form-inline\" *ngIf=\"createFlag == true\">\n          <label class=\"pr-2\"><strong>Project name: </strong></label>\n          <input \n            class=\"form-control\" \n            name=\"itemElement\" \n            [(ngModel)]=\"itemElement\" \n            placeholder='Input new project name'\n            onfocus=\"this.placeholder = ''\"\n            onblur=\"this.placeholder = 'Input new project name'\"  \n          />\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <div class=\"row\">\n          <div class=\"d-flex justify-content-end\">\n            <div class=\"form-group pr-1\">\n              <button *ngIf=\"dropFlag == true\" class=\"btn btn-danger\" (click)=\"deleteItem(project)\">Delete</button>\n              <button *ngIf=\"changeFlag == true\" class=\"btn btn-success\" (click)=\"changeItem(project, project.title)\">Change</button>\n              <button *ngIf=\"createFlag == true\" class=\"btn btn-success\" (click)=\"addItem(itemElement)\" [disabled]=\"!itemElement\">Add</button>\n            </div>\n            <div class=\"pl-1 pr-2\">\n              <button class=\"btn btn-primary\" (click)=\"close()\">Close</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

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
                console.log(this.dataValue[key].title);
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
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <a class=\"navbar-brand\" href=\"#\">AMPX</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo02\" aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo02\">\n      <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\n        <li *ngIf=\"!authService.loggedIn()\" class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/\">Home <span class=\"sr-only\"> Home </span></a>\n        </li>\n        <li *ngIf=\"!authService.loggedIn()\" class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/\"> About Us <span class=\"sr-only\"> About Us </span></a>\n        </li>\n        <li *ngIf=\"!authService.loggedIn()\" class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/\"> Services <span class=\"sr-only\"> Services </span></a>\n        </li>\n        <li *ngIf=\"!authService.loggedIn()\" class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/\"> Contact Us <span class=\"sr-only\"> Contact Us </span></a>\n        </li>\n        <li *ngIf=\"authService.loggedIn()\" class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/project\">Project <span class=\"sr-only\"> Project </span></a>\n        </li>\n        <li *ngIf=\"!authService.loggedIn()\" class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/login\"> Login <span class=\"sr-only\"> Login </span></a>\n        </li>\n        <li *ngIf=\"!authService.loggedIn()\" class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/register\"> Register <span class=\"sr-only\"> Register </span></a>\n        </li>\n        <li *ngIf=\"authService.loggedIn()\" class=\"nav-item\">\n          <a class=\"nav-link\" (click)=\"onLogoutClick()\" href=\"#\"> Logout <span class=\"sr-only\"> Logout </span></a>\n        </li>\n        <li *ngIf=\"authService.loggedIn()\" class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/profile\"> Profile <span class=\"sr-only\"> Profile </span></a>\n        </li>\n      </ul>\n    </div>\n  </nav>"

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
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('You are logged out', { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['/login']);
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
exports.push([module.i, ".breadcrumb {\r\n    background-color: white !important;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/project-dashboard/project-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"project\">\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\"><a routerLink=\"/projects\">Projects</a></li>\n      <li class=\"breadcrumb-item\"><a [routerLink]=\"['/project-edit', projectId]\">{{project.title}}</a></li>\n      <li class=\"breadcrumb-item active\">Dashboard</li>\n    </ol>\n    <div class=\"d-flex justify-content-center pt-3\">\n      <h1>Project <strong>{{project.title}}</strong></h1>\n    </div>\n    <div class=\"d-flex justify-content-center pt-2\">\n      <h4>To start working</h4>\n    </div>\n    <div class=\"d-flex justify-content-center\">\n      <div class=\"d-flex flex-column\">\n        <div class=\"p-2 h5\">\n          <a [routerLink]=\"['/project', projectId, 'electricals']\">\n            Electrical Load List\n          </a>\n        </div>\n        <div class=\"p-2 h5\">Electrical Equipment List</div>\n        <div class=\"p-2 h5\">Cable Schedule</div>\n        <div class=\"p-2 h5\">Controller Schedule</div>\n        <div class=\"p-2 h5\">Instrumentation Index</div>\n        <div class=\"p-2 h5\">IO Assignment</div>\n        <div class=\"p-2 h5\">IO List</div>\n      </div>\n    </div>    \n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/project-dashboard/project-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
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
    function ProjectDashboardComponent(route, projectService) {
        this.route = route;
        this.projectService = projectService;
        this.projectId = this.route.snapshot.params['id'];
    }
    ProjectDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.projectService.getProjectById(this.projectId).subscribe(function (project) {
            _this.project = project;
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
            __WEBPACK_IMPORTED_MODULE_2__services_project_service__["a" /* ProjectService */]])
    ], ProjectDashboardComponent);
    return ProjectDashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/project/project.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/project/project.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n<div *ngIf=\"project\">\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\" *ngFor=\"let itemProject of project\">Project Title: {{itemProject.title}}</li>\n  </ul>\n</div>\n\n[routerLink]=\"['/project-create']\"\n\n-->\n<div class=\"container\">\n  <div class=\"d-flex justify-content-center\">\n    <h1>List of projects\n      <a \n        class=\"btn btn-primary\"\n        data-toggle=\"tooltip\"\n        data-placement=\"top\"\n        title=\"Add new project\"\n        (click)=\"addProjectModal.showAddModal(createProject)\"\n      >\n        <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n      </a>\n    </h1>\n  </div>\n  <div *ngIf=\"project\">\n    <table class=\"table table-sm\">\n      <thead>\n        <tr>\n          <th>Title</th>\n<!--          <th>Date create</th>\n          <th>Date update</th>-->\n          <th>Action</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let itemProject of project\">\n          <td><a class=\"table-link\" [routerLink]=\"['/project', itemProject._id]\"><strong>{{itemProject.title}}</strong></a></td>\n<!--\n  \n  [routerLink]=\"['/project', project._id]\"\n\n  <td>{{project.date_create | date : \"medium\"}}</td>\n          <td>{{project.updated_date | date : \"medium\"}}</td>-->\n          <td>\n            <div class=\"row\">\n              <div class=\"col-6\">\n                <a \n                  class=\"btn btn-success\"\n                  data-toggle=\"tooltip\"\n                  data-placement=\"top\"\n                  title=\"Change project\"\n                  (click)=\"addProjectModal.showChangeProjectModal(chengeProject, itemProject)\"\n                >\n                  <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n                </a>\n              </div>\n              <div class=\"col-6\">\n                <a \n                  class=\"btn btn-danger\"\n                  data-toggle=\"tooltip\"\n                  data-placement=\"top\"\n                  title=\"Delete project\"\n                  (click)=\"addProjectModal.showDropModal(dropProject, itemProject)\"\n                >\n                  <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\n                </a>\n              </div>\n            </div>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <!--START MODALS -->\n  <app-projects-modal [dataValue]=\"project\" [title]=\"createProjectModalHeader\" #addProjectModal></app-projects-modal>\n  <!-- END MODAL -->\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/project/project.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
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



var ProjectComponent = (function () {
    function ProjectComponent(projectService, router) {
        this.projectService = projectService;
        this.router = router;
        this.createProjectModalHeader = "Project functionality";
        this.createProject = true;
        this.dropProject = true;
        this.chengeProject = true;
    }
    ProjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.projectService.getProject().subscribe(function (projectList) {
            _this.project = projectList;
            _this.projectLenth = projectList.length;
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_project_service__["a" /* ProjectService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
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
        //'http://localhost:3000/users/register'
        //for deploy use
        //'users/register'
        return this.http.post('http://localhost:3000/users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        //for dev use
        //'http://localhost:3000/users/authenticate'
        //for deploy use
        //'users/authenticate'
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        //for dev use
        //'http://localhost:3000/users/profile'
        //for deploy
        //'users/profile'
        headers.append('Content-Type', 'application/json');
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
        //'http://localhost:3000/project'
        //for deploy
        //'project'
        headers.append('Content-Type', 'application/json');
        return this.http.get('project/' + id + '/electricals', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ElectricalService.prototype.createElectrical = function (id, electrical) {
        //for dev use
        //'http://localhost:3000/project'
        //for deploy
        //'project'
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('project/' + id + '/electrical-create/', electrical, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ElectricalService.prototype.getElectricalItem = function (projectId, electricalId) {
        //for dev use
        //'http://localhost:3000/project'
        //for deploy
        //'project'
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('project/' + projectId + '/electricals/' + electricalId, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ElectricalService.prototype.updateElectricalItem = function (projectId, electricalId, electricalItem) {
        //for dev use
        //'http://localhost:3000/project'
        //for deploy
        //'project'
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.patch('project/' + projectId + '/electrical-update/' + electricalId, electricalItem, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ElectricalService.prototype.deleteElectricalItem = function (projectId, electricalId) {
        //for dev use
        //'http://localhost:3000/project'
        //for deploy
        //'project'
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
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
        //headers.append('Content-Type', 'application/json');
        //for dev use
        //'http://localhost:3000/project'
        //for deploy
        //'project'
        headers.append('Content-Type', 'application/json');
        return this.http.get('project', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ProjectService.prototype.postProject = function (project) {
        //for dev use
        //'http://localhost:3000/project'
        //for deploy
        //'project'
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('project/project-create', project, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ProjectService.prototype.updateProject = function (id, project) {
        //for dev use
        //'http://localhost:3000/project'
        //for deploy
        //'project'
        return this.http.put('project/' + id, project)
            .map(function (res) { return res.json(); });
    };
    ProjectService.prototype.deleteProject = function (id) {
        //for dev use
        //'http://localhost:3000/project'
        //for deploy
        //'project'
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.delete('project/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ProjectService.prototype.getProjectById = function (id) {
        //for dev use
        //'http://localhost:3000/project'
        //for deploy
        //'project'
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
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
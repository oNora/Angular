(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_welcome_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/welcome.component */ "./src/app/pages/welcome.component.ts");
/* harmony import */ var _pages_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/page-not-found.component */ "./src/app/pages/page-not-found.component.ts");
/* harmony import */ var _pages_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/about.component */ "./src/app/pages/about.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var appRoutes = [
    { path: 'welcome', component: _pages_welcome_component__WEBPACK_IMPORTED_MODULE_2__["WelcomeComponent"] },
    { path: 'about', component: _pages_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"] },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: '**', component: _pages_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<rm-menu></rm-menu>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'rm-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/menu.component */ "./src/app/pages/menu.component.ts");
/* harmony import */ var _pages_welcome_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/welcome.component */ "./src/app/pages/welcome.component.ts");
/* harmony import */ var _pages_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/about.component */ "./src/app/pages/about.component.ts");
/* harmony import */ var _pages_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/page-not-found.component */ "./src/app/pages/page-not-found.component.ts");
/* harmony import */ var _shared_modal_dialog_modal_dialog_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/modal-dialog/modal-dialog.module */ "./src/app/shared/modal-dialog/modal-dialog.module.ts");
/* harmony import */ var _shared_modal_dialog_moda_dialog_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/modal-dialog/moda-dialog.service */ "./src/app/shared/modal-dialog/moda-dialog.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _shared_modal_dialog_modal_dialog_module__WEBPACK_IMPORTED_MODULE_9__["ModalDialogModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _pages_menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"],
                _pages_welcome_component__WEBPACK_IMPORTED_MODULE_6__["WelcomeComponent"],
                _pages_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"],
                _pages_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__["PageNotFoundComponent"]
            ],
            providers: [_shared_modal_dialog_moda_dialog_service__WEBPACK_IMPORTED_MODULE_10__["ModalDialogService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/pages/about.component.html":
/*!********************************************!*\
  !*** ./src/app/pages/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "about page"

/***/ }),

/***/ "./src/app/pages/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/pages/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/pages/about.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/pages/menu.component.html":
/*!*******************************************!*\
  !*** ./src/app/pages/menu.component.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <div class=\"container-fluid\">\n        <a class=\"navbar-brand\">{{pageTitle}}</a>\n        <ul class=\"navbar-nav mr-auto\">\n            <li class=\"nav-item\" routerLinkActive=\"active\">\n                <a class=\"nav-link\" routerLink='/welcome'>Home</a>\n            </li>\n            <li class=\"nav-item\" routerLinkActive=\"active\">\n                <a class=\"nav-link\" routerLink='/about'>About</a>\n            </li>\n        </ul>\n    </div>\n</nav>"

/***/ }),

/***/ "./src/app/pages/menu.component.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/menu.component.ts ***!
  \*****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
        this.pageTitle = 'logo here';
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'rm-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/pages/menu.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/pages/page-not-found.component.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/page-not-found.component.ts ***!
  \***************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "\n    <h1>404 page not found</h1>\n    "
        })
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/pages/welcome.component.html":
/*!**********************************************!*\
  !*** ./src/app/pages/welcome.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  welcom\n\n\n  <button (click)='openModal(\"modal1\")'>Open Moda</button>\n  <rm-modal-dialog (triggerCloseModal)='onClose($event)' [customClass]=\"'modal1'\">\n    ala bala\n  </rm-modal-dialog>\n\n  <button (click)='openModal(\"modal2\")'>Open Moda</button>\n  <rm-modal-dialog (triggerCloseModal)='onClose($event)' [customClass]=\"'modal2'\">\n    ala bala\n  </rm-modal-dialog>\n\n</div>"

/***/ }),

/***/ "./src/app/pages/welcome.component.ts":
/*!********************************************!*\
  !*** ./src/app/pages/welcome.component.ts ***!
  \********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_modal_dialog_moda_dialog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/modal-dialog/moda-dialog.service */ "./src/app/shared/modal-dialog/moda-dialog.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent(modalDialogService) {
        this.modalDialogService = modalDialogService;
        this.pageTitle = 'Welcome';
        this.isModalDisplay = false;
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent.prototype.onClose = function (modalName) {
        console.log('ima clik');
        this.isModalDisplay = false;
        this.modalDialogService.closeModal(modalName);
    };
    WelcomeComponent.prototype.openModal = function (modalNAme) {
        console.log('modalNAme: ', modalNAme);
        this.isModalDisplay = true;
        this.modalDialogService.openModal(modalNAme);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('modal1'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], WelcomeComponent.prototype, "modal1", void 0);
    WelcomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/pages/welcome.component.html")
        }),
        __metadata("design:paramtypes", [_shared_modal_dialog_moda_dialog_service__WEBPACK_IMPORTED_MODULE_1__["ModalDialogService"]])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "./src/app/shared/modal-dialog/moda-dialog.service.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/modal-dialog/moda-dialog.service.ts ***!
  \************************************************************/
/*! exports provided: ModalDialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalDialogService", function() { return ModalDialogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModalDialogService = /** @class */ (function () {
    // not possible to use Renderer2 in service this is the workaround
    // https://stackoverflow.com/questions/44989666/angular-4-service-no-provider-for-renderer2?rq=1
    function ModalDialogService(rendererFactory) {
        this.rendererFactory = rendererFactory;
        this.renderer = rendererFactory.createRenderer(null, null);
    }
    ModalDialogService.prototype.closeModal = function (modalName) {
        this.renderer.removeClass(document.body, 'modal-open');
        // hide modal dialog
        var modalElement = document.querySelector("." + modalName);
        this.renderer.addClass(modalElement, '.modal-hidden');
        this.renderer.removeClass(modalElement, 'show');
        // hide modal overlay
        var overlayElement = document.querySelector("." + modalName + " .modal-backdrop");
        this.renderer.removeClass(overlayElement, 'show');
        this.renderer.addClass(overlayElement, '.modal-backdrop-hidden');
        // set z-index
        var modalContentElement = document.querySelector("." + modalName + " .modal-content");
        this.renderer.setStyle(modalContentElement, 'z-index', '1');
    };
    ModalDialogService.prototype.openModal = function (modalName) {
        this.renderer.addClass(document.body, 'modal-open');
        // hide modal dialog
        var modalElement = document.querySelector("." + modalName);
        this.renderer.addClass(modalElement, 'show');
        this.renderer.removeClass(modalElement, '.modal-hidden');
        // show modal overlay
        var overlayElement = document.querySelector("." + modalName + " .modal-backdrop");
        this.renderer.addClass(overlayElement, 'show');
        this.renderer.removeClass(overlayElement, '.modal-backdrop-hidden');
        // set z-index
        var modalContentElement = document.querySelector("." + modalName + " .modal-content");
        this.renderer.setStyle(modalContentElement, 'z-index', '9999');
        this.renderer.setStyle(overlayElement, 'z-index', '-1');
    };
    ModalDialogService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"]])
    ], ModalDialogService);
    return ModalDialogService;
}());



/***/ }),

/***/ "./src/app/shared/modal-dialog/modal-dialog.component.css":
/*!****************************************************************!*\
  !*** ./src/app/shared/modal-dialog/modal-dialog.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal{\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    width: 300px;\n    height: 300px;\n    margin-top: -300px;\n    margin-left: -300px;\n    background: #fff;\n    border: 1px solid #663399;\n    box-shadow: 10px 10px 5px 0px rgba(102,51,153,1);\n}\n\n.close-modal-btn{\n    position: absolute;\n    top: 0px;\n    right: 0px;\n    width: 40px;\n    height: 40px;\n}\n\n.modal-content{\n    height: 100%;\n}\n\n.show{\n    display: block;\n}\n\n.hide {\n    display: none;\n}"

/***/ }),

/***/ "./src/app/shared/modal-dialog/modal-dialog.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/shared/modal-dialog/modal-dialog.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\" [ngClass]=\"customClass\">\n  <div class=\"modal-content\">\n    <h1> title</h1>\n    {{customClass}}\n    <button (click)='closeModal(customClass)' class=\"close-modal-btn\">x</button>\n    <ng-content></ng-content>\n  </div>\n\n  <div class=\"modal-backdrop\"></div>\n</div>"

/***/ }),

/***/ "./src/app/shared/modal-dialog/modal-dialog.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/modal-dialog/modal-dialog.component.ts ***!
  \***************************************************************/
/*! exports provided: ModalDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalDialogComponent", function() { return ModalDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _moda_dialog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moda-dialog.service */ "./src/app/shared/modal-dialog/moda-dialog.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalDialogComponent = /** @class */ (function () {
    function ModalDialogComponent(renderer, modalDialogService) {
        this.renderer = renderer;
        this.modalDialogService = modalDialogService;
        this.triggerCloseModal = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ModalDialogComponent.prototype.ngOnInit = function () {
    };
    ModalDialogComponent.prototype.closeModal = function (modalName) {
        this.modalDialogService.closeModal(modalName);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ModalDialogComponent.prototype, "customClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ModalDialogComponent.prototype, "triggerCloseModal", void 0);
    ModalDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'rm-modal-dialog',
            template: __webpack_require__(/*! ./modal-dialog.component.html */ "./src/app/shared/modal-dialog/modal-dialog.component.html"),
            styles: [__webpack_require__(/*! ./modal-dialog.component.css */ "./src/app/shared/modal-dialog/modal-dialog.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _moda_dialog_service__WEBPACK_IMPORTED_MODULE_1__["ModalDialogService"]])
    ], ModalDialogComponent);
    return ModalDialogComponent;
}());



/***/ }),

/***/ "./src/app/shared/modal-dialog/modal-dialog.module.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/modal-dialog/modal-dialog.module.ts ***!
  \************************************************************/
/*! exports provided: ModalDialogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalDialogModule", function() { return ModalDialogModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _modal_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-dialog.component */ "./src/app/shared/modal-dialog/modal-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalDialogModule = /** @class */ (function () {
    function ModalDialogModule() {
    }
    ModalDialogModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_modal_dialog_component__WEBPACK_IMPORTED_MODULE_2__["ModalDialogComponent"]],
            exports: [_modal_dialog_component__WEBPACK_IMPORTED_MODULE_2__["ModalDialogComponent"]]
        })
    ], ModalDialogModule);
    return ModalDialogModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\wamp\www\GitHub\Angular_projects\angular-reusable-modal\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
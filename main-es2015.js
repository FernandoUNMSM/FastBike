(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'BicycleShop';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _catalogo_catalogo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./catalogo/catalogo.component */ "./src/app/catalogo/catalogo.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _contacto_contacto_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contacto/contacto.component */ "./src/app/contacto/contacto.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _app_routing__WEBPACK_IMPORTED_MODULE_6__["appRoutingProviders"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _app_routing__WEBPACK_IMPORTED_MODULE_6__["routing"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
        _catalogo_catalogo_component__WEBPACK_IMPORTED_MODULE_8__["CatalogoComponent"],
        _menu_menu_component__WEBPACK_IMPORTED_MODULE_9__["MenuComponent"],
        _contacto_contacto_component__WEBPACK_IMPORTED_MODULE_10__["ContactoComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                    _catalogo_catalogo_component__WEBPACK_IMPORTED_MODULE_8__["CatalogoComponent"],
                    _menu_menu_component__WEBPACK_IMPORTED_MODULE_9__["MenuComponent"],
                    _contacto_contacto_component__WEBPACK_IMPORTED_MODULE_10__["ContactoComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _app_routing__WEBPACK_IMPORTED_MODULE_6__["routing"]
                ],
                providers: [
                    _app_routing__WEBPACK_IMPORTED_MODULE_6__["appRoutingProviders"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule, appRoutingProviders, routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutingProviders", function() { return appRoutingProviders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _catalogo_catalogo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./catalogo/catalogo.component */ "./src/app/catalogo/catalogo.component.ts");
/* harmony import */ var _contacto_contacto_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contacto/contacto.component */ "./src/app/contacto/contacto.component.ts");








const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'catalogo', component: _catalogo_catalogo_component__WEBPACK_IMPORTED_MODULE_4__["CatalogoComponent"] },
    { path: 'contacto', component: _contacto_contacto_component__WEBPACK_IMPORTED_MODULE_5__["ContactoComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();
const appRoutingProviders = [];
const routing = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes);


/***/ }),

/***/ "./src/app/catalogo/catalogo.component.ts":
/*!************************************************!*\
  !*** ./src/app/catalogo/catalogo.component.ts ***!
  \************************************************/
/*! exports provided: CatalogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogoComponent", function() { return CatalogoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_bicicletas_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/bicicletas.service */ "./src/app/services/bicicletas.service.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menu/menu.component */ "./src/app/menu/menu.component.ts");




class CatalogoComponent {
    constructor(bicicletasService) {
        this.bicicletasService = bicicletasService;
    }
    ngOnInit() {
        this.bicicletasService.getAllTasks()
            .subscribe(bicicletas => {
            console.log(bicicletas);
        });
    }
    getAllTasks() {
    }
    createTask() {
        const bicicleta = {
            especificaciones: "hola",
            marca: "RUSH",
            aro: "27",
            nombre: "FISI",
            tipo: "Montañera",
            imagenURL: "jjj",
        };
        this.bicicletasService.createTask(bicicleta)
            .subscribe((newBicleta) => {
            console.log(newBicleta);
        });
    }
}
CatalogoComponent.ɵfac = function CatalogoComponent_Factory(t) { return new (t || CatalogoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_bicicletas_service__WEBPACK_IMPORTED_MODULE_1__["BicicletasService"])); };
CatalogoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CatalogoComponent, selectors: [["app-catalogo"]], decls: 113, vars: 0, consts: [[1, "catalogo-container"], [1, "superior"], [1, "titulo"], [1, "tabs-container"], [1, "tabs"], [2, "border-bottom", "2px solid white"], [1, "catalogo"], [1, "bicicleta"], ["src", "../../assets/img/bicicleta1.png", "alt", ""], [1, "catalogo-info"], ["src", "../../assets/img/bicicleta2.png", "alt", ""], ["src", "../../assets/img/bicicleta3.png", "alt", ""], ["src", "../../assets/img/bicicleta4.png", "alt", ""]], template: function CatalogoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Catalogo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Monta\u00F1eras");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Vintage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Deportivas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Otras");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Modelo 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Ver M\u00E1s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "RUSH Xtreme M3x");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Ver M\u00E1s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Modelo 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Ver M\u00E1s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Modelo 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Ver M\u00E1s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Modelo 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Ver M\u00E1s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "RUSH Xtreme M3x");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Ver M\u00E1s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Modelo 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Ver M\u00E1s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Modelo 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Ver M\u00E1s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Modelo 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Ver M\u00E1s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "RUSH Xtreme M3x");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Ver M\u00E1s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Modelo 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Ver M\u00E1s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Modelo 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Ver M\u00E1s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuComponent"]], styles: ["*[_ngcontent-%COMP%]{\r\n    font-family: 'Poppins', sans-serif;\r\n    transition: .3s;\r\n}\r\n.catalogo-container[_ngcontent-%COMP%] {\r\n    background: linear-gradient(to bottom, var(--negro), rgb(30, 31, 31));\r\n    width: 100%;\r\n    padding-bottom: 100px;\r\n}\r\n.tabs-container[_ngcontent-%COMP%] {\r\n    max-width: 1300px;\r\n    margin: auto;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n.tabs-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    background-color: transparent;\r\n    border: none;\r\n    color: #fff;\r\n    cursor: pointer;\r\n    outline: none;\r\n    font-size: 1.2em;\r\n    margin: 0 20px;\r\n    padding: 3px 10px;\r\n    transition: .3s;\r\n}\r\n.tabs-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{\r\n    color: var(--turquesa);\r\n}\r\n.catalogo-container[_ngcontent-%COMP%]    > .catalogo[_ngcontent-%COMP%] {\r\n    max-width: 1500px;\r\n    margin: auto;\r\n    display: grid;\r\n    grid-template-columns: repeat(4, 1fr);\r\n    margin-top: 70px;\r\n    justify-items: center;\r\n    grid-gap: 30px 0;\r\n}\r\n.catalogo[_ngcontent-%COMP%]   .bicicleta[_ngcontent-%COMP%]{\r\n    background-color: #fff;\r\n    width: 70%;\r\n    padding: 20px 15px 10px;\r\n    text-align: right;\r\n}\r\n.catalogo[_ngcontent-%COMP%]   .bicicleta[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    text-align: left;\r\n    color: var(--negro);\r\n}\r\n.catalogo[_ngcontent-%COMP%]   .bicicleta[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]{\r\n    height: 200px;\r\n    display: flex;\r\n    align-items: center;\r\n    margin-bottom: 10px;\r\n}\r\n.catalogo[_ngcontent-%COMP%]   .bicicleta[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n}\r\n.catalogo[_ngcontent-%COMP%]   .bicicleta[_ngcontent-%COMP%]   .catalogo-info[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    background-color: #303030;\r\n    border: none;\r\n    outline: none;\r\n    cursor: pointer;\r\n    padding: 8px 25px;\r\n    color: var(--turquesa);\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    margin-top: 50px;\r\n    font-size: .8em;\r\n    transition: .3s;\r\n}\r\n.catalogo[_ngcontent-%COMP%]   .bicicleta[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n    color: #fff;\r\n}\r\n@media screen and (max-width:1300px){\r\n    .catalogo[_ngcontent-%COMP%]   .bicicleta[_ngcontent-%COMP%]{\r\n        width: 80%;\r\n    }\r\n}\r\n@media screen and (max-width:1200px){\r\n    .catalogo-container[_ngcontent-%COMP%]    > .catalogo[_ngcontent-%COMP%]{\r\n        grid-template-columns: repeat(2,1fr);\r\n        grid-gap: 30px 0;\r\n    }\r\n    .catalogo[_ngcontent-%COMP%]   .bicicleta[_ngcontent-%COMP%] {\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-content: space-between;\r\n    }\r\n    .catalogo[_ngcontent-%COMP%]   .bicicleta[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%] {\r\n        height: inherit;\r\n    }\r\n}\r\n@media screen and (max-width: 750px){\r\n    .catalogo-container[_ngcontent-%COMP%]    > .catalogo[_ngcontent-%COMP%]{\r\n        grid-template-columns: repeat(1,1fr);\r\n    }\r\n    .catalogo[_ngcontent-%COMP%]   .bicicleta[_ngcontent-%COMP%] {\r\n        display: flex;\r\n        flex-direction: initial;\r\n        justify-content: space-around;\r\n    }\r\n    .catalogo[_ngcontent-%COMP%]   .bicicleta[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%] {\r\n        width: 50%;\r\n    }\r\n    .catalogo[_ngcontent-%COMP%]   .bicicleta[_ngcontent-%COMP%]   .catalogo-info[_ngcontent-%COMP%] {\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-content: space-around;\r\n        align-items: center;\r\n        width: 40%;\r\n    }\r\n    .catalogo[_ngcontent-%COMP%]   .bicicleta[_ngcontent-%COMP%]   .catalogo-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n        text-align: center;\r\n        font-size: 1em;\r\n    }\r\n    .catalogo[_ngcontent-%COMP%]   .bicicleta[_ngcontent-%COMP%]   .catalogo-info[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n        margin-top: 0;\r\n        font-size: .6em;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0YWxvZ28vY2F0YWxvZ28uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtDQUFrQztJQUNsQyxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxxRUFBcUU7SUFDckUsV0FBVztJQUNYLHFCQUFxQjtBQUN6QjtBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLFdBQVc7SUFDWCxlQUFlO0lBQ2YsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLHVCQUF1QjtJQUN2QixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGFBQWE7SUFDYixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QiwwQkFBa0I7SUFBbEIsdUJBQWtCO0lBQWxCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7QUFDSjtBQUNBO0lBQ0k7UUFDSSxvQ0FBb0M7UUFDcEMsZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLDhCQUE4QjtJQUNsQztJQUNBO1FBQ0ksZUFBZTtJQUNuQjtBQUNKO0FBQ0E7SUFDSTtRQUNJLG9DQUFvQztJQUN4QztJQUNBO1FBQ0ksYUFBYTtRQUNiLHVCQUF1QjtRQUN2Qiw2QkFBNkI7SUFDakM7SUFDQTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksYUFBYTtRQUNiLHNCQUFzQjtRQUN0Qiw2QkFBNkI7UUFDN0IsbUJBQW1CO1FBQ25CLFVBQVU7SUFDZDtJQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGFBQWE7UUFDYixlQUFlO0lBQ25CO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jYXRhbG9nby9jYXRhbG9nby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICB0cmFuc2l0aW9uOiAuM3M7XHJcbn1cclxuLmNhdGFsb2dvLWNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB2YXIoLS1uZWdybyksIHJnYigzMCwgMzEsIDMxKSk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcclxufVxyXG5cclxuLnRhYnMtY29udGFpbmVyIHtcclxuICAgIG1heC13aWR0aDogMTMwMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi50YWJzLWNvbnRhaW5lciBidXR0b257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICBtYXJnaW46IDAgMjBweDtcclxuICAgIHBhZGRpbmc6IDNweCAxMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogLjNzO1xyXG59XHJcbi50YWJzLWNvbnRhaW5lciBidXR0b246aG92ZXJ7XHJcbiAgICBjb2xvcjogdmFyKC0tdHVycXVlc2EpO1xyXG59XHJcbi5jYXRhbG9nby1jb250YWluZXIgPiAuY2F0YWxvZ28ge1xyXG4gICAgbWF4LXdpZHRoOiAxNTAwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcclxuICAgIG1hcmdpbi10b3A6IDcwcHg7XHJcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBncmlkLWdhcDogMzBweCAwO1xyXG59XHJcbi5jYXRhbG9nbyAuYmljaWNsZXRhe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDE1cHggMTBweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbi5jYXRhbG9nbyAuYmljaWNsZXRhIGgye1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGNvbG9yOiB2YXIoLS1uZWdybyk7XHJcbn1cclxuLmNhdGFsb2dvIC5iaWNpY2xldGEgZmlndXJle1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4uY2F0YWxvZ28gLmJpY2ljbGV0YSBpbWd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uY2F0YWxvZ28gLmJpY2ljbGV0YSAuY2F0YWxvZ28taW5mbyBidXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMwMzAzMDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwYWRkaW5nOiA4cHggMjVweDtcclxuICAgIGNvbG9yOiB2YXIoLS10dXJxdWVzYSk7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgZm9udC1zaXplOiAuOGVtO1xyXG4gICAgdHJhbnNpdGlvbjogLjNzO1xyXG59XHJcbi5jYXRhbG9nbyAuYmljaWNsZXRhIGJ1dHRvbjpob3ZlciB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEzMDBweCl7XHJcbiAgICAuY2F0YWxvZ28gLmJpY2ljbGV0YXtcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTIwMHB4KXtcclxuICAgIC5jYXRhbG9nby1jb250YWluZXIgPiAuY2F0YWxvZ297XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwxZnIpO1xyXG4gICAgICAgIGdyaWQtZ2FwOiAzMHB4IDA7XHJcbiAgICB9XHJcbiAgICAuY2F0YWxvZ28gLmJpY2ljbGV0YSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIH1cclxuICAgIC5jYXRhbG9nbyAuYmljaWNsZXRhIGZpZ3VyZSB7XHJcbiAgICAgICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KXtcclxuICAgIC5jYXRhbG9nby1jb250YWluZXIgPiAuY2F0YWxvZ297XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwxZnIpO1xyXG4gICAgfVxyXG4gICAgLmNhdGFsb2dvIC5iaWNpY2xldGEge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGluaXRpYWw7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICB9XHJcbiAgICAuY2F0YWxvZ28gLmJpY2ljbGV0YSBmaWd1cmUge1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICB9XHJcbiAgICAuY2F0YWxvZ28gLmJpY2ljbGV0YSAuY2F0YWxvZ28taW5mbyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgIH1cclxuICAgIC5jYXRhbG9nbyAuYmljaWNsZXRhIC5jYXRhbG9nby1pbmZvIGgye1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgIH1cclxuICAgIC5jYXRhbG9nbyAuYmljaWNsZXRhIC5jYXRhbG9nby1pbmZvIGJ1dHRvbntcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogLjZlbTtcclxuICAgIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CatalogoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-catalogo',
                templateUrl: './catalogo.component.html',
                styleUrls: ['./catalogo.component.css']
            }]
    }], function () { return [{ type: _services_bicicletas_service__WEBPACK_IMPORTED_MODULE_1__["BicicletasService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/contacto/contacto.component.ts":
/*!************************************************!*\
  !*** ./src/app/contacto/contacto.component.ts ***!
  \************************************************/
/*! exports provided: ContactoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactoComponent", function() { return ContactoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




class ContactoComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
ContactoComponent.ɵfac = function ContactoComponent_Factory(t) { return new (t || ContactoComponent)(); };
ContactoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactoComponent, selectors: [["app-contacto"]], decls: 43, vars: 0, consts: [[1, "contacto-container"], [1, "container-contacto"], [1, "contacto"], ["method", "post"], [1, "row100"], [1, "col"], [1, "inputBox"], ["type", "text", "name", "Nombre", "required", "required", "autocomplete", "off"], [1, "text"], [1, "line"], ["type", "text", "name", "Apellido", "required", "required", "autocomplete", "off"], ["type", "text", "name", "email", "required", "required", "autocomplete", "off"], ["type", "text", "name", "numero", "required", "required", "autocomplete", "off"], [1, "inputBox", "textarea"], ["name", "mensaje", "required", "required"], ["type", "submit", "value", "Enviar", "onsumbit", "return false"]], template: function ContactoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Contactanos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Nombres");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Apellidos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Numero");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "textarea", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Mensaje");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__["MenuComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]], styles: [".container-contacto[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: 30px 0;\r\n    background-color: var(--negro);\r\n  }\r\n  .container-contacto[_ngcontent-%COMP%]   .contacto[_ngcontent-%COMP%] {\r\n    width: 80%;\r\n    padding: 20px;\r\n  }\r\n  .contacto[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    font-family: 'Poppins', sans-serif;\r\n    width: 100%;\r\n    color: var(--turquesa);\r\n    font-size: 36px;\r\n    text-align: center;\r\n    margin-bottom: 10px;\r\n  }\r\n  .contacto[_ngcontent-%COMP%]   .row100[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 100%;\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(300px,1fr));\r\n    grid-gap: 20px;\r\n  }\r\n  .contacto[_ngcontent-%COMP%]   .row100[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 100%;\r\n    padding: 0 10px;\r\n    margin: 30px 0 10px;\r\n    transition: .5s;\r\n  }\r\n  .contacto[_ngcontent-%COMP%]   .row100[_ngcontent-%COMP%]   .inputBox[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 100%;\r\n    height: 40px;\r\n    color: var(--turquesa);\r\n    font-family: 'Poppins', sans-serif;\r\n    font-weight: bold;\r\n  }\r\n  .contacto[_ngcontent-%COMP%]   .row100[_ngcontent-%COMP%]   .inputBox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .contacto[_ngcontent-%COMP%]   .row100[_ngcontent-%COMP%]   .inputBox.textarea[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: transparent;\r\n    box-shadow: none;\r\n    border: none;\r\n    outline: none;\r\n    font-size: 18px;\r\n    padding: 0 10px;\r\n    z-index: 1;\r\n    color: #000;\r\n  }\r\n  .contacto[_ngcontent-%COMP%]   .row100[_ngcontent-%COMP%]   .inputBox[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    line-height: 40px;\r\n    font-size: 18px;\r\n    padding: 0 10px;\r\n    display: block;\r\n    transition: .5s;\r\n    pointer-events: none;\r\n    font-family: 'Poppins', sans-serif;\r\n  \r\n  }\r\n  .contacto[_ngcontent-%COMP%]   .row100[_ngcontent-%COMP%]   .inputBox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    + .text[_ngcontent-%COMP%], .contacto[_ngcontent-%COMP%]   .row100[_ngcontent-%COMP%]   .inputBox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid    + .text[_ngcontent-%COMP%]{\r\n    top: -35px;\r\n    left: -10px;\r\n  }\r\n  .contacto[_ngcontent-%COMP%]   .row100[_ngcontent-%COMP%]   .inputBox[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    bottom: 0;\r\n    display: block;\r\n    width: 100%;\r\n    height: 2px;\r\n    background-color: var(--turquesa);\r\n    transition: .5s;\r\n    border-radius: 2px;\r\n    pointer-events: none;\r\n  }\r\n  .contacto[_ngcontent-%COMP%]   .row100[_ngcontent-%COMP%]   .inputBox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    ~ .line[_ngcontent-%COMP%], .contacto[_ngcontent-%COMP%]   .row100[_ngcontent-%COMP%]   .inputBox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid    ~ .line[_ngcontent-%COMP%]{\r\n    height: 100%;\r\n  }\r\n  .contacto[_ngcontent-%COMP%]   .row100[_ngcontent-%COMP%]   .inputBox.textarea[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100px;\r\n    padding: 10px 0;\r\n  }\r\n  .contacto[_ngcontent-%COMP%]   .row100[_ngcontent-%COMP%]   .inputBox.textarea[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{\r\n    height: 100%;\r\n    resize: none;\r\n  }\r\n  .contacto[_ngcontent-%COMP%]   .row100[_ngcontent-%COMP%]   .inputBox[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus    + .text[_ngcontent-%COMP%], .contacto[_ngcontent-%COMP%]   .row100[_ngcontent-%COMP%]   .inputBox[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:valid    + .text[_ngcontent-%COMP%]{\r\n    top: -35px;\r\n    left: -10px;\r\n  }\r\n  .contacto[_ngcontent-%COMP%]   .row100[_ngcontent-%COMP%]   .inputBox[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus    ~ .line[_ngcontent-%COMP%], .contacto[_ngcontent-%COMP%]   .row100[_ngcontent-%COMP%]   .inputBox[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:valid    ~ .line[_ngcontent-%COMP%]{\r\n    height: 100%;\r\n  }\r\n  \r\n  input[type=\"submit\"][_ngcontent-%COMP%] {\r\n    border: none;\r\n    padding: 7px 35px;\r\n    cursor: pointer;\r\n    outline: none;\r\n    background: var(--turquesa);\r\n    color: var(--negro);\r\n    font-size: 18px;\r\n    border-radius: 2px;\r\n    font-family: 'Poppins', sans-serif;\r\n    font-weight: bold;\r\n    border: 3px solid var(--turquesa);\r\n    transition: .3s;\r\n  }\r\n  input[type=\"submit\"][_ngcontent-%COMP%]:hover {\r\n    background: var(--negro);\r\n    color:  var(--turquesa) ;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdG8vY29udGFjdG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZiw4QkFBOEI7RUFDaEM7RUFDQTtJQUNFLFVBQVU7SUFDVixhQUFhO0VBQ2Y7RUFDQTtJQUNFLGtDQUFrQztJQUNsQyxXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGFBQWE7SUFDYiwwREFBMEQ7SUFDMUQsY0FBYztFQUNoQjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGVBQWU7RUFDakI7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixrQ0FBa0M7SUFDbEMsaUJBQWlCO0VBQ25CO0VBQ0E7O0lBRUUsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osYUFBYTtJQUNiLGVBQWU7SUFDZixlQUFlO0lBQ2YsVUFBVTtJQUNWLFdBQVc7RUFDYjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixlQUFlO0lBQ2YsY0FBYztJQUNkLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsa0NBQWtDOztFQUVwQztFQUNBOztJQUVFLFVBQVU7SUFDVixXQUFXO0VBQ2I7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsY0FBYztJQUNkLFdBQVc7SUFDWCxXQUFXO0lBQ1gsaUNBQWlDO0lBQ2pDLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsb0JBQW9CO0VBQ3RCO0VBQ0E7O0lBRUUsWUFBWTtFQUNkO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGFBQWE7SUFDYixlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxZQUFZO0lBQ1osWUFBWTtFQUNkO0VBQ0E7O0lBRUUsVUFBVTtJQUNWLFdBQVc7RUFDYjtFQUNBOztJQUVFLFlBQVk7RUFDZDtFQUNBOztLQUVHO0VBQ0g7SUFDRSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGtDQUFrQztJQUNsQyxpQkFBaUI7SUFDakIsaUNBQWlDO0lBQ2pDLGVBQWU7RUFDakI7RUFDQTtJQUNFLHdCQUF3QjtJQUN4Qix3QkFBd0I7RUFDMUIiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0by9jb250YWN0by5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1jb250YWN0byB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMzBweCAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmVncm8pO1xyXG4gIH1cclxuICAuY29udGFpbmVyLWNvbnRhY3RvIC5jb250YWN0byB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICB9XHJcbiAgLmNvbnRhY3RvIGgyIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiB2YXIoLS10dXJxdWVzYSk7XHJcbiAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuICAuY29udGFjdG8gLnJvdzEwMCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LDFmcikpO1xyXG4gICAgZ3JpZC1nYXA6IDIwcHg7XHJcbiAgfVxyXG4gIC5jb250YWN0byAucm93MTAwIC5jb2wge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICBtYXJnaW46IDMwcHggMCAxMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogLjVzO1xyXG4gIH1cclxuICAuY29udGFjdG8gLnJvdzEwMCAuaW5wdXRCb3gge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBjb2xvcjogdmFyKC0tdHVycXVlc2EpO1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICAuY29udGFjdG8gLnJvdzEwMCAuaW5wdXRCb3ggaW5wdXQsXHJcbiAgLmNvbnRhY3RvIC5yb3cxMDAgLmlucHV0Qm94LnRleHRhcmVhIHRleHRhcmVhe1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gIH1cclxuICAuY29udGFjdG8gLnJvdzEwMCAuaW5wdXRCb3ggLnRleHR7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRyYW5zaXRpb246IC41cztcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICBcclxuICB9XHJcbiAgLmNvbnRhY3RvIC5yb3cxMDAgLmlucHV0Qm94IGlucHV0OmZvY3VzICsgLnRleHQsXHJcbiAgLmNvbnRhY3RvIC5yb3cxMDAgLmlucHV0Qm94IGlucHV0OnZhbGlkICsgLnRleHR7XHJcbiAgICB0b3A6IC0zNXB4O1xyXG4gICAgbGVmdDogLTEwcHg7XHJcbiAgfVxyXG4gIC5jb250YWN0byAucm93MTAwIC5pbnB1dEJveCAubGluZXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXR1cnF1ZXNhKTtcclxuICAgIHRyYW5zaXRpb246IC41cztcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIH1cclxuICAuY29udGFjdG8gLnJvdzEwMCAuaW5wdXRCb3ggaW5wdXQ6Zm9jdXMgfiAubGluZSxcclxuICAuY29udGFjdG8gLnJvdzEwMCAuaW5wdXRCb3ggaW5wdXQ6dmFsaWQgfiAubGluZXtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbiAgLmNvbnRhY3RvIC5yb3cxMDAgLmlucHV0Qm94LnRleHRhcmVhe1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgcGFkZGluZzogMTBweCAwO1xyXG4gIH1cclxuICAuY29udGFjdG8gLnJvdzEwMCAuaW5wdXRCb3gudGV4dGFyZWEgdGV4dGFyZWF7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICByZXNpemU6IG5vbmU7XHJcbiAgfVxyXG4gIC5jb250YWN0byAucm93MTAwIC5pbnB1dEJveCB0ZXh0YXJlYTpmb2N1cyArIC50ZXh0LFxyXG4gIC5jb250YWN0byAucm93MTAwIC5pbnB1dEJveCB0ZXh0YXJlYTp2YWxpZCArIC50ZXh0e1xyXG4gICAgdG9wOiAtMzVweDtcclxuICAgIGxlZnQ6IC0xMHB4O1xyXG4gIH1cclxuICAuY29udGFjdG8gLnJvdzEwMCAuaW5wdXRCb3ggdGV4dGFyZWE6Zm9jdXMgfiAubGluZSxcclxuICAuY29udGFjdG8gLnJvdzEwMCAuaW5wdXRCb3ggdGV4dGFyZWE6dmFsaWQgfiAubGluZXtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbiAgLyogLmNvbnRhY3RvIC5yb3cxMDAgaW5wdXQ6LWludGVybmFsLWF1dG9maWxsLXNlbGVjdGVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXR1cnF1ZXNhKTtcclxuICB9ICovXHJcbiAgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiA3cHggMzVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS10dXJxdWVzYSk7XHJcbiAgICBjb2xvcjogdmFyKC0tbmVncm8pO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tdHVycXVlc2EpO1xyXG4gICAgdHJhbnNpdGlvbjogLjNzO1xyXG4gIH1cclxuICBpbnB1dFt0eXBlPVwic3VibWl0XCJdOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLW5lZ3JvKTtcclxuICAgIGNvbG9yOiAgdmFyKC0tdHVycXVlc2EpIDtcclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contacto',
                templateUrl: './contacto.component.html',
                styleUrls: ['./contacto.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const _c0 = function () { return ["../catalogo"]; };
class HomeComponent {
    // @ViewChild("menu") menu:ElementRef;
    constructor(elem) {
        this.elem = elem;
    }
    ngOnInit() {
        const headers = this.elem.nativeElement.querySelectorAll(".headers");
        var i = 0;
        setInterval(() => {
            headers[i].style.visibility = "hidden";
            headers[i].style.opacity = "0";
            i = (i + 1) % headers.length;
            headers[i].style.visibility = "visible";
            headers[i].style.opacity = "1";
        }, 4000);
        const spans = this.elem.nativeElement.querySelectorAll('.header-info span');
        var j = 0;
        if (spans.length > 1) {
            setInterval(() => {
                spans[j].style.display = 'none';
                j = (j + 1) % spans.length;
                spans[j].style.display = 'initial';
            }, 1800);
        }
        const boton = document.getElementById('button');
        const info = document.getElementById('info-container');
        const caja = document.getElementById('caja');
        const cajaContainer = document.getElementById('caja-container');
        if (boton) {
            boton.addEventListener('click', mapa);
            var n = 0;
            function mapa() {
                n++;
                info.classList.toggle('info-0');
                caja.classList.toggle('info-0');
                boton.classList.toggle('button-on');
                if (n % 2 != 0) {
                    boton.innerHTML = "Ver informacion de contacto";
                }
                else {
                    boton.innerHTML = "Ver ubicacion del mapa";
                }
            }
        }
        // window.onscroll = () => {
        //   if (window.pageYOffset > 0) {
        //     this.menu.nativeElement.classList.add('on');
        //   }
        //   else {
        //     this.menu.nativeElement.classList.remove('on');
        //   }
        // }
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 51, vars: 2, consts: [[1, "home-container"], [1, "header"], [1, "header1", "headers"], ["headers", ""], [1, "container-oscuro"], [1, "header2", "headers", 2, "visibility", "hidden", "opacity", "0"], [1, "header3", "headers", 2, "visibility", "hidden", "opacity", "0"], [1, "header-info"], [2, "display", "initial"], [1, "home-info"], ["href", "", 3, "routerLink"], [1, "mapa-container"], ["id", "info-container", 1, "info-container"], [1, "sombra"], ["id", "caja-container", 1, "caja-container"], ["id", "caja", 1, "caja"], ["id", "button"], ["src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31219.830797836275!2d-75.21752035708825!3d-12.010519520110467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x910ebd655b686f3f%3A0x9ecd3374eebf78d4!2sJr.%20la%20Cantuta%2C%20Huancayo%2012002!5e0!3m2!1ses!2spe!4v1576987412037!5m2!1ses!2spe", "width", "100%", "height", "500", "frameborder", "0", "allowfullscreen", "", 2, "border", "0"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "TENEMOS BICICLETAS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "MONTA\u00D1ERAS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "VINTAGE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "DEPORTIVAS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "ELECTRICAS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Fast Bike");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "En ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Fast Bike ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "tenemos como mision hacer que las personas eligan usar una bicicletas antes que un auto. Por eso nos dedicamos a dar un servicio de primera a nuestros usuario. En nuestro catalogo encontraras bicicletas de todo tipo desde monta\u00F1eras hasta vintage. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\u00BFQue dices, te animas a ver? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Catalogo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "section", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Contacta con nosotros");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "FISI SAN MARCOS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "937-635-693");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Ver ubicaci\u00F3n del mapa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "iframe", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__["MenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["*[_ngcontent-%COMP%]{\r\n    font-family: 'Poppins', sans-serif;\r\n    \r\n}\r\n.container-oscuro[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(0,0,0,.7);\r\n    position: absolute;\r\n}\r\n.header-info[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100vh;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    color: #fff;\r\n}\r\n.header-info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    font-weight: 900;\r\n    letter-spacing: 2px;\r\n    font-size: 2.5em;\r\n    text-align: center;\r\n    margin: 0 10px;\r\n}\r\n.header-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    color: var(--turquesa);\r\n    display: none;\r\n    letter-spacing: 0px;\r\n}\r\n.home-container[_ngcontent-%COMP%] {\r\n    height: 100vh;\r\n    display: block;\r\n    position: relative;\r\n}\r\n.header[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n.headers[_ngcontent-%COMP%] {\r\n    transition: 1s;\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    background-attachment: fixed;\r\n}\r\n.header1[_ngcontent-%COMP%] {\r\n    background: url('1.jpg') center / cover;\r\n    background-attachment: fixed;\r\n}\r\n.header2[_ngcontent-%COMP%] {\r\n    background: url('2.jpg') center / cover;\r\n    background-attachment: fixed;\r\n}\r\n.header3[_ngcontent-%COMP%] {\r\n    background: url('3.jpg') center / cover;\r\n    background-attachment: fixed;\r\n}\r\n.home-info[_ngcontent-%COMP%] {\r\n    top: 50%;\r\n    left: 10%;\r\n    background-color: rgba(49, 46, 46, 1);\r\n    color: #FFF;\r\n    text-align: center;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n.home-info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    margin-top: 20px;\r\n    text-transform: uppercase;\r\n    color: var(--turquesa);\r\n    font-size: 400%;\r\n}\r\n.home-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    margin: 10px 40px 30px;\r\n    padding: 35px 0;\r\n    text-align: justify;\r\n}\r\n.home-info[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    padding: 10px 50px;\r\n    font-size: 1.2em;\r\n    border: none;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    outline: none;\r\n    cursor: pointer;\r\n    background-color: #1F1F1F;\r\n    margin-bottom: 40px;\r\n}\r\n.home-info[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    color: var(--turquesa);\r\n    transition: .3s;\r\n    text-decoration: none;\r\n}\r\n.home-info[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]{\r\n    color: white;\r\n}\r\n.home-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    color: var(--turquesa);\r\n}\r\n.mapa-container[_ngcontent-%COMP%] {\r\n    line-height: 0;\r\n    position: relative;\r\n    text-align: center;\r\n}\r\n.mapa-container[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%] {\r\n    display: block;\r\n    position: absolute;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(0,0,0,.7);\r\n    display: flex;\r\n    transition: .4s ease all;\r\n}\r\n.mapa-container[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   .sombra[_ngcontent-%COMP%] {\r\n    margin: auto;\r\n    overflow: hidden;\r\n    position: relative;\r\n}\r\n.mapa-container[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   .caja[_ngcontent-%COMP%] {\r\n    line-height: 1.5;\r\n    background-color: var(--negro);\r\n    padding: 50px 25px;\r\n    margin-bottom: 90px;\r\n    transition: .4s ease all;\r\n    margin-right: 30px;\r\n    margin-left: 30px;\r\n}\r\n.mapa-container[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   .sombra[_ngcontent-%COMP%]   .caja[_ngcontent-%COMP%] {\r\n    color: white;\r\n}\r\n.mapa-container[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   .sombra[_ngcontent-%COMP%]   .caja[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    font-weight: 400;\r\n    width: 60%;\r\n    text-transform: uppercase;\r\n    margin: auto;\r\n    color: var(--turquesa);\r\n    padding: 10px 20px;\r\n    border-bottom: 2px dotted var(--turquesa);\r\n    margin-bottom: 20px;\r\n    font-family: 'Poppins', sans-serif;\r\n    font-weight: 700;\r\n}\r\n.mapa-container[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   .sombra[_ngcontent-%COMP%]   .caja[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    font-size: 1.1em;\r\n    font-family: 'Bree Serif', serif;\r\n}\r\n.mapa-container[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   .sombra[_ngcontent-%COMP%]   .caja[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-of-type{\r\n    margin-bottom: 10px;\r\n}\r\n.mapa-container[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   .sombra[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    border: 2px solid var(--turquesa);\r\n    background-color: transparent;\r\n    color: white;\r\n    height: 40px;\r\n    width: 250px;\r\n    font-size: .9em;\r\n    font-weight: 200;\r\n    cursor: pointer;\r\n    transition: .4s ease all;\r\n    outline: none;\r\n    position: absolute;\r\n    bottom: 30px;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n}\r\n.mapa-container[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   .sombra[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{\r\n    color: var(--turquesa);\r\n}\r\n\r\n.mapa-container[_ngcontent-%COMP%]   .info-0[_ngcontent-%COMP%] {\r\n    height: 0;\r\n    line-height: 0;\r\n}\r\n.mapa-container[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   .info-0[_ngcontent-%COMP%] {\r\n    line-height: 0;\r\n    height: 0;\r\n    transform: translateY(-180%);\r\n}\r\n.mapa-container[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   .sombra[_ngcontent-%COMP%]   .button-on[_ngcontent-%COMP%] {\r\n    background-color: var(--negro);\r\n    border: 2px solid var(--negro);\r\n    transform: translate(-50%, -100px);\r\n}\r\n\r\n\r\n\r\n@media screen and (max-width: 900px){\r\n    .mapa-container[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   .sombra[_ngcontent-%COMP%]   .caja[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n        width: inherit;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQ0FBa0M7SUFDbEMscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdDQUFnQztJQUNoQyxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsYUFBYTtJQUNiLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQiw0QkFBNEI7QUFDaEM7QUFFQTtJQUNJLHVDQUE2RDtJQUM3RCw0QkFBNEI7QUFDaEM7QUFFQTtJQUNJLHVDQUE2RDtJQUM3RCw0QkFBNEI7QUFDaEM7QUFFQTtJQUNJLHVDQUE2RDtJQUM3RCw0QkFBNEI7QUFDaEM7QUFFQTtJQUNJLFFBQVE7SUFDUixTQUFTO0lBQ1QscUNBQXFDO0lBQ3JDLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osMEJBQWtCO0lBQWxCLHVCQUFrQjtJQUFsQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sV0FBVztJQUNYLFlBQVk7SUFDWixnQ0FBZ0M7SUFDaEMsYUFBYTtJQUNiLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQiw4QkFBOEI7SUFDOUIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQix3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIseUNBQXlDO0lBQ3pDLG1CQUFtQjtJQUNuQixrQ0FBa0M7SUFDbEMsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsZ0NBQWdDO0FBQ3BDO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGlDQUFpQztJQUNqQyw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFNBQVM7SUFDVCwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNFLGdCQUFnQjtBQUNsQjtJQUNJLFNBQVM7SUFDVCxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsU0FBUztJQUNULDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksOEJBQThCO0lBQzlCLDhCQUE4QjtJQUM5QixrQ0FBa0M7QUFDdEM7QUFDRSx3QkFBd0I7QUFDeEIsYUFBYTtBQUNiLHdCQUF3QjtBQUUxQjtJQUNJO1FBQ0ksY0FBYztJQUNsQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIC8qIHRyYW5zaXRpb246IC4zczsgKi9cclxufVxyXG4uY29udGFpbmVyLW9zY3VybyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjcpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbi5oZWFkZXItaW5mb3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG4uaGVhZGVyLWluZm8gaDEge1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICBmb250LXNpemU6IDIuNWVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwIDEwcHg7XHJcbn1cclxuLmhlYWRlci1pbmZvIHNwYW57XHJcbiAgICBjb2xvcjogdmFyKC0tdHVycXVlc2EpO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbn1cclxuLmhvbWUtY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uaGVhZGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uaGVhZGVycyB7XHJcbiAgICB0cmFuc2l0aW9uOiAxcztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxufVxyXG5cclxuLmhlYWRlcjEge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvRm9uZG9zLzEuanBnKSBjZW50ZXIgLyBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbn1cclxuXHJcbi5oZWFkZXIyIHtcclxuICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1nL0ZvbmRvcy8yLmpwZykgY2VudGVyIC8gY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG59XHJcblxyXG4uaGVhZGVyMyB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9Gb25kb3MvMy5qcGcpIGNlbnRlciAvIGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxufVxyXG5cclxuLmhvbWUtaW5mbyB7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDEwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDksIDQ2LCA0NiwgMSk7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uaG9tZS1pbmZvIGgxe1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBjb2xvcjogdmFyKC0tdHVycXVlc2EpO1xyXG4gICAgZm9udC1zaXplOiA0MDAlO1xyXG59XHJcbi5ob21lLWluZm8gcHtcclxuICAgIG1hcmdpbjogMTBweCA0MHB4IDMwcHg7XHJcbiAgICBwYWRkaW5nOiAzNXB4IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcbi5ob21lLWluZm8gYnV0dG9ue1xyXG4gICAgcGFkZGluZzogMTBweCA1MHB4O1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUYxRjFGO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxufVxyXG4uaG9tZS1pbmZvIGJ1dHRvbiBhe1xyXG4gICAgY29sb3I6IHZhcigtLXR1cnF1ZXNhKTtcclxuICAgIHRyYW5zaXRpb246IC4zcztcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4uaG9tZS1pbmZvIGJ1dHRvbjpob3ZlciBhe1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5ob21lLWluZm8gc3BhbiB7XHJcbiAgICBjb2xvcjogdmFyKC0tdHVycXVlc2EpO1xyXG59XHJcblxyXG4ubWFwYS1jb250YWluZXIge1xyXG4gICAgbGluZS1oZWlnaHQ6IDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLm1hcGEtY29udGFpbmVyIC5pbmZvLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuNyk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgdHJhbnNpdGlvbjogLjRzIGVhc2UgYWxsO1xyXG59XHJcbi5tYXBhLWNvbnRhaW5lciAuaW5mby1jb250YWluZXIgLnNvbWJyYSB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5tYXBhLWNvbnRhaW5lciAuaW5mby1jb250YWluZXIgLmNhamEge1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5lZ3JvKTtcclxuICAgIHBhZGRpbmc6IDUwcHggMjVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDkwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiAuNHMgZWFzZSBhbGw7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxufVxyXG4ubWFwYS1jb250YWluZXIgLmluZm8tY29udGFpbmVyIC5zb21icmEgLmNhamEge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5tYXBhLWNvbnRhaW5lciAuaW5mby1jb250YWluZXIgLnNvbWJyYSAuY2FqYSBoMXtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGNvbG9yOiB2YXIoLS10dXJxdWVzYSk7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggZG90dGVkIHZhcigtLXR1cnF1ZXNhKTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG4ubWFwYS1jb250YWluZXIgLmluZm8tY29udGFpbmVyIC5zb21icmEgLmNhamEgcHtcclxuICAgIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgICBmb250LWZhbWlseTogJ0JyZWUgU2VyaWYnLCBzZXJpZjtcclxufVxyXG4ubWFwYS1jb250YWluZXIgLmluZm8tY29udGFpbmVyIC5zb21icmEgLmNhamEgcDpmaXJzdC1vZi10eXBle1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4ubWFwYS1jb250YWluZXIgLmluZm8tY29udGFpbmVyIC5zb21icmEgYnV0dG9ue1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tdHVycXVlc2EpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBmb250LXNpemU6IC45ZW07XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogLjRzIGVhc2UgYWxsO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMzBweDtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxufVxyXG4ubWFwYS1jb250YWluZXIgLmluZm8tY29udGFpbmVyIC5zb21icmEgYnV0dG9uOmhvdmVye1xyXG4gICAgY29sb3I6IHZhcigtLXR1cnF1ZXNhKTtcclxufVxyXG4gIC8qIE1hcGEgdmlzaWJsZSovXHJcbi5tYXBhLWNvbnRhaW5lciAuaW5mby0wIHtcclxuICAgIGhlaWdodDogMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAwO1xyXG59XHJcbi5tYXBhLWNvbnRhaW5lciAuaW5mby1jb250YWluZXIgLmluZm8tMCB7XHJcbiAgICBsaW5lLWhlaWdodDogMDtcclxuICAgIGhlaWdodDogMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTgwJSk7XHJcbn1cclxuLm1hcGEtY29udGFpbmVyIC5pbmZvLWNvbnRhaW5lciAuc29tYnJhIC5idXR0b24tb24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmVncm8pO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tbmVncm8pO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTEwMHB4KTtcclxufSBcclxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgLyogTUFQQSBGSU4gKi9cclxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCl7XHJcbiAgICAubWFwYS1jb250YWluZXIgLmluZm8tY29udGFpbmVyIC5zb21icmEgLmNhamEgaDEge1xyXG4gICAgICAgIHdpZHRoOiBpbmhlcml0O1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_usuarios_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/usuarios.service */ "./src/app/services/usuarios.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





const _c0 = ["login"];
const _c1 = ["registro"];
const _c2 = ["line"];
const _c3 = function () { return ["../home"]; };
class LoginComponent {
    constructor(elem, UsuariosService, _router) {
        this.elem = elem;
        this.UsuariosService = UsuariosService;
        this._router = _router;
    }
    ngOnInit() {
    }
    abrirRegistro() {
        this.registro.nativeElement.classList.add('registroActive');
        this.login.nativeElement.classList.add('loginOff');
        this.line.nativeElement.classList.add('lineActive');
    }
    abrirLogin() {
        this.registro.nativeElement.classList.remove('registroActive');
        this.registro.nativeElement.style.height = "";
        this.login.nativeElement.classList.remove('loginOff');
        this.line.nativeElement.classList.remove('lineActive');
    }
    createUser() {
        const user = {
            name: this.nombre,
            email: this.email,
            password: this.contrasena
        };
        // console.log(user);
        this.UsuariosService.createUser(user)
            .subscribe((newUser) => {
            // console.log(newUser);
        });
    }
    getUser() {
        const user = {
            email: this.emailL,
            password: this.contrasenaL
        };
        this.UsuariosService.getUser(user)
            .subscribe((newUser) => {
            this._router.navigate(['/home']);
            var usuarioArray = JSON.stringify(newUser);
            var usuarioArrayJson = JSON.parse(usuarioArray);
            localStorage.setItem("usuarioActual", usuarioArrayJson.user.name);
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_usuarios_service__WEBPACK_IMPORTED_MODULE_1__["UsuariosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], viewQuery: function LoginComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.login = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.registro = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.line = _t.first);
    } }, decls: 51, vars: 7, consts: [[1, "login-container"], [1, "tabs"], [1, "tab-active", 3, "click"], [3, "click"], [1, "line"], ["line", ""], [1, "loginBody"], [1, "login"], ["login", ""], ["action", "POST"], [1, "uc", "usuario"], ["for", "usuario"], ["type", "text", "name", "usuario", "placeholder", "email", "autocomplete", "off", "required", "", 3, "ngModel", "ngModelChange"], ["myUser", ""], [1, "uc", "contrasena"], ["for", "Contrase\u00F1a"], ["type", "password", "name", "password", "id", "", "placeholder", "Contrase\u00F1a", "required", "", 3, "ngModel", "ngModelChange"], ["myPsw", ""], ["type", "sumbit", 3, "click"], [1, "registro"], ["registro", ""], ["type", "text", "name", "usuario", "placeholder", "Nombre y apellido", "autocomplete", "off", 3, "ngModel", "ngModelChange"], [1, "uc", "email"], ["type", "email", "name", "email", "placeholder", "e-mail", "autocomplete", "off", 3, "ngModel", "ngModelChange"], [1, "uc", "password"], ["type", "password", "name", "password", "placeholder", "Contrase\u00F1a", 3, "ngModel", "ngModelChange"], [1, "uc", "password2"], ["type", "password", "name", "password", "placeholder", "Confirmar Contrase\u00F1a"], ["type", "button", 3, "click"], [1, "returnHome"], [3, "routerLink"], [1, "incorrecto-container"], ["incorrecto", ""], [1, "incorrecto"], [1, "datos"], [1, "equis"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_2_listener() { return ctx.abrirLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_4_listener() { return ctx.abrirRegistro(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Registrate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Usuario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_15_listener($event) { return ctx.emailL = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Contrase\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_20_listener($event) { return ctx.contrasenaL = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_22_listener() { return ctx.getUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Ingresar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_28_listener($event) { return ctx.nombre = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_30_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_32_listener($event) { return ctx.contrasena = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_35_listener() { return ctx.createUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Registrarse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Volver al Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 31, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Datos Incorrectos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Vuelva a ingresar sus datos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Cerrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.emailL);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.contrasenaL);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nombre);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.contrasena);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c3));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["[_nghost-%COMP%] {\r\n    background: linear-gradient(to bottom, var(--negro), rgb(30, 31, 31));\r\n    height: 100vh;\r\n    position: absolute;\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n}\r\n*[_ngcontent-%COMP%]{\r\n    transition: .3s;\r\n}\r\n.login-container[_ngcontent-%COMP%] {\r\n    height: 400px;\r\n    width: 500px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    \r\n    \r\n    background-color: white;\r\n    color: white;\r\n    overflow: hidden;\r\n    position: relative;\r\n    margin-bottom: 40px;\r\n}\r\n.login-container[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    width: 100%;\r\n    position: relative;\r\n}\r\n.login-container[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\r\n    display: block;\r\n    height: 2px;\r\n    transition: .3s;\r\n    width: 50%;\r\n    position: absolute;\r\n    bottom: 0;\r\n    background-color: var(--negro);\r\n}\r\n.login-container[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .line.lineActive[_ngcontent-%COMP%] {\r\n    transform: translateX(100%);\r\n}\r\n.login-container[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n    border: none;\r\n    outline: none;\r\n    \r\n    background-color: white;\r\n    color: var(--negro);\r\n    height: 50px;\r\n    font-size: 1.2em;\r\n    font-family:'Poppins', sans-serif;\r\n    cursor: pointer;\r\n}\r\n.login-container[_ngcontent-%COMP%]   .loginBody[_ngcontent-%COMP%]  {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n.login-container[_ngcontent-%COMP%]   .loginBody[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    transition: .3s;\r\n    padding: 20px 30px ;\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n}\r\n.login-container[_ngcontent-%COMP%]   .loginBody[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n}\r\n.login-container[_ngcontent-%COMP%]   .loginBody[_ngcontent-%COMP%]   .registro[_ngcontent-%COMP%]{\r\n    right: -100%;\r\n    position: absolute;\r\n}\r\n.login-container[_ngcontent-%COMP%]   .loginBody[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n    width: 60%;\r\n    margin: auto;\r\n    height: 35px;\r\n    border-radius: 18px;\r\n    padding-left: 10px;\r\n    outline: none;\r\n    background-color: transparent;\r\n    border: 2px solid var(--negro);\r\n    color: var(--negro);\r\n}\r\n.login-container[_ngcontent-%COMP%]   .loginBody[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{\r\n    \r\n    width: 70%;\r\n}\r\n.login-container[_ngcontent-%COMP%]   .loginBody[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    height: 35px;\r\n    padding: 0 30px;\r\n    color: var(--turquesa);\r\n    background-color: var(--negro);\r\n    outline: none;\r\n    font-family: 'Poppins', sans-serif;\r\n    border: none;\r\n    cursor: pointer;\r\n    transition: .3s;\r\n}\r\n.login-container[_ngcontent-%COMP%]   .loginBody[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{\r\n    color: white;\r\n}\r\n.login-container[_ngcontent-%COMP%]   .loginBody[_ngcontent-%COMP%]   .uc[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    margin-bottom: 40px;\r\n    justify-content: space-between;\r\n    flex-direction: column;\r\n    color: var(--negro);\r\n}\r\n.login-container[_ngcontent-%COMP%]   .loginBody[_ngcontent-%COMP%]   .uc[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\r\n    font-family: 'Poppins', sans-serif;\r\n    margin-bottom: 5px;\r\n\r\n}\r\n.registroActive[_ngcontent-%COMP%]{\r\n    transform: translateX(-100%);\r\n\r\n}\r\n.loginOff[_ngcontent-%COMP%]{\r\n    transform: translateX(-100%);\r\n}\r\n.login-container[_ngcontent-%COMP%]   .loginBody[_ngcontent-%COMP%]   .registro[_ngcontent-%COMP%]   .uc[_ngcontent-%COMP%]{\r\n    margin-bottom: 20px;\r\n}\r\n.returnHome[_ngcontent-%COMP%] {\r\n    background-color: #fff;\r\n    padding: 15px 0;\r\n    \r\n}\r\n.returnHome[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    text-decoration: none;\r\n    padding: 20px 50px;\r\n    font-family: 'Poppins', sans-serif;\r\n    color: var(--negro);\r\n}\r\n.incorrecto-container[_ngcontent-%COMP%] {\r\n    background-color: rgba(0, 0, 0, .4);\r\n    width: 100%;\r\n    height: 100vh;\r\n    position: absolute;\r\n    display: none;\r\n}\r\n.incorrecto[_ngcontent-%COMP%] {\r\n    width: 500px;\r\n    height: 400px;\r\n    background-color: white;\r\n    position: absolute;\r\n    top: 50%;\r\n    right: 50%;\r\n    transform: translate(50%,-50%);\r\n    text-align: center;\r\n    flex-direction: column;\r\n}\r\n.incorrecto[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{\r\n    font-size: 200px;\r\n    color: var(--negro);\r\n}\r\n.incorrecto[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    color: var(--negro);\r\n    margin-top: 25px;\r\n    font-family: 'Poppins', sans-serif;\r\n}\r\n.incorrecto[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    width: 200px;\r\n    margin: auto;\r\n    outline: none;\r\n    border: none;\r\n    background-color: var(--negro);\r\n    color: var(--turquesa);\r\n    height: 40px;\r\n    font-family: 'Poppins', sans-serif;\r\n    cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFFQUFxRTtJQUNyRSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLHVDQUF1QztJQUN2Qyx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxlQUFlO0lBQ2YsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSwyQkFBMkI7QUFDL0I7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osYUFBYTtJQUNiLHVDQUF1QztJQUN2Qyx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsaUNBQWlDO0lBQ2pDLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsMkJBQW1CO0lBQW5CLHdCQUFtQjtJQUFuQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLHlDQUF5QztJQUN6QyxVQUFVO0FBQ2Q7QUFDQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5QixhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWixlQUFlO0lBQ2YsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksa0NBQWtDO0lBQ2xDLGtCQUFrQjs7QUFFdEI7QUFFQTtJQUNJLDRCQUE0Qjs7QUFFaEM7QUFDQTtJQUNJLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsZUFBZTs7QUFFbkI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsa0NBQWtDO0lBQ2xDLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksbUNBQW1DO0lBQ25DLFdBQVc7SUFDWCxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsVUFBVTtJQUNWLDhCQUE4QjtJQUM5QixrQkFBa0I7SUFDbEIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGtDQUFrQztBQUN0QztBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLDhCQUE4QjtJQUM5QixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGtDQUFrQztJQUNsQyxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHZhcigtLW5lZ3JvKSwgcmdiKDMwLCAzMSwgMzEpKTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbip7XHJcbiAgICB0cmFuc2l0aW9uOiAuM3M7XHJcbn1cclxuLmxvZ2luLWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDEsIDM3LCAzNyk7ICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG59XHJcbi5sb2dpbi1jb250YWluZXIgLnRhYnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5sb2dpbi1jb250YWluZXIgLnRhYnMgLmxpbmUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIHRyYW5zaXRpb246IC4zcztcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uZWdybyk7XHJcbn1cclxuLmxvZ2luLWNvbnRhaW5lciAudGFicyAubGluZS5saW5lQWN0aXZlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcclxufVxyXG5cclxuLmxvZ2luLWNvbnRhaW5lciAudGFicyBidXR0b24ge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDEsIDM3LCAzNyk7ICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGNvbG9yOiB2YXIoLS1uZWdybyk7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgZm9udC1mYW1pbHk6J1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5sb2dpbi1jb250YWluZXIgLmxvZ2luQm9keSAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLmxvZ2luLWNvbnRhaW5lciAubG9naW5Cb2R5ID4gZGl2IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdHJhbnNpdGlvbjogLjNzO1xyXG4gICAgcGFkZGluZzogMjBweCAzMHB4IDtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbn1cclxuLmxvZ2luLWNvbnRhaW5lciAubG9naW5Cb2R5IGZvcm17XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sb2dpbi1jb250YWluZXIgLmxvZ2luQm9keSAucmVnaXN0cm97XHJcbiAgICByaWdodDogLTEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuLmxvZ2luLWNvbnRhaW5lciAubG9naW5Cb2R5IGlucHV0e1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE4cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1uZWdybyk7XHJcbiAgICBjb2xvcjogdmFyKC0tbmVncm8pO1xyXG59XHJcbi5sb2dpbi1jb250YWluZXIgLmxvZ2luQm9keSBpbnB1dDpmb2N1c3tcclxuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIHJnYigzNSwgMjE2LCAyMjMpOyAqL1xyXG4gICAgd2lkdGg6IDcwJTtcclxufVxyXG4ubG9naW4tY29udGFpbmVyIC5sb2dpbkJvZHkgYnV0dG9ue1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgcGFkZGluZzogMCAzMHB4O1xyXG4gICAgY29sb3I6IHZhcigtLXR1cnF1ZXNhKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5lZ3JvKTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogLjNzO1xyXG59XHJcbi5sb2dpbi1jb250YWluZXIgLmxvZ2luQm9keSBidXR0b246aG92ZXJ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5sb2dpbi1jb250YWluZXIgLmxvZ2luQm9keSAudWN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBjb2xvcjogdmFyKC0tbmVncm8pO1xyXG59XHJcbi5sb2dpbi1jb250YWluZXIgLmxvZ2luQm9keSAudWMgbGFiZWx7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG5cclxufVxyXG5cclxuLnJlZ2lzdHJvQWN0aXZle1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxuXHJcbn1cclxuLmxvZ2luT2Zme1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxufVxyXG4ubG9naW4tY29udGFpbmVyIC5sb2dpbkJvZHkgLnJlZ2lzdHJvIC51Y3tcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLnJldHVybkhvbWUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDE1cHggMDtcclxuICAgIFxyXG59XHJcbi5yZXR1cm5Ib21lIGF7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDUwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6IHZhcigtLW5lZ3JvKTtcclxufVxyXG4uaW5jb3JyZWN0by1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuNCk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5pbmNvcnJlY3RvIHtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgcmlnaHQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwtNTAlKTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuLmluY29ycmVjdG8gZmEtaWNvbntcclxuICAgIGZvbnQtc2l6ZTogMjAwcHg7XHJcbiAgICBjb2xvcjogdmFyKC0tbmVncm8pO1xyXG59XHJcbi5pbmNvcnJlY3RvIGgxe1xyXG4gICAgY29sb3I6IHZhcigtLW5lZ3JvKTtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5pbmNvcnJlY3RvIGJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmVncm8pO1xyXG4gICAgY29sb3I6IHZhcigtLXR1cnF1ZXNhKTtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _services_usuarios_service__WEBPACK_IMPORTED_MODULE_1__["UsuariosService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, { login: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["login"]
        }], registro: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["registro"]
        }], line: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["line"]
        }] }); })();


/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const _c0 = ["menu"];
const _c1 = ["userMenu"];
const _c2 = function () { return ["../home"]; };
const _c3 = function () { return ["home"]; };
const _c4 = function () { return ["../catalogo"]; };
const _c5 = function () { return ["../contacto"]; };
const _c6 = function () { return ["../login"]; };
class MenuComponent {
    constructor() {
        this.faBars = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faBars"];
        this.faTimes = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTimes"];
    }
    ngOnInit() {
        window.onscroll = () => {
            if (window.pageYOffset > 0) {
                this.menu.nativeElement.classList.add('on');
            }
            else {
                this.menu.nativeElement.classList.remove('on');
            }
        };
        this.user = localStorage.getItem("usuarioActual");
        if (this.user == null) {
            document.getElementById("userMenu").style.display = "block";
            document.getElementById("userOn").style.display = "none";
        }
        else {
            // console.log(this.user);
            document.getElementById("userMenu").style.display = "none";
            document.getElementById("userOn").style.display = "block";
        }
    }
    menuCanvasOn() {
        this.menu.nativeElement.classList.add('menuon');
    }
    menuCanvasOff() {
        this.menu.nativeElement.classList.remove('menuon');
    }
    cerrarSesion() {
        localStorage.clear();
        location.reload();
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(); };
MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], viewQuery: function MenuComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.menu = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.userMenu = _t.first);
    } }, decls: 24, vars: 19, consts: [[1, "burguer", "menucanvas"], [3, "icon", "click"], [1, "menu"], ["menu", ""], [1, "menuoff", "menucanvas"], ["href", "", 3, "routerLink", "routerLinkActive"], [1, "user", 2, "display", "inline-block"], ["id", "userMenu", 1, "userNone"], ["id", "userOn", 1, "userOn", 3, "click"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "fa-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_fa_icon_click_1_listener() { return ctx.menuCanvasOn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "fa-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_fa_icon_click_5_listener() { return ctx.menuCanvasOff(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Inicio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Catalogo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Contacto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Iniciar Sesion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_div_click_21_listener() { return ctx.cerrarSesion(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faBars);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faTimes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c2))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c4))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c5))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c6))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user);
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FaIconComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"]], styles: ["*[_ngcontent-%COMP%]{\r\n    font-family: 'Poppins', sans-serif;\r\n}\r\n.menu[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    width: 100%;\r\n    z-index: 100;\r\n    text-align: right;\r\n    transition: .3s;\r\n}\r\n.menucanvas[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n.menu.on[_ngcontent-%COMP%] {\r\n    background-color: #fff;\r\n}\r\n.menu.on[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: var(--negro);\r\n}\r\n.menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    max-width: 1200px;\r\n    margin: auto;\r\n    text-align: center;\r\n}\r\n.menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    padding: 15px 10px;\r\n    margin: 0 20px;\r\n}\r\n.menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]{\r\n    color: var(--turquesa);\r\n}\r\n.menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    color: white;\r\n    padding: 15px 10px;\r\n    text-decoration: none;\r\n    transition: .3s;\r\n}\r\n.menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.home[_ngcontent-%COMP%] {\r\n    color: var(--turquesa);\r\n}\r\n.userNone[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n}\r\n.userOn[_ngcontent-%COMP%] {\r\n    display: none;\r\n    \r\n    padding: 15px 10px;\r\n    margin: 0 20px;\r\n    width: 100px;\r\n    color: var(--turquesa);\r\n    cursor: pointer;\r\n}\r\n@media screen and (max-width: 800px){\r\n    .menu[_ngcontent-%COMP%] {\r\n        top: 0;\r\n        bottom: 0;\r\n        background-color: #fff;\r\n        width: 150px;\r\n        right: 0;\r\n        transform: translateX(100%);\r\n        z-index: 1001;\r\n    }\r\n    .burguer[_ngcontent-%COMP%] {\r\n        display: block;\r\n        position: absolute;\r\n        color: #fff;\r\n        z-index: 1000;\r\n        cursor: pointer;\r\n        right: 0;\r\n        margin: 20px 40px;\r\n        font-size: 2em;\r\n    }\r\n    .menuoff[_ngcontent-%COMP%] {\r\n        display: block;\r\n        text-align: center;\r\n        font-size: 2em;\r\n        padding-top: 20px;\r\n\r\n    }\r\n    .menuoff[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\r\n        cursor: pointer;\r\n    }\r\n    .menu.menuon[_ngcontent-%COMP%]{\r\n        transform: initial;\r\n    }\r\n    .menu.on[_ngcontent-%COMP%] {\r\n        background-color: #fff;\r\n    }\r\n    .menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n        margin: 0;\r\n        cursor: pointer;\r\n    }\r\n    .menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\r\n        background-color: var(--negro);\r\n    }\r\n    .menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        color: var(--negro);\r\n        padding: 0;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQ0FBa0M7QUFDdEM7QUFDQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGFBQWE7SUFDYiw0QkFBNEI7SUFDNUIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGVBQWU7QUFDbkI7QUFDQTtJQUNJO1FBQ0ksTUFBTTtRQUNOLFNBQVM7UUFDVCxzQkFBc0I7UUFDdEIsWUFBWTtRQUNaLFFBQVE7UUFDUiwyQkFBMkI7UUFDM0IsYUFBYTtJQUNqQjtJQUNBO1FBQ0ksY0FBYztRQUNkLGtCQUFrQjtRQUNsQixXQUFXO1FBQ1gsYUFBYTtRQUNiLGVBQWU7UUFDZixRQUFRO1FBQ1IsaUJBQWlCO1FBQ2pCLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGNBQWM7UUFDZCxrQkFBa0I7UUFDbEIsY0FBYztRQUNkLGlCQUFpQjs7SUFFckI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksc0JBQXNCO0lBQzFCO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsU0FBUztRQUNULGVBQWU7SUFDbkI7SUFDQTtRQUNJLDhCQUE4QjtJQUNsQztJQUNBO1FBQ0ksbUJBQW1CO1FBQ25CLFVBQVU7SUFDZDtBQUNKIiwiZmlsZSI6InNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG4ubWVudSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHotaW5kZXg6IDEwMDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgdHJhbnNpdGlvbjogLjNzO1xyXG59XHJcbi5tZW51Y2FudmFzIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLm1lbnUub24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG4ubWVudS5vbiB1bCBsaSBhIHtcclxuICAgIGNvbG9yOiB2YXIoLS1uZWdybyk7XHJcbn1cclxuLm1lbnUgdWwge1xyXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLm1lbnUgdWwgbGkge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIHBhZGRpbmc6IDE1cHggMTBweDtcclxuICAgIG1hcmdpbjogMCAyMHB4O1xyXG59XHJcbi5tZW51IHVsIGxpOmhvdmVyIGF7XHJcbiAgICBjb2xvcjogdmFyKC0tdHVycXVlc2EpO1xyXG59XHJcbi5tZW51IHVsIGxpIGF7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDEwcHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiAuM3M7XHJcbn1cclxuXHJcbi5tZW51IHVsIGxpIGEuaG9tZSB7XHJcbiAgICBjb2xvcjogdmFyKC0tdHVycXVlc2EpO1xyXG59XHJcbi51c2VyTm9uZSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuLnVzZXJPbiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgKi9cclxuICAgIHBhZGRpbmc6IDE1cHggMTBweDtcclxuICAgIG1hcmdpbjogMCAyMHB4O1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgY29sb3I6IHZhcigtLXR1cnF1ZXNhKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCl7XHJcbiAgICAubWVudSB7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcbiAgICAgICAgei1pbmRleDogMTAwMTtcclxuICAgIH1cclxuICAgIC5idXJndWVyIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgei1pbmRleDogMTAwMDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgbWFyZ2luOiAyMHB4IDQwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICB9XHJcbiAgICAubWVudW9mZiB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG5cclxuICAgIH1cclxuICAgIC5tZW51b2ZmIGZhLWljb24ge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICAgIC5tZW51Lm1lbnVvbntcclxuICAgICAgICB0cmFuc2Zvcm06IGluaXRpYWw7XHJcbiAgICB9XHJcbiAgICAubWVudS5vbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICAgIC5tZW51IHVsIGxpIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gICAgLm1lbnUgdWwgbGk6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5lZ3JvKTtcclxuICAgIH1cclxuICAgIC5tZW51IHVsIGxpIGEge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1uZWdybyk7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-menu',
                templateUrl: './menu.component.html',
                styleUrls: ['./menu.component.css']
            }]
    }], function () { return []; }, { menu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["menu"]
        }], userMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["userMenu"]
        }] }); })();


/***/ }),

/***/ "./src/app/services/bicicletas.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/bicicletas.service.ts ***!
  \************************************************/
/*! exports provided: BicicletasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BicicletasService", function() { return BicicletasService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class BicicletasService {
    constructor(http) {
        this.http = http;
    }
    getAllTasks() {
        const path = 'https://bicicletas-api.herokuapp.com/bicycles/';
        return this.http.get(path);
    }
    createTask(bicicletas) {
        const path = 'https://bicicletas-api.herokuapp.com/bicycles';
        return this.http.post(path, bicicletas);
    }
}
BicicletasService.ɵfac = function BicicletasService_Factory(t) { return new (t || BicicletasService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
BicicletasService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BicicletasService, factory: BicicletasService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BicicletasService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/usuarios.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/usuarios.service.ts ***!
  \**********************************************/
/*! exports provided: UsuariosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosService", function() { return UsuariosService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class UsuariosService {
    constructor(http) {
        this.http = http;
    }
    createUser(user) {
        const path = 'https://bicicletas-api.herokuapp.com/register';
        return this.http.post(path, user);
    }
    getUser(user) {
        const path2 = 'https://bicicletas-api.herokuapp.com/login';
        return this.http.post(path2, user);
    }
}
UsuariosService.ɵfac = function UsuariosService_Factory(t) { return new (t || UsuariosService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
UsuariosService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UsuariosService, factory: UsuariosService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsuariosService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\tizon\Documents\Programacion basica\BicycleShop\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
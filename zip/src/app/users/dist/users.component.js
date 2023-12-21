"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UsersComponent = void 0;
var core_1 = require("@angular/core");
var UsersComponent = /** @class */ (function () {
    function UsersComponent() {
    }
    UsersComponent = __decorate([
        core_1.Component({
            selector: 'app-users',
            templateUrl: "./users.component.html",
            styleUrls: ['./users.component.css']
        })
    ], UsersComponent);
    return UsersComponent;
}());
exports.UsersComponent = UsersComponent;
// import { Component } from "@angular/core";
// @Component({
//   selector:'app-user',
//   templateUrl:'./user.component.html',
// //  template:`
// //  <p> From User template </p>
// //  <h1> From User Component </h1>
// //  <h2> From User Component </h2>
// //  `
// styleUrls:['./user.component.css'] // میشه چندتا فایل داشت
// ,styles:[` //اگه دستورات کم بود میشه اینجانوشت
// p{
//   color:red;
// }`]
// })
// export class UserComponent{
// }

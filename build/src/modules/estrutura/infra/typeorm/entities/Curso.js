"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Curso = void 0;
var typeorm_1 = require("typeorm");
var Curso = /** @class */ (function () {
    function Curso() {
    }
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", String)
    ], Curso.prototype, "codigo", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Curso.prototype, "nome", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Curso.prototype, "unidade", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Curso.prototype, "campus", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Boolean)
    ], Curso.prototype, "permitir_choque_periodo", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Boolean)
    ], Curso.prototype, "permitir_choque_horario", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Curso.prototype, "created_at", void 0);
    Curso = __decorate([
        typeorm_1.Entity("curso")
    ], Curso);
    return Curso;
}());
exports.Curso = Curso;

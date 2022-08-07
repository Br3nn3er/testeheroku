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
exports.Disciplina = void 0;
var typeorm_1 = require("typeorm");
var Curso_1 = require("./Curso");
var Disciplina = /** @class */ (function () {
    function Disciplina() {
    }
    Disciplina_1 = Disciplina;
    var Disciplina_1;
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", String)
    ], Disciplina.prototype, "codigo", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Disciplina.prototype, "nome", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Disciplina.prototype, "ch_teorica", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Disciplina.prototype, "ch_pratica", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Disciplina.prototype, "ch_total", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Curso_1.Curso; }),
        typeorm_1.JoinColumn({ name: "curso" }),
        __metadata("design:type", Curso_1.Curso)
    ], Disciplina.prototype, "curso_disciplinas", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Disciplina.prototype, "curso", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Boolean)
    ], Disciplina.prototype, "temfila", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Disciplina.prototype, "periodo", void 0);
    __decorate([
        typeorm_1.OneToOne(function () { return Disciplina_1; }),
        typeorm_1.JoinColumn({ name: "cod_antigo" }),
        __metadata("design:type", Disciplina)
    ], Disciplina.prototype, "disciplina", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Disciplina.prototype, "cod_antigo", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Disciplina.prototype, "created_at", void 0);
    Disciplina = Disciplina_1 = __decorate([
        typeorm_1.Entity("disciplina")
    ], Disciplina);
    return Disciplina;
}());
exports.Disciplina = Disciplina;

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
exports.Fila = void 0;
var typeorm_1 = require("typeorm");
var Disciplina_1 = require("../../../../estrutura/infra/typeorm/entities/Disciplina");
var Professor_1 = require("../../../../estrutura/infra/typeorm/entities/Professor");
var Fila = /** @class */ (function () {
    function Fila() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Fila.prototype, "id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Professor_1.Professor; }),
        typeorm_1.JoinColumn({ name: "siape" }),
        __metadata("design:type", Professor_1.Professor)
    ], Fila.prototype, "professor", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Fila.prototype, "siape", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Disciplina_1.Disciplina; }),
        typeorm_1.JoinColumn({ name: "codigo_disc" }),
        __metadata("design:type", Disciplina_1.Disciplina)
    ], Fila.prototype, "disciplina", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Fila.prototype, "codigo_disc", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Fila.prototype, "pos", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Fila.prototype, "prioridade", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Fila.prototype, "qte_ministrada", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Fila.prototype, "qte_maximo", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Fila.prototype, "ano", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Fila.prototype, "semestre", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Fila.prototype, "status", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Boolean)
    ], Fila.prototype, "periodo_preferencial", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Fila.prototype, "created_at", void 0);
    Fila = __decorate([
        typeorm_1.Entity("fila")
    ], Fila);
    return Fila;
}());
exports.Fila = Fila;

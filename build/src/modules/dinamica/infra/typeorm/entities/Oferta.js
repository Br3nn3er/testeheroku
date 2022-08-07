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
exports.Oferta = void 0;
var typeorm_1 = require("typeorm");
var Horario_1 = require("../../../../estrutura/infra/typeorm/entities/Horario");
var Semana_1 = require("../../../../estrutura/infra/typeorm/entities/Semana");
var Turma_1 = require("../../../../estrutura/infra/typeorm/entities/Turma");
var Oferta = /** @class */ (function () {
    function Oferta() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", String)
    ], Oferta.prototype, "id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Semana_1.Semana; }),
        typeorm_1.JoinColumn({ name: "dia" }),
        __metadata("design:type", Semana_1.Semana)
    ], Oferta.prototype, "semana", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Oferta.prototype, "dia", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Horario_1.Horario; }),
        typeorm_1.JoinColumn({ name: "letra" }),
        __metadata("design:type", Horario_1.Horario)
    ], Oferta.prototype, "horario", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Oferta.prototype, "letra", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Turma_1.Turma; }),
        typeorm_1.JoinColumn({ name: "id" }),
        __metadata("design:type", Turma_1.Turma)
    ], Oferta.prototype, "turma", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Oferta.prototype, "id_turma", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Oferta.prototype, "created_at", void 0);
    Oferta = __decorate([
        typeorm_1.Entity("oferta")
    ], Oferta);
    return Oferta;
}());
exports.Oferta = Oferta;

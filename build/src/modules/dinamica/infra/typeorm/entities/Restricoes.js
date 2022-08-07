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
exports.Restricoes = void 0;
var typeorm_1 = require("typeorm");
var Horario_1 = require("../../../../estrutura/infra/typeorm/entities/Horario");
var Professor_1 = require("../../../../estrutura/infra/typeorm/entities/Professor");
var Semana_1 = require("../../../../estrutura/infra/typeorm/entities/Semana");
var Restricoes = /** @class */ (function () {
    function Restricoes() {
    }
    __decorate([
        typeorm_1.ManyToOne(function () { return Professor_1.Professor; }),
        typeorm_1.JoinColumn({ name: "siape" }),
        __metadata("design:type", Professor_1.Professor)
    ], Restricoes.prototype, "professor", void 0);
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", String)
    ], Restricoes.prototype, "siape", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Semana_1.Semana; }),
        typeorm_1.JoinColumn({ name: "dia" }),
        __metadata("design:type", Semana_1.Semana)
    ], Restricoes.prototype, "semana", void 0);
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", String)
    ], Restricoes.prototype, "dia", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Horario_1.Horario; }),
        typeorm_1.JoinColumn({ name: "letra" }),
        __metadata("design:type", Horario_1.Horario)
    ], Restricoes.prototype, "letra_H", void 0);
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", String)
    ], Restricoes.prototype, "letra", void 0);
    Restricoes = __decorate([
        typeorm_1.Entity("restricoes")
    ], Restricoes);
    return Restricoes;
}());
exports.Restricoes = Restricoes;

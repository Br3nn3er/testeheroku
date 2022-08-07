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
exports.AtribuicaoManual = void 0;
var typeorm_1 = require("typeorm");
var Professor_1 = require("../../../../estrutura/infra/typeorm/entities/Professor");
var Turma_1 = require("../../../../estrutura/infra/typeorm/entities/Turma");
var Cenario_1 = require("./Cenario");
var AtribuicaoManual = /** @class */ (function () {
    function AtribuicaoManual() {
    }
    __decorate([
        typeorm_1.ManyToOne(function () { return Cenario_1.Cenario; }),
        typeorm_1.JoinColumn({ name: "num_cenario" }),
        __metadata("design:type", Cenario_1.Cenario)
    ], AtribuicaoManual.prototype, "cenario", void 0);
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", Number)
    ], AtribuicaoManual.prototype, "num_cenario", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Professor_1.Professor; }),
        typeorm_1.JoinColumn({ name: "siape" }),
        __metadata("design:type", Professor_1.Professor)
    ], AtribuicaoManual.prototype, "professor", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], AtribuicaoManual.prototype, "siape", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Turma_1.Turma; }),
        typeorm_1.JoinColumn({ name: "id_turma" }),
        __metadata("design:type", Turma_1.Turma)
    ], AtribuicaoManual.prototype, "turma", void 0);
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", Number)
    ], AtribuicaoManual.prototype, "id_turma", void 0);
    AtribuicaoManual = __decorate([
        typeorm_1.Entity("atribuicao_manual")
    ], AtribuicaoManual);
    return AtribuicaoManual;
}());
exports.AtribuicaoManual = AtribuicaoManual;

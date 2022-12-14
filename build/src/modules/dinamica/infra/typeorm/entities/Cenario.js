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
exports.Cenario = void 0;
var typeorm_1 = require("typeorm");
var Semestre_1 = require("../../../../estrutura/infra/typeorm/entities/Semestre");
var Cenario = /** @class */ (function () {
    function Cenario() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", String)
    ], Cenario.prototype, "num_cenario", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Cenario.prototype, "descricao_cenario", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Semestre_1.Semestre; }),
        typeorm_1.JoinColumn([{ name: "ano" }, { name: "semestre" }]),
        __metadata("design:type", Semestre_1.Semestre)
    ], Cenario.prototype, "semestre_t", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Cenario.prototype, "ano", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Cenario.prototype, "semestre", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Cenario.prototype, "created_at", void 0);
    Cenario = __decorate([
        typeorm_1.Entity("cenario")
    ], Cenario);
    return Cenario;
}());
exports.Cenario = Cenario;

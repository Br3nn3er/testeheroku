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
exports.StatusPossibilidades = void 0;
var typeorm_1 = require("typeorm");
var Fila_1 = require("./Fila");
var Possibilidades_1 = require("./Possibilidades");
var StatusDistribuicao_1 = require("./StatusDistribuicao");
var StatusPossibilidades = /** @class */ (function () {
    function StatusPossibilidades() {
    }
    __decorate([
        typeorm_1.ManyToOne(function () { return Fila_1.Fila; }),
        typeorm_1.JoinColumn({ name: "id_fila" }),
        __metadata("design:type", Fila_1.Fila)
    ], StatusPossibilidades.prototype, "fila", void 0);
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", Number)
    ], StatusPossibilidades.prototype, "id_fila", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Possibilidades_1.Possibilidades; }),
        typeorm_1.JoinColumn({ name: "id_possibilidade" }),
        __metadata("design:type", Possibilidades_1.Possibilidades)
    ], StatusPossibilidades.prototype, "possibilidades", void 0);
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", Number)
    ], StatusPossibilidades.prototype, "id_possibilidade", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return StatusDistribuicao_1.StatusDistribuicao; }),
        typeorm_1.JoinColumn({ name: "status" }),
        __metadata("design:type", StatusDistribuicao_1.StatusDistribuicao)
    ], StatusPossibilidades.prototype, "statusDistribuicao", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], StatusPossibilidades.prototype, "status", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], StatusPossibilidades.prototype, "created_at", void 0);
    StatusPossibilidades = __decorate([
        typeorm_1.Entity("status_possibilidades")
    ], StatusPossibilidades);
    return StatusPossibilidades;
}());
exports.StatusPossibilidades = StatusPossibilidades;

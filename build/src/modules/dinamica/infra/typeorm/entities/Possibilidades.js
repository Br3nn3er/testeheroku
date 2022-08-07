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
exports.Possibilidades = void 0;
var typeorm_1 = require("typeorm");
var Cenario_1 = require("./Cenario");
var Possibilidades = /** @class */ (function () {
    function Possibilidades() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", String)
    ], Possibilidades.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Possibilidades.prototype, "descricao", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Cenario_1.Cenario; }),
        typeorm_1.JoinColumn({ name: "num_cenario" }),
        __metadata("design:type", Cenario_1.Cenario)
    ], Possibilidades.prototype, "cenario", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Possibilidades.prototype, "num_cenario", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Possibilidades.prototype, "created_at", void 0);
    Possibilidades = __decorate([
        typeorm_1.Entity("possibilidades")
    ], Possibilidades);
    return Possibilidades;
}());
exports.Possibilidades = Possibilidades;

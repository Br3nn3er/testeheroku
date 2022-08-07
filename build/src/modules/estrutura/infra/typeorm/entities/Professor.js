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
exports.Professor = void 0;
var typeorm_1 = require("typeorm");
var Professor = /** @class */ (function () {
    function Professor() {
    }
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", String)
    ], Professor.prototype, "siape", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Professor.prototype, "nome", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Date)
    ], Professor.prototype, "data_ingresso", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Date)
    ], Professor.prototype, "data_nasc", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Boolean)
    ], Professor.prototype, "afastado", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Professor.prototype, "regime", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Professor.prototype, "carga_atual", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Professor.prototype, "locacao", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Professor.prototype, "cnome", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Date)
    ], Professor.prototype, "data_saida", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Date)
    ], Professor.prototype, "data_exoneracao", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Date)
    ], Professor.prototype, "data_aposentadoria", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Professor.prototype, "status", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Professor.prototype, "created_at", void 0);
    Professor = __decorate([
        typeorm_1.Entity("professor")
    ], Professor);
    return Professor;
}());
exports.Professor = Professor;

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
exports.AuditoriaFila = void 0;
var typeorm_1 = require("typeorm");
var AuditoriaFila = /** @class */ (function () {
    function AuditoriaFila() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", String)
    ], AuditoriaFila.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], AuditoriaFila.prototype, "siape", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], AuditoriaFila.prototype, "codigo_disc", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], AuditoriaFila.prototype, "pos", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], AuditoriaFila.prototype, "prioridade", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], AuditoriaFila.prototype, "qte_ministrada", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], AuditoriaFila.prototype, "qte_maximo", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], AuditoriaFila.prototype, "ano", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], AuditoriaFila.prototype, "semestre", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], AuditoriaFila.prototype, "status", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Boolean)
    ], AuditoriaFila.prototype, "periodo_preferencial", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], AuditoriaFila.prototype, "comando", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Date)
    ], AuditoriaFila.prototype, "stamp", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], AuditoriaFila.prototype, "created_at", void 0);
    AuditoriaFila = __decorate([
        typeorm_1.Entity("auditoria_fila")
    ], AuditoriaFila);
    return AuditoriaFila;
}());
exports.AuditoriaFila = AuditoriaFila;

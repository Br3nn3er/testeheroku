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
exports.AuditoriaPrioridade = void 0;
var typeorm_1 = require("typeorm");
var AuditoriaPrioridade = /** @class */ (function () {
    function AuditoriaPrioridade() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", String)
    ], AuditoriaPrioridade.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], AuditoriaPrioridade.prototype, "siape", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], AuditoriaPrioridade.prototype, "codigo_disc", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], AuditoriaPrioridade.prototype, "prioridade_antiga", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], AuditoriaPrioridade.prototype, "prioridade_nova", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Date)
    ], AuditoriaPrioridade.prototype, "stamp", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], AuditoriaPrioridade.prototype, "created_at", void 0);
    AuditoriaPrioridade = __decorate([
        typeorm_1.Entity("auditoria_prioridade")
    ], AuditoriaPrioridade);
    return AuditoriaPrioridade;
}());
exports.AuditoriaPrioridade = AuditoriaPrioridade;

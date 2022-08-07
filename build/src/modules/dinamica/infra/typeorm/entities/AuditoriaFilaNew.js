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
exports.AuditoriaFilaNew = void 0;
var typeorm_1 = require("typeorm");
var AuditoriaFilaNew = /** @class */ (function () {
    function AuditoriaFilaNew() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", String)
    ], AuditoriaFilaNew.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], AuditoriaFilaNew.prototype, "id_turma", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], AuditoriaFilaNew.prototype, "id_fila", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], AuditoriaFilaNew.prototype, "prioridade_old", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], AuditoriaFilaNew.prototype, "prioridade_new", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Date)
    ], AuditoriaFilaNew.prototype, "stamp", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], AuditoriaFilaNew.prototype, "created_at", void 0);
    AuditoriaFilaNew = __decorate([
        typeorm_1.Entity("auditoria_fila_turma_new")
    ], AuditoriaFilaNew);
    return AuditoriaFilaNew;
}());
exports.AuditoriaFilaNew = AuditoriaFilaNew;

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
exports.FilaTurmaNew = void 0;
var typeorm_1 = require("typeorm");
var Turma_1 = require("../../../../estrutura/infra/typeorm/entities/Turma");
var Fila_1 = require("./Fila");
var FilaTurmaNew = /** @class */ (function () {
    function FilaTurmaNew() {
    }
    __decorate([
        typeorm_1.ManyToOne(function () { return Turma_1.Turma; }),
        typeorm_1.JoinColumn({ name: "id_turma" }),
        __metadata("design:type", Turma_1.Turma)
    ], FilaTurmaNew.prototype, "turma", void 0);
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", Number)
    ], FilaTurmaNew.prototype, "id_turma", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Fila_1.Fila; }),
        typeorm_1.JoinColumn({ name: "id_fila" }),
        __metadata("design:type", Fila_1.Fila)
    ], FilaTurmaNew.prototype, "fila", void 0);
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", Number)
    ], FilaTurmaNew.prototype, "id_fila", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], FilaTurmaNew.prototype, "prioridade", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], FilaTurmaNew.prototype, "created_at", void 0);
    FilaTurmaNew = __decorate([
        typeorm_1.Entity("fila_turma_new")
    ], FilaTurmaNew);
    return FilaTurmaNew;
}());
exports.FilaTurmaNew = FilaTurmaNew;

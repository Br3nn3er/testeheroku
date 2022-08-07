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
exports.Turma = void 0;
var typeorm_1 = require("typeorm");
var Disciplina_1 = require("./Disciplina");
var Turma = /** @class */ (function () {
    function Turma() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", String)
    ], Turma.prototype, "id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Disciplina_1.Disciplina; }),
        typeorm_1.JoinColumn({ name: "codigo_disc" }),
        __metadata("design:type", Disciplina_1.Disciplina)
    ], Turma.prototype, "disciplina", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Turma.prototype, "codigo_disc", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Turma.prototype, "turma", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Turma.prototype, "ch", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Turma.prototype, "ano", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Turma.prototype, "semestre", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Turma.prototype, "created_at", void 0);
    Turma = __decorate([
        typeorm_1.Entity("turma")
    ], Turma);
    return Turma;
}());
exports.Turma = Turma;

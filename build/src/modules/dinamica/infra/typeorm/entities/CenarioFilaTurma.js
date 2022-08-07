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
exports.CenarioFilaTurma = void 0;
var typeorm_1 = require("typeorm");
var Cenario_1 = require("./Cenario");
var FilaTurmaNew_1 = require("./FilaTurmaNew");
var CenarioFilaTurma = /** @class */ (function () {
    function CenarioFilaTurma() {
    }
    __decorate([
        typeorm_1.ManyToOne(function () { return Cenario_1.Cenario; }),
        typeorm_1.JoinColumn({ name: "num_cenario" }),
        __metadata("design:type", Cenario_1.Cenario)
    ], CenarioFilaTurma.prototype, "cenario", void 0);
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", Number)
    ], CenarioFilaTurma.prototype, "num_cenario", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return FilaTurmaNew_1.FilaTurmaNew; }),
        typeorm_1.JoinColumn([{ name: "id_turma" }, { name: "id_fila" }]),
        __metadata("design:type", FilaTurmaNew_1.FilaTurmaNew)
    ], CenarioFilaTurma.prototype, "filaTurmaNew", void 0);
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", Number)
    ], CenarioFilaTurma.prototype, "id_turma", void 0);
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", Number)
    ], CenarioFilaTurma.prototype, "id_fila", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], CenarioFilaTurma.prototype, "status", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], CenarioFilaTurma.prototype, "prioridade", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], CenarioFilaTurma.prototype, "posicao", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], CenarioFilaTurma.prototype, "created_at", void 0);
    CenarioFilaTurma = __decorate([
        typeorm_1.Entity("cenario_fila_turma")
    ], CenarioFilaTurma);
    return CenarioFilaTurma;
}());
exports.CenarioFilaTurma = CenarioFilaTurma;

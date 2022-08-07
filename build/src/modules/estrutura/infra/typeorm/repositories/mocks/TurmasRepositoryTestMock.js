"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TurmasRepositoryTestMock = void 0;
var Turma_1 = require("../../entities/Turma");
var TurmasRepositoryTestMock = /** @class */ (function () {
    function TurmasRepositoryTestMock() {
        this.turmas = [];
        this.count = 0;
    }
    TurmasRepositoryTestMock.prototype.createTurma = function (_a) {
        var codigo_disc = _a.codigo_disc, turma = _a.turma, ch = _a.ch, ano = _a.ano, semestre = _a.semestre;
        return __awaiter(this, void 0, void 0, function () {
            var turmaToCreate;
            return __generator(this, function (_b) {
                turmaToCreate = new Turma_1.Turma();
                this.count += 1;
                Object.assign(turmaToCreate, {
                    id: this.count,
                    codigo_disc: codigo_disc,
                    turma: turma,
                    ch: ch,
                    ano: ano,
                    semestre: semestre,
                });
                this.turmas.push(turmaToCreate);
                return [2 /*return*/, turmaToCreate];
            });
        });
    };
    TurmasRepositoryTestMock.prototype.listAllTurmas = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.turmas];
            });
        });
    };
    TurmasRepositoryTestMock.prototype.queryById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var turma;
            return __generator(this, function (_a) {
                turma = this.turmas.find(function (turmaToSearch) { return turmaToSearch.id === id; });
                return [2 /*return*/, turma];
            });
        });
    };
    TurmasRepositoryTestMock.prototype.queryByCodigo = function (codigo_disc) {
        return __awaiter(this, void 0, void 0, function () {
            var turma;
            return __generator(this, function (_a) {
                turma = this.turmas.find(function (turmaToSearch) { return turmaToSearch.codigo_disc === codigo_disc; });
                return [2 /*return*/, turma];
            });
        });
    };
    TurmasRepositoryTestMock.prototype.queryByCodigoTurmaAnoSemestre = function (codigo, turma, ano, semestre) {
        return __awaiter(this, void 0, void 0, function () {
            var foundedTurma;
            return __generator(this, function (_a) {
                foundedTurma = this.turmas.find(function (turmaToSearch) {
                    return turmaToSearch.codigo_disc === codigo &&
                        turmaToSearch.turma === turma &&
                        turmaToSearch.ano === ano &&
                        turmaToSearch.semestre === semestre;
                });
                return [2 /*return*/, foundedTurma];
            });
        });
    };
    TurmasRepositoryTestMock.prototype.queryByAnoESemestre = function (year, semester) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.turmas.filter(function (turma) { return turma.ano === year && turma.semestre === semester; })];
            });
        });
    };
    TurmasRepositoryTestMock.prototype.updateById = function (_a) {
        var id = _a.id, codigo_disc = _a.codigo_disc, turma = _a.turma, ch = _a.ch, ano = _a.ano, semestre = _a.semestre;
        return __awaiter(this, void 0, void 0, function () {
            var turmaToUpdate;
            return __generator(this, function (_b) {
                turmaToUpdate = this.turmas.find(function (turma) { return turma.id === id; });
                Object.assign(turmaToUpdate, {
                    codigo_disc: codigo_disc || turmaToUpdate.codigo_disc,
                    turma: turma || turmaToUpdate.turma,
                    ch: ch || turmaToUpdate.ch,
                    ano: ano || turmaToUpdate.ano,
                    semestre: semestre || turmaToUpdate.semestre,
                });
                this.turmas.push(turmaToUpdate);
                return [2 /*return*/, turmaToUpdate];
            });
        });
    };
    TurmasRepositoryTestMock.prototype.deleteById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var turmaIndex;
            return __generator(this, function (_a) {
                turmaIndex = this.turmas.findIndex(function (turma) { return turma.id === id; });
                if (turmaIndex > -1) {
                    this.turmas.splice(turmaIndex, 1);
                }
                return [2 /*return*/];
            });
        });
    };
    return TurmasRepositoryTestMock;
}());
exports.TurmasRepositoryTestMock = TurmasRepositoryTestMock;

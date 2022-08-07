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
exports.FilaTurmaNewRepositoryTestMock = void 0;
var FilaTurmaNew_1 = require("../../entities/FilaTurmaNew");
var FilaTurmaNewRepositoryTestMock = /** @class */ (function () {
    function FilaTurmaNewRepositoryTestMock() {
        this.listFilasTurma = [];
    }
    FilaTurmaNewRepositoryTestMock.prototype.create = function (_a) {
        var id_turma = _a.id_turma, id_fila = _a.id_fila, prioridade = _a.prioridade;
        return __awaiter(this, void 0, void 0, function () {
            var fila;
            return __generator(this, function (_b) {
                fila = new FilaTurmaNew_1.FilaTurmaNew();
                Object.assign(fila, { id_turma: id_turma, id_fila: id_fila, prioridade: prioridade });
                this.listFilasTurma.push(fila);
                return [2 /*return*/, fila];
            });
        });
    };
    FilaTurmaNewRepositoryTestMock.prototype.listFilas = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.listFilasTurma];
            });
        });
    };
    FilaTurmaNewRepositoryTestMock.prototype.queryByTurmaEFila = function (id_turma, id_fila) {
        return __awaiter(this, void 0, void 0, function () {
            var filaFounded;
            return __generator(this, function (_a) {
                filaFounded = this.listFilasTurma.find(function (fila) { return fila.id_turma === id_turma && fila.id_fila === id_fila; });
                return [2 /*return*/, filaFounded];
            });
        });
    };
    FilaTurmaNewRepositoryTestMock.prototype.queryByTurma = function (id_turma) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.listFilasTurma.filter(function (fila) { return fila.id_turma === id_turma; })];
            });
        });
    };
    FilaTurmaNewRepositoryTestMock.prototype.updateByTurmaEFila = function (_a) {
        var id_turma = _a.id_turma, id_fila = _a.id_fila, prioridade = _a.prioridade;
        return __awaiter(this, void 0, void 0, function () {
            var filaFounded;
            return __generator(this, function (_b) {
                filaFounded = this.listFilasTurma.find(function (fila) { return fila.id_turma === id_turma && fila.id_fila === id_fila; });
                Object.assign(filaFounded, {
                    prioridade: prioridade || filaFounded.prioridade,
                });
                this.listFilasTurma.push(filaFounded);
                return [2 /*return*/, filaFounded];
            });
        });
    };
    FilaTurmaNewRepositoryTestMock.prototype.deleteByTurmaEFila = function (id_turma, id_fila) {
        return __awaiter(this, void 0, void 0, function () {
            var filaIndex;
            return __generator(this, function (_a) {
                filaIndex = this.listFilasTurma.findIndex(function (fila) { return fila.id_turma === id_turma && fila.id_fila === id_fila; });
                if (filaIndex > -1) {
                    this.listFilasTurma.splice(filaIndex, 1);
                }
                return [2 /*return*/];
            });
        });
    };
    FilaTurmaNewRepositoryTestMock.prototype.readByProfessorAndSemestre = function (siape, semestre, ano) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.listFilasTurma.filter(function (fila) {
                        return fila.fila.siape === siape &&
                            fila.fila.semestre === semestre &&
                            fila.fila.ano === ano;
                    })];
            });
        });
    };
    return FilaTurmaNewRepositoryTestMock;
}());
exports.FilaTurmaNewRepositoryTestMock = FilaTurmaNewRepositoryTestMock;

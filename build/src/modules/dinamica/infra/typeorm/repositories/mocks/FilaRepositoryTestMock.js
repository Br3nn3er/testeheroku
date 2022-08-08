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
exports.FilaRepositoryTestMock = void 0;
var Fila_1 = require("../../entities/Fila");
var FilaRepositoryTestMock = /** @class */ (function () {
    function FilaRepositoryTestMock() {
        this.filas = [];
        this.count = 0;
    }
    FilaRepositoryTestMock.prototype.create = function (_a) {
        var siape = _a.siape, codigo_disc = _a.codigo_disc, pos = _a.pos, prioridade = _a.prioridade, qte_ministrada = _a.qte_ministrada, qte_maximo = _a.qte_maximo, ano = _a.ano, semestre = _a.semestre, status = _a.status, periodo_preferencial = _a.periodo_preferencial;
        return __awaiter(this, void 0, void 0, function () {
            var fila;
            return __generator(this, function (_b) {
                fila = new Fila_1.Fila();
                this.count += 1;
                Object.assign(fila, {
                    id: this.count,
                    siape: siape,
                    codigo_disc: codigo_disc,
                    pos: pos,
                    prioridade: prioridade,
                    qte_ministrada: qte_ministrada,
                    qte_maximo: qte_maximo,
                    ano: ano,
                    semestre: semestre,
                    status: status,
                    periodo_preferencial: periodo_preferencial,
                });
                this.filas.push(fila);
                return [2 /*return*/, fila];
            });
        });
    };
    FilaRepositoryTestMock.prototype.listFilas = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.filas];
            });
        });
    };
    FilaRepositoryTestMock.prototype.queryById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var filaFounded;
            return __generator(this, function (_a) {
                filaFounded = this.filas.find(function (fila) { return fila.id === id; });
                return [2 /*return*/, filaFounded];
            });
        });
    };
    FilaRepositoryTestMock.prototype.queryByDiscEPosEAnoESemestre = function (codigo_disc, pos, ano, semestre) {
        return __awaiter(this, void 0, void 0, function () {
            var filaFounded;
            return __generator(this, function (_a) {
                filaFounded = this.filas.find(function (fila) {
                    return fila.codigo_disc === codigo_disc &&
                        fila.pos === pos &&
                        fila.ano === ano &&
                        fila.semestre === semestre;
                });
                return [2 /*return*/, filaFounded];
            });
        });
    };
    FilaRepositoryTestMock.prototype.queryBySiapeEDiscEAnoESemestre = function (siape, codigo_disc, ano, semestre) {
        return __awaiter(this, void 0, void 0, function () {
            var filaFounded;
            return __generator(this, function (_a) {
                filaFounded = this.filas.find(function (fila) {
                    return fila.siape === siape &&
                        fila.codigo_disc === codigo_disc &&
                        fila.ano === ano &&
                        fila.semestre === semestre;
                });
                return [2 /*return*/, filaFounded];
            });
        });
    };
    FilaRepositoryTestMock.prototype.queryBySiape = function (siape) {
        return __awaiter(this, void 0, void 0, function () {
            var filaFounded;
            return __generator(this, function (_a) {
                filaFounded = this.filas.filter(function (fila) { return fila.siape === siape; });
                return [2 /*return*/, filaFounded];
            });
        });
    };
    FilaRepositoryTestMock.prototype.queryByDiscEAnoESemestre = function (codigo_disc, ano, semestre) {
        return __awaiter(this, void 0, void 0, function () {
            var fila;
            return __generator(this, function (_a) {
                fila = this.filas.filter(function (fila) {
                    return fila.codigo_disc === codigo_disc &&
                        fila.ano === ano &&
                        fila.semestre === semestre;
                });
                return [2 /*return*/, fila];
            });
        });
    };
    FilaRepositoryTestMock.prototype.queryBySIAPEEAnoESemestre = function (siape, ano, semestre) {
        return __awaiter(this, void 0, void 0, function () {
            var fila;
            return __generator(this, function (_a) {
                fila = this.filas.filter(function (fila) {
                    return fila.siape === siape && fila.ano === ano && fila.semestre === semestre;
                });
                return [2 /*return*/, fila];
            });
        });
    };
    FilaRepositoryTestMock.prototype.queryByTurma = function (turma) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                throw new Error("Method not implemented.");
            });
        });
    };
    FilaRepositoryTestMock.prototype.queryBySiapeEAnoESemestre = function (siape, ano, semestre) {
        return __awaiter(this, void 0, void 0, function () {
            var filaFounded;
            return __generator(this, function (_a) {
                filaFounded = this.filas.filter(function (fila) {
                    return fila.siape === siape && fila.ano === ano && fila.semestre === semestre;
                });
                return [2 /*return*/, filaFounded];
            });
        });
    };
    FilaRepositoryTestMock.prototype.updateById = function (_a) {
        var id = _a.id, siape = _a.siape, codigo_disc = _a.codigo_disc, pos = _a.pos, prioridade = _a.prioridade, qte_ministrada = _a.qte_ministrada, qte_maximo = _a.qte_maximo, ano = _a.ano, semestre = _a.semestre, status = _a.status, periodo_preferencial = _a.periodo_preferencial;
        return __awaiter(this, void 0, void 0, function () {
            var filaToUpdate;
            return __generator(this, function (_b) {
                filaToUpdate = this.filas.find(function (fila) { return fila.id === id; });
                Object.assign(filaToUpdate, {
                    siape: siape || filaToUpdate.siape,
                    codigo_disc: codigo_disc || filaToUpdate.codigo_disc,
                    pos: pos || filaToUpdate.pos,
                    prioridade: prioridade || filaToUpdate.prioridade,
                    qte_ministrada: qte_ministrada || filaToUpdate.qte_ministrada,
                    qte_maximo: qte_maximo || filaToUpdate.qte_maximo,
                    ano: ano || filaToUpdate.ano,
                    semestre: semestre || filaToUpdate.semestre,
                    status: status || filaToUpdate.status,
                    periodo_preferencial: periodo_preferencial === null || periodo_preferencial === undefined
                        ? filaToUpdate.periodo_preferencial
                        : periodo_preferencial,
                });
                this.filas.push(filaToUpdate);
                return [2 /*return*/, filaToUpdate];
            });
        });
    };
    FilaRepositoryTestMock.prototype.deleteById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var filaIndex;
            return __generator(this, function (_a) {
                filaIndex = this.filas.findIndex(function (fila) { return fila.id === id; });
                if (filaIndex > -1) {
                    this.filas.splice(filaIndex, 1);
                }
                return [2 /*return*/];
            });
        });
    };
    return FilaRepositoryTestMock;
}());
exports.FilaRepositoryTestMock = FilaRepositoryTestMock;

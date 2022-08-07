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
exports.CursosRepositoryTestMock = void 0;
var Curso_1 = require("../../entities/Curso");
var CursosRepositoryTestMock = /** @class */ (function () {
    function CursosRepositoryTestMock() {
        this.cursos = [];
    }
    CursosRepositoryTestMock.prototype.queryByCodigo = function (codigo) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.cursos.find(function (curso) { return curso.codigo === codigo; })];
            });
        });
    };
    CursosRepositoryTestMock.prototype.createCurso = function (_a) {
        var nome = _a.nome, codigo = _a.codigo, unidade = _a.unidade, campus = _a.campus, permitir_choque_periodo = _a.permitir_choque_periodo, permitir_choque_horario = _a.permitir_choque_horario;
        return __awaiter(this, void 0, void 0, function () {
            var curso;
            return __generator(this, function (_b) {
                curso = new Curso_1.Curso();
                Object.assign(curso, {
                    nome: nome,
                    codigo: codigo,
                    unidade: unidade,
                    campus: campus,
                    permitir_choque_periodo: permitir_choque_periodo,
                    permitir_choque_horario: permitir_choque_horario,
                });
                this.cursos.push(curso);
                return [2 /*return*/, curso];
            });
        });
    };
    CursosRepositoryTestMock.prototype.listAllCursos = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.cursos];
            });
        });
    };
    CursosRepositoryTestMock.prototype.deleteByCodigo = function (codigo) {
        return __awaiter(this, void 0, void 0, function () {
            var cursoIndex;
            return __generator(this, function (_a) {
                cursoIndex = this.cursos.findIndex(function (curso) { return curso.codigo === codigo; });
                if (cursoIndex > -1) {
                    this.cursos.splice(cursoIndex, 1);
                }
                return [2 /*return*/];
            });
        });
    };
    CursosRepositoryTestMock.prototype.update = function (_a) {
        var codigo = _a.codigo, nome = _a.nome, unidade = _a.unidade, campus = _a.campus, permitir_choque_periodo = _a.permitir_choque_periodo, permitir_choque_horario = _a.permitir_choque_horario;
        return __awaiter(this, void 0, void 0, function () {
            var cursoToUpdate;
            return __generator(this, function (_b) {
                cursoToUpdate = this.cursos.find(function (curso) { return curso.codigo === codigo; });
                Object.assign(cursoToUpdate, {
                    nome: nome || cursoToUpdate.nome,
                    unidade: unidade || cursoToUpdate.unidade,
                    campus: campus || cursoToUpdate.campus,
                    permitir_choque_periodo: permitir_choque_periodo === null ||
                        permitir_choque_periodo === undefined
                        ? cursoToUpdate.permitir_choque_periodo
                        : permitir_choque_periodo,
                    permitir_choque_horario: permitir_choque_horario === null ||
                        permitir_choque_horario === undefined
                        ? cursoToUpdate.permitir_choque_horario
                        : permitir_choque_horario,
                });
                this.cursos.push(cursoToUpdate);
                return [2 /*return*/, cursoToUpdate];
            });
        });
    };
    return CursosRepositoryTestMock;
}());
exports.CursosRepositoryTestMock = CursosRepositoryTestMock;

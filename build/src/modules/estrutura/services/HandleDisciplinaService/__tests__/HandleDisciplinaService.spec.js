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
var AppError_1 = require("../../../../../shared/errors/AppError");
var DisciplinasRepositoryTestMock_1 = require("../../../infra/typeorm/repositories/mocks/DisciplinasRepositoryTestMock");
var HandleDisciplinaService_1 = require("../HandleDisciplinaService");
describe("Handle CRUD operations related to Disciplina", function () {
    var disciplinasRepositoryTest;
    var handleDisciplinaService;
    beforeEach(function () {
        disciplinasRepositoryTest = new DisciplinasRepositoryTestMock_1.DisciplinasRepositoryTestMock();
        handleDisciplinaService = new HandleDisciplinaService_1.HandleDisciplinaService(disciplinasRepositoryTest);
    });
    it("Should be able to create a disciplina", function () { return __awaiter(void 0, void 0, void 0, function () {
        var disciplina;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, handleDisciplinaService.create({
                        codigo: "FACOM0001",
                        nome: "Interação Humano-Computador",
                        ch_teorica: 4,
                        ch_pratica: 0,
                        ch_total: 4,
                        curso: "BCC",
                        temfila: true,
                        periodo: 2,
                        cod_antigo: null,
                    })];
                case 1:
                    disciplina = _a.sent();
                    expect(disciplina.codigo).toBe("FACOM0001");
                    expect(disciplina.ch_teorica).toBe(4);
                    expect(disciplina.curso).toBe("BCC");
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should not be able to create a disciplina with same codigo", function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, expect(function () { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, handleDisciplinaService.create({
                                        codigo: "FACOM0001",
                                        nome: "Interação Humano-Computador",
                                        ch_teorica: 4,
                                        ch_pratica: 0,
                                        ch_total: 4,
                                        curso: "BCC",
                                        temfila: true,
                                        periodo: 2,
                                        cod_antigo: null,
                                    })];
                                case 1:
                                    _a.sent();
                                    return [4 /*yield*/, handleDisciplinaService.create({
                                            codigo: "FACOM0001",
                                            nome: "Outra Disciplina",
                                            ch_teorica: 4,
                                            ch_pratica: 0,
                                            ch_total: 4,
                                            curso: "BCC",
                                            temfila: true,
                                            periodo: 2,
                                            cod_antigo: null,
                                        })];
                                case 2:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); }).rejects.toBeInstanceOf(AppError_1.AppError)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should be able to read all disciplina records", function () { return __awaiter(void 0, void 0, void 0, function () {
        var disciplinas;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, handleDisciplinaService.create({
                        codigo: "FACOM0001",
                        nome: "Interação Humano-Computador",
                        ch_teorica: 4,
                        ch_pratica: 0,
                        ch_total: 4,
                        curso: "BCC",
                        temfila: true,
                        periodo: 2,
                        cod_antigo: null,
                    })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, handleDisciplinaService.create({
                            codigo: "FACOM0002",
                            nome: "Interação Computador-Humano",
                            ch_teorica: 4,
                            ch_pratica: 0,
                            ch_total: 4,
                            curso: "BCC",
                            temfila: true,
                            periodo: 2,
                            cod_antigo: null,
                        })];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, handleDisciplinaService.read()];
                case 3:
                    disciplinas = _a.sent();
                    expect(disciplinas).toHaveLength(2);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should be able to read only disciplina record", function () { return __awaiter(void 0, void 0, void 0, function () {
        var disciplina, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, handleDisciplinaService.create({
                        codigo: "FACOM0001",
                        nome: "Interação Humano-Computador",
                        ch_teorica: 4,
                        ch_pratica: 0,
                        ch_total: 4,
                        curso: "BCC",
                        temfila: true,
                        periodo: 2,
                        cod_antigo: null,
                    })];
                case 1:
                    disciplina = _a.sent();
                    return [4 /*yield*/, handleDisciplinaService.create({
                            codigo: "FACOM0002",
                            nome: "Interação Computador-Humano",
                            ch_teorica: 4,
                            ch_pratica: 0,
                            ch_total: 4,
                            curso: "BCC",
                            temfila: true,
                            periodo: 2,
                            cod_antigo: null,
                        })];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, handleDisciplinaService.readByCodigo(disciplina.codigo)];
                case 3:
                    response = _a.sent();
                    expect(response).toMatchObject(disciplina);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should be able to update a disciplina record", function () { return __awaiter(void 0, void 0, void 0, function () {
        var disciplina;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, handleDisciplinaService.create({
                        codigo: "FACOM0001",
                        nome: "Estrutura de Dados",
                        ch_teorica: 3,
                        ch_pratica: 1,
                        ch_total: 4,
                        curso: "BSI",
                        temfila: false,
                        periodo: 2,
                        cod_antigo: null,
                    })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, handleDisciplinaService.update({
                            codigo: "FACOM0001",
                            nome: "Interação Humano-Computador",
                            ch_teorica: 4,
                            ch_pratica: 0,
                            ch_total: 4,
                            curso: "BCC",
                            temfila: true,
                            periodo: 2,
                        })];
                case 2:
                    disciplina = _a.sent();
                    expect(disciplina.codigo).toBe("FACOM0001");
                    expect(disciplina.ch_teorica).toBe(4);
                    expect(disciplina.curso).toBe("BCC");
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should not be able to update a nonexisting disciplina record", function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, expect(function () { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, handleDisciplinaService.update({
                                        codigo: "2613020762",
                                        nome: "Interação Humano-Computador",
                                        ch_teorica: 4,
                                        ch_pratica: 0,
                                        ch_total: 4,
                                        curso: "BCC",
                                        temfila: true,
                                        periodo: 2,
                                    })];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); }).rejects.toBeInstanceOf(AppError_1.AppError)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should be able to delete a disciplina record", function () { return __awaiter(void 0, void 0, void 0, function () {
        var disciplinas;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, handleDisciplinaService.create({
                        codigo: "FACOM0001",
                        nome: "Interação Humano-Computador",
                        ch_teorica: 4,
                        ch_pratica: 0,
                        ch_total: 4,
                        curso: "BCC",
                        temfila: true,
                        periodo: 2,
                        cod_antigo: null,
                    })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, handleDisciplinaService.delete("FACOM0001")];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, handleDisciplinaService.read()];
                case 3:
                    disciplinas = _a.sent();
                    expect(disciplinas).toHaveLength(0);
                    return [2 /*return*/];
            }
        });
    }); });
});

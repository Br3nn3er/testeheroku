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
var SemestresRepositoryTestMock_1 = require("../../../../estrutura/infra/typeorm/repositories/mocks/SemestresRepositoryTestMock");
var FilaRepositoryTestMock_1 = require("../../../infra/typeorm/repositories/mocks/FilaRepositoryTestMock");
var HandleFilaService_1 = require("../HandleFilaService");
describe("Handle CRUD operations related to fila", function () {
    var filaRepositoryTest;
    var handleFilaService;
    var semestresRepositoryTestMock;
    beforeEach(function () {
        filaRepositoryTest = new FilaRepositoryTestMock_1.FilaRepositoryTestMock();
        semestresRepositoryTestMock = new SemestresRepositoryTestMock_1.SemestresRepositoryTestMock();
        handleFilaService = new HandleFilaService_1.HandleFilaService(filaRepositoryTest, semestresRepositoryTestMock);
    });
    it("Should be able to create a new fila record", function () { return __awaiter(void 0, void 0, void 0, function () {
        var fila;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, handleFilaService.create({
                        siape: "1024389",
                        codigo_disc: "FACOM33501",
                        pos: 40,
                        prioridade: 14,
                        qte_ministrada: 0,
                        qte_maximo: 4,
                        ano: 2019,
                        semestre: 1,
                        status: -1,
                        periodo_preferencial: false,
                    })];
                case 1:
                    fila = _a.sent();
                    expect(fila.siape).toBe("1024389");
                    expect(fila.prioridade).toBe(14);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should not be able to create an existing fila record", function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, expect(function () { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, handleFilaService.create({
                                        siape: "1024389",
                                        codigo_disc: "FACOM33501",
                                        pos: 40,
                                        prioridade: 14,
                                        qte_ministrada: 0,
                                        qte_maximo: 4,
                                        ano: 2019,
                                        semestre: 1,
                                        status: -1,
                                        periodo_preferencial: false,
                                    })];
                                case 1:
                                    _a.sent();
                                    return [4 /*yield*/, handleFilaService.create({
                                            siape: "1024389",
                                            codigo_disc: "FACOM33501",
                                            pos: 40,
                                            prioridade: 14,
                                            qte_ministrada: 0,
                                            qte_maximo: 4,
                                            ano: 2019,
                                            semestre: 1,
                                            status: -1,
                                            periodo_preferencial: false,
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
    it("Should be able to read all fila records", function () { return __awaiter(void 0, void 0, void 0, function () {
        var filas;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, handleFilaService.create({
                        siape: "1024389",
                        codigo_disc: "FACOM33501",
                        pos: 40,
                        prioridade: 14,
                        qte_ministrada: 0,
                        qte_maximo: 4,
                        ano: 2019,
                        semestre: 1,
                        status: -1,
                        periodo_preferencial: false,
                    })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, handleFilaService.create({
                            siape: "00100100",
                            codigo_disc: "FACOM33501",
                            pos: 40,
                            prioridade: 14,
                            qte_ministrada: 0,
                            qte_maximo: 4,
                            ano: 2020,
                            semestre: 1,
                            status: -1,
                            periodo_preferencial: false,
                        })];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, handleFilaService.read()];
                case 3:
                    filas = _a.sent();
                    expect(filas).toHaveLength(2);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should be able to read fila records by discipline and semester", function () { return __awaiter(void 0, void 0, void 0, function () {
        var semester, filaB, filas;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, semestresRepositoryTestMock.createSemestre({
                        ano: 2020,
                        semestre: 1,
                        status: true,
                    })];
                case 1:
                    semester = _a.sent();
                    return [4 /*yield*/, handleFilaService.create({
                            siape: "1024389",
                            codigo_disc: "FACOM33502",
                            pos: 40,
                            prioridade: 14,
                            qte_ministrada: 0,
                            qte_maximo: 4,
                            ano: semester.ano,
                            semestre: semester.semestre,
                            status: -1,
                            periodo_preferencial: false,
                        })];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, handleFilaService.create({
                            siape: "00100100",
                            codigo_disc: "FACOM33501",
                            pos: 40,
                            prioridade: 14,
                            qte_ministrada: 0,
                            qte_maximo: 4,
                            ano: semester.ano,
                            semestre: semester.semestre,
                            status: -1,
                            periodo_preferencial: false,
                        })];
                case 3:
                    filaB = _a.sent();
                    return [4 /*yield*/, handleFilaService.readByDisciplinaESemestre("FACOM33501", semester.id)];
                case 4:
                    filas = _a.sent();
                    expect(filas).toHaveLength(1);
                    expect(filas[0].id).toStrictEqual(filaB.id);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should be able to read fila records by professor and semester", function () { return __awaiter(void 0, void 0, void 0, function () {
        var semester, filaB, filas;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, semestresRepositoryTestMock.createSemestre({
                        ano: 2021,
                        semestre: 1,
                        status: true,
                    })];
                case 1:
                    semester = _a.sent();
                    return [4 /*yield*/, handleFilaService.create({
                            siape: "SIAPE20",
                            codigo_disc: "FACOM33502",
                            pos: 40,
                            prioridade: 14,
                            qte_ministrada: 0,
                            qte_maximo: 4,
                            ano: semester.ano,
                            semestre: semester.semestre,
                            status: -1,
                            periodo_preferencial: false,
                        })];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, handleFilaService.create({
                            siape: "SIAPE21",
                            codigo_disc: "FACOM33501",
                            pos: 40,
                            prioridade: 14,
                            qte_ministrada: 0,
                            qte_maximo: 4,
                            ano: semester.ano,
                            semestre: semester.semestre,
                            status: -1,
                            periodo_preferencial: false,
                        })];
                case 3:
                    filaB = _a.sent();
                    return [4 /*yield*/, handleFilaService.readByProfessorESemestre("SIAPE21", semester.id)];
                case 4:
                    filas = _a.sent();
                    expect(filas).toHaveLength(1);
                    expect(filas[0].id).toStrictEqual(filaB.id);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should be able to update an existing fila record", function () { return __awaiter(void 0, void 0, void 0, function () {
        var filaToUpdate, filaResult;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, handleFilaService.create({
                        siape: "1024389",
                        codigo_disc: "FACOM33501",
                        pos: 40,
                        prioridade: 14,
                        qte_ministrada: 0,
                        qte_maximo: 4,
                        ano: 2019,
                        semestre: 1,
                        status: -1,
                        periodo_preferencial: false,
                    })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, filaRepositoryTest.queryById(1)];
                case 2:
                    filaToUpdate = _a.sent();
                    return [4 /*yield*/, handleFilaService.update({
                            id: filaToUpdate.id,
                            qte_ministrada: 50,
                            qte_maximo: 60,
                        })];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, filaRepositoryTest.queryById(filaToUpdate.id)];
                case 4:
                    filaResult = _a.sent();
                    expect(filaResult.qte_ministrada).toBe(50);
                    expect(filaResult.qte_maximo).toBe(60);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should not be able to update an unexisting fila record", function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, expect(function () { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, handleFilaService.update({
                                        id: 500,
                                        semestre: 2,
                                        status: 5,
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
    it("Should be able to delete a fila record", function () { return __awaiter(void 0, void 0, void 0, function () {
        var filas;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, handleFilaService.create({
                        siape: "1024389",
                        codigo_disc: "FACOM33501",
                        pos: 40,
                        prioridade: 14,
                        qte_ministrada: 0,
                        qte_maximo: 4,
                        ano: 2019,
                        semestre: 1,
                        status: -1,
                        periodo_preferencial: false,
                    })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, handleFilaService.delete(1)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, filaRepositoryTest.listFilas()];
                case 3:
                    filas = _a.sent();
                    expect(filas).toHaveLength(0);
                    return [2 /*return*/];
            }
        });
    }); });
});

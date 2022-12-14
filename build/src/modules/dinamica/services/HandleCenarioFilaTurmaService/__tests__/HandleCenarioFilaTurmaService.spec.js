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
var CenarioFilaTurmaRepositoryTestMock_1 = require("../../../infra/typeorm/repositories/mocks/CenarioFilaTurmaRepositoryTestMock");
var HandleCenarioFilaTurmaService_1 = require("../HandleCenarioFilaTurmaService");
describe("Handle CRUD operations related to cenario_fila_turma", function () {
    var cenarioFilaRepositoryTest;
    var handleCenarioFilaTurmaService;
    beforeEach(function () {
        cenarioFilaRepositoryTest = new CenarioFilaTurmaRepositoryTestMock_1.CenarioFilaTurmaRepositoryTestMock();
        handleCenarioFilaTurmaService = new HandleCenarioFilaTurmaService_1.HandleCenarioFilaTurmaService(cenarioFilaRepositoryTest);
    });
    it("Should be able to create a new cenario_fila_turma record", function () { return __awaiter(void 0, void 0, void 0, function () {
        var cenarioFila;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, handleCenarioFilaTurmaService.create({
                        num_cenario: 1,
                        id_turma: 570,
                        id_fila: 7000,
                        status: 1,
                        prioridade: 1,
                        posicao: 1,
                    })];
                case 1:
                    cenarioFila = _a.sent();
                    expect(cenarioFila.id_fila).toBe(7000);
                    expect(cenarioFila.status).toBe(1);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should not be able to create an existing cenario_fila_turma record", function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, expect(function () { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, handleCenarioFilaTurmaService.create({
                                        num_cenario: 1,
                                        id_turma: 570,
                                        id_fila: 7000,
                                        status: 1,
                                        prioridade: 1,
                                        posicao: 1,
                                    })];
                                case 1:
                                    _a.sent();
                                    return [4 /*yield*/, handleCenarioFilaTurmaService.create({
                                            num_cenario: 1,
                                            id_turma: 570,
                                            id_fila: 7000,
                                            status: 1,
                                            prioridade: 1,
                                            posicao: 1,
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
    it("Should be able to read all cenario_fila_turma records", function () { return __awaiter(void 0, void 0, void 0, function () {
        var cenarioFilas;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, handleCenarioFilaTurmaService.create({
                        num_cenario: 1,
                        id_turma: 570,
                        id_fila: 7000,
                        status: 1,
                        prioridade: 1,
                        posicao: 1,
                    })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, handleCenarioFilaTurmaService.create({
                            num_cenario: 2,
                            id_turma: 300,
                            id_fila: 7001,
                            status: 1,
                            prioridade: 1,
                            posicao: 1,
                        })];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, handleCenarioFilaTurmaService.read()];
                case 3:
                    cenarioFilas = _a.sent();
                    expect(cenarioFilas).toHaveLength(2);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should be able to update an existing cenario_fila_turma record", function () { return __awaiter(void 0, void 0, void 0, function () {
        var cenarioFilaResult;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, handleCenarioFilaTurmaService.create({
                        num_cenario: 1,
                        id_turma: 570,
                        id_fila: 7000,
                        status: 1,
                        prioridade: 1,
                        posicao: 1,
                    })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, handleCenarioFilaTurmaService.update({
                            num_cenario: 1,
                            id_turma: 570,
                            id_fila: 7000,
                            status: 15,
                            posicao: 11,
                        })];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, cenarioFilaRepositoryTest.queryByCenarioETurmaEFila(1, 570, 7000)];
                case 3:
                    cenarioFilaResult = _a.sent();
                    expect(cenarioFilaResult.status).toBe(15);
                    expect(cenarioFilaResult.posicao).toBe(11);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should not be able to update an unexisting cenario_fila_turma record", function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, expect(function () { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, handleCenarioFilaTurmaService.update({
                                        num_cenario: 1111,
                                        id_turma: 570,
                                        id_fila: 7000,
                                        status: 15,
                                        posicao: 11,
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
    it("Should be able to delete a cenario_fila_turma record", function () { return __awaiter(void 0, void 0, void 0, function () {
        var cenarioFilas;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, handleCenarioFilaTurmaService.create({
                        num_cenario: 11,
                        id_turma: 571,
                        id_fila: 7001,
                        status: 1,
                        prioridade: 1,
                        posicao: 1,
                    })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, handleCenarioFilaTurmaService.delete(11, 571, 7001)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, cenarioFilaRepositoryTest.listCenarios()];
                case 3:
                    cenarioFilas = _a.sent();
                    expect(cenarioFilas).toHaveLength(0);
                    return [2 /*return*/];
            }
        });
    }); });
});

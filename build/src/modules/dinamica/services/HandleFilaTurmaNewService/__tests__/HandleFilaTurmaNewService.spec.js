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
var FilaTurmaNewRepositoryTestMock_1 = require("../../../infra/typeorm/repositories/mocks/FilaTurmaNewRepositoryTestMock");
var HandleFilaTurmaNewService_1 = require("../HandleFilaTurmaNewService");
describe("Handle CRUD operations related to fila_turma_new", function () {
    var filaRepositoryTest;
    var handleFilaTurmaNewService;
    var semestreRepositoryTest;
    var handleSemestreService;
    beforeEach(function () {
        filaRepositoryTest = new FilaTurmaNewRepositoryTestMock_1.FilaTurmaNewRepositoryTestMock();
        handleFilaTurmaNewService = new HandleFilaTurmaNewService_1.HandleFilaTurmaNewService(filaRepositoryTest, semestreRepositoryTest);
    });
    it("Should be able to create a new fila_turma_new record", function () { return __awaiter(void 0, void 0, void 0, function () {
        var fila;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, handleFilaTurmaNewService.create({
                        id_turma: 1,
                        id_fila: 1,
                        prioridade: 1,
                    })];
                case 1:
                    fila = _a.sent();
                    expect(fila.id_turma).toBe(1);
                    expect(fila.id_turma).toBe(1);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should not be able to create an existing fila_turma_new record", function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, expect(function () { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, handleFilaTurmaNewService.create({
                                        id_turma: 1,
                                        id_fila: 1,
                                        prioridade: 1,
                                    })];
                                case 1:
                                    _a.sent();
                                    return [4 /*yield*/, handleFilaTurmaNewService.create({
                                            id_turma: 1,
                                            id_fila: 1,
                                            prioridade: 1,
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
    it("Should be able to read all fila_turma_new records", function () { return __awaiter(void 0, void 0, void 0, function () {
        var filas;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, handleFilaTurmaNewService.create({
                        id_turma: 1,
                        id_fila: 1,
                        prioridade: 1,
                    })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, handleFilaTurmaNewService.create({
                            id_turma: 1,
                            id_fila: 2,
                            prioridade: 1,
                        })];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, handleFilaTurmaNewService.read()];
                case 3:
                    filas = _a.sent();
                    expect(filas).toHaveLength(2);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should be able to update an existing fila_turma_new record", function () { return __awaiter(void 0, void 0, void 0, function () {
        var filaResult;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, handleFilaTurmaNewService.create({
                        id_turma: 1,
                        id_fila: 1,
                        prioridade: 1,
                    })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, handleFilaTurmaNewService.update({
                            id_turma: 1,
                            id_fila: 1,
                            prioridade: 5,
                        })];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, filaRepositoryTest.queryByTurmaEFila(1, 1)];
                case 3:
                    filaResult = _a.sent();
                    expect(filaResult.prioridade).toBe(5);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should not be able to update an unexisting fila_turma_new record", function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, expect(function () { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, handleFilaTurmaNewService.update({
                                        id_turma: 1111,
                                        id_fila: 1111,
                                        prioridade: 5,
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
    it("Should be able to delete a fila_turma_new record", function () { return __awaiter(void 0, void 0, void 0, function () {
        var filas;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, handleFilaTurmaNewService.create({
                        id_turma: 55,
                        id_fila: 55,
                        prioridade: 1,
                    })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, handleFilaTurmaNewService.delete(55, 55)];
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

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
var PrioridadesRepositoryTestMock_1 = require("../../../infra/typeorm/repositories/mocks/PrioridadesRepositoryTestMock");
var HandlePrioridadeService_1 = require("../HandlePrioridadeService");
describe("Handle CRUD operations related to prioridades", function () {
    var prioridadesRepositoryTest;
    var handlePrioridadeService;
    beforeEach(function () {
        prioridadesRepositoryTest = new PrioridadesRepositoryTestMock_1.PrioridadesRepositoryTestMock();
        handlePrioridadeService = new HandlePrioridadeService_1.HandlePrioridadeService(prioridadesRepositoryTest);
    });
    it("Should be able to create a new prioridades record", function () { return __awaiter(void 0, void 0, void 0, function () {
        var prioridades;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, handlePrioridadeService.create({
                        prioridade: 1,
                        codigo_disc: "codigo_001",
                        siape: "000001",
                    })];
                case 1:
                    prioridades = _a.sent();
                    expect(prioridades.prioridade).toBe(1);
                    expect(prioridades.codigo_disc).toBe("codigo_001");
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should be able to read all prioridade records", function () { return __awaiter(void 0, void 0, void 0, function () {
        var prioridades;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, handlePrioridadeService.create({
                        prioridade: 1,
                        codigo_disc: "codigo_002",
                        siape: "0000015",
                    })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, handlePrioridadeService.create({
                            prioridade: 1,
                            codigo_disc: "codigo_003",
                            siape: "0000065",
                        })];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, handlePrioridadeService.read()];
                case 3:
                    prioridades = _a.sent();
                    expect(prioridades).toHaveLength(2);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should be able to update an existing prioridade record", function () { return __awaiter(void 0, void 0, void 0, function () {
        var prioridadeToUpdate, prioridadeResult;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, handlePrioridadeService.create({
                        prioridade: 15,
                        codigo_disc: "codigo_004",
                        siape: "0000065",
                    })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, prioridadesRepositoryTest.queryBySiapeECodigo("0000065", "codigo_004")];
                case 2:
                    prioridadeToUpdate = _a.sent();
                    return [4 /*yield*/, handlePrioridadeService.update({
                            id: prioridadeToUpdate.id,
                            prioridade: 10,
                        })];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, prioridadesRepositoryTest.queryById(prioridadeToUpdate.id)];
                case 4:
                    prioridadeResult = _a.sent();
                    expect(prioridadeResult.prioridade).toBe(10);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should not be able to update an unexisting prioridade record", function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, expect(function () { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, handlePrioridadeService.update({
                                        id: "500",
                                        prioridade: 10,
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
    it("Should be able to delete a prioridade record", function () { return __awaiter(void 0, void 0, void 0, function () {
        var prioridadeToDelete, prioridades;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, handlePrioridadeService.create({
                        prioridade: 1,
                        codigo_disc: "codigo_005",
                        siape: "0000015",
                    })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, prioridadesRepositoryTest.queryBySiapeECodigo("0000015", "codigo_005")];
                case 2:
                    prioridadeToDelete = _a.sent();
                    return [4 /*yield*/, handlePrioridadeService.delete(prioridadeToDelete.id)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, prioridadesRepositoryTest.listAllPrioridades()];
                case 4:
                    prioridades = _a.sent();
                    expect(prioridades).toHaveLength(0);
                    return [2 /*return*/];
            }
        });
    }); });
});

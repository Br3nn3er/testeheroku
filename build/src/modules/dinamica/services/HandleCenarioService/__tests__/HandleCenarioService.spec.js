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
var CenarioRepositoryTestMock_1 = require("../../../infra/typeorm/repositories/mocks/CenarioRepositoryTestMock");
var HandleCenarioService_1 = require("../HandleCenarioService");
describe("Handle CRUD operations related to cenario", function () {
    var cenarioRepositoryTest;
    var handleCenarioService;
    beforeEach(function () {
        cenarioRepositoryTest = new CenarioRepositoryTestMock_1.CenarioRepositoryTestMock();
        handleCenarioService = new HandleCenarioService_1.HandleCenarioService(cenarioRepositoryTest);
    });
    it("Should be able to create a cenario relationship", function () { return __awaiter(void 0, void 0, void 0, function () {
        var cenario;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, handleCenarioService.create({
                        descricao_cenario: "Calculo III",
                        ano: 2021,
                        semestre: 2,
                    })];
                case 1:
                    cenario = _a.sent();
                    expect(cenario.descricao_cenario).toBe("Calculo III");
                    expect(cenario.ano).toBe(2021);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should be able to read all cenario records", function () { return __awaiter(void 0, void 0, void 0, function () {
        var cenarioList;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, handleCenarioService.create({
                        descricao_cenario: "Calculo I",
                        ano: 2020,
                        semestre: 1,
                    })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, handleCenarioService.create({
                            descricao_cenario: "Calculo II",
                            ano: 2020,
                            semestre: 2,
                        })];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, handleCenarioService.create({
                            descricao_cenario: "Calculo III",
                            ano: 2021,
                            semestre: 1,
                        })];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, handleCenarioService.read()];
                case 4:
                    cenarioList = _a.sent();
                    expect(cenarioList).toHaveLength(3);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should be able to update an existing cenario record", function () { return __awaiter(void 0, void 0, void 0, function () {
        var cenarioToUpdate, cenarioResult;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, handleCenarioService.create({
                        descricao_cenario: "Calculo III",
                        ano: 2021,
                        semestre: 1,
                    })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, cenarioRepositoryTest.queryByAnoESemestre(2021, 1)];
                case 2:
                    cenarioToUpdate = _a.sent();
                    return [4 /*yield*/, handleCenarioService.update({
                            num_cenario: cenarioToUpdate.num_cenario,
                            ano: 2020,
                            semestre: 2,
                        })];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, cenarioRepositoryTest.queryByNumCenario(cenarioToUpdate.num_cenario)];
                case 4:
                    cenarioResult = _a.sent();
                    expect(cenarioResult.ano).toBe(2020);
                    expect(cenarioResult.semestre).toBe(2);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should not be able to update an unexisting cenario record", function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, expect(function () { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, handleCenarioService.update({
                                        num_cenario: "500",
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
    it("Should be able to delete a cenario record", function () { return __awaiter(void 0, void 0, void 0, function () {
        var cenarioToDelete, cenarios;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, handleCenarioService.create({
                        descricao_cenario: "Calculo III",
                        ano: 2021,
                        semestre: 1,
                    })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, cenarioRepositoryTest.queryByAnoESemestre(2021, 1)];
                case 2:
                    cenarioToDelete = _a.sent();
                    return [4 /*yield*/, handleCenarioService.delete(cenarioToDelete.num_cenario)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, cenarioRepositoryTest.listCenarios()];
                case 4:
                    cenarios = _a.sent();
                    expect(cenarios).toHaveLength(0);
                    return [2 /*return*/];
            }
        });
    }); });
});

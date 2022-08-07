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
var EtapaRepositoryTestMock_1 = require("../../../infra/typeorm/repositories/mocks/EtapaRepositoryTestMock");
var HandleEtapaService_1 = require("../HandleEtapaService");
describe("Handle CRUD operations related to etapa", function () {
    var etapaRepositoryTest;
    var handleEtapaService;
    beforeEach(function () {
        etapaRepositoryTest = new EtapaRepositoryTestMock_1.EtapaRepositoryTestMock();
        handleEtapaService = new HandleEtapaService_1.HandleEtapaService(etapaRepositoryTest);
    });
    it("Should be able to create a new etapa record", function () { return __awaiter(void 0, void 0, void 0, function () {
        var etapa;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, handleEtapaService.create({
                        codigo: "restricoes",
                        ativo: true,
                        descricao: "Exibir restrições",
                    })];
                case 1:
                    etapa = _a.sent();
                    expect(etapa.codigo).toBe("restricoes");
                    expect(etapa.ativo).toBe(true);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should be able to read all etapa records", function () { return __awaiter(void 0, void 0, void 0, function () {
        var etapas;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, handleEtapaService.create({
                        codigo: "codigo",
                        ativo: true,
                        descricao: "Exibir codigo",
                    })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, handleEtapaService.create({
                            codigo: "novo codigo",
                            ativo: true,
                            descricao: "Exibir novo codigo",
                        })];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, handleEtapaService.read()];
                case 3:
                    etapas = _a.sent();
                    expect(etapas).toHaveLength(2);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should be able to update an existing etapa record", function () { return __awaiter(void 0, void 0, void 0, function () {
        var etapaToUpdate, etapaResult;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, handleEtapaService.create({
                        codigo: "codigo",
                        ativo: true,
                        descricao: "codigo",
                    })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, etapaRepositoryTest.queryByCodigo("codigo")];
                case 2:
                    etapaToUpdate = _a.sent();
                    return [4 /*yield*/, handleEtapaService.update({
                            id: etapaToUpdate.id,
                            ativo: false,
                            descricao: "novo codigo",
                        })];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, etapaRepositoryTest.queryById(etapaToUpdate.id)];
                case 4:
                    etapaResult = _a.sent();
                    expect(etapaResult.ativo).toBe(false);
                    expect(etapaResult.descricao).toBe("novo codigo");
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should not be able to update an unexisting etapa_fila record", function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, expect(function () { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, handleEtapaService.update({
                                        id: "500",
                                        ativo: false,
                                        descricao: "novo codigo",
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
    it("Should be able to delete a etapa_fila record", function () { return __awaiter(void 0, void 0, void 0, function () {
        var etapaToDelete, etapas;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, handleEtapaService.create({
                        codigo: "a code",
                        ativo: true,
                        descricao: "code description",
                    })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, etapaRepositoryTest.queryByCodigo("a code")];
                case 2:
                    etapaToDelete = _a.sent();
                    return [4 /*yield*/, handleEtapaService.delete(etapaToDelete.id)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, etapaRepositoryTest.listEtapas()];
                case 4:
                    etapas = _a.sent();
                    expect(etapas).toHaveLength(0);
                    return [2 /*return*/];
            }
        });
    }); });
});

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
var DayjsDateProvider_1 = require("../../../../../shared/container/providers/DateProvider/implementations/DayjsDateProvider");
var AppError_1 = require("../../../../../shared/errors/AppError");
var CargaDocentesRepositoryTestMock_1 = require("../../../infra/typeorm/repositories/mocks/CargaDocentesRepositoryTestMock");
var ProfessoresRepositoryTestMock_1 = require("../../../infra/typeorm/repositories/mocks/ProfessoresRepositoryTestMock");
var HandleCargaDocenteService_1 = require("../HandleCargaDocenteService");
var cargaDocenteRepositoryTest;
var cargaDocenteService;
var dateProvider;
var professorRepositoryTest;
describe("Handle CRUD operations related to carga docente", function () {
    beforeEach(function () { return __awaiter(void 0, void 0, void 0, function () {
        var professor;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dateProvider = new DayjsDateProvider_1.DayjsDateProvider();
                    professorRepositoryTest = new ProfessoresRepositoryTestMock_1.ProfessoresRepositoryTestMock(dateProvider);
                    cargaDocenteRepositoryTest = new CargaDocentesRepositoryTestMock_1.CargaDocentesRepositoryTestMock();
                    cargaDocenteService = new HandleCargaDocenteService_1.HandleCargaDocenteService(cargaDocenteRepositoryTest);
                    professor = {
                        siape: "0001",
                        nome: "João Marcos",
                        data_ingresso: new Date(1989, 9, 29),
                        data_nasc: new Date(1988, 1, 7),
                        afastado: true,
                        regime: "de",
                        carga_atual: 8,
                        locacao: "udi",
                        cnome: "JMarcos",
                        data_aposentadoria: new Date(2017, 2, 1),
                        status: "ativo",
                    };
                    return [4 /*yield*/, professorRepositoryTest.createProfessor({
                            siape: professor.siape,
                            nome: professor.nome,
                            data_ingresso: professor.data_ingresso,
                            data_nasc: professor.data_nasc,
                            afastado: professor.afastado,
                            regime: professor.regime,
                            carga_atual: professor.carga_atual,
                            locacao: professor.locacao,
                            cnome: professor.cnome,
                            data_aposentadoria: professor.data_aposentadoria,
                            data_saida: null,
                            data_exoneracao: null,
                            status: professor.status,
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should be able to create a carga docente record", function () { return __awaiter(void 0, void 0, void 0, function () {
        var carga, cargaCreated;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    carga = {
                        siape: "0001",
                        carga_atual: 16,
                        ano: 2015,
                        semestre: 2,
                    };
                    return [4 /*yield*/, cargaDocenteService.create({
                            siape: carga.siape,
                            carga_atual: carga.carga_atual,
                            ano: carga.ano,
                            semestre: carga.semestre,
                        })];
                case 1:
                    cargaCreated = _a.sent();
                    expect(cargaCreated.carga_atual).toBe(16);
                    expect(cargaCreated.ano).toBe(2015);
                    expect(cargaCreated.semestre).toBe(2);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should not be able to create more than one carga docente for the same siape", function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            expect(function () { return __awaiter(void 0, void 0, void 0, function () {
                var carga;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            carga = {
                                siape: "0001",
                                carga_atual: 16,
                                ano: 2015,
                                semestre: 2,
                            };
                            return [4 /*yield*/, cargaDocenteService.create({
                                    siape: carga.siape,
                                    carga_atual: carga.carga_atual,
                                    ano: carga.ano,
                                    semestre: carga.semestre,
                                })];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, cargaDocenteService.create({
                                    siape: carga.siape,
                                    carga_atual: 20,
                                    ano: 2021,
                                    semestre: 1,
                                })];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); }).rejects.toBeInstanceOf(AppError_1.AppError);
            return [2 /*return*/];
        });
    }); });
    it("Should be able to read carga docente records", function () { return __awaiter(void 0, void 0, void 0, function () {
        var carga, cargaDocentes;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    carga = {
                        siape: "0001",
                        carga_atual: 16,
                        ano: 2015,
                        semestre: 2,
                    };
                    return [4 /*yield*/, cargaDocenteService.create({
                            siape: carga.siape,
                            carga_atual: carga.carga_atual,
                            ano: carga.ano,
                            semestre: carga.semestre,
                        })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, cargaDocenteService.read()];
                case 2:
                    cargaDocentes = _a.sent();
                    expect(cargaDocentes).toHaveLength(1);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should be able to update a carga docente record", function () { return __awaiter(void 0, void 0, void 0, function () {
        var carga, cargaAfter;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    carga = {
                        siape: "0001",
                        carga_atual: 16,
                        ano: 2015,
                        semestre: 2,
                    };
                    return [4 /*yield*/, cargaDocenteService.create({
                            siape: carga.siape,
                            carga_atual: carga.carga_atual,
                            ano: carga.ano,
                            semestre: carga.semestre,
                        })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, cargaDocenteService.update({
                            siape: carga.siape,
                            carga_atual: 25,
                            ano: 2021,
                            semestre: 1,
                        })];
                case 2:
                    cargaAfter = _a.sent();
                    expect(cargaAfter.carga_atual).toBe(25);
                    expect(cargaAfter.ano).toBe(2021);
                    expect(cargaAfter.semestre).toBe(1);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should not be able to update a carga docente with a non existing siape", function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, expect(function () { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, cargaDocenteService.update({
                                        siape: "74628157",
                                        carga_atual: 25,
                                        ano: 2021,
                                        semestre: 1,
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
    it("Should be able to delete a carga docente record", function () { return __awaiter(void 0, void 0, void 0, function () {
        var carga, cargas;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    carga = {
                        siape: "0001",
                        carga_atual: 16,
                        ano: 2015,
                        semestre: 2,
                    };
                    return [4 /*yield*/, cargaDocenteService.create({
                            siape: carga.siape,
                            carga_atual: carga.carga_atual,
                            ano: carga.ano,
                            semestre: carga.semestre,
                        })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, cargaDocenteService.deleteBySiape("0001")];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, cargaDocenteService.read()];
                case 3:
                    cargas = _a.sent();
                    expect(cargas).toHaveLength(0);
                    return [2 /*return*/];
            }
        });
    }); });
});

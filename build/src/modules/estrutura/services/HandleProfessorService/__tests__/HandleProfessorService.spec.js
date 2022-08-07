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
require("reflect-metadata");
var DayjsDateProvider_1 = require("../../../../../shared/container/providers/DateProvider/implementations/DayjsDateProvider");
var AppError_1 = require("../../../../../shared/errors/AppError");
var ProfessoresRepositoryTestMock_1 = require("../../../infra/typeorm/repositories/mocks/ProfessoresRepositoryTestMock");
var HandleProfessorService_1 = require("../HandleProfessorService");
var professoresRepositoryTest;
var handleProfessorService;
var dateProvider;
describe("Handle CRUD operations related to a Professor", function () {
    beforeEach(function () {
        dateProvider = new DayjsDateProvider_1.DayjsDateProvider();
        professoresRepositoryTest = new ProfessoresRepositoryTestMock_1.ProfessoresRepositoryTestMock(dateProvider);
        handleProfessorService = new HandleProfessorService_1.HandleProfessorService(professoresRepositoryTest, dateProvider);
    });
    it("Should be able to create a new professor", function () { return __awaiter(void 0, void 0, void 0, function () {
        var professor, professorCreated;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
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
                    return [4 /*yield*/, handleProfessorService.create({
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
                    professorCreated = _a.sent();
                    expect(professorCreated.siape).toBe(professor.siape);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should be able to create an existent professor", function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            expect(function () { return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, handleProfessorService.create({
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
                                data_saida: null,
                                data_exoneracao: null,
                                status: "ativo",
                            })];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, handleProfessorService.create({
                                    siape: "0001",
                                    nome: "Marcos Joao",
                                    data_ingresso: new Date(1989, 9, 29),
                                    data_nasc: new Date(1988, 1, 7),
                                    afastado: true,
                                    regime: "de",
                                    carga_atual: 8,
                                    locacao: "udi",
                                    cnome: "MJoao",
                                    data_aposentadoria: new Date(2017, 2, 1),
                                    data_saida: null,
                                    data_exoneracao: null,
                                    status: "ativo",
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
    it("Should be able to list all professores", function () { return __awaiter(void 0, void 0, void 0, function () {
        var professor, professores, listProfessoresResult;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, handleProfessorService.create({
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
                        data_saida: null,
                        data_exoneracao: null,
                        status: "ativo",
                    })];
                case 1:
                    professor = _a.sent();
                    return [4 /*yield*/, handleProfessorService.read()];
                case 2:
                    professores = _a.sent();
                    listProfessoresResult = professores.find(function (professor) { return professor.siape; });
                    expect(listProfessoresResult.siape).toEqual(professor.siape);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should be able to read only professor record", function () { return __awaiter(void 0, void 0, void 0, function () {
        var professor2, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, handleProfessorService.create({
                        siape: "0001",
                        nome: "Professor 1",
                        data_ingresso: new Date(1989, 9, 29),
                        data_nasc: new Date(1988, 1, 7),
                        afastado: true,
                        regime: "de",
                        carga_atual: 8,
                        locacao: "udi",
                        cnome: "P1",
                        data_aposentadoria: new Date(2017, 2, 1),
                        data_saida: null,
                        data_exoneracao: null,
                        status: "ativo",
                    })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, handleProfessorService.create({
                            siape: "0002",
                            nome: "Professor 2",
                            data_ingresso: new Date(1989, 9, 29),
                            data_nasc: new Date(1988, 1, 7),
                            afastado: true,
                            regime: "de",
                            carga_atual: 8,
                            locacao: "udi",
                            cnome: "P2",
                            data_aposentadoria: new Date(2017, 2, 1),
                            data_saida: null,
                            data_exoneracao: null,
                            status: "ativo",
                        })];
                case 2:
                    professor2 = _a.sent();
                    return [4 /*yield*/, handleProfessorService.readBySiape(professor2.siape)];
                case 3:
                    result = _a.sent();
                    expect(result.siape).toEqual(professor2.siape);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should be able to update an existing professor", function () { return __awaiter(void 0, void 0, void 0, function () {
        var professor, dateToUpdate, professorToUpdate;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    professor = {
                        siape: "827175",
                        nome: "Helen Sims",
                        data_ingresso: new Date(1989, 9, 29),
                        data_nasc: new Date(1988, 1, 7),
                        afastado: true,
                        regime: "de",
                        carga_atual: 8,
                        locacao: "udi",
                        cnome: "HSims",
                        data_aposentadoria: new Date(2017, 2, 1),
                        status: "ativo",
                    };
                    return [4 /*yield*/, handleProfessorService.create({
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
                    dateToUpdate = dateProvider.processDateToUTC(new Date("1998-11-11"));
                    return [4 /*yield*/, handleProfessorService.update({
                            siape: professor.siape,
                            data_nasc: dateToUpdate,
                            nome: "John Doe",
                        })];
                case 2:
                    professorToUpdate = _a.sent();
                    expect(professorToUpdate.nome).toBe("John Doe");
                    expect(professorToUpdate.data_nasc).toStrictEqual(dateToUpdate);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should not be able to update an non-existing professor", function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, expect(function () { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, handleProfessorService.update({
                                        siape: "8114418",
                                        nome: "John Doe",
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
    it("Should be able to delete a professor record", function () { return __awaiter(void 0, void 0, void 0, function () {
        var professor, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    professor = {
                        siape: "827175",
                        nome: "Helen Sims",
                        data_ingresso: new Date(1989, 9, 29),
                        data_nasc: new Date(1988, 1, 7),
                        afastado: true,
                        regime: "de",
                        carga_atual: 8,
                        locacao: "udi",
                        cnome: "HSims",
                        data_aposentadoria: new Date(2017, 2, 1),
                        status: "ativo",
                    };
                    return [4 /*yield*/, handleProfessorService.create({
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
                    return [4 /*yield*/, handleProfessorService.delete(professor.siape)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, professoresRepositoryTest.queryBySiape(professor.siape)];
                case 3:
                    result = _a.sent();
                    expect(result).toBeUndefined();
                    return [2 /*return*/];
            }
        });
    }); });
});

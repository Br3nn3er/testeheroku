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
var SemestresRepositoryTestMock_1 = require("../../../infra/typeorm/repositories/mocks/SemestresRepositoryTestMock");
var TurmasRepositoryTestMock_1 = require("../../../infra/typeorm/repositories/mocks/TurmasRepositoryTestMock");
var HandleTurmaService_1 = require("../HandleTurmaService");
describe("Handle CRUD operations related to turma", function () {
    var turmasRepositoryTest;
    var semestresRepositoryTestMock;
    var handleTurmaService;
    beforeEach(function () {
        turmasRepositoryTest = new TurmasRepositoryTestMock_1.TurmasRepositoryTestMock();
        semestresRepositoryTestMock = new SemestresRepositoryTestMock_1.SemestresRepositoryTestMock();
        handleTurmaService = new HandleTurmaService_1.HandleTurmaService(turmasRepositoryTest, semestresRepositoryTestMock);
    });
    it("Should be able to create a new turma record", function () { return __awaiter(void 0, void 0, void 0, function () {
        var createdTurma;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, handleTurmaService.create({
                        codigo_disc: "FACOM0001",
                        turma: "Z",
                        ch: 5,
                        ano: 2020,
                        semestre: 1,
                    })];
                case 1:
                    createdTurma = _a.sent();
                    expect(createdTurma.ch).toBe(5);
                    expect(createdTurma.codigo_disc).toBe("FACOM0001");
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should not be able to create an existing turma", function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, expect(function () { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, handleTurmaService.create({
                                        codigo_disc: "FACOM0001",
                                        turma: "Z",
                                        ch: 5,
                                        ano: 2020,
                                        semestre: 1,
                                    })];
                                case 1:
                                    _a.sent();
                                    return [4 /*yield*/, handleTurmaService.create({
                                            codigo_disc: "FACOM0001",
                                            turma: "Z",
                                            ch: 4,
                                            ano: 2020,
                                            semestre: 1,
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
    it("Should be able to read all turma records", function () { return __awaiter(void 0, void 0, void 0, function () {
        var turmas;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, handleTurmaService.create({
                        codigo_disc: "FACOM0001",
                        turma: "Z",
                        ch: 5,
                        ano: 2020,
                        semestre: 1,
                    })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, handleTurmaService.create({
                            codigo_disc: "FACOM0001",
                            turma: "Z",
                            ch: 5,
                            ano: 2020,
                            semestre: 2,
                        })];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, handleTurmaService.read()];
                case 3:
                    turmas = _a.sent();
                    expect(turmas).toHaveLength(2);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should be able to update and turma record", function () { return __awaiter(void 0, void 0, void 0, function () {
        var turma, turmaToUpdate, turmaResult;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, handleTurmaService.create({
                        codigo_disc: "FACOM0001",
                        turma: "Z",
                        ch: 5,
                        ano: 2020,
                        semestre: 1,
                    })];
                case 1:
                    turma = _a.sent();
                    return [4 /*yield*/, turmasRepositoryTest.queryByCodigoTurmaAnoSemestre(turma.codigo_disc, turma.turma, turma.ano, turma.semestre)];
                case 2:
                    turmaToUpdate = _a.sent();
                    return [4 /*yield*/, handleTurmaService.update({
                            id: turmaToUpdate.id,
                            ano: 2021,
                            semestre: 2,
                        })];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, turmasRepositoryTest.queryById(turmaToUpdate.id)];
                case 4:
                    turmaResult = _a.sent();
                    expect(turmaResult.ano).toBe(2021);
                    expect(turmaResult.semestre).toBe(2);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should not be able to update an unexisting turma", function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, expect(function () { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, handleTurmaService.update({
                                        id: "75",
                                        ano: 2021,
                                        semestre: 2,
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
    it("Should be able to delete a turma record", function () { return __awaiter(void 0, void 0, void 0, function () {
        var turma, turmaToDelete, turmas;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, handleTurmaService.create({
                        codigo_disc: "FACOM0001",
                        turma: "Z",
                        ch: 5,
                        ano: 2020,
                        semestre: 1,
                    })];
                case 1:
                    turma = _a.sent();
                    return [4 /*yield*/, handleTurmaService.create({
                            codigo_disc: "FACOM0001",
                            turma: "Z",
                            ch: 5,
                            ano: 2020,
                            semestre: 2,
                        })];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, turmasRepositoryTest.queryByCodigoTurmaAnoSemestre(turma.codigo_disc, turma.turma, turma.ano, turma.semestre)];
                case 3:
                    turmaToDelete = _a.sent();
                    return [4 /*yield*/, handleTurmaService.delete(turmaToDelete.id)];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, turmasRepositoryTest.listAllTurmas()];
                case 5:
                    turmas = _a.sent();
                    expect(turmas).toHaveLength(1);
                    return [2 /*return*/];
            }
        });
    }); });
});

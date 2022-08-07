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
var CursosRepositoryTestMock_1 = require("../../../infra/typeorm/repositories/mocks/CursosRepositoryTestMock");
var HandleCursoService_1 = require("../HandleCursoService");
var cursosRepositoryTest;
var handleCursosService;
describe("Handle CRUD operations related to a curso", function () {
    beforeEach(function () {
        cursosRepositoryTest = new CursosRepositoryTestMock_1.CursosRepositoryTestMock();
        handleCursosService = new HandleCursoService_1.HandleCursoService(cursosRepositoryTest);
    });
    it("Should be able to create a new curso", function () { return __awaiter(void 0, void 0, void 0, function () {
        var curso;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, handleCursosService.create({
                        codigo: "AAA",
                        nome: "Engenharia Aerea",
                        unidade: "UFU",
                        campus: "udi",
                        permitir_choque_periodo: false,
                        permitir_choque_horario: false,
                    })];
                case 1:
                    curso = _a.sent();
                    expect(curso.codigo).toBe("AAA");
                    expect(curso.nome).toBe("Engenharia Aerea");
                    expect(curso.permitir_choque_periodo).toBe(false);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should not be able to create two cursos with same codigo", function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, expect(function () { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, handleCursosService.create({
                                        codigo: "AAA",
                                        nome: "Engenharia Aerea",
                                        unidade: "UFU",
                                        campus: "udi",
                                        permitir_choque_periodo: false,
                                        permitir_choque_horario: false,
                                    })];
                                case 1:
                                    _a.sent();
                                    return [4 /*yield*/, handleCursosService.create({
                                            codigo: "AAA",
                                            nome: "Engenharia Aerea Acrobatica",
                                            unidade: "UFU",
                                            campus: "udi",
                                            permitir_choque_periodo: false,
                                            permitir_choque_horario: false,
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
    it("Should be able to read all cursos records", function () { return __awaiter(void 0, void 0, void 0, function () {
        var cursos;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, handleCursosService.create({
                        codigo: "AAA",
                        nome: "Engenharia Aerea",
                        unidade: "UFU",
                        campus: "udi",
                        permitir_choque_periodo: false,
                        permitir_choque_horario: false,
                    })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, handleCursosService.create({
                            codigo: "EAAA",
                            nome: "Engenharia Aerea Acrobatica",
                            unidade: "UFU",
                            campus: "udi",
                            permitir_choque_periodo: false,
                            permitir_choque_horario: false,
                        })];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, handleCursosService.read()];
                case 3:
                    cursos = _a.sent();
                    expect(cursos).toHaveLength(2);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should be able to read only curso record", function () { return __awaiter(void 0, void 0, void 0, function () {
        var course, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, handleCursosService.create({
                        codigo: "AAA",
                        nome: "Engenharia Aerea",
                        unidade: "UFU",
                        campus: "udi",
                        permitir_choque_periodo: false,
                        permitir_choque_horario: false,
                    })];
                case 1:
                    course = _a.sent();
                    return [4 /*yield*/, handleCursosService.create({
                            codigo: "EAAA",
                            nome: "Engenharia Aerea Acrobatica",
                            unidade: "UFU",
                            campus: "udi",
                            permitir_choque_periodo: false,
                            permitir_choque_horario: false,
                        })];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, handleCursosService.readByCodigo(course.codigo)];
                case 3:
                    response = _a.sent();
                    expect(response).toMatchObject(course);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should be able to update an existing curso", function () { return __awaiter(void 0, void 0, void 0, function () {
        var curso;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, handleCursosService.create({
                        codigo: "AAA",
                        nome: "Engenharia Aerea",
                        unidade: "UFU",
                        campus: "udi",
                        permitir_choque_periodo: false,
                        permitir_choque_horario: false,
                    })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, handleCursosService.update({
                            codigo: "AAA",
                            nome: "Nova Engenharia",
                            unidade: "UFU",
                            campus: "umuarama",
                            permitir_choque_periodo: true,
                            permitir_choque_horario: true,
                        })];
                case 2:
                    curso = _a.sent();
                    expect(curso.codigo).toBe("AAA");
                    expect(curso.nome).toBe("Nova Engenharia");
                    expect(curso.permitir_choque_periodo).toBe(true);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should not be able to update an unexisting curso", function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, expect(function () { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, handleCursosService.update({
                                        codigo: "GSI000",
                                        nome: "Estrutura de Dados",
                                        unidade: "UFU",
                                        campus: "udi",
                                        permitir_choque_periodo: false,
                                        permitir_choque_horario: false,
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
    it("Should be able to delete an existing curso", function () { return __awaiter(void 0, void 0, void 0, function () {
        var cursos;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, handleCursosService.create({
                        codigo: "AAA",
                        nome: "Engenharia Aerea",
                        unidade: "UFU",
                        campus: "udi",
                        permitir_choque_periodo: false,
                        permitir_choque_horario: false,
                    })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, handleCursosService.create({
                            codigo: "AAAAAA",
                            nome: "Engenharia Nova",
                            unidade: "UFU",
                            campus: "udi",
                            permitir_choque_periodo: false,
                            permitir_choque_horario: false,
                        })];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, handleCursosService.delete("AAA")];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, handleCursosService.read()];
                case 4:
                    cursos = _a.sent();
                    expect(cursos).toHaveLength(1);
                    return [2 /*return*/];
            }
        });
    }); });
});

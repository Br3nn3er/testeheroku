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
var HorariosRepositoryTestMock_1 = require("../../../infra/typeorm/repositories/mocks/HorariosRepositoryTestMock");
var HandleHorarioService_1 = require("../HandleHorarioService");
describe("Handle CRUD operations related to horarios", function () {
    var horariosTestMock;
    var handleHorarioService;
    beforeEach(function () {
        horariosTestMock = new HorariosRepositoryTestMock_1.HorariosRepositoryTestMock();
        handleHorarioService = new HandleHorarioService_1.HandleHorarioService(horariosTestMock);
    });
    it("Should be able to create a horario", function () { return __awaiter(void 0, void 0, void 0, function () {
        var horario;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, handleHorarioService.create({
                        letra: "w",
                        hora_inicio: "08:50:00",
                        hora_fim: "09:40:00",
                        turno: "MANHÃ",
                    })];
                case 1:
                    horario = _a.sent();
                    expect(horario.letra).toBe("w");
                    expect(horario.turno).toBe("MANHÃ");
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should not be able to create a horario with same letra", function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, expect(function () { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, handleHorarioService.create({
                                        letra: "w",
                                        hora_inicio: "08:50:00",
                                        hora_fim: "09:40:00",
                                        turno: "MANHÃ",
                                    })];
                                case 1:
                                    _a.sent();
                                    return [4 /*yield*/, handleHorarioService.create({
                                            letra: "w",
                                            hora_inicio: "10:40:00",
                                            hora_fim: "12:20:00",
                                            turno: "MANHÃ",
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
    it("Should be able to read all horario records", function () { return __awaiter(void 0, void 0, void 0, function () {
        var horarios;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, handleHorarioService.create({
                        letra: "w",
                        hora_inicio: "08:50:00",
                        hora_fim: "09:40:00",
                        turno: "MANHÃ",
                    })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, handleHorarioService.create({
                            letra: "z",
                            hora_inicio: "10:40:00",
                            hora_fim: "12:20:00",
                            turno: "MANHÃ",
                        })];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, handleHorarioService.read()];
                case 3:
                    horarios = _a.sent();
                    expect(horarios).toHaveLength(2);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should be able to update a horario record", function () { return __awaiter(void 0, void 0, void 0, function () {
        var horario;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, handleHorarioService.create({
                        letra: "w",
                        hora_inicio: "08:50:00",
                        hora_fim: "09:40:00",
                        turno: "MANHÃ",
                    })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, handleHorarioService.update({
                            letra: "w",
                            hora_inicio: "13:10:00",
                            hora_fim: "14:50:00",
                            turno: "TARDE",
                        })];
                case 2:
                    horario = _a.sent();
                    expect(horario.letra).toBe("w");
                    expect(horario.turno).toBe("TARDE");
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should not be able to update a nonexisting horario record", function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, expect(function () { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, handleHorarioService.update({
                                        letra: "z",
                                        hora_inicio: "13:10:00",
                                        hora_fim: "14:50:00",
                                        turno: "TARDE",
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
    it("Should be able to delete a horario record", function () { return __awaiter(void 0, void 0, void 0, function () {
        var horarios;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, handleHorarioService.create({
                        letra: "w",
                        hora_inicio: "08:50:00",
                        hora_fim: "09:40:00",
                        turno: "MANHÃ",
                    })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, handleHorarioService.create({
                            letra: "q",
                            hora_inicio: "13:10:00",
                            hora_fim: "14:50:00",
                            turno: "TARDE",
                        })];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, handleHorarioService.delete("w")];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, handleHorarioService.read()];
                case 4:
                    horarios = _a.sent();
                    expect(horarios).toHaveLength(1);
                    return [2 /*return*/];
            }
        });
    }); });
});

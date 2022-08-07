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
exports.HandleProfessorController = void 0;
var tsyringe_1 = require("tsyringe");
var HandleProfessorService_1 = require("./HandleProfessorService");
var HandleProfessorController = /** @class */ (function () {
    function HandleProfessorController() {
    }
    HandleProfessorController.prototype.create = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, siape, nome, data_ingresso, data_nasc, afastado, regime, carga_atual, locacao, cnome, data_saida, data_exoneracao, data_aposentadoria, status, handleProfessorService, professor;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.body, siape = _a.siape, nome = _a.nome, data_ingresso = _a.data_ingresso, data_nasc = _a.data_nasc, afastado = _a.afastado, regime = _a.regime, carga_atual = _a.carga_atual, locacao = _a.locacao, cnome = _a.cnome, data_saida = _a.data_saida, data_exoneracao = _a.data_exoneracao, data_aposentadoria = _a.data_aposentadoria, status = _a.status;
                        handleProfessorService = tsyringe_1.container.resolve(HandleProfessorService_1.HandleProfessorService);
                        return [4 /*yield*/, handleProfessorService.create({
                                siape: siape,
                                nome: nome,
                                data_ingresso: data_ingresso,
                                data_nasc: data_nasc,
                                afastado: afastado,
                                regime: regime,
                                carga_atual: carga_atual,
                                locacao: locacao,
                                cnome: cnome,
                                data_saida: data_saida,
                                data_exoneracao: data_exoneracao,
                                data_aposentadoria: data_aposentadoria,
                                status: status,
                            })];
                    case 1:
                        professor = _b.sent();
                        return [2 /*return*/, response.status(201).json(professor)];
                }
            });
        });
    };
    HandleProfessorController.prototype.read = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var handleProfessorService, professores;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        handleProfessorService = tsyringe_1.container.resolve(HandleProfessorService_1.HandleProfessorService);
                        return [4 /*yield*/, handleProfessorService.read()];
                    case 1:
                        professores = _a.sent();
                        return [2 /*return*/, response.status(200).json(professores)];
                }
            });
        });
    };
    HandleProfessorController.prototype.readBySiape = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var siape, handleProfessorService, professores;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        siape = request.params.siape;
                        handleProfessorService = tsyringe_1.container.resolve(HandleProfessorService_1.HandleProfessorService);
                        return [4 /*yield*/, handleProfessorService.readBySiape(siape)];
                    case 1:
                        professores = _a.sent();
                        return [2 /*return*/, response.status(200).json(professores)];
                }
            });
        });
    };
    HandleProfessorController.prototype.update = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, siape, nome, data_ingresso, data_nasc, afastado, regime, carga_atual, locacao, cnome, data_saida, data_exoneracao, data_aposentadoria, status, handleProfessorService, professorToUpdate;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.body, siape = _a.siape, nome = _a.nome, data_ingresso = _a.data_ingresso, data_nasc = _a.data_nasc, afastado = _a.afastado, regime = _a.regime, carga_atual = _a.carga_atual, locacao = _a.locacao, cnome = _a.cnome, data_saida = _a.data_saida, data_exoneracao = _a.data_exoneracao, data_aposentadoria = _a.data_aposentadoria, status = _a.status;
                        handleProfessorService = tsyringe_1.container.resolve(HandleProfessorService_1.HandleProfessorService);
                        return [4 /*yield*/, handleProfessorService.update({
                                siape: siape,
                                nome: nome,
                                data_ingresso: data_ingresso,
                                data_nasc: data_nasc,
                                afastado: afastado,
                                regime: regime,
                                carga_atual: carga_atual,
                                locacao: locacao,
                                cnome: cnome,
                                data_saida: data_saida,
                                data_exoneracao: data_exoneracao,
                                data_aposentadoria: data_aposentadoria,
                                status: status,
                            })];
                    case 1:
                        professorToUpdate = _b.sent();
                        return [2 /*return*/, response.status(200).json(professorToUpdate)];
                }
            });
        });
    };
    HandleProfessorController.prototype.delete = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var siape, handleProfessorService;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        siape = request.params.siape;
                        handleProfessorService = tsyringe_1.container.resolve(HandleProfessorService_1.HandleProfessorService);
                        return [4 /*yield*/, handleProfessorService.delete(siape)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, response.status(200).json("Professor removido com sucesso!")];
                }
            });
        });
    };
    HandleProfessorController.prototype.import = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var file, handleProfessorService;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        file = request.file;
                        handleProfessorService = tsyringe_1.container.resolve(HandleProfessorService_1.HandleProfessorService);
                        return [4 /*yield*/, handleProfessorService.import(file)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, response.status(201).send()];
                }
            });
        });
    };
    return HandleProfessorController;
}());
exports.HandleProfessorController = HandleProfessorController;

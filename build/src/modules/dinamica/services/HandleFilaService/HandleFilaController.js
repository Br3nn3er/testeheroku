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
exports.HandleFilaController = void 0;
var tsyringe_1 = require("tsyringe");
var HandleFilaService_1 = require("./HandleFilaService");
var HandleFilaController = /** @class */ (function () {
    function HandleFilaController() {
    }
    HandleFilaController.prototype.create = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, siape, codigo_disc, pos, prioridade, qte_ministrada, qte_maximo, ano, semestre, status, periodo_preferencial, handleFilaRepository, fila;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.body, siape = _a.siape, codigo_disc = _a.codigo_disc, pos = _a.pos, prioridade = _a.prioridade, qte_ministrada = _a.qte_ministrada, qte_maximo = _a.qte_maximo, ano = _a.ano, semestre = _a.semestre, status = _a.status, periodo_preferencial = _a.periodo_preferencial;
                        handleFilaRepository = tsyringe_1.container.resolve(HandleFilaService_1.HandleFilaService);
                        return [4 /*yield*/, handleFilaRepository.create({
                                siape: siape,
                                codigo_disc: codigo_disc,
                                pos: pos,
                                prioridade: prioridade,
                                qte_ministrada: qte_ministrada,
                                qte_maximo: qte_maximo,
                                ano: ano,
                                semestre: semestre,
                                status: status,
                                periodo_preferencial: periodo_preferencial,
                            })];
                    case 1:
                        fila = _b.sent();
                        return [2 /*return*/, response.status(201).json(fila)];
                }
            });
        });
    };
    HandleFilaController.prototype.read = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var handleFilaRepository, filas;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        handleFilaRepository = tsyringe_1.container.resolve(HandleFilaService_1.HandleFilaService);
                        return [4 /*yield*/, handleFilaRepository.read()];
                    case 1:
                        filas = _a.sent();
                        return [2 /*return*/, response.status(201).json(filas)];
                }
            });
        });
    };
    HandleFilaController.prototype.readByDiscEAnoESemestre = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, codigo, semestreId, handleFilaRepository, filas;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.params, codigo = _a.codigo, semestreId = _a.semestreId;
                        handleFilaRepository = tsyringe_1.container.resolve(HandleFilaService_1.HandleFilaService);
                        return [4 /*yield*/, handleFilaRepository.readByDisciplinaESemestre(codigo, parseInt(semestreId, 10))];
                    case 1:
                        filas = _b.sent();
                        return [2 /*return*/, response.status(200).json(filas)];
                }
            });
        });
    };
    HandleFilaController.prototype.readByProfessorESemestre = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, siape, semestreId, handleFilaRepository, filas;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.params, siape = _a.siape, semestreId = _a.semestreId;
                        handleFilaRepository = tsyringe_1.container.resolve(HandleFilaService_1.HandleFilaService);
                        return [4 /*yield*/, handleFilaRepository.readByProfessorESemestre(siape, parseInt(semestreId, 10))];
                    case 1:
                        filas = _b.sent();
                        return [2 /*return*/, response.status(200).json(filas)];
                }
            });
        });
    };
    HandleFilaController.prototype.readByProfessor = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var siape, handleFilaRepository, filas;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        siape = request.params.siape;
                        handleFilaRepository = tsyringe_1.container.resolve(HandleFilaService_1.HandleFilaService);
                        return [4 /*yield*/, handleFilaRepository.readByProfessor(siape)];
                    case 1:
                        filas = _a.sent();
                        return [2 /*return*/, response.status(200).json(filas)];
                }
            });
        });
    };
    HandleFilaController.prototype.readByTurma = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var turma, handleFilaRepository, filas;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        turma = request.params.turma;
                        handleFilaRepository = tsyringe_1.container.resolve(HandleFilaService_1.HandleFilaService);
                        return [4 /*yield*/, handleFilaRepository.readByTurma(parseInt(turma, 10))];
                    case 1:
                        filas = _a.sent();
                        return [2 /*return*/, response.status(200).json(filas)];
                }
            });
        });
    };
    HandleFilaController.prototype.readBySemestreEProfessor = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, siape, ano, semestre, handleFilaRepository, filas;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.params, siape = _a.siape, ano = _a.ano, semestre = _a.semestre;
                        handleFilaRepository = tsyringe_1.container.resolve(HandleFilaService_1.HandleFilaService);
                        return [4 /*yield*/, handleFilaRepository.readBySemestreEProfessor(siape, parseInt(ano, 10), parseInt(semestre, 10))];
                    case 1:
                        filas = _b.sent();
                        return [2 /*return*/, response.status(200).json(filas)];
                }
            });
        });
    };
    HandleFilaController.prototype.update = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, id, siape, codigo_disc, pos, prioridade, qte_ministrada, qte_maximo, ano, semestre, status, periodo_preferencial, handleFilaRepository, fila;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.body, id = _a.id, siape = _a.siape, codigo_disc = _a.codigo_disc, pos = _a.pos, prioridade = _a.prioridade, qte_ministrada = _a.qte_ministrada, qte_maximo = _a.qte_maximo, ano = _a.ano, semestre = _a.semestre, status = _a.status, periodo_preferencial = _a.periodo_preferencial;
                        handleFilaRepository = tsyringe_1.container.resolve(HandleFilaService_1.HandleFilaService);
                        return [4 /*yield*/, handleFilaRepository.update({
                                id: id,
                                siape: siape,
                                codigo_disc: codigo_disc,
                                pos: pos,
                                prioridade: prioridade,
                                qte_ministrada: qte_ministrada,
                                qte_maximo: qte_maximo,
                                ano: ano,
                                semestre: semestre,
                                status: status,
                                periodo_preferencial: periodo_preferencial,
                            })];
                    case 1:
                        fila = _b.sent();
                        return [2 /*return*/, response.status(201).json(fila)];
                }
            });
        });
    };
    HandleFilaController.prototype.delete = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, handleFilaRepository;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = request.params.id;
                        handleFilaRepository = tsyringe_1.container.resolve(HandleFilaService_1.HandleFilaService);
                        return [4 /*yield*/, handleFilaRepository.delete(parseInt(id, 10))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, response.status(201).json("Registro deletado com sucesso!")];
                }
            });
        });
    };
    HandleFilaController.prototype.import = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var file, handleFilaRepository;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        file = request.file;
                        handleFilaRepository = tsyringe_1.container.resolve(HandleFilaService_1.HandleFilaService);
                        return [4 /*yield*/, handleFilaRepository.import(file)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, response.status(201).json("Importação realizada com sucesso!")];
                }
            });
        });
    };
    return HandleFilaController;
}());
exports.HandleFilaController = HandleFilaController;

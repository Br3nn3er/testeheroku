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
exports.HandleFilaTurmaNewController = void 0;
var tsyringe_1 = require("tsyringe");
var HandleFilaTurmaNewService_1 = require("./HandleFilaTurmaNewService");
var HandleFilaTurmaNewController = /** @class */ (function () {
    function HandleFilaTurmaNewController() {
    }
    HandleFilaTurmaNewController.prototype.create = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, id_turma, id_fila, prioridade, handleFilaTurmaNewRepository, fila;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.body, id_turma = _a.id_turma, id_fila = _a.id_fila, prioridade = _a.prioridade;
                        handleFilaTurmaNewRepository = tsyringe_1.container.resolve(HandleFilaTurmaNewService_1.HandleFilaTurmaNewService);
                        return [4 /*yield*/, handleFilaTurmaNewRepository.create({
                                id_turma: id_turma,
                                id_fila: id_fila,
                                prioridade: prioridade,
                            })];
                    case 1:
                        fila = _b.sent();
                        return [2 /*return*/, response.status(201).json(fila)];
                }
            });
        });
    };
    HandleFilaTurmaNewController.prototype.read = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var handleFilaTurmaNewRepository, filas;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        handleFilaTurmaNewRepository = tsyringe_1.container.resolve(HandleFilaTurmaNewService_1.HandleFilaTurmaNewService);
                        return [4 /*yield*/, handleFilaTurmaNewRepository.read()];
                    case 1:
                        filas = _a.sent();
                        return [2 /*return*/, response.status(201).json(filas)];
                }
            });
        });
    };
    HandleFilaTurmaNewController.prototype.readByProfessorAndSemestreId = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, siape, semestreId, handleFilaTurmaNewRepository, filas;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.params, siape = _a.siape, semestreId = _a.semestreId;
                        handleFilaTurmaNewRepository = tsyringe_1.container.resolve(HandleFilaTurmaNewService_1.HandleFilaTurmaNewService);
                        return [4 /*yield*/, handleFilaTurmaNewRepository.readByProfessorAndSemestreId(siape, parseInt(semestreId, 10))];
                    case 1:
                        filas = _b.sent();
                        return [2 /*return*/, response.status(200).json(filas)];
                }
            });
        });
    };
    HandleFilaTurmaNewController.prototype.readByTurma = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var turmaID, handleFilaTurmaNewRepository, filas;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        turmaID = request.params.turmaID;
                        handleFilaTurmaNewRepository = tsyringe_1.container.resolve(HandleFilaTurmaNewService_1.HandleFilaTurmaNewService);
                        return [4 /*yield*/, handleFilaTurmaNewRepository.readByTurma(parseInt(turmaID, 10))];
                    case 1:
                        filas = _a.sent();
                        return [2 /*return*/, response.status(201).json(filas)];
                }
            });
        });
    };
    HandleFilaTurmaNewController.prototype.update = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, id_turma, id_fila, prioridade, handleFilaTurmaNewRepository, fila;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.body, id_turma = _a.id_turma, id_fila = _a.id_fila, prioridade = _a.prioridade;
                        handleFilaTurmaNewRepository = tsyringe_1.container.resolve(HandleFilaTurmaNewService_1.HandleFilaTurmaNewService);
                        return [4 /*yield*/, handleFilaTurmaNewRepository.update({
                                id_turma: id_turma,
                                id_fila: id_fila,
                                prioridade: prioridade,
                            })];
                    case 1:
                        fila = _b.sent();
                        return [2 /*return*/, response.status(201).json(fila)];
                }
            });
        });
    };
    HandleFilaTurmaNewController.prototype.delete = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, id_turma, id_fila, handleFilaTurmaNewRepository;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.body, id_turma = _a.id_turma, id_fila = _a.id_fila;
                        handleFilaTurmaNewRepository = tsyringe_1.container.resolve(HandleFilaTurmaNewService_1.HandleFilaTurmaNewService);
                        return [4 /*yield*/, handleFilaTurmaNewRepository.delete(parseInt(id_turma, 10), parseInt(id_fila, 10))];
                    case 1:
                        _b.sent();
                        return [2 /*return*/, response.status(201).json("Registro deletado com sucesso!")];
                }
            });
        });
    };
    HandleFilaTurmaNewController.prototype.import = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var file, handleFilaTurmaNewRepository;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        file = request.file;
                        handleFilaTurmaNewRepository = tsyringe_1.container.resolve(HandleFilaTurmaNewService_1.HandleFilaTurmaNewService);
                        return [4 /*yield*/, handleFilaTurmaNewRepository.import(file)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, response.status(201).json("Importação realizada com sucesso!")];
                }
            });
        });
    };
    return HandleFilaTurmaNewController;
}());
exports.HandleFilaTurmaNewController = HandleFilaTurmaNewController;

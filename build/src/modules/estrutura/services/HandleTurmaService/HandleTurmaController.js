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
exports.HandleTurmaController = void 0;
var tsyringe_1 = require("tsyringe");
var HandleTurmaService_1 = require("./HandleTurmaService");
var HandleTurmaController = /** @class */ (function () {
    function HandleTurmaController() {
    }
    HandleTurmaController.prototype.create = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, codigo_disc, turma, ch, ano, semestre, handleTurmaService, createdTurma;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.body, codigo_disc = _a.codigo_disc, turma = _a.turma, ch = _a.ch, ano = _a.ano, semestre = _a.semestre;
                        handleTurmaService = tsyringe_1.container.resolve(HandleTurmaService_1.HandleTurmaService);
                        return [4 /*yield*/, handleTurmaService.create({
                                codigo_disc: codigo_disc,
                                turma: turma,
                                ch: ch,
                                ano: ano,
                                semestre: semestre,
                            })];
                    case 1:
                        createdTurma = _b.sent();
                        return [2 /*return*/, response.status(201).json(createdTurma)];
                }
            });
        });
    };
    HandleTurmaController.prototype.read = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var handleTurmaService, semesterId, turmas;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        handleTurmaService = tsyringe_1.container.resolve(HandleTurmaService_1.HandleTurmaService);
                        semesterId = request.query.semesterId;
                        return [4 /*yield*/, handleTurmaService.read(semesterId ? parseInt(semesterId, 10) : undefined)];
                    case 1:
                        turmas = _a.sent();
                        return [2 /*return*/, response.status(201).json(turmas)];
                }
            });
        });
    };
    HandleTurmaController.prototype.update = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, id, codigo_disc, turma, ch, ano, semestre, handleTurmaService, turmaToUpdate;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.body, id = _a.id, codigo_disc = _a.codigo_disc, turma = _a.turma, ch = _a.ch, ano = _a.ano, semestre = _a.semestre;
                        handleTurmaService = tsyringe_1.container.resolve(HandleTurmaService_1.HandleTurmaService);
                        return [4 /*yield*/, handleTurmaService.update({
                                id: id,
                                codigo_disc: codigo_disc,
                                turma: turma,
                                ch: ch,
                                ano: ano,
                                semestre: semestre,
                            })];
                    case 1:
                        turmaToUpdate = _b.sent();
                        return [2 /*return*/, response.status(201).json(turmaToUpdate)];
                }
            });
        });
    };
    HandleTurmaController.prototype.delete = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, handleTurmaService;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = request.params.id;
                        handleTurmaService = tsyringe_1.container.resolve(HandleTurmaService_1.HandleTurmaService);
                        return [4 /*yield*/, handleTurmaService.delete(id)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, response.status(201).json("Registro deletado com sucesso!")];
                }
            });
        });
    };
    HandleTurmaController.prototype.import = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var file, handleTurmaService;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        file = request.file;
                        handleTurmaService = tsyringe_1.container.resolve(HandleTurmaService_1.HandleTurmaService);
                        return [4 /*yield*/, handleTurmaService.import(file)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, response.status(201).json("Importação realizada com sucesso!")];
                }
            });
        });
    };
    return HandleTurmaController;
}());
exports.HandleTurmaController = HandleTurmaController;

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
exports.TurmasRepository = void 0;
var typeorm_1 = require("typeorm");
var Turma_1 = require("../entities/Turma");
var TurmasRepository = /** @class */ (function () {
    function TurmasRepository() {
        this.repository = typeorm_1.getRepository(Turma_1.Turma);
    }
    TurmasRepository.prototype.createTurma = function (_a) {
        var codigo_disc = _a.codigo_disc, turma = _a.turma, ch = _a.ch, ano = _a.ano, semestre = _a.semestre;
        return __awaiter(this, void 0, void 0, function () {
            var turmaToCreate;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.repository.create({
                            codigo_disc: codigo_disc,
                            turma: turma,
                            ch: ch,
                            ano: ano,
                            semestre: semestre,
                        })];
                    case 1:
                        turmaToCreate = _b.sent();
                        return [4 /*yield*/, this.repository.save(turmaToCreate)];
                    case 2:
                        _b.sent();
                        return [2 /*return*/, turmaToCreate];
                }
            });
        });
    };
    TurmasRepository.prototype.listAllTurmas = function () {
        return __awaiter(this, void 0, void 0, function () {
            var turmas;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository
                            .createQueryBuilder("turma")
                            .orderBy("codigo_disc", "ASC")
                            .getMany()];
                    case 1:
                        turmas = _a.sent();
                        return [2 /*return*/, turmas];
                }
            });
        });
    };
    TurmasRepository.prototype.queryByAnoESemestre = function (year, semester) {
        return __awaiter(this, void 0, void 0, function () {
            var turmas;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository
                            .createQueryBuilder("turma")
                            .innerJoinAndSelect("turma.disciplina", "disciplina")
                            .where("ano = :year AND semestre = :semester", { semester: semester, year: year })
                            .orderBy("codigo_disc", "ASC")
                            .getMany()];
                    case 1:
                        turmas = _a.sent();
                        return [2 /*return*/, turmas];
                }
            });
        });
    };
    TurmasRepository.prototype.queryById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var turma;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.findOne(id)];
                    case 1:
                        turma = _a.sent();
                        return [2 /*return*/, turma];
                }
            });
        });
    };
    TurmasRepository.prototype.queryByCodigo = function (codigo_disc) {
        return __awaiter(this, void 0, void 0, function () {
            var turma;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.findOne({ codigo_disc: codigo_disc })];
                    case 1:
                        turma = _a.sent();
                        return [2 /*return*/, turma];
                }
            });
        });
    };
    TurmasRepository.prototype.queryByCodigoTurmaAnoSemestre = function (codigo, turma, ano, semestre) {
        return __awaiter(this, void 0, void 0, function () {
            var foundedTurma;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.findOne({
                            where: { codigo_disc: codigo, turma: turma, ano: ano, semestre: semestre },
                        })];
                    case 1:
                        foundedTurma = _a.sent();
                        return [2 /*return*/, foundedTurma];
                }
            });
        });
    };
    TurmasRepository.prototype.updateById = function (_a) {
        var id = _a.id, codigo_disc = _a.codigo_disc, turma = _a.turma, ch = _a.ch, ano = _a.ano, semestre = _a.semestre;
        return __awaiter(this, void 0, void 0, function () {
            var turmaToUpdate;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.repository.findOne({ id: id })];
                    case 1:
                        turmaToUpdate = _b.sent();
                        turmaToUpdate.codigo_disc = codigo_disc || turmaToUpdate.codigo_disc;
                        turmaToUpdate.turma = turma || turmaToUpdate.turma;
                        turmaToUpdate.ch = ch || turmaToUpdate.ch;
                        turmaToUpdate.ano = ano || turmaToUpdate.ano;
                        turmaToUpdate.semestre = semestre || turmaToUpdate.semestre;
                        return [4 /*yield*/, this.repository.save(turmaToUpdate)];
                    case 2:
                        _b.sent();
                        return [2 /*return*/, turmaToUpdate];
                }
            });
        });
    };
    TurmasRepository.prototype.deleteById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.delete(id)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return TurmasRepository;
}());
exports.TurmasRepository = TurmasRepository;

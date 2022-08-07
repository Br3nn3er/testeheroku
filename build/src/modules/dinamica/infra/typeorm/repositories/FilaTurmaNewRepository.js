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
exports.FilaTurmaNewRepository = void 0;
var typeorm_1 = require("typeorm");
var FilaTurmaNew_1 = require("../entities/FilaTurmaNew");
var FilaTurmaNewRepository = /** @class */ (function () {
    function FilaTurmaNewRepository() {
        this.repository = typeorm_1.getRepository(FilaTurmaNew_1.FilaTurmaNew);
    }
    FilaTurmaNewRepository.prototype.create = function (_a) {
        var id_turma = _a.id_turma, id_fila = _a.id_fila, prioridade = _a.prioridade;
        return __awaiter(this, void 0, void 0, function () {
            var fila;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        fila = this.repository.create({ id_turma: id_turma, id_fila: id_fila, prioridade: prioridade });
                        return [4 /*yield*/, this.repository.save(fila)];
                    case 1:
                        _b.sent();
                        return [2 /*return*/, fila];
                }
            });
        });
    };
    FilaTurmaNewRepository.prototype.listFilas = function () {
        return __awaiter(this, void 0, void 0, function () {
            var filas;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository
                            .createQueryBuilder("fila_turma_new")
                            .orderBy("id_turma")
                            .getMany()];
                    case 1:
                        filas = _a.sent();
                        return [2 /*return*/, filas];
                }
            });
        });
    };
    FilaTurmaNewRepository.prototype.readByProfessorAndSemestre = function (siape, semestre, ano) {
        return this.repository
            .createQueryBuilder("fila_turma_new")
            .innerJoinAndSelect("fila_turma_new.fila", "fila")
            .innerJoinAndSelect("fila.professor", "professor")
            .innerJoinAndSelect("fila.disciplina", "disciplina")
            .innerJoinAndSelect("disciplina.curso_disciplinas", "curso_disciplinas")
            .innerJoinAndSelect("fila_turma_new.turma", "turma")
            .where("professor.siape = :siape AND fila.ano = :ano AND fila.semestre = :semestre", { ano: ano, semestre: semestre, siape: siape })
            .orderBy("fila_turma_new.prioridade", "ASC")
            .getMany();
    };
    FilaTurmaNewRepository.prototype.queryByTurmaEFila = function (id_turma, id_fila) {
        return __awaiter(this, void 0, void 0, function () {
            var filaFounded;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.findOne({
                            where: { id_turma: id_turma, id_fila: id_fila },
                        })];
                    case 1:
                        filaFounded = _a.sent();
                        return [2 /*return*/, filaFounded];
                }
            });
        });
    };
    FilaTurmaNewRepository.prototype.queryByTurma = function (id_turma) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.repository
                        .createQueryBuilder("fila_turma_new")
                        .innerJoinAndSelect("fila_turma_new.fila", "fila")
                        .innerJoinAndSelect("fila.professor", "professor")
                        .innerJoinAndSelect("fila.disciplina", "disciplina")
                        .where("fila_turma_new.id_turma = :id_turma", { id_turma: id_turma })
                        .orderBy("fila.pos", "ASC")
                        .getMany()];
            });
        });
    };
    FilaTurmaNewRepository.prototype.updateByTurmaEFila = function (_a) {
        var id_turma = _a.id_turma, id_fila = _a.id_fila, prioridade = _a.prioridade;
        return __awaiter(this, void 0, void 0, function () {
            var filaUpdated;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.repository
                            .createQueryBuilder()
                            .update(FilaTurmaNew_1.FilaTurmaNew)
                            .set({ prioridade: prioridade })
                            .where("id_turma = :id_turma", { id_turma: id_turma })
                            .andWhere("id_fila = :id_fila", { id_fila: id_fila })
                            .execute()];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, this.repository.findOne({
                                where: { id_turma: id_turma, id_fila: id_fila },
                            })];
                    case 2:
                        filaUpdated = _b.sent();
                        return [2 /*return*/, filaUpdated];
                }
            });
        });
    };
    FilaTurmaNewRepository.prototype.deleteByTurmaEFila = function (id_turma, id_fila) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository
                            .createQueryBuilder()
                            .delete()
                            .from(FilaTurmaNew_1.FilaTurmaNew)
                            .where("id_turma = :id_turma", { id_turma: id_turma })
                            .andWhere("id_fila = :id_fila", { id_fila: id_fila })
                            .execute()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return FilaTurmaNewRepository;
}());
exports.FilaTurmaNewRepository = FilaTurmaNewRepository;

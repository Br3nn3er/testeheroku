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
exports.FilaRepository = void 0;
var typeorm_1 = require("typeorm");
var Fila_1 = require("../entities/Fila");
var Professor_1 = require("../../../../estrutura/infra/typeorm/entities/Professor");
var FilaTurmaNew_1 = require("../entities/FilaTurmaNew");
var Turma_1 = require("../../../../estrutura/infra/typeorm/entities/Turma");
var Disciplina_1 = require("../../../../estrutura/infra/typeorm/entities/Disciplina");
var FilaRepository = /** @class */ (function () {
    function FilaRepository() {
        this.repository = typeorm_1.getRepository(Fila_1.Fila);
    }
    FilaRepository.prototype.create = function (_a) {
        var siape = _a.siape, codigo_disc = _a.codigo_disc, pos = _a.pos, prioridade = _a.prioridade, qte_ministrada = _a.qte_ministrada, qte_maximo = _a.qte_maximo, ano = _a.ano, semestre = _a.semestre, status = _a.status, periodo_preferencial = _a.periodo_preferencial;
        return __awaiter(this, void 0, void 0, function () {
            var fila;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        fila = this.repository.create({
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
                        });
                        return [4 /*yield*/, this.repository.save(fila)];
                    case 1:
                        _b.sent();
                        return [2 /*return*/, fila];
                }
            });
        });
    };
    FilaRepository.prototype.listFilas = function () {
        return __awaiter(this, void 0, void 0, function () {
            var filas;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository
                            .createQueryBuilder("fila")
                            .orderBy("id", "ASC")
                            .getMany()];
                    case 1:
                        filas = _a.sent();
                        return [2 /*return*/, filas];
                }
            });
        });
    };
    FilaRepository.prototype.queryById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var fila;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.findOne(id)];
                    case 1:
                        fila = _a.sent();
                        return [2 /*return*/, fila];
                }
            });
        });
    };
    FilaRepository.prototype.queryByDiscEPosEAnoESemestre = function (codigo_disc, pos, ano, semestre) {
        return __awaiter(this, void 0, void 0, function () {
            var fila;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.findOne({
                            where: { codigo_disc: codigo_disc, pos: pos, ano: ano, semestre: semestre },
                        })];
                    case 1:
                        fila = _a.sent();
                        return [2 /*return*/, fila];
                }
            });
        });
    };
    FilaRepository.prototype.queryByDiscEAnoESemestre = function (codigo_disc, ano, semestre) {
        return __awaiter(this, void 0, void 0, function () {
            var fila;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.find({
                            relations: ["professor"],
                            where: { codigo_disc: codigo_disc, ano: ano, semestre: semestre },
                            order: { pos: "ASC" },
                        })];
                    case 1:
                        fila = _a.sent();
                        return [2 /*return*/, fila];
                }
            });
        });
    };
    FilaRepository.prototype.queryBySIAPEEAnoESemestre = function (siape, ano, semestre) {
        return __awaiter(this, void 0, void 0, function () {
            var fila;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.find({
                            relations: ["professor", "disciplina", "disciplina.curso_disciplinas"],
                            where: { siape: siape, ano: ano, semestre: semestre },
                            order: { pos: "ASC" },
                        })];
                    case 1:
                        fila = _a.sent();
                        return [2 /*return*/, fila];
                }
            });
        });
    };
    FilaRepository.prototype.queryBySiape = function (siape) {
        return __awaiter(this, void 0, void 0, function () {
            var fila;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.find({
                            relations: ["fila_turma_new"],
                            where: { siape: siape },
                            order: { pos: "ASC" },
                        })];
                    case 1:
                        fila = _a.sent();
                        return [2 /*return*/, fila];
                }
            });
        });
    };
    FilaRepository.prototype.queryBySiapeEAnoESemestre = function (siape, ano, semestre) {
        return __awaiter(this, void 0, void 0, function () {
            var filaFinded;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, typeorm_1.getRepository(Fila_1.Fila)
                            .createQueryBuilder("fl")
                            .select("dp.codigo", "codigo_disciplina")
                            .addSelect("dp.nome", "nome_disciplina")
                            .addSelect("tm.turma", "turma")
                            .addSelect("fl.pos", "posicao")
                            .addSelect("fl.prioridade", "prioridade")
                            .addSelect("fl.qte_ministrada", "qte_ministrada")
                            .addSelect("fl.qte_maximo", "qte_maximo")
                            .leftJoin(FilaTurmaNew_1.FilaTurmaNew, "ftn", "ftn.id_fila = fl.id")
                            .leftJoin(Turma_1.Turma, "tm", "tm.id = ftn.id_turma")
                            .leftJoin(Disciplina_1.Disciplina, "dp", "fl.codigo_disc = dp.codigo")
                            .where("fl.siape = :siape", { siape: siape })
                            .andWhere("tm.ano = :ano", { ano: ano })
                            .andWhere("tm.semestre = :semestre", { semestre: semestre })
                            .orderBy("fl.prioridade", "DESC")
                            .getRawMany()];
                    case 1:
                        filaFinded = _a.sent();
                        return [2 /*return*/, filaFinded];
                }
            });
        });
    };
    FilaRepository.prototype.queryByTurma = function (turma) {
        return __awaiter(this, void 0, void 0, function () {
            var filaFinded;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, typeorm_1.getRepository(Fila_1.Fila)
                            .createQueryBuilder("fl")
                            .select("pf.nome", "nome_professor")
                            .addSelect("fl.pos", "posicao")
                            .addSelect("fl.prioridade", "prioridade")
                            .addSelect("fl.qte_ministrada", "qte_ministrada")
                            .addSelect("fl.qte_maximo", "qte_maximo")
                            .leftJoin(FilaTurmaNew_1.FilaTurmaNew, "ftn", "ftn.id_fila = fl.id")
                            .leftJoin(Turma_1.Turma, "tm", "tm.id = ftn.id_turma")
                            .leftJoin(Professor_1.Professor, "pf", "pf.siape = fl.siape")
                            .where("ftn.id_turma = :turma", { turma: turma })
                            .orderBy("fl.prioridade", "DESC")
                            .getRawMany()];
                    case 1:
                        filaFinded = _a.sent();
                        return [2 /*return*/, filaFinded];
                }
            });
        });
    };
    FilaRepository.prototype.queryBySiapeEDiscEAnoESemestre = function (siape, codigo_disc, ano, semestre) {
        return __awaiter(this, void 0, void 0, function () {
            var fila;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.findOne({
                            where: { siape: siape, codigo_disc: codigo_disc, ano: ano, semestre: semestre },
                        })];
                    case 1:
                        fila = _a.sent();
                        return [2 /*return*/, fila];
                }
            });
        });
    };
    FilaRepository.prototype.updateById = function (_a) {
        var id = _a.id, siape = _a.siape, codigo_disc = _a.codigo_disc, pos = _a.pos, prioridade = _a.prioridade, qte_ministrada = _a.qte_ministrada, qte_maximo = _a.qte_maximo, ano = _a.ano, semestre = _a.semestre, status = _a.status, periodo_preferencial = _a.periodo_preferencial;
        return __awaiter(this, void 0, void 0, function () {
            var filaToUpdate;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.repository.findOne(id)];
                    case 1:
                        filaToUpdate = _b.sent();
                        filaToUpdate.siape = siape || filaToUpdate.siape;
                        filaToUpdate.codigo_disc = codigo_disc || filaToUpdate.codigo_disc;
                        filaToUpdate.pos = pos || filaToUpdate.pos;
                        filaToUpdate.prioridade = prioridade || filaToUpdate.prioridade;
                        filaToUpdate.qte_ministrada = qte_ministrada || filaToUpdate.qte_ministrada;
                        filaToUpdate.qte_maximo = qte_maximo || filaToUpdate.qte_maximo;
                        filaToUpdate.ano = ano || filaToUpdate.ano;
                        filaToUpdate.semestre = semestre || filaToUpdate.semestre;
                        filaToUpdate.status = status || filaToUpdate.status;
                        filaToUpdate.periodo_preferencial =
                            periodo_preferencial === null || periodo_preferencial === undefined
                                ? filaToUpdate.periodo_preferencial
                                : periodo_preferencial;
                        return [4 /*yield*/, this.repository.save(filaToUpdate)];
                    case 2:
                        _b.sent();
                        return [2 /*return*/, filaToUpdate];
                }
            });
        });
    };
    FilaRepository.prototype.deleteById = function (id) {
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
    return FilaRepository;
}());
exports.FilaRepository = FilaRepository;

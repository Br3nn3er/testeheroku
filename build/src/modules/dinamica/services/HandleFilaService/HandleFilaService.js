"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HandleFilaService = void 0;
var csv_parse_1 = __importDefault(require("csv-parse"));
var fs_1 = __importDefault(require("fs"));
var tsyringe_1 = require("tsyringe");
var AppError_1 = require("../../../../shared/errors/AppError");
var HandleFilaService = /** @class */ (function () {
    function HandleFilaService(filaRepository, semestresRepository) {
        this.filaRepository = filaRepository;
        this.semestresRepository = semestresRepository;
    }
    HandleFilaService.prototype.create = function (_a) {
        var siape = _a.siape, codigo_disc = _a.codigo_disc, pos = _a.pos, prioridade = _a.prioridade, qte_ministrada = _a.qte_ministrada, qte_maximo = _a.qte_maximo, ano = _a.ano, semestre = _a.semestre, status = _a.status, periodo_preferencial = _a.periodo_preferencial;
        return __awaiter(this, void 0, void 0, function () {
            var filaFounded_1, filaFounded_2, fila;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.filaRepository.queryByDiscEPosEAnoESemestre(codigo_disc, pos, ano, semestre)];
                    case 1:
                        filaFounded_1 = _b.sent();
                        return [4 /*yield*/, this.filaRepository.queryBySiapeEDiscEAnoESemestre(siape, codigo_disc, ano, semestre)];
                    case 2:
                        filaFounded_2 = _b.sent();
                        if (filaFounded_1 || filaFounded_2) {
                            throw new AppError_1.AppError("Há uma fila com esta configuração já cadastrada!");
                        }
                        return [4 /*yield*/, this.filaRepository.create({
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
                    case 3:
                        fila = _b.sent();
                        return [2 /*return*/, fila];
                }
            });
        });
    };
    HandleFilaService.prototype.read = function () {
        return __awaiter(this, void 0, void 0, function () {
            var filas;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.filaRepository.listFilas()];
                    case 1:
                        filas = _a.sent();
                        filas.forEach(function (fila) {
                            // eslint-disable-next-line no-param-reassign
                            fila.siape = fila.siape.trim();
                            // eslint-disable-next-line no-param-reassign
                            fila.codigo_disc = fila.codigo_disc.trim();
                        });
                        return [2 /*return*/, filas];
                }
            });
        });
    };
    HandleFilaService.prototype.readByDisciplinaESemestre = function (codigo_disc, semestreId) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, ano, semestre, filas;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.semestresRepository.queryById(semestreId)];
                    case 1:
                        _a = _b.sent(), ano = _a.ano, semestre = _a.semestre;
                        return [4 /*yield*/, this.filaRepository.queryByDiscEAnoESemestre(codigo_disc, ano, semestre)];
                    case 2:
                        filas = _b.sent();
                        return [2 /*return*/, filas.map(function (fila) { return (__assign(__assign({}, fila), { siape: fila.siape.trim(), codigo_disc: fila.codigo_disc.trim() })); })];
                }
            });
        });
    };
    HandleFilaService.prototype.readByProfessorESemestre = function (siape, semestreId) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, ano, semestre, filas;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.semestresRepository.queryById(semestreId)];
                    case 1:
                        _a = _b.sent(), ano = _a.ano, semestre = _a.semestre;
                        return [4 /*yield*/, this.filaRepository.queryBySIAPEEAnoESemestre(siape, ano, semestre)];
                    case 2:
                        filas = _b.sent();
                        return [2 /*return*/, filas.map(function (fila) { return (__assign(__assign({}, fila), { siape: fila.siape.trim(), codigo_disc: fila.codigo_disc.trim() })); })];
                }
            });
        });
    };
    HandleFilaService.prototype.readByProfessor = function (siape) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.filaRepository.queryBySiape(siape)];
            });
        });
    };
    HandleFilaService.prototype.readByTurma = function (turma) {
        return this.filaRepository.queryByTurma(turma);
    };
    HandleFilaService.prototype.readBySemestreEProfessor = function (siape, ano, semestre) {
        return __awaiter(this, void 0, void 0, function () {
            var filas;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.filaRepository.queryBySiapeEAnoESemestre(siape, ano, semestre)];
                    case 1:
                        filas = _a.sent();
                        return [2 /*return*/, filas];
                }
            });
        });
    };
    HandleFilaService.prototype.update = function (_a) {
        var id = _a.id, siape = _a.siape, codigo_disc = _a.codigo_disc, pos = _a.pos, prioridade = _a.prioridade, qte_ministrada = _a.qte_ministrada, qte_maximo = _a.qte_maximo, ano = _a.ano, semestre = _a.semestre, status = _a.status, periodo_preferencial = _a.periodo_preferencial;
        return __awaiter(this, void 0, void 0, function () {
            var filaFounded, filaToUpdate;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.filaRepository.queryById(id)];
                    case 1:
                        filaFounded = _b.sent();
                        if (!filaFounded) {
                            throw new AppError_1.AppError("Fila não encontrada!");
                        }
                        return [4 /*yield*/, this.filaRepository.updateById({
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
                    case 2:
                        filaToUpdate = _b.sent();
                        return [2 /*return*/, filaToUpdate];
                }
            });
        });
    };
    HandleFilaService.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.filaRepository.deleteById(id)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HandleFilaService.prototype.import = function (file) {
        return __awaiter(this, void 0, void 0, function () {
            var filas;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadFilas(file)];
                    case 1:
                        filas = _a.sent();
                        filas.map(function (fila) { return __awaiter(_this, void 0, void 0, function () {
                            var siape, codigo_disc, pos, prioridade, qte_ministrada, qte_maximo, ano, semestre, status, periodo_preferencial;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        siape = fila.siape, codigo_disc = fila.codigo_disc, pos = fila.pos, prioridade = fila.prioridade, qte_ministrada = fila.qte_ministrada, qte_maximo = fila.qte_maximo, ano = fila.ano, semestre = fila.semestre, status = fila.status, periodo_preferencial = fila.periodo_preferencial;
                                        console.log(fila);
                                        return [4 /*yield*/, this.filaRepository.create({
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
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    HandleFilaService.prototype.loadFilas = function (file) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var filas = [];
            var stream = fs_1.default.createReadStream(file.path);
            var parseFile = csv_parse_1.default();
            stream.pipe(parseFile);
            parseFile
                .on("data", function (line) { return __awaiter(_this, void 0, void 0, function () {
                var siape, codigo_disc, pos, prioridade, qte_ministrada, qte_maximo, ano, semestre, status, periodo_preferencial;
                return __generator(this, function (_a) {
                    siape = line[0], codigo_disc = line[1], pos = line[2], prioridade = line[3], qte_ministrada = line[4], qte_maximo = line[5], ano = line[6], semestre = line[7], status = line[8], periodo_preferencial = line[9];
                    filas.push({
                        siape: siape,
                        codigo_disc: codigo_disc,
                        pos: parseInt(pos, 10),
                        prioridade: parseInt(prioridade, 10),
                        qte_ministrada: parseInt(qte_ministrada, 10),
                        qte_maximo: parseInt(qte_maximo, 10),
                        ano: parseInt(ano, 10),
                        semestre: parseInt(semestre, 10),
                        status: parseInt(status, 10),
                        periodo_preferencial: periodo_preferencial.toLowerCase() === "true",
                    });
                    return [2 /*return*/];
                });
            }); })
                .on("end", function () {
                fs_1.default.promises.unlink(file.path);
                resolve(filas);
            })
                .on("error", function (err) {
                reject(err);
            });
        });
    };
    HandleFilaService = __decorate([
        tsyringe_1.injectable(),
        __param(0, tsyringe_1.inject("FilaRepository")),
        __param(1, tsyringe_1.inject("SemestresRepository")),
        __metadata("design:paramtypes", [Object, Object])
    ], HandleFilaService);
    return HandleFilaService;
}());
exports.HandleFilaService = HandleFilaService;

"use strict";
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
exports.HandleTurmaService = void 0;
var csv_parse_1 = __importDefault(require("csv-parse"));
var fs_1 = __importDefault(require("fs"));
var tsyringe_1 = require("tsyringe");
var AppError_1 = require("../../../../shared/errors/AppError");
var HandleTurmaService = /** @class */ (function () {
    function HandleTurmaService(turmasRepository, semestresRepository) {
        this.turmasRepository = turmasRepository;
        this.semestresRepository = semestresRepository;
    }
    HandleTurmaService.prototype.create = function (_a) {
        var codigo_disc = _a.codigo_disc, turma = _a.turma, ch = _a.ch, ano = _a.ano, semestre = _a.semestre;
        return __awaiter(this, void 0, void 0, function () {
            var existentTurma, turmaToCreate;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.turmasRepository.queryByCodigoTurmaAnoSemestre(codigo_disc, turma, ano, semestre)];
                    case 1:
                        existentTurma = _b.sent();
                        if (existentTurma) {
                            throw new AppError_1.AppError("H?? uma turma com este c??digo!");
                        }
                        return [4 /*yield*/, this.turmasRepository.createTurma({
                                codigo_disc: codigo_disc,
                                turma: turma,
                                ch: ch,
                                ano: ano,
                                semestre: semestre,
                            })];
                    case 2:
                        turmaToCreate = _b.sent();
                        return [2 /*return*/, turmaToCreate];
                }
            });
        });
    };
    HandleTurmaService.prototype.read = function (semesterId) {
        return __awaiter(this, void 0, void 0, function () {
            var turmas, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!semesterId) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.readBySemesterId(semesterId)];
                    case 1:
                        _a = _b.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.turmasRepository.listAllTurmas()];
                    case 3:
                        _a = _b.sent();
                        _b.label = 4;
                    case 4:
                        turmas = _a;
                        turmas.forEach(function (turmaToTrim) {
                            // eslint-disable-next-line no-param-reassign
                            turmaToTrim.codigo_disc = turmaToTrim.codigo_disc.trim();
                            // eslint-disable-next-line no-param-reassign
                            turmaToTrim.turma = turmaToTrim.turma.trim();
                        });
                        return [2 /*return*/, turmas];
                }
            });
        });
    };
    HandleTurmaService.prototype.readBySemesterId = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, ano, semestre;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.semestresRepository.queryById(id)];
                    case 1:
                        _a = _b.sent(), ano = _a.ano, semestre = _a.semestre;
                        return [2 /*return*/, this.turmasRepository.queryByAnoESemestre(ano, semestre)];
                }
            });
        });
    };
    HandleTurmaService.prototype.update = function (_a) {
        var id = _a.id, codigo_disc = _a.codigo_disc, turma = _a.turma, ch = _a.ch, ano = _a.ano, semestre = _a.semestre;
        return __awaiter(this, void 0, void 0, function () {
            var existentTurma, turmaToUpdate;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.turmasRepository.queryById(id)];
                    case 1:
                        existentTurma = _b.sent();
                        if (!existentTurma) {
                            throw new AppError_1.AppError("Esta turma n??o est?? cadastrada!");
                        }
                        return [4 /*yield*/, this.turmasRepository.updateById({
                                id: id,
                                codigo_disc: codigo_disc,
                                turma: turma,
                                ch: ch,
                                ano: ano,
                                semestre: semestre,
                            })];
                    case 2:
                        turmaToUpdate = _b.sent();
                        return [2 /*return*/, turmaToUpdate];
                }
            });
        });
    };
    HandleTurmaService.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.turmasRepository.deleteById(id)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HandleTurmaService.prototype.import = function (file) {
        return __awaiter(this, void 0, void 0, function () {
            var turmas;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadTurmas(file)];
                    case 1:
                        turmas = _a.sent();
                        turmas.map(function (turmaToSearch) { return __awaiter(_this, void 0, void 0, function () {
                            var codigo_disc, turma, ch, ano, semestre, existentCurso;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        codigo_disc = turmaToSearch.codigo_disc, turma = turmaToSearch.turma, ch = turmaToSearch.ch, ano = turmaToSearch.ano, semestre = turmaToSearch.semestre;
                                        return [4 /*yield*/, this.turmasRepository.queryByCodigoTurmaAnoSemestre(codigo_disc, turma, ano, semestre)];
                                    case 1:
                                        existentCurso = _a.sent();
                                        if (!!existentCurso) return [3 /*break*/, 3];
                                        console.log(turmaToSearch);
                                        return [4 /*yield*/, this.turmasRepository.createTurma({
                                                codigo_disc: codigo_disc,
                                                turma: turma,
                                                ch: ch,
                                                ano: ano,
                                                semestre: semestre,
                                            })];
                                    case 2:
                                        _a.sent();
                                        _a.label = 3;
                                    case 3: return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    HandleTurmaService.prototype.loadTurmas = function (file) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var turmas = [];
            var stream = fs_1.default.createReadStream(file.path);
            var parseFile = csv_parse_1.default();
            stream.pipe(parseFile);
            parseFile
                .on("data", function (line) { return __awaiter(_this, void 0, void 0, function () {
                var codigo_disc, turma, ch, ano, semestre;
                return __generator(this, function (_a) {
                    codigo_disc = line[0], turma = line[1], ch = line[2], ano = line[3], semestre = line[4];
                    turmas.push({
                        codigo_disc: codigo_disc,
                        turma: turma,
                        ch: ch,
                        ano: ano,
                        semestre: semestre,
                    });
                    return [2 /*return*/];
                });
            }); })
                .on("end", function () {
                fs_1.default.promises.unlink(file.path);
                resolve(turmas);
            })
                .on("error", function (err) {
                reject(err);
            });
        });
    };
    HandleTurmaService = __decorate([
        tsyringe_1.injectable(),
        __param(0, tsyringe_1.inject("TurmasRepository")),
        __param(1, tsyringe_1.inject("SemestresRepository")),
        __metadata("design:paramtypes", [Object, Object])
    ], HandleTurmaService);
    return HandleTurmaService;
}());
exports.HandleTurmaService = HandleTurmaService;

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
exports.HandleProfessorService = void 0;
var csv_parse_1 = __importDefault(require("csv-parse"));
var fs_1 = __importDefault(require("fs"));
var tsyringe_1 = require("tsyringe");
var AppError_1 = require("../../../../shared/errors/AppError");
var HandleProfessorService = /** @class */ (function () {
    function HandleProfessorService(professoresRepository, dateProvider) {
        this.professoresRepository = professoresRepository;
        this.dateProvider = dateProvider;
    }
    HandleProfessorService.prototype.create = function (_a) {
        var siape = _a.siape, nome = _a.nome, data_ingresso = _a.data_ingresso, data_nasc = _a.data_nasc, afastado = _a.afastado, regime = _a.regime, carga_atual = _a.carga_atual, locacao = _a.locacao, cnome = _a.cnome, data_saida = _a.data_saida, data_exoneracao = _a.data_exoneracao, data_aposentadoria = _a.data_aposentadoria, status = _a.status;
        return __awaiter(this, void 0, void 0, function () {
            var existentProfessor, professor;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.professoresRepository.queryBySiape(siape)];
                    case 1:
                        existentProfessor = _b.sent();
                        if (existentProfessor) {
                            throw new AppError_1.AppError("Há um professor cadastrado com este código SIAPE", 403);
                        }
                        return [4 /*yield*/, this.professoresRepository.createProfessor({
                                siape: siape,
                                nome: nome,
                                data_ingresso: data_ingresso
                                    ? this.dateProvider.processDateToUTC(data_ingresso)
                                    : null,
                                data_nasc: data_nasc
                                    ? this.dateProvider.processDateToUTC(data_nasc)
                                    : null,
                                afastado: afastado,
                                regime: regime,
                                carga_atual: carga_atual,
                                locacao: locacao,
                                cnome: cnome,
                                data_saida: data_saida
                                    ? this.dateProvider.processDateToUTC(data_saida)
                                    : null,
                                data_exoneracao: data_exoneracao
                                    ? this.dateProvider.processDateToUTC(data_exoneracao)
                                    : null,
                                data_aposentadoria: data_aposentadoria
                                    ? this.dateProvider.processDateToUTC(data_aposentadoria)
                                    : null,
                                status: status,
                            })];
                    case 2:
                        professor = _b.sent();
                        return [2 /*return*/, professor];
                }
            });
        });
    };
    HandleProfessorService.prototype.read = function () {
        return __awaiter(this, void 0, void 0, function () {
            var professores;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.professoresRepository.listAllProfessores()];
                    case 1:
                        professores = _a.sent();
                        professores.forEach(function (professor) {
                            // eslint-disable-next-line no-param-reassign
                            professor.siape = professor.siape.trim();
                        });
                        return [2 /*return*/, professores];
                }
            });
        });
    };
    HandleProfessorService.prototype.readBySiape = function (siape) {
        return __awaiter(this, void 0, void 0, function () {
            var professor;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.professoresRepository.queryBySiape(siape)];
                    case 1:
                        professor = _a.sent();
                        professor.siape = professor.siape.trim();
                        return [2 /*return*/, professor];
                }
            });
        });
    };
    HandleProfessorService.prototype.update = function (_a) {
        var siape = _a.siape, nome = _a.nome, data_ingresso = _a.data_ingresso, data_nasc = _a.data_nasc, afastado = _a.afastado, regime = _a.regime, carga_atual = _a.carga_atual, locacao = _a.locacao, cnome = _a.cnome, data_saida = _a.data_saida, data_exoneracao = _a.data_exoneracao, data_aposentadoria = _a.data_aposentadoria, status = _a.status;
        return __awaiter(this, void 0, void 0, function () {
            var professorExistent, professorToUpdate;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.professoresRepository.queryBySiape(siape)];
                    case 1:
                        professorExistent = _b.sent();
                        if (!professorExistent) {
                            throw new AppError_1.AppError("Este professor não está cadastrado!");
                        }
                        return [4 /*yield*/, this.professoresRepository.updateBySiape({
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
                    case 2:
                        professorToUpdate = _b.sent();
                        return [2 /*return*/, professorToUpdate];
                }
            });
        });
    };
    HandleProfessorService.prototype.delete = function (siape) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.professoresRepository.deleteBySiape(siape)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HandleProfessorService.prototype.import = function (file) {
        return __awaiter(this, void 0, void 0, function () {
            var professores;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadProfessores(file)];
                    case 1:
                        professores = _a.sent();
                        professores.map(function (professor) { return __awaiter(_this, void 0, void 0, function () {
                            var siape, nome, data_ingresso, data_nasc, afastado, regime, carga_atual, locacao, cnome, data_saida, data_exoneracao, data_aposentadoria, status, professorExistance;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        siape = professor.siape, nome = professor.nome, data_ingresso = professor.data_ingresso, data_nasc = professor.data_nasc, afastado = professor.afastado, regime = professor.regime, carga_atual = professor.carga_atual, locacao = professor.locacao, cnome = professor.cnome, data_saida = professor.data_saida, data_exoneracao = professor.data_exoneracao, data_aposentadoria = professor.data_aposentadoria, status = professor.status;
                                        return [4 /*yield*/, this.professoresRepository.queryBySiape(siape)];
                                    case 1:
                                        professorExistance = _a.sent();
                                        if (!!professorExistance) return [3 /*break*/, 3];
                                        console.log(professor);
                                        return [4 /*yield*/, this.professoresRepository.createProfessor({
                                                siape: siape,
                                                nome: nome,
                                                data_ingresso: data_ingresso
                                                    ? this.dateProvider.processDateToUTC(data_ingresso)
                                                    : null,
                                                data_nasc: data_nasc
                                                    ? this.dateProvider.processDateToUTC(data_nasc)
                                                    : null,
                                                afastado: afastado,
                                                regime: regime,
                                                carga_atual: carga_atual,
                                                locacao: locacao,
                                                cnome: cnome,
                                                data_saida: data_saida
                                                    ? this.dateProvider.processDateToUTC(data_saida)
                                                    : null,
                                                data_exoneracao: data_exoneracao
                                                    ? this.dateProvider.processDateToUTC(data_exoneracao)
                                                    : null,
                                                data_aposentadoria: data_aposentadoria
                                                    ? this.dateProvider.processDateToUTC(data_aposentadoria)
                                                    : null,
                                                status: status,
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
    HandleProfessorService.prototype.loadProfessores = function (file) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var professores = [];
            var stream = fs_1.default.createReadStream(file.path);
            var parseFile = csv_parse_1.default();
            stream.pipe(parseFile);
            parseFile
                .on("data", function (line) { return __awaiter(_this, void 0, void 0, function () {
                var siape, nome, data_ingresso, data_nasc, afastado, regime, carga_atual, locacao, cnome, data_saida, data_exoneracao, data_aposentadoria, status;
                return __generator(this, function (_a) {
                    siape = line[0], nome = line[1], data_ingresso = line[2], data_nasc = line[3], afastado = line[4], regime = line[5], carga_atual = line[6], locacao = line[7], cnome = line[8], data_saida = line[9], data_exoneracao = line[10], data_aposentadoria = line[11], status = line[12];
                    professores.push({
                        siape: siape,
                        nome: nome,
                        data_ingresso: data_ingresso,
                        data_nasc: data_nasc,
                        afastado: afastado.toLowerCase() === "true",
                        regime: regime,
                        carga_atual: carga_atual,
                        locacao: locacao,
                        cnome: cnome,
                        data_saida: data_saida,
                        data_exoneracao: data_exoneracao,
                        data_aposentadoria: data_aposentadoria,
                        status: status,
                    });
                    return [2 /*return*/];
                });
            }); })
                .on("end", function () {
                fs_1.default.promises.unlink(file.path);
                resolve(professores);
            })
                .on("error", function (err) {
                reject(err);
            });
        });
    };
    HandleProfessorService = __decorate([
        tsyringe_1.injectable(),
        __param(0, tsyringe_1.inject("ProfessoresRepository")),
        __param(1, tsyringe_1.inject("DayjsDateProvider")),
        __metadata("design:paramtypes", [Object, Object])
    ], HandleProfessorService);
    return HandleProfessorService;
}());
exports.HandleProfessorService = HandleProfessorService;

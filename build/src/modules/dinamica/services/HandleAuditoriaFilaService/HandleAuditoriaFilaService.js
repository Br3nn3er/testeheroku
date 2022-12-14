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
exports.HandleAuditoriaFilaService = void 0;
var csv_parse_1 = __importDefault(require("csv-parse"));
var fs_1 = __importDefault(require("fs"));
var tsyringe_1 = require("tsyringe");
var AppError_1 = require("../../../../shared/errors/AppError");
var HandleAuditoriaFilaService = /** @class */ (function () {
    function HandleAuditoriaFilaService(auditoriaFilaRepository) {
        this.auditoriaFilaRepository = auditoriaFilaRepository;
    }
    HandleAuditoriaFilaService.prototype.create = function (_a) {
        var siape = _a.siape, codigo_disc = _a.codigo_disc, pos = _a.pos, prioridade = _a.prioridade, qte_ministrada = _a.qte_ministrada, qte_maximo = _a.qte_maximo, ano = _a.ano, semestre = _a.semestre, status = _a.status, periodo_preferencial = _a.periodo_preferencial, comando = _a.comando, stamp = _a.stamp;
        return __awaiter(this, void 0, void 0, function () {
            var auditoria;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.auditoriaFilaRepository.create({
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
                            comando: comando,
                            stamp: stamp,
                        })];
                    case 1:
                        auditoria = _b.sent();
                        return [2 /*return*/, auditoria];
                }
            });
        });
    };
    HandleAuditoriaFilaService.prototype.read = function () {
        return __awaiter(this, void 0, void 0, function () {
            var auditorias;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.auditoriaFilaRepository.listAllAuditorias()];
                    case 1:
                        auditorias = _a.sent();
                        auditorias.forEach(function (auditoriaToTrim) {
                            // eslint-disable-next-line no-param-reassign
                            auditoriaToTrim.siape = auditoriaToTrim.siape.trim();
                            // eslint-disable-next-line no-param-reassign
                            auditoriaToTrim.codigo_disc = auditoriaToTrim.codigo_disc.trim();
                        });
                        return [2 /*return*/, auditorias];
                }
            });
        });
    };
    HandleAuditoriaFilaService.prototype.update = function (_a) {
        var id = _a.id, siape = _a.siape, codigo_disc = _a.codigo_disc, pos = _a.pos, prioridade = _a.prioridade, qte_ministrada = _a.qte_ministrada, qte_maximo = _a.qte_maximo, ano = _a.ano, semestre = _a.semestre, status = _a.status, periodo_preferencial = _a.periodo_preferencial, comando = _a.comando, stamp = _a.stamp;
        return __awaiter(this, void 0, void 0, function () {
            var existentAuditoria, auditoriaToUpdate;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.auditoriaFilaRepository.queryById(id)];
                    case 1:
                        existentAuditoria = _b.sent();
                        if (!existentAuditoria) {
                            throw new AppError_1.AppError("Auditoria n??o cadastrada!");
                        }
                        return [4 /*yield*/, this.auditoriaFilaRepository.updateById({
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
                                comando: comando,
                                stamp: stamp,
                            })];
                    case 2:
                        auditoriaToUpdate = _b.sent();
                        return [2 /*return*/, auditoriaToUpdate];
                }
            });
        });
    };
    HandleAuditoriaFilaService.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.auditoriaFilaRepository.deleteById(id)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HandleAuditoriaFilaService.prototype.import = function (file) {
        return __awaiter(this, void 0, void 0, function () {
            var auditorias;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadAuditorias(file)];
                    case 1:
                        auditorias = _a.sent();
                        auditorias.map(function (auditoriaToProcess) { return __awaiter(_this, void 0, void 0, function () {
                            var siape, codigo_disc, pos, prioridade, qte_ministrada, qte_maximo, ano, semestre, status, periodo_preferencial, comando, stamp;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        siape = auditoriaToProcess.siape, codigo_disc = auditoriaToProcess.codigo_disc, pos = auditoriaToProcess.pos, prioridade = auditoriaToProcess.prioridade, qte_ministrada = auditoriaToProcess.qte_ministrada, qte_maximo = auditoriaToProcess.qte_maximo, ano = auditoriaToProcess.ano, semestre = auditoriaToProcess.semestre, status = auditoriaToProcess.status, periodo_preferencial = auditoriaToProcess.periodo_preferencial, comando = auditoriaToProcess.comando, stamp = auditoriaToProcess.stamp;
                                        console.log(auditoriaToProcess);
                                        return [4 /*yield*/, this.auditoriaFilaRepository.create({
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
                                                comando: comando,
                                                stamp: stamp,
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
    HandleAuditoriaFilaService.prototype.loadAuditorias = function (file) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var auditorias = [];
            var stream = fs_1.default.createReadStream(file.path);
            var parseFile = csv_parse_1.default();
            stream.pipe(parseFile);
            parseFile
                .on("data", function (line) { return __awaiter(_this, void 0, void 0, function () {
                var siape, codigo_disc, pos, prioridade, qte_ministrada, qte_maximo, ano, semestre, status, periodo_preferencial, comando, stamp;
                return __generator(this, function (_a) {
                    siape = line[0], codigo_disc = line[1], pos = line[2], prioridade = line[3], qte_ministrada = line[4], qte_maximo = line[5], ano = line[6], semestre = line[7], status = line[8], periodo_preferencial = line[9], comando = line[10], stamp = line[11];
                    auditorias.push({
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
                        comando: comando,
                        stamp: stamp,
                    });
                    return [2 /*return*/];
                });
            }); })
                .on("end", function () {
                fs_1.default.promises.unlink(file.path);
                resolve(auditorias);
            })
                .on("error", function (err) {
                reject(err);
            });
        });
    };
    HandleAuditoriaFilaService = __decorate([
        tsyringe_1.injectable(),
        __param(0, tsyringe_1.inject("AuditoriaFilaRepository")),
        __metadata("design:paramtypes", [Object])
    ], HandleAuditoriaFilaService);
    return HandleAuditoriaFilaService;
}());
exports.HandleAuditoriaFilaService = HandleAuditoriaFilaService;

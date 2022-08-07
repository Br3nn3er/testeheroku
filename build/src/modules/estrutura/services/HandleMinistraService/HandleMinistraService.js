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
exports.HandleMinistraService = void 0;
var csv_parse_1 = __importDefault(require("csv-parse"));
var fs_1 = __importDefault(require("fs"));
var tsyringe_1 = require("tsyringe");
var AppError_1 = require("../../../../shared/errors/AppError");
var HandleMinistraService = /** @class */ (function () {
    function HandleMinistraService(ministraRepository, turmaRepository) {
        this.ministraRepository = ministraRepository;
        this.turmaRepository = turmaRepository;
    }
    HandleMinistraService.prototype.create = function (_a) {
        var siape = _a.siape, id_turma = _a.id_turma;
        return __awaiter(this, void 0, void 0, function () {
            var existentMinistra, ministra;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.ministraRepository.queryBySiapeAndIdTurma(siape, id_turma)];
                    case 1:
                        existentMinistra = _b.sent();
                        if (existentMinistra) {
                            throw new AppError_1.AppError("Há um professor ministrando nesta turma!", 403);
                        }
                        return [4 /*yield*/, this.ministraRepository.create({
                                siape: siape,
                                id_turma: id_turma,
                            })];
                    case 2:
                        ministra = _b.sent();
                        return [2 /*return*/, ministra];
                }
            });
        });
    };
    HandleMinistraService.prototype.read = function () {
        return __awaiter(this, void 0, void 0, function () {
            var allMinistra;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ministraRepository.listAllMinistra()];
                    case 1:
                        allMinistra = _a.sent();
                        allMinistra.forEach(function (ministra) {
                            // eslint-disable-next-line no-param-reassign
                            ministra.siape = ministra.siape ? ministra.siape.trim() : null;
                        });
                        return [2 /*return*/, allMinistra];
                }
            });
        });
    };
    HandleMinistraService.prototype.delete = function (siape, id_turma) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ministraRepository.deleteBySiapeAndIdTurma(siape, id_turma)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HandleMinistraService.prototype.import = function (file) {
        return __awaiter(this, void 0, void 0, function () {
            var ministraLines;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadMinistra(file)];
                    case 1:
                        ministraLines = _a.sent();
                        ministraLines.map(function (ministra) { return __awaiter(_this, void 0, void 0, function () {
                            var siape, codigo_disc, turma, ano, semestre, foundedTurma, existentMinistra;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        siape = ministra.siape, codigo_disc = ministra.codigo_disc, turma = ministra.turma, ano = ministra.ano, semestre = ministra.semestre;
                                        return [4 /*yield*/, this.turmaRepository.queryByCodigoTurmaAnoSemestre(codigo_disc, turma, ano, semestre)];
                                    case 1:
                                        foundedTurma = _a.sent();
                                        if (!foundedTurma) return [3 /*break*/, 4];
                                        return [4 /*yield*/, this.ministraRepository.queryBySiapeAndIdTurma(siape, foundedTurma.id)];
                                    case 2:
                                        existentMinistra = _a.sent();
                                        if (!!existentMinistra) return [3 /*break*/, 4];
                                        console.log(ministra);
                                        return [4 /*yield*/, this.ministraRepository.create({
                                                siape: siape,
                                                id_turma: foundedTurma.id,
                                            })];
                                    case 3:
                                        _a.sent();
                                        _a.label = 4;
                                    case 4: return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    HandleMinistraService.prototype.loadMinistra = function (file) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var ministra = [];
            var stream = fs_1.default.createReadStream(file.path);
            var parseFile = csv_parse_1.default();
            stream.pipe(parseFile);
            parseFile
                .on("data", function (line) { return __awaiter(_this, void 0, void 0, function () {
                var siape, codigo_disc, turma, ano, semestre;
                return __generator(this, function (_a) {
                    siape = line[0], codigo_disc = line[1], turma = line[2], ano = line[3], semestre = line[4];
                    ministra.push({
                        siape: siape,
                        codigo_disc: codigo_disc,
                        turma: turma,
                        ano: ano,
                        semestre: semestre,
                    });
                    return [2 /*return*/];
                });
            }); })
                .on("end", function () {
                fs_1.default.promises.unlink(file.path);
                resolve(ministra);
            })
                .on("error", function (err) {
                reject(err);
            });
        });
    };
    HandleMinistraService = __decorate([
        tsyringe_1.injectable(),
        __param(0, tsyringe_1.inject("MinistraRepository")),
        __param(1, tsyringe_1.inject("TurmasRepository")),
        __metadata("design:paramtypes", [Object, Object])
    ], HandleMinistraService);
    return HandleMinistraService;
}());
exports.HandleMinistraService = HandleMinistraService;

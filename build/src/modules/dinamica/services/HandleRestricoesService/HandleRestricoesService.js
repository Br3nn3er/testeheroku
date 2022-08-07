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
exports.HandleRestricoesService = void 0;
var csv_parse_1 = __importDefault(require("csv-parse"));
var fs_1 = __importDefault(require("fs"));
var tsyringe_1 = require("tsyringe");
var AppError_1 = require("../../../../shared/errors/AppError");
var HandleRestricoesService = /** @class */ (function () {
    function HandleRestricoesService(restricoesRepository) {
        this.restricoesRepository = restricoesRepository;
    }
    HandleRestricoesService.prototype.create = function (_a) {
        var siape = _a.siape, dia = _a.dia, letra = _a.letra;
        return __awaiter(this, void 0, void 0, function () {
            var restricoesFounded, restricoes;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.restricoesRepository.queryBySiapeEDiaELetra(siape, dia, letra)];
                    case 1:
                        restricoesFounded = _b.sent();
                        if (restricoesFounded) {
                            throw new AppError_1.AppError("Restricao já cadastrada!");
                        }
                        return [4 /*yield*/, this.restricoesRepository.create({
                                siape: siape,
                                dia: dia,
                                letra: letra,
                            })];
                    case 2:
                        restricoes = _b.sent();
                        return [2 /*return*/, restricoes];
                }
            });
        });
    };
    HandleRestricoesService.prototype.read = function () {
        return __awaiter(this, void 0, void 0, function () {
            var listRestricoes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.restricoesRepository.listRestricoes()];
                    case 1:
                        listRestricoes = _a.sent();
                        listRestricoes.forEach(function (restricoesToTrim) {
                            // eslint-disable-next-line no-param-reassign
                            restricoesToTrim.siape = restricoesToTrim.siape.trim();
                        });
                        return [2 /*return*/, listRestricoes];
                }
            });
        });
    };
    HandleRestricoesService.prototype.readBySiape = function (siape) {
        return __awaiter(this, void 0, void 0, function () {
            var listRestricoes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.restricoesRepository.queryBySiape(siape)];
                    case 1:
                        listRestricoes = _a.sent();
                        listRestricoes.forEach(function (restricoesToTrim) {
                            // eslint-disable-next-line no-param-reassign
                            restricoesToTrim.siape = restricoesToTrim.siape.trim();
                        });
                        return [2 /*return*/, listRestricoes];
                }
            });
        });
    };
    HandleRestricoesService.prototype.delete = function (siape, dia, letra) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.restricoesRepository.deleteBySiapeEDiaELetra(siape, dia, letra)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HandleRestricoesService.prototype.import = function (file) {
        return __awaiter(this, void 0, void 0, function () {
            var listRestricoes;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadRestricoes(file)];
                    case 1:
                        listRestricoes = _a.sent();
                        listRestricoes.map(function (restricoesToProcess) { return __awaiter(_this, void 0, void 0, function () {
                            var siape, dia, letra;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        siape = restricoesToProcess.siape, dia = restricoesToProcess.dia, letra = restricoesToProcess.letra;
                                        console.log(restricoesToProcess);
                                        return [4 /*yield*/, this.restricoesRepository.create({
                                                siape: siape,
                                                dia: dia,
                                                letra: letra,
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
    HandleRestricoesService.prototype.loadRestricoes = function (file) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var listRestricoes = [];
            var stream = fs_1.default.createReadStream(file.path);
            var parseFile = csv_parse_1.default();
            stream.pipe(parseFile);
            parseFile
                .on("data", function (line) { return __awaiter(_this, void 0, void 0, function () {
                var siape, dia, letra;
                return __generator(this, function (_a) {
                    siape = line[0], dia = line[1], letra = line[2];
                    listRestricoes.push({
                        siape: siape,
                        dia: dia,
                        letra: letra,
                    });
                    return [2 /*return*/];
                });
            }); })
                .on("end", function () {
                fs_1.default.promises.unlink(file.path);
                resolve(listRestricoes);
            })
                .on("error", function (err) {
                reject(err);
            });
        });
    };
    HandleRestricoesService = __decorate([
        tsyringe_1.injectable(),
        __param(0, tsyringe_1.inject("RestricoesRepository")),
        __metadata("design:paramtypes", [Object])
    ], HandleRestricoesService);
    return HandleRestricoesService;
}());
exports.HandleRestricoesService = HandleRestricoesService;

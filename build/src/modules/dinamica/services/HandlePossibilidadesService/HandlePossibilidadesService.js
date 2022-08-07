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
exports.HandlePossibilidadesService = void 0;
var csv_parse_1 = __importDefault(require("csv-parse"));
var fs_1 = __importDefault(require("fs"));
var tsyringe_1 = require("tsyringe");
var AppError_1 = require("../../../../shared/errors/AppError");
var HandlePossibilidadesService = /** @class */ (function () {
    function HandlePossibilidadesService(possibilidadeRepository) {
        this.possibilidadeRepository = possibilidadeRepository;
    }
    HandlePossibilidadesService.prototype.create = function (_a) {
        var descricao = _a.descricao, num_cenario = _a.num_cenario;
        return __awaiter(this, void 0, void 0, function () {
            var possibilidade;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.possibilidadeRepository.create({
                            descricao: descricao,
                            num_cenario: num_cenario,
                        })];
                    case 1:
                        possibilidade = _b.sent();
                        return [2 /*return*/, possibilidade];
                }
            });
        });
    };
    HandlePossibilidadesService.prototype.read = function () {
        return __awaiter(this, void 0, void 0, function () {
            var possibilidades;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.possibilidadeRepository.listPossibilidades()];
                    case 1:
                        possibilidades = _a.sent();
                        possibilidades.forEach(function (possibilidade) {
                            // eslint-disable-next-line no-param-reassign
                            possibilidade.descricao = possibilidade.descricao
                                ? possibilidade.descricao.trim()
                                : null;
                        });
                        return [2 /*return*/, possibilidades];
                }
            });
        });
    };
    HandlePossibilidadesService.prototype.update = function (_a) {
        var id = _a.id, descricao = _a.descricao, num_cenario = _a.num_cenario;
        return __awaiter(this, void 0, void 0, function () {
            var possibilidadeFounded, possibilidadeToUpdate;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.possibilidadeRepository.queryById(id)];
                    case 1:
                        possibilidadeFounded = _b.sent();
                        if (!possibilidadeFounded) {
                            throw new AppError_1.AppError("Possibilidade não encontrada!", 403);
                        }
                        return [4 /*yield*/, this.possibilidadeRepository.updateById({
                                id: id,
                                descricao: descricao,
                                num_cenario: num_cenario,
                            })];
                    case 2:
                        possibilidadeToUpdate = _b.sent();
                        return [2 /*return*/, possibilidadeToUpdate];
                }
            });
        });
    };
    HandlePossibilidadesService.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.possibilidadeRepository.deleteById(id)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HandlePossibilidadesService.prototype.import = function (file) {
        return __awaiter(this, void 0, void 0, function () {
            var listPossibilidades;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadPossibilidades(file)];
                    case 1:
                        listPossibilidades = _a.sent();
                        listPossibilidades.map(function (possibilidadeToProcess) { return __awaiter(_this, void 0, void 0, function () {
                            var descricao, num_cenario;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        descricao = possibilidadeToProcess.descricao, num_cenario = possibilidadeToProcess.num_cenario;
                                        console.log(possibilidadeToProcess);
                                        return [4 /*yield*/, this.possibilidadeRepository.create({
                                                descricao: descricao,
                                                num_cenario: num_cenario,
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
    HandlePossibilidadesService.prototype.loadPossibilidades = function (file) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var listPossibilidades = [];
            var stream = fs_1.default.createReadStream(file.path);
            var parseFile = csv_parse_1.default();
            stream.pipe(parseFile);
            parseFile
                .on("data", function (line) { return __awaiter(_this, void 0, void 0, function () {
                var descricao, num_cenario;
                return __generator(this, function (_a) {
                    descricao = line[0], num_cenario = line[1];
                    listPossibilidades.push({
                        descricao: descricao,
                        num_cenario: parseInt(num_cenario, 10),
                    });
                    return [2 /*return*/];
                });
            }); })
                .on("end", function () {
                fs_1.default.promises.unlink(file.path);
                resolve(listPossibilidades);
            })
                .on("error", function (err) {
                reject(err);
            });
        });
    };
    HandlePossibilidadesService = __decorate([
        tsyringe_1.injectable(),
        __param(0, tsyringe_1.inject("PossibilidadesRepository")),
        __metadata("design:paramtypes", [Object])
    ], HandlePossibilidadesService);
    return HandlePossibilidadesService;
}());
exports.HandlePossibilidadesService = HandlePossibilidadesService;

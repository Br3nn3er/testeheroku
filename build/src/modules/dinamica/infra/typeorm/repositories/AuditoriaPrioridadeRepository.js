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
exports.AuditoriaPrioridadeRepository = void 0;
var typeorm_1 = require("typeorm");
var AuditoriaPrioridade_1 = require("../entities/AuditoriaPrioridade");
var AuditoriaPrioridadeRepository = /** @class */ (function () {
    function AuditoriaPrioridadeRepository() {
        this.repository = typeorm_1.getRepository(AuditoriaPrioridade_1.AuditoriaPrioridade);
    }
    AuditoriaPrioridadeRepository.prototype.create = function (_a) {
        var siape = _a.siape, codigo_disc = _a.codigo_disc, prioridade_antiga = _a.prioridade_antiga, prioridade_nova = _a.prioridade_nova, stamp = _a.stamp;
        return __awaiter(this, void 0, void 0, function () {
            var auditoriaPrioridade;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        auditoriaPrioridade = this.repository.create({
                            siape: siape,
                            codigo_disc: codigo_disc,
                            prioridade_antiga: prioridade_antiga,
                            prioridade_nova: prioridade_nova,
                            stamp: stamp,
                        });
                        return [4 /*yield*/, this.repository.save(auditoriaPrioridade)];
                    case 1:
                        _b.sent();
                        return [2 /*return*/, auditoriaPrioridade];
                }
            });
        });
    };
    AuditoriaPrioridadeRepository.prototype.listAllAuditorias = function () {
        return __awaiter(this, void 0, void 0, function () {
            var auditoriasPrioridade;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository
                            .createQueryBuilder("auditoria_prioridade")
                            .orderBy("siape", "ASC")
                            .getMany()];
                    case 1:
                        auditoriasPrioridade = _a.sent();
                        return [2 /*return*/, auditoriasPrioridade];
                }
            });
        });
    };
    AuditoriaPrioridadeRepository.prototype.queryById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var auditoriaFounded;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.findOne(id)];
                    case 1:
                        auditoriaFounded = _a.sent();
                        return [2 /*return*/, auditoriaFounded];
                }
            });
        });
    };
    AuditoriaPrioridadeRepository.prototype.queryBySiape = function (siape) {
        return __awaiter(this, void 0, void 0, function () {
            var auditoriaFounded;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.findOne({ siape: siape })];
                    case 1:
                        auditoriaFounded = _a.sent();
                        return [2 /*return*/, auditoriaFounded];
                }
            });
        });
    };
    AuditoriaPrioridadeRepository.prototype.update = function (_a) {
        var id = _a.id, siape = _a.siape, codigo_disc = _a.codigo_disc, prioridade_antiga = _a.prioridade_antiga, prioridade_nova = _a.prioridade_nova, stamp = _a.stamp;
        return __awaiter(this, void 0, void 0, function () {
            var auditoria;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.repository.findOne(id)];
                    case 1:
                        auditoria = _b.sent();
                        auditoria.siape = siape || auditoria.siape;
                        auditoria.codigo_disc = codigo_disc || auditoria.codigo_disc;
                        auditoria.prioridade_antiga =
                            prioridade_antiga || auditoria.prioridade_antiga;
                        auditoria.prioridade_nova = prioridade_nova || auditoria.prioridade_nova;
                        auditoria.stamp = stamp || auditoria.stamp;
                        return [4 /*yield*/, this.repository.save(auditoria)];
                    case 2:
                        _b.sent();
                        return [2 /*return*/, auditoria];
                }
            });
        });
    };
    AuditoriaPrioridadeRepository.prototype.deleteById = function (id) {
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
    return AuditoriaPrioridadeRepository;
}());
exports.AuditoriaPrioridadeRepository = AuditoriaPrioridadeRepository;

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
exports.AuditoriaFilaNewRepository = void 0;
var typeorm_1 = require("typeorm");
var AuditoriaFilaNew_1 = require("../entities/AuditoriaFilaNew");
var AuditoriaFilaNewRepository = /** @class */ (function () {
    function AuditoriaFilaNewRepository() {
        this.repository = typeorm_1.getRepository(AuditoriaFilaNew_1.AuditoriaFilaNew);
    }
    AuditoriaFilaNewRepository.prototype.create = function (_a) {
        var id_turma = _a.id_turma, id_fila = _a.id_fila, prioridade_old = _a.prioridade_old, prioridade_new = _a.prioridade_new, stamp = _a.stamp;
        return __awaiter(this, void 0, void 0, function () {
            var auditoriaNew;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        auditoriaNew = this.repository.create({
                            id_turma: id_turma,
                            id_fila: id_fila,
                            prioridade_old: prioridade_old,
                            prioridade_new: prioridade_new,
                            stamp: stamp,
                        });
                        return [4 /*yield*/, this.repository.save(auditoriaNew)];
                    case 1:
                        _b.sent();
                        return [2 /*return*/, auditoriaNew];
                }
            });
        });
    };
    AuditoriaFilaNewRepository.prototype.listAllAuditoriaNew = function () {
        return __awaiter(this, void 0, void 0, function () {
            var auditoriasNew;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository
                            .createQueryBuilder("auditoria_fila_new")
                            .orderBy("id_turma", "ASC")
                            .getMany()];
                    case 1:
                        auditoriasNew = _a.sent();
                        return [2 /*return*/, auditoriasNew];
                }
            });
        });
    };
    AuditoriaFilaNewRepository.prototype.queryById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var auditoriaNew;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.findOne(id)];
                    case 1:
                        auditoriaNew = _a.sent();
                        return [2 /*return*/, auditoriaNew];
                }
            });
        });
    };
    AuditoriaFilaNewRepository.prototype.queryByIdTurmaIdFila = function (id_turma, id_fila) {
        return __awaiter(this, void 0, void 0, function () {
            var auditoriaNew;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.findOne({
                            where: { id_turma: id_turma, id_fila: id_fila },
                        })];
                    case 1:
                        auditoriaNew = _a.sent();
                        return [2 /*return*/, auditoriaNew];
                }
            });
        });
    };
    AuditoriaFilaNewRepository.prototype.updateById = function (_a) {
        var id = _a.id, id_turma = _a.id_turma, id_fila = _a.id_fila, prioridade_old = _a.prioridade_old, prioridade_new = _a.prioridade_new, stamp = _a.stamp;
        return __awaiter(this, void 0, void 0, function () {
            var auditoriaNew;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.repository.findOne({ id: id })];
                    case 1:
                        auditoriaNew = _b.sent();
                        auditoriaNew.id_turma = id_turma || auditoriaNew.id_turma;
                        auditoriaNew.id_fila = id_fila || auditoriaNew.id_fila;
                        auditoriaNew.prioridade_old = prioridade_old || auditoriaNew.prioridade_old;
                        auditoriaNew.prioridade_new = prioridade_new || auditoriaNew.prioridade_new;
                        auditoriaNew.stamp = stamp || auditoriaNew.stamp;
                        return [4 /*yield*/, this.repository.save(auditoriaNew)];
                    case 2:
                        _b.sent();
                        return [2 /*return*/, auditoriaNew];
                }
            });
        });
    };
    AuditoriaFilaNewRepository.prototype.deleteById = function (id) {
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
    return AuditoriaFilaNewRepository;
}());
exports.AuditoriaFilaNewRepository = AuditoriaFilaNewRepository;

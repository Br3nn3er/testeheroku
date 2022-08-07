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
exports.AuditoriaFilaNewRepositoryTestMock = void 0;
var AuditoriaFilaNew_1 = require("../../entities/AuditoriaFilaNew");
var AuditoriaFilaNewRepositoryTestMock = /** @class */ (function () {
    function AuditoriaFilaNewRepositoryTestMock() {
        this.auditoriasNew = [];
        this.count = 0;
    }
    AuditoriaFilaNewRepositoryTestMock.prototype.create = function (_a) {
        var id_turma = _a.id_turma, id_fila = _a.id_fila, prioridade_old = _a.prioridade_old, prioridade_new = _a.prioridade_new, stamp = _a.stamp;
        return __awaiter(this, void 0, void 0, function () {
            var auditoriaNew;
            return __generator(this, function (_b) {
                auditoriaNew = new AuditoriaFilaNew_1.AuditoriaFilaNew();
                this.count += 1;
                Object.assign(auditoriaNew, {
                    id: this.count.toString(),
                    id_turma: id_turma,
                    id_fila: id_fila,
                    prioridade_old: prioridade_old,
                    prioridade_new: prioridade_new,
                    stamp: stamp,
                });
                this.auditoriasNew.push(auditoriaNew);
                return [2 /*return*/, auditoriaNew];
            });
        });
    };
    AuditoriaFilaNewRepositoryTestMock.prototype.listAllAuditoriaNew = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.auditoriasNew];
            });
        });
    };
    AuditoriaFilaNewRepositoryTestMock.prototype.queryById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var auditoriaNew;
            return __generator(this, function (_a) {
                auditoriaNew = this.auditoriasNew.find(function (auditoriaToSearch) { return auditoriaToSearch.id === id; });
                return [2 /*return*/, auditoriaNew];
            });
        });
    };
    AuditoriaFilaNewRepositoryTestMock.prototype.queryByIdTurmaIdFila = function (id_turma, id_fila) {
        return __awaiter(this, void 0, void 0, function () {
            var foundedAuditoriaNew;
            return __generator(this, function (_a) {
                foundedAuditoriaNew = this.auditoriasNew.find(function (auditoriaToSearch) {
                    return auditoriaToSearch.id_turma === id_turma &&
                        auditoriaToSearch.id_fila === id_fila;
                });
                return [2 /*return*/, foundedAuditoriaNew];
            });
        });
    };
    AuditoriaFilaNewRepositoryTestMock.prototype.updateById = function (_a) {
        var id = _a.id, id_turma = _a.id_turma, id_fila = _a.id_fila, prioridade_old = _a.prioridade_old, prioridade_new = _a.prioridade_new, stamp = _a.stamp;
        return __awaiter(this, void 0, void 0, function () {
            var auditoriaNewToUpdate;
            return __generator(this, function (_b) {
                auditoriaNewToUpdate = this.auditoriasNew.find(function (auditoriaToSearch) { return auditoriaToSearch.id === id; });
                Object.assign(auditoriaNewToUpdate, {
                    id_turma: id_turma || auditoriaNewToUpdate.id_turma,
                    id_fila: id_fila || auditoriaNewToUpdate.id_fila,
                    prioridade_old: prioridade_old || auditoriaNewToUpdate.prioridade_old,
                    prioridade_new: prioridade_new || auditoriaNewToUpdate.prioridade_new,
                    stamp: stamp || auditoriaNewToUpdate.stamp,
                });
                this.auditoriasNew.push(auditoriaNewToUpdate);
                return [2 /*return*/, auditoriaNewToUpdate];
            });
        });
    };
    AuditoriaFilaNewRepositoryTestMock.prototype.deleteById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var auditoriaNewIndex;
            return __generator(this, function (_a) {
                auditoriaNewIndex = this.auditoriasNew.findIndex(function (auditoria) { return auditoria.id === id; });
                if (auditoriaNewIndex > -1) {
                    this.auditoriasNew.splice(auditoriaNewIndex, 1);
                }
                return [2 /*return*/];
            });
        });
    };
    return AuditoriaFilaNewRepositoryTestMock;
}());
exports.AuditoriaFilaNewRepositoryTestMock = AuditoriaFilaNewRepositoryTestMock;

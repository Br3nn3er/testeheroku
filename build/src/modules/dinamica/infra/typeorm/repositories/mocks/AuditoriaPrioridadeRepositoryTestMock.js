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
exports.AuditoriaPrioridadeRepositoryTestMock = void 0;
var AuditoriaPrioridade_1 = require("../../entities/AuditoriaPrioridade");
var AuditoriaPrioridadeRepositoryTestMock = /** @class */ (function () {
    function AuditoriaPrioridadeRepositoryTestMock() {
        this.auditoriasPrioridade = [];
        this.count = 0;
    }
    AuditoriaPrioridadeRepositoryTestMock.prototype.create = function (_a) {
        var siape = _a.siape, codigo_disc = _a.codigo_disc, prioridade_antiga = _a.prioridade_antiga, prioridade_nova = _a.prioridade_nova, stamp = _a.stamp;
        return __awaiter(this, void 0, void 0, function () {
            var auditoria;
            return __generator(this, function (_b) {
                auditoria = new AuditoriaPrioridade_1.AuditoriaPrioridade();
                this.count += 1;
                Object.assign(auditoria, {
                    id: this.count.toString(),
                    siape: siape,
                    codigo_disc: codigo_disc,
                    prioridade_antiga: prioridade_antiga,
                    prioridade_nova: prioridade_nova,
                    stamp: stamp,
                });
                this.auditoriasPrioridade.push(auditoria);
                return [2 /*return*/, auditoria];
            });
        });
    };
    AuditoriaPrioridadeRepositoryTestMock.prototype.listAllAuditorias = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.auditoriasPrioridade];
            });
        });
    };
    AuditoriaPrioridadeRepositoryTestMock.prototype.queryById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var auditoriaFounded;
            return __generator(this, function (_a) {
                auditoriaFounded = this.auditoriasPrioridade.find(function (auditoriaToSearch) { return auditoriaToSearch.id === id; });
                return [2 /*return*/, auditoriaFounded];
            });
        });
    };
    AuditoriaPrioridadeRepositoryTestMock.prototype.queryBySiape = function (siape) {
        return __awaiter(this, void 0, void 0, function () {
            var auditoriaFounded;
            return __generator(this, function (_a) {
                auditoriaFounded = this.auditoriasPrioridade.find(function (auditoriaToSearch) { return auditoriaToSearch.siape === siape; });
                return [2 /*return*/, auditoriaFounded];
            });
        });
    };
    AuditoriaPrioridadeRepositoryTestMock.prototype.update = function (_a) {
        var id = _a.id, siape = _a.siape, codigo_disc = _a.codigo_disc, prioridade_antiga = _a.prioridade_antiga, prioridade_nova = _a.prioridade_nova, stamp = _a.stamp;
        return __awaiter(this, void 0, void 0, function () {
            var auditoriaToUpdate;
            return __generator(this, function (_b) {
                auditoriaToUpdate = this.auditoriasPrioridade.find(function (auditoriaToSearch) { return auditoriaToSearch.id === id; });
                Object.assign(auditoriaToUpdate, {
                    siape: siape || auditoriaToUpdate.siape,
                    codigo_disc: codigo_disc || auditoriaToUpdate.codigo_disc,
                    prioridade_antiga: prioridade_antiga || auditoriaToUpdate.prioridade_antiga,
                    prioridade_nova: prioridade_nova || auditoriaToUpdate.prioridade_nova,
                    stamp: stamp || auditoriaToUpdate.stamp,
                });
                this.auditoriasPrioridade.push(auditoriaToUpdate);
                return [2 /*return*/, auditoriaToUpdate];
            });
        });
    };
    AuditoriaPrioridadeRepositoryTestMock.prototype.deleteById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var auditoriaNewIndex;
            return __generator(this, function (_a) {
                auditoriaNewIndex = this.auditoriasPrioridade.findIndex(function (auditoria) { return auditoria.id === id; });
                if (auditoriaNewIndex > -1) {
                    this.auditoriasPrioridade.splice(auditoriaNewIndex, 1);
                }
                return [2 /*return*/];
            });
        });
    };
    return AuditoriaPrioridadeRepositoryTestMock;
}());
exports.AuditoriaPrioridadeRepositoryTestMock = AuditoriaPrioridadeRepositoryTestMock;

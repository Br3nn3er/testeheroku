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
exports.PrioridadesRepositoryTestMock = void 0;
var Prioridades_1 = require("../../entities/Prioridades");
var PrioridadesRepositoryTestMock = /** @class */ (function () {
    function PrioridadesRepositoryTestMock() {
        this.listPriodidades = [];
        this.count = 0;
    }
    PrioridadesRepositoryTestMock.prototype.create = function (_a) {
        var prioridade = _a.prioridade, codigo_disc = _a.codigo_disc, siape = _a.siape;
        return __awaiter(this, void 0, void 0, function () {
            var prioridades;
            return __generator(this, function (_b) {
                prioridades = new Prioridades_1.Prioridades();
                this.count += 1;
                Object.assign(prioridades, {
                    id: this.count.toString(),
                    prioridade: prioridade,
                    codigo_disc: codigo_disc,
                    siape: siape,
                });
                this.listPriodidades.push(prioridades);
                return [2 /*return*/, prioridades];
            });
        });
    };
    PrioridadesRepositoryTestMock.prototype.listAllPrioridades = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.listPriodidades];
            });
        });
    };
    PrioridadesRepositoryTestMock.prototype.queryById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var prioridadeFounded;
            return __generator(this, function (_a) {
                prioridadeFounded = this.listPriodidades.find(function (prioridadeToSearch) { return prioridadeToSearch.id === id; });
                return [2 /*return*/, prioridadeFounded];
            });
        });
    };
    PrioridadesRepositoryTestMock.prototype.queryBySiapeECodigo = function (siape, codigo_disc) {
        return __awaiter(this, void 0, void 0, function () {
            var prioridadeFounded;
            return __generator(this, function (_a) {
                prioridadeFounded = this.listPriodidades.find(function (prioridadeToSearch) {
                    return prioridadeToSearch.siape === siape &&
                        prioridadeToSearch.codigo_disc === codigo_disc;
                });
                return [2 /*return*/, prioridadeFounded];
            });
        });
    };
    PrioridadesRepositoryTestMock.prototype.updateById = function (_a) {
        var id = _a.id, prioridade = _a.prioridade, codigo_disc = _a.codigo_disc, siape = _a.siape;
        return __awaiter(this, void 0, void 0, function () {
            var prioridadeFounded;
            return __generator(this, function (_b) {
                prioridadeFounded = this.listPriodidades.find(function (prioridadeToSearch) { return prioridadeToSearch.id === id; });
                Object.assign(prioridadeFounded, {
                    prioridade: prioridade || prioridadeFounded.prioridade,
                    codigo_disc: codigo_disc || prioridadeFounded.codigo_disc,
                    siape: siape || prioridadeFounded.siape,
                });
                this.listPriodidades.push(prioridadeFounded);
                return [2 /*return*/, prioridadeFounded];
            });
        });
    };
    PrioridadesRepositoryTestMock.prototype.deleteById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var prioridadeIndex;
            return __generator(this, function (_a) {
                prioridadeIndex = this.listPriodidades.findIndex(function (prioridadeToSearch) { return prioridadeToSearch.id === id; });
                if (prioridadeIndex > -1) {
                    this.listPriodidades.splice(prioridadeIndex, 1);
                }
                return [2 /*return*/];
            });
        });
    };
    return PrioridadesRepositoryTestMock;
}());
exports.PrioridadesRepositoryTestMock = PrioridadesRepositoryTestMock;

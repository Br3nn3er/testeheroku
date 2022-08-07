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
exports.SemestresRepositoryTestMock = void 0;
var Semestre_1 = require("../../entities/Semestre");
var SemestresRepositoryTestMock = /** @class */ (function () {
    function SemestresRepositoryTestMock() {
        this.semestres = [];
        this.count = 0;
    }
    SemestresRepositoryTestMock.prototype.createSemestre = function (_a) {
        var ano = _a.ano, semestre = _a.semestre, status = _a.status;
        return __awaiter(this, void 0, void 0, function () {
            var semestreToCreate;
            return __generator(this, function (_b) {
                semestreToCreate = new Semestre_1.Semestre();
                this.count += 1;
                Object.assign(semestreToCreate, {
                    id: this.count,
                    ano: ano,
                    semestre: semestre,
                    status: status,
                });
                this.semestres.push(semestreToCreate);
                return [2 /*return*/, semestreToCreate];
            });
        });
    };
    SemestresRepositoryTestMock.prototype.listAllSemestres = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.semestres];
            });
        });
    };
    SemestresRepositoryTestMock.prototype.queryById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var semestreFounded;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.semestres.find(function (semestre) { return semestre.id === id; })];
                    case 1:
                        semestreFounded = _a.sent();
                        return [2 /*return*/, semestreFounded];
                }
            });
        });
    };
    SemestresRepositoryTestMock.prototype.queryByAnoSemestre = function (ano, semestre) {
        return __awaiter(this, void 0, void 0, function () {
            var semestreFounded;
            return __generator(this, function (_a) {
                semestreFounded = this.semestres.find(function (semestreToSearch) {
                    return semestreToSearch.ano === ano && semestreToSearch.semestre === semestre;
                });
                return [2 /*return*/, semestreFounded];
            });
        });
    };
    SemestresRepositoryTestMock.prototype.updateById = function (_a) {
        var id = _a.id, ano = _a.ano, semestre = _a.semestre, status = _a.status;
        return __awaiter(this, void 0, void 0, function () {
            var semestreFounded;
            return __generator(this, function (_b) {
                semestreFounded = this.semestres.find(function (semestre) { return semestre.id === id; });
                Object.assign(semestreFounded, {
                    ano: ano || semestreFounded.ano,
                    semestre: semestre || semestreFounded.semestre,
                    status: status === null || status === undefined
                        ? semestreFounded.status
                        : status,
                });
                this.semestres.push(semestreFounded);
                return [2 /*return*/, semestreFounded];
            });
        });
    };
    SemestresRepositoryTestMock.prototype.deleteById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var semestreIndex;
            return __generator(this, function (_a) {
                semestreIndex = this.semestres.findIndex(function (semestre) { return semestre.id === id; });
                if (semestreIndex > -1) {
                    this.semestres.splice(semestreIndex, 1);
                }
                return [2 /*return*/];
            });
        });
    };
    return SemestresRepositoryTestMock;
}());
exports.SemestresRepositoryTestMock = SemestresRepositoryTestMock;

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
exports.PossibilidadesRepositoryTestMock = void 0;
var Possibilidades_1 = require("../../entities/Possibilidades");
var PossibilidadesRepositoryTestMock = /** @class */ (function () {
    function PossibilidadesRepositoryTestMock() {
        this.possibilidades = [];
        this.count = 0;
    }
    PossibilidadesRepositoryTestMock.prototype.create = function (_a) {
        var descricao = _a.descricao, num_cenario = _a.num_cenario;
        return __awaiter(this, void 0, void 0, function () {
            var possibilidade;
            return __generator(this, function (_b) {
                possibilidade = new Possibilidades_1.Possibilidades();
                this.count += 1;
                Object.assign(possibilidade, {
                    id: this.count.toString(),
                    descricao: descricao,
                    num_cenario: num_cenario,
                });
                this.possibilidades.push(possibilidade);
                return [2 /*return*/, possibilidade];
            });
        });
    };
    PossibilidadesRepositoryTestMock.prototype.listPossibilidades = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.possibilidades];
            });
        });
    };
    PossibilidadesRepositoryTestMock.prototype.queryById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var possibilidadeFounded;
            return __generator(this, function (_a) {
                possibilidadeFounded = this.possibilidades.find(function (possibilidade) { return possibilidade.id === id; });
                return [2 /*return*/, possibilidadeFounded];
            });
        });
    };
    PossibilidadesRepositoryTestMock.prototype.queryByNumCenario = function (num_cenario) {
        return __awaiter(this, void 0, void 0, function () {
            var possibilidadeFounded;
            return __generator(this, function (_a) {
                possibilidadeFounded = this.possibilidades.find(function (possibilidade) { return possibilidade.num_cenario === num_cenario; });
                return [2 /*return*/, possibilidadeFounded];
            });
        });
    };
    PossibilidadesRepositoryTestMock.prototype.updateById = function (_a) {
        var id = _a.id, descricao = _a.descricao, num_cenario = _a.num_cenario;
        return __awaiter(this, void 0, void 0, function () {
            var possibilidadeFounded;
            return __generator(this, function (_b) {
                possibilidadeFounded = this.possibilidades.find(function (possibilidade) { return possibilidade.id === id; });
                Object.assign(possibilidadeFounded, {
                    descricao: descricao || possibilidadeFounded.descricao,
                    num_cenario: num_cenario || possibilidadeFounded.num_cenario,
                });
                this.possibilidades.push(possibilidadeFounded);
                return [2 /*return*/, possibilidadeFounded];
            });
        });
    };
    PossibilidadesRepositoryTestMock.prototype.deleteById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var possibilidadeIndex;
            return __generator(this, function (_a) {
                possibilidadeIndex = this.possibilidades.findIndex(function (possibilidade) { return possibilidade.id === id; });
                if (possibilidadeIndex > -1) {
                    this.possibilidades.splice(possibilidadeIndex, 1);
                }
                return [2 /*return*/];
            });
        });
    };
    return PossibilidadesRepositoryTestMock;
}());
exports.PossibilidadesRepositoryTestMock = PossibilidadesRepositoryTestMock;

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
exports.HandleSemestreController = void 0;
var tsyringe_1 = require("tsyringe");
var HandleSemestreService_1 = require("./HandleSemestreService");
var HandleSemestreController = /** @class */ (function () {
    function HandleSemestreController() {
    }
    HandleSemestreController.prototype.create = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, ano, semestre, status, handleSemestreService, semestreCreated;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.body, ano = _a.ano, semestre = _a.semestre, status = _a.status;
                        handleSemestreService = tsyringe_1.container.resolve(HandleSemestreService_1.HandleSemestreService);
                        return [4 /*yield*/, handleSemestreService.create({
                                ano: ano,
                                semestre: semestre,
                                status: status,
                            })];
                    case 1:
                        semestreCreated = _b.sent();
                        return [2 /*return*/, response.status(201).json(semestreCreated)];
                }
            });
        });
    };
    HandleSemestreController.prototype.read = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var handleSemestreService, semestres;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        handleSemestreService = tsyringe_1.container.resolve(HandleSemestreService_1.HandleSemestreService);
                        return [4 /*yield*/, handleSemestreService.read()];
                    case 1:
                        semestres = _a.sent();
                        return [2 /*return*/, response.status(200).json(semestres)];
                }
            });
        });
    };
    HandleSemestreController.prototype.readById = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, handleSemestreService, semestre;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = request.params.id;
                        handleSemestreService = tsyringe_1.container.resolve(HandleSemestreService_1.HandleSemestreService);
                        return [4 /*yield*/, handleSemestreService.readById(parseInt(id, 10))];
                    case 1:
                        semestre = _a.sent();
                        return [2 /*return*/, response.status(200).json(semestre)];
                }
            });
        });
    };
    HandleSemestreController.prototype.update = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, id, ano, semestre, status, handleSemestreService, semestreToUpdate;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.body, id = _a.id, ano = _a.ano, semestre = _a.semestre, status = _a.status;
                        handleSemestreService = tsyringe_1.container.resolve(HandleSemestreService_1.HandleSemestreService);
                        return [4 /*yield*/, handleSemestreService.update({
                                id: id,
                                ano: ano,
                                semestre: semestre,
                                status: status,
                            })];
                    case 1:
                        semestreToUpdate = _b.sent();
                        return [2 /*return*/, response.status(200).json(semestreToUpdate)];
                }
            });
        });
    };
    HandleSemestreController.prototype.delete = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, handleSemestreService;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = request.params.id;
                        handleSemestreService = tsyringe_1.container.resolve(HandleSemestreService_1.HandleSemestreService);
                        return [4 /*yield*/, handleSemestreService.delete(parseInt(id, 10))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, response.status(200).json("Semestre removido com sucesso!")];
                }
            });
        });
    };
    HandleSemestreController.prototype.import = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var file, handleSemestreService;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        file = request.file;
                        handleSemestreService = tsyringe_1.container.resolve(HandleSemestreService_1.HandleSemestreService);
                        return [4 /*yield*/, handleSemestreService.import(file)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, response.status(201).json("Arquivo importado com sucesso!")];
                }
            });
        });
    };
    return HandleSemestreController;
}());
exports.HandleSemestreController = HandleSemestreController;

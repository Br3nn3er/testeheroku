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
var AppError_1 = require("../../../../../shared/errors/AppError");
var StatusDistruicaoRepositoryTestMock_1 = require("../../../infra/typeorm/repositories/mocks/StatusDistruicaoRepositoryTestMock");
var HandleStatusDistribuicaoService_1 = require("../HandleStatusDistribuicaoService");
describe("Handle CRUD operations related to status_distribuicao", function () {
    var statusDistribuicaoRepositoryTest;
    var handleStatusDistribuicaoService;
    beforeEach(function () {
        statusDistribuicaoRepositoryTest =
            new StatusDistruicaoRepositoryTestMock_1.StatusDistribuicaoRepositoryTestMock();
        handleStatusDistribuicaoService = new HandleStatusDistribuicaoService_1.HandleStatusDistribuicaoService(statusDistribuicaoRepositoryTest);
    });
    it("Should be able to create a new status_distribuicao record", function () { return __awaiter(void 0, void 0, void 0, function () {
        var status;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, handleStatusDistribuicaoService.create({
                        id: 1,
                        descricao: "a description",
                    })];
                case 1:
                    status = _a.sent();
                    expect(status.id).toBe(1);
                    expect(status.descricao).toBe("a description");
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should be able to read all status_distribuicao records", function () { return __awaiter(void 0, void 0, void 0, function () {
        var listStatus;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, handleStatusDistribuicaoService.create({
                        id: 2,
                        descricao: "a description_002",
                    })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, handleStatusDistribuicaoService.create({
                            id: 3,
                            descricao: "a description_003",
                        })];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, handleStatusDistribuicaoService.create({
                            id: 4,
                            descricao: "a description_004",
                        })];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, handleStatusDistribuicaoService.read()];
                case 4:
                    listStatus = _a.sent();
                    expect(listStatus).toHaveLength(3);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should be able to update an existing status_distribuicao record", function () { return __awaiter(void 0, void 0, void 0, function () {
        var statusToUpdate, statusResult;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, handleStatusDistribuicaoService.create({
                        id: 5,
                        descricao: "a description_005",
                    })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, statusDistribuicaoRepositoryTest.queryById(5)];
                case 2:
                    statusToUpdate = _a.sent();
                    return [4 /*yield*/, handleStatusDistribuicaoService.update({
                            codigo: statusToUpdate.codigo,
                            descricao: "a description_100",
                        })];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, statusDistribuicaoRepositoryTest.queryByCodigo(statusToUpdate.codigo)];
                case 4:
                    statusResult = _a.sent();
                    expect(statusResult.descricao).toBe("a description_100");
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should not be able to update an unexisting status_distribuicao record", function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, expect(function () { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, handleStatusDistribuicaoService.update({
                                        codigo: "500",
                                        descricao: "nova descricao",
                                    })];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); }).rejects.toBeInstanceOf(AppError_1.AppError)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should be able to delete a status_distribuicao record", function () { return __awaiter(void 0, void 0, void 0, function () {
        var statusToDelete, statusResult;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, handleStatusDistribuicaoService.create({
                        id: 14,
                        descricao: "a description_014",
                    })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, statusDistribuicaoRepositoryTest.queryById(14)];
                case 2:
                    statusToDelete = _a.sent();
                    return [4 /*yield*/, handleStatusDistribuicaoService.delete(statusToDelete.codigo)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, statusDistribuicaoRepositoryTest.queryByCodigo(statusToDelete.codigo)];
                case 4:
                    statusResult = _a.sent();
                    expect(statusResult).toBeUndefined();
                    return [2 /*return*/];
            }
        });
    }); });
});

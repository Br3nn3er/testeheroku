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
var DayjsDateProvider_1 = require("../../../../../shared/container/providers/DateProvider/implementations/DayjsDateProvider");
var AppError_1 = require("../../../../../shared/errors/AppError");
var UsersRepositoryTestMock_1 = require("../../../infra/typeorm/repositories/mocks/UsersRepositoryTestMock");
var UsersTokensRepositoryMock_1 = require("../../../infra/typeorm/repositories/mocks/UsersTokensRepositoryMock");
var HandleUserService_1 = require("../HandleUserService");
var dateProvider;
var usersRepositoryTest;
var usersTokensRepositoryTest;
var handleUserService;
describe("Handle Users Operations", function () {
    beforeEach(function () {
        usersRepositoryTest = new UsersRepositoryTestMock_1.UsersRepositoryTestMock();
        usersTokensRepositoryTest = new UsersTokensRepositoryMock_1.UsersTokensRepositoryMock();
        dateProvider = new DayjsDateProvider_1.DayjsDateProvider();
        handleUserService = new HandleUserService_1.HandleUserService(usersRepositoryTest, usersTokensRepositoryTest, dateProvider);
    });
    it("Should be able to authenticate an user", function () { return __awaiter(void 0, void 0, void 0, function () {
        var user, authentication;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    user = {
                        name: "User Test Auth 1",
                        email: "test1@auth.com",
                        password: "hispassword",
                    };
                    return [4 /*yield*/, handleUserService.create({
                            name: user.name,
                            email: user.email,
                            password: user.password,
                            isAdmin: false,
                        })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, handleUserService.authenticate({
                            email: user.email,
                            password: user.password,
                        })];
                case 2:
                    authentication = _a.sent();
                    expect(authentication).toHaveProperty("token");
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should not be able to authenticate an nonexisting user", function () {
        expect(function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, handleUserService.authenticate({
                            email: "fail@fail.com",
                            password: "12345",
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); }).rejects.toBeInstanceOf(AppError_1.AppError);
    });
    it("Should not be able to authenticate an user with incorrect password", function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, expect(function () { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, handleUserService.create({
                                        name: "Jeffery Ford",
                                        email: "tinusomu@ni.me",
                                        password: "841692",
                                        isAdmin: true,
                                    })];
                                case 1:
                                    _a.sent();
                                    return [4 /*yield*/, handleUserService.authenticate({
                                            email: "tinusomu@ni.me",
                                            password: "8098654840",
                                        })];
                                case 2:
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
    it("Should be able to create a new user", function () { return __awaiter(void 0, void 0, void 0, function () {
        var user, userCreated;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    user = {
                        name: "Leroy Jensen",
                        email: "bew@peulu.dm",
                        password: "627979696",
                    };
                    return [4 /*yield*/, handleUserService.create({
                            name: user.name,
                            email: user.email,
                            password: user.password,
                            isAdmin: false,
                        })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, usersRepositoryTest.queryByEmail(user.email)];
                case 2:
                    userCreated = _a.sent();
                    expect(userCreated).toHaveProperty("id");
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should list all users", function () { return __awaiter(void 0, void 0, void 0, function () {
        var user, listUsers, listUserResult;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    user = {
                        name: "Henry Powell",
                        email: "pikfaru@fina.tw",
                        password: "73420613",
                    };
                    return [4 /*yield*/, handleUserService.create({
                            name: user.name,
                            email: user.email,
                            password: user.password,
                            isAdmin: false,
                        })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, handleUserService.list()];
                case 2:
                    listUsers = _a.sent();
                    listUserResult = listUsers.find(function (user) { return user.name; });
                    expect(listUserResult.name).toEqual(user.name);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should be able to update an user", function () { return __awaiter(void 0, void 0, void 0, function () {
        var user, userCreated, userToUpdate;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    user = {
                        name: "Leroy Jensen",
                        email: "bew@peulu.dm",
                        password: "627979696",
                    };
                    return [4 /*yield*/, handleUserService.create({
                            name: user.name,
                            email: user.email,
                            password: user.password,
                            isAdmin: false,
                        })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, usersRepositoryTest.queryByEmail(user.email)];
                case 2:
                    userCreated = _a.sent();
                    return [4 /*yield*/, handleUserService.update({
                            id: userCreated.id,
                            isAdmin: true,
                        })];
                case 3:
                    userToUpdate = _a.sent();
                    expect(userToUpdate.isAdmin).toBe(true);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should not be able to update an user that is not registered", function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, expect(function () { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, handleUserService.update({
                                        id: "fake_id",
                                        isAdmin: true,
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
    it("Should delete an user", function () { return __awaiter(void 0, void 0, void 0, function () {
        var user, userToDelete, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    user = {
                        name: "Jackson Frazier",
                        email: "vef@vujta.sh",
                        password: "39701523",
                    };
                    return [4 /*yield*/, handleUserService.create({
                            name: user.name,
                            email: user.email,
                            password: user.password,
                            isAdmin: false,
                        })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, usersRepositoryTest.queryByEmail(user.email)];
                case 2:
                    userToDelete = _a.sent();
                    return [4 /*yield*/, handleUserService.delete(userToDelete.id)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, usersRepositoryTest.queryByEmail(user.email)];
                case 4:
                    result = _a.sent();
                    expect(result).toBeUndefined();
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should not be able to create an existing user", function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, expect(function () { return __awaiter(void 0, void 0, void 0, function () {
                        var user;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    user = {
                                        name: "Helena Cox",
                                        email: "dikbi@hogacma.kw",
                                        password: "47527307",
                                    };
                                    return [4 /*yield*/, handleUserService.create({
                                            name: user.name,
                                            email: user.email,
                                            password: user.password,
                                            isAdmin: false,
                                        })];
                                case 1:
                                    _a.sent();
                                    return [4 /*yield*/, handleUserService.create({
                                            name: user.name,
                                            email: user.email,
                                            password: user.password,
                                            isAdmin: false,
                                        })];
                                case 2:
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
});

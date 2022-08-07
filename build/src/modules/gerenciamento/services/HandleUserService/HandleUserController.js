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
exports.HandleUserController = void 0;
var tsyringe_1 = require("tsyringe");
var HandleUserService_1 = require("./HandleUserService");
var HandleUserController = /** @class */ (function () {
    function HandleUserController() {
    }
    HandleUserController.prototype.create = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, name, email, password, isAdmin, handleUserService;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.body, name = _a.name, email = _a.email, password = _a.password, isAdmin = _a.isAdmin;
                        handleUserService = tsyringe_1.container.resolve(HandleUserService_1.HandleUserService);
                        return [4 /*yield*/, handleUserService.create({ name: name, email: email, password: password, isAdmin: isAdmin })];
                    case 1:
                        _b.sent();
                        return [2 /*return*/, response
                                .status(201)
                                .json({ message: "Usuario criado com sucesso!" })];
                }
            });
        });
    };
    HandleUserController.prototype.list = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var handleUserService, listUsers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        handleUserService = tsyringe_1.container.resolve(HandleUserService_1.HandleUserService);
                        return [4 /*yield*/, handleUserService.list()];
                    case 1:
                        listUsers = _a.sent();
                        return [2 /*return*/, response.json(listUsers)];
                }
            });
        });
    };
    HandleUserController.prototype.findById = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, handleUserService, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = request.params.id;
                        handleUserService = tsyringe_1.container.resolve(HandleUserService_1.HandleUserService);
                        return [4 /*yield*/, handleUserService.getCurrentUserInfo(id)];
                    case 1:
                        user = _a.sent();
                        return [2 /*return*/, response.json(user)];
                }
            });
        });
    };
    HandleUserController.prototype.findUser = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, handleUserService, userFounded;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = request.user.id;
                        handleUserService = tsyringe_1.container.resolve(HandleUserService_1.HandleUserService);
                        return [4 /*yield*/, handleUserService.getCurrentUserInfo(id)];
                    case 1:
                        userFounded = _a.sent();
                        return [2 /*return*/, response.json(userFounded)];
                }
            });
        });
    };
    HandleUserController.prototype.update = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, id, name, isAdmin, handleUserService, professorUpdated;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.body, id = _a.id, name = _a.name, isAdmin = _a.isAdmin;
                        handleUserService = tsyringe_1.container.resolve(HandleUserService_1.HandleUserService);
                        return [4 /*yield*/, handleUserService.update({
                                id: id,
                                name: name,
                                isAdmin: isAdmin,
                            })];
                    case 1:
                        professorUpdated = _b.sent();
                        return [2 /*return*/, response.status(201).json(professorUpdated)];
                }
            });
        });
    };
    HandleUserController.prototype.delete = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, handleUserService;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = request.params.id;
                        handleUserService = tsyringe_1.container.resolve(HandleUserService_1.HandleUserService);
                        return [4 /*yield*/, handleUserService.delete(id)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, response
                                .status(201)
                                .json({ message: "Usuario removido com sucesso!" })];
                }
            });
        });
    };
    HandleUserController.prototype.authenticate = function (request, response, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    next) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, password, email, authenticateUserService, authInfo;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.body, password = _a.password, email = _a.email;
                        authenticateUserService = tsyringe_1.container.resolve(HandleUserService_1.HandleUserService);
                        return [4 /*yield*/, authenticateUserService.authenticate({
                                email: email,
                                password: password,
                            })];
                    case 1:
                        authInfo = _b.sent();
                        return [2 /*return*/, response.json(authInfo)];
                }
            });
        });
    };
    return HandleUserController;
}());
exports.HandleUserController = HandleUserController;

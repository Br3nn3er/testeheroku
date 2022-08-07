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
var MailProviderMock_1 = require("../../../../../shared/container/providers/MailProvider/mocks/MailProviderMock");
var AppError_1 = require("../../../../../shared/errors/AppError");
var UsersRepositoryTestMock_1 = require("../../../infra/typeorm/repositories/mocks/UsersRepositoryTestMock");
var UsersTokensRepositoryMock_1 = require("../../../infra/typeorm/repositories/mocks/UsersTokensRepositoryMock");
var HandleSendMailService_1 = require("../HandleSendMailService");
var handleSendMailService;
var usersRepositoryMock;
var usersTokensRepositoryMock;
var dateProvider;
var mailProvider;
describe("Handle Send Mail Service", function () {
    beforeEach(function () {
        usersRepositoryMock = new UsersRepositoryTestMock_1.UsersRepositoryTestMock();
        usersTokensRepositoryMock = new UsersTokensRepositoryMock_1.UsersTokensRepositoryMock();
        dateProvider = new DayjsDateProvider_1.DayjsDateProvider();
        mailProvider = new MailProviderMock_1.MailProviderMock();
        handleSendMailService = new HandleSendMailService_1.HandleSendMailService(usersRepositoryMock, usersTokensRepositoryMock, dateProvider, mailProvider);
    });
    it("Should be able to send a forgot password mail to a user", function () { return __awaiter(void 0, void 0, void 0, function () {
        var sendMail;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    sendMail = jest.spyOn(mailProvider, "sendMail");
                    return [4 /*yield*/, usersRepositoryMock.createUser({
                            name: "Myrtle Malone",
                            email: "wa@lebi.eu",
                            password: "699505",
                            isAdmin: false,
                        })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, handleSendMailService.sendForgotPasswordMail("wa@lebi.eu")];
                case 2:
                    _a.sent();
                    expect(sendMail).toHaveBeenCalled();
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should be able to send an email if user does not exist", function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, expect(handleSendMailService.sendForgotPasswordMail("awfacpew@cihkewos.gb")).rejects.toEqual(new AppError_1.AppError("Usuario nao existe!"))];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should be able to create an user token", function () { return __awaiter(void 0, void 0, void 0, function () {
        var generatedTokenMail;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    generatedTokenMail = jest.spyOn(usersTokensRepositoryMock, "create");
                    return [4 /*yield*/, usersRepositoryMock.createUser({
                            name: "Noah Robinson",
                            email: "viifab@duhvuaf.bb",
                            password: "010139",
                            isAdmin: false,
                        })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, handleSendMailService.sendForgotPasswordMail("viifab@duhvuaf.bb")];
                case 2:
                    _a.sent();
                    expect(generatedTokenMail).toHaveBeenCalled();
                    return [2 /*return*/];
            }
        });
    }); });
});

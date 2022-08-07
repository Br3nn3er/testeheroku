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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var bcrypt_1 = require("bcrypt");
var supertest_1 = __importDefault(require("supertest"));
var uuid_1 = require("uuid");
var app_1 = require("../../../../../shared/infra/http/app");
var typeorm_1 = __importDefault(require("../../../../../shared/infra/typeorm"));
var User_1 = require("../../../infra/typeorm/entities/User");
var connection;
describe("Handle CRUD operations related to user", function () {
    beforeAll(function () { return __awaiter(void 0, void 0, void 0, function () {
        var id, password;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, typeorm_1.default()];
                case 1:
                    connection = _a.sent();
                    return [4 /*yield*/, connection.runMigrations()];
                case 2:
                    _a.sent();
                    id = uuid_1.v4();
                    return [4 /*yield*/, bcrypt_1.hash("admin", 8)];
                case 3:
                    password = _a.sent();
                    return [4 /*yield*/, connection.query("INSERT INTO usuarios(id, name, email, password, \"isAdmin\", created_at)\n      values('" + id + "', 'admin', 'sodd_tcc@outlook.com', '" + password + "', 'true', 'now()')")];
                case 4:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    afterAll(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, connection.dropDatabase()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, connection.close()];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should be able to authenticate an user", function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, supertest_1.default(app_1.app).post("/sessions").send({
                        email: "sodd_tcc@outlook.com",
                        password: "admin",
                    })];
                case 1:
                    response = _a.sent();
                    expect(response.status).toBe(200);
                    expect(response.body.user.email).toBe("sodd_tcc@outlook.com");
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should not be able to authenticate an user with unexisting email", function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, supertest_1.default(app_1.app).post("/sessions").send({
                        email: "zuos@nav.lc",
                        password: "admin",
                    })];
                case 1:
                    response = _a.sent();
                    expect(response.status).toBe(401);
                    expect(response.body.message).toBe("Email ou senha incorreta");
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should not be able to authenticate an user with wrong password", function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, supertest_1.default(app_1.app).post("/sessions").send({
                        email: "sodd_tcc@outlook.com",
                        password: "notmypassword",
                    })];
                case 1:
                    response = _a.sent();
                    expect(response.status).toBe(401);
                    expect(response.body.message).toBe("Email ou senha incorreta");
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should be able to create a new user", function () { return __awaiter(void 0, void 0, void 0, function () {
        var responseToken, token, response, user;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, supertest_1.default(app_1.app).post("/sessions").send({
                        email: "sodd_tcc@outlook.com",
                        password: "admin",
                    })];
                case 1:
                    responseToken = _a.sent();
                    token = responseToken.body.token;
                    return [4 /*yield*/, supertest_1.default(app_1.app)
                            .post("/users")
                            .send({
                            name: "Tyler Stanley",
                            email: "hu@abuhoh.fm",
                            password: "password",
                            isAdmin: false,
                        })
                            .set({
                            Authorization: "Bearer " + token,
                        })];
                case 2:
                    response = _a.sent();
                    user = response.body;
                    expect(response.status).toBe(201);
                    expect(user.message).toBe("Usuario criado com sucesso!");
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should not be able to create an existing user", function () { return __awaiter(void 0, void 0, void 0, function () {
        var responseToken, token, response, user;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, supertest_1.default(app_1.app).post("/sessions").send({
                        email: "sodd_tcc@outlook.com",
                        password: "admin",
                    })];
                case 1:
                    responseToken = _a.sent();
                    token = responseToken.body.token;
                    return [4 /*yield*/, supertest_1.default(app_1.app)
                            .post("/users")
                            .send({
                            name: "Tyler Stanley",
                            email: "hu@abuhoh.fm",
                            password: "password",
                            isAdmin: false,
                        })
                            .set({
                            Authorization: "Bearer " + token,
                        })];
                case 2:
                    response = _a.sent();
                    user = response.body;
                    expect(user.message).toBe("Usuario ja existe!");
                    expect(response.status).toBe(401);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should be able to read all users records", function () { return __awaiter(void 0, void 0, void 0, function () {
        var responseToken, token, user, response, users;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, supertest_1.default(app_1.app).post("/sessions").send({
                        email: "sodd_tcc@outlook.com",
                        password: "admin",
                    })];
                case 1:
                    responseToken = _a.sent();
                    token = responseToken.body.token;
                    user = new User_1.User();
                    user.name = "Gertrude Moss";
                    user.email = "ridjobed@pej.lu";
                    user.password = "43967724873645";
                    user.isAdmin = false;
                    return [4 /*yield*/, connection.manager.save(user)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, supertest_1.default(app_1.app)
                            .get("/users")
                            .send()
                            .set({
                            Authorization: "Bearer " + token,
                        })];
                case 3:
                    response = _a.sent();
                    users = response.body;
                    expect(response.status).toBe(200);
                    expect(users).toHaveLength(3);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should be able to read user by id", function () { return __awaiter(void 0, void 0, void 0, function () {
        var responseToken, token, users, otherUser, response, userResonse;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, supertest_1.default(app_1.app).post("/sessions").send({
                        email: "sodd_tcc@outlook.com",
                        password: "admin",
                    })];
                case 1:
                    responseToken = _a.sent();
                    token = responseToken.body.token;
                    return [4 /*yield*/, supertest_1.default(app_1.app)
                            .post("/users")
                            .send({
                            name: "User 1",
                            email: "user_1@pej.lu",
                            password: "43967724873645",
                            isAdmin: true,
                        })
                            .set({
                            Authorization: "Bearer " + token,
                        })];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, supertest_1.default(app_1.app)
                            .post("/users")
                            .send({
                            name: "Other User",
                            email: "other_user@pej.lu",
                            password: "43967724873645",
                            isAdmin: false,
                        })
                            .set({
                            Authorization: "Bearer " + token,
                        })];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, supertest_1.default(app_1.app)
                            .get("/users")
                            .set({
                            Authorization: "Bearer " + token,
                        })];
                case 4:
                    users = (_a.sent()).body;
                    otherUser = users.find(function (user) { return user.email === "other_user@pej.lu"; });
                    return [4 /*yield*/, supertest_1.default(app_1.app)
                            .get("/users/" + otherUser.id)
                            .send()
                            .set({
                            Authorization: "Bearer " + token,
                        })];
                case 5:
                    response = _a.sent();
                    userResonse = response.body;
                    expect(response.status).toBe(200);
                    expect(userResonse.id).toStrictEqual(otherUser.id);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should return error because logged user is not admin", function () { return __awaiter(void 0, void 0, void 0, function () {
        var firstToken, users, loggedUser, otherUser, responseToken, token, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, supertest_1.default(app_1.app).post("/sessions").send({
                        email: "sodd_tcc@outlook.com",
                        password: "admin",
                    })];
                case 1:
                    firstToken = (_a.sent()).body.token;
                    return [4 /*yield*/, supertest_1.default(app_1.app)
                            .post("/users")
                            .send({
                            name: "Logged User",
                            email: "logged_user@pej.lu",
                            password: "43967724873645",
                            isAdmin: false,
                        })
                            .set({
                            Authorization: "Bearer " + firstToken,
                        })];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, supertest_1.default(app_1.app)
                            .post("/users")
                            .send({
                            name: "Other_User_2",
                            email: "other_user_2@pej.lu",
                            password: "43967724873645",
                            isAdmin: false,
                        })
                            .set({
                            Authorization: "Bearer " + firstToken,
                        })];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, supertest_1.default(app_1.app)
                            .get("/users")
                            .set({
                            Authorization: "Bearer " + firstToken,
                        })];
                case 4:
                    users = (_a.sent()).body;
                    loggedUser = users.find(function (user) { return user.email === "logged_user@pej.lu"; });
                    otherUser = users.find(function (user) { return user.email === "other_user_2@pej.lu"; });
                    return [4 /*yield*/, supertest_1.default(app_1.app).post("/sessions").send({
                            email: loggedUser.email,
                            password: loggedUser.password,
                        })];
                case 5:
                    responseToken = _a.sent();
                    token = responseToken.body.token;
                    return [4 /*yield*/, supertest_1.default(app_1.app)
                            .get("/users/" + otherUser.id)
                            .send()
                            .set({
                            Authorization: "Bearer " + token,
                        })];
                case 6:
                    response = _a.sent();
                    expect(response.body.message).toBe("Token invalido!");
                    expect(response.status).toBe(401);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should be able to update an user", function () { return __awaiter(void 0, void 0, void 0, function () {
        var responseToken, token, user, response, users, userToUpdate, responseUpdate, userUpdated;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, supertest_1.default(app_1.app).post("/sessions").send({
                        email: "sodd_tcc@outlook.com",
                        password: "admin",
                    })];
                case 1:
                    responseToken = _a.sent();
                    token = responseToken.body.token;
                    user = new User_1.User();
                    user.name = "Lenora Alvarez";
                    user.email = "re@jel.ba";
                    user.password = "41376861";
                    user.isAdmin = false;
                    return [4 /*yield*/, connection.manager.save(user)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, supertest_1.default(app_1.app)
                            .get("/users")
                            .send()
                            .set({
                            Authorization: "Bearer " + token,
                        })];
                case 3:
                    response = _a.sent();
                    users = response.body;
                    userToUpdate = users.find(function (user) { return user.email === "re@jel.ba" && user.name === "Lenora Alvarez"; });
                    return [4 /*yield*/, supertest_1.default(app_1.app)
                            .patch("/users")
                            .send({
                            id: userToUpdate.id,
                            name: "Lenora Alvarez Suarez",
                            isAdmin: true,
                        })
                            .set({
                            Authorization: "Bearer " + token,
                        })];
                case 4:
                    responseUpdate = _a.sent();
                    userUpdated = responseUpdate.body;
                    expect(responseUpdate.status).toBe(201);
                    expect(userUpdated.name).toBe("Lenora Alvarez Suarez");
                    expect(userUpdated.isAdmin).toBe(true);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should not able to update an unexisting user", function () { return __awaiter(void 0, void 0, void 0, function () {
        var responseToken, token, responseUpdate;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, supertest_1.default(app_1.app).post("/sessions").send({
                        email: "sodd_tcc@outlook.com",
                        password: "admin",
                    })];
                case 1:
                    responseToken = _a.sent();
                    token = responseToken.body.token;
                    return [4 /*yield*/, supertest_1.default(app_1.app)
                            .patch("/users")
                            .send({
                            id: "de8696a0-0a3b-4a61-a012-d98dbfd5e142",
                            name: "Fail test update",
                            isAdmin: true,
                        })
                            .set({
                            Authorization: "Bearer " + token,
                        })];
                case 2:
                    responseUpdate = _a.sent();
                    expect(responseUpdate.body.message).toBe("Este usuário não está cadastrado!");
                    expect(responseUpdate.status).toBe(401);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should be able to delete an user", function () { return __awaiter(void 0, void 0, void 0, function () {
        var responseToken, token, user, responseGet, users, userToDelete, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, supertest_1.default(app_1.app).post("/sessions").send({
                        email: "sodd_tcc@outlook.com",
                        password: "admin",
                    })];
                case 1:
                    responseToken = _a.sent();
                    token = responseToken.body.token;
                    user = new User_1.User();
                    user.name = "Gavin Douglas";
                    user.email = "hej@zugegsa.mo";
                    user.password = "41376861";
                    user.isAdmin = false;
                    return [4 /*yield*/, connection.manager.save(user)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, supertest_1.default(app_1.app)
                            .get("/users")
                            .send()
                            .set({
                            Authorization: "Bearer " + token,
                        })];
                case 3:
                    responseGet = _a.sent();
                    users = responseGet.body;
                    userToDelete = users.find(function (user) { return user.email === "hej@zugegsa.mo" && user.name === "Gavin Douglas"; });
                    return [4 /*yield*/, supertest_1.default(app_1.app)
                            .delete("/users/" + userToDelete.id)
                            .send()
                            .set({
                            Authorization: "Bearer " + token,
                        })];
                case 4:
                    response = _a.sent();
                    expect(response.status).toBe(201);
                    expect(response.body.message).toBe("Usuario removido com sucesso!");
                    return [2 /*return*/];
            }
        });
    }); });
});

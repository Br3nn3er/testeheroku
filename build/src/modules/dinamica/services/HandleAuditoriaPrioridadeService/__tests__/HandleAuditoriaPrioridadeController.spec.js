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
var AuditoriaPrioridade_1 = require("../../../infra/typeorm/entities/AuditoriaPrioridade");
var connection;
describe("Handle CRUD routes related to auditoria_prioridade", function () {
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
    it("Should be able to create a new auditoria_prioridade record", function () { return __awaiter(void 0, void 0, void 0, function () {
        var responseToken, token, response, responseResult;
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
                            .post("/auditoria_prioridade")
                            .send({
                            siape: "1111111",
                            codigo_disc: "14",
                            prioridade_antiga: 1,
                            prioridade_nova: 2,
                            stamp: new Date(),
                        })
                            .set({
                            Authorization: "Bearer " + token,
                        })];
                case 2:
                    response = _a.sent();
                    responseResult = response.body;
                    expect(response.status).toBe(201);
                    expect(responseResult.prioridade_antiga).toBe(1);
                    expect(responseResult.prioridade_nova).toBe(2);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should be able to read all auditoria_prioridade records", function () { return __awaiter(void 0, void 0, void 0, function () {
        var responseToken, token, auditoria, auditoria2, response, responseResult;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, supertest_1.default(app_1.app).post("/sessions").send({
                        email: "sodd_tcc@outlook.com",
                        password: "admin",
                    })];
                case 1:
                    responseToken = _a.sent();
                    token = responseToken.body.token;
                    auditoria = new AuditoriaPrioridade_1.AuditoriaPrioridade();
                    auditoria.siape = "1111111";
                    auditoria.codigo_disc = "14";
                    auditoria.prioridade_antiga = 1;
                    auditoria.prioridade_nova = 2;
                    auditoria.stamp = new Date();
                    auditoria2 = new AuditoriaPrioridade_1.AuditoriaPrioridade();
                    auditoria2.siape = "1122111";
                    auditoria2.codigo_disc = "GSI001";
                    auditoria2.prioridade_antiga = 10;
                    auditoria2.prioridade_nova = 22;
                    auditoria2.stamp = new Date();
                    return [4 /*yield*/, connection.manager.save(auditoria)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, connection.manager.save(auditoria2)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, supertest_1.default(app_1.app)
                            .get("/auditoria_prioridade")
                            .send()
                            .set({ Authorization: "Bearer " + token })];
                case 4:
                    response = _a.sent();
                    responseResult = response.body;
                    expect(response.status).toBe(201);
                    expect(responseResult).toHaveLength(3);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should be able to update a auditoria_prioridade record", function () { return __awaiter(void 0, void 0, void 0, function () {
        var responseToken, token, auditoria, response, responseResult;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, supertest_1.default(app_1.app).post("/sessions").send({
                        email: "sodd_tcc@outlook.com",
                        password: "admin",
                    })];
                case 1:
                    responseToken = _a.sent();
                    token = responseToken.body.token;
                    auditoria = new AuditoriaPrioridade_1.AuditoriaPrioridade();
                    auditoria.siape = "1122133";
                    auditoria.codigo_disc = "GSI002";
                    auditoria.prioridade_antiga = 1;
                    auditoria.prioridade_nova = 2;
                    auditoria.stamp = new Date();
                    return [4 /*yield*/, connection.manager.save(auditoria)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, supertest_1.default(app_1.app)
                            .patch("/auditoria_prioridade")
                            .send({
                            id: "4",
                            prioridade_antiga: 3,
                            prioridade_nova: 4,
                        })
                            .set({ Authorization: "Bearer " + token })];
                case 3:
                    response = _a.sent();
                    responseResult = response.body;
                    expect(response.status).toBe(201);
                    expect(responseResult.id).toBe(4);
                    expect(responseResult.prioridade_antiga).toBe(3);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should be able to delete a auditoria_prioridade record", function () { return __awaiter(void 0, void 0, void 0, function () {
        var responseToken, token, auditoria, response, responseGet, auditorias, auditoriaDeleted;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, supertest_1.default(app_1.app).post("/sessions").send({
                        email: "sodd_tcc@outlook.com",
                        password: "admin",
                    })];
                case 1:
                    responseToken = _a.sent();
                    token = responseToken.body.token;
                    auditoria = new AuditoriaPrioridade_1.AuditoriaPrioridade();
                    auditoria.siape = "000001";
                    auditoria.codigo_disc = "GSI025";
                    auditoria.prioridade_antiga = 1;
                    auditoria.prioridade_nova = 2;
                    auditoria.stamp = new Date();
                    return [4 /*yield*/, connection.manager.save(auditoria)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, supertest_1.default(app_1.app)
                            .delete("/auditoria_prioridade/5")
                            .send()
                            .set({ Authorization: "Bearer " + token })];
                case 3:
                    response = _a.sent();
                    return [4 /*yield*/, supertest_1.default(app_1.app)
                            .get("/auditoria_prioridade")
                            .send()
                            .set({
                            Authorization: "Bearer " + token,
                        })];
                case 4:
                    responseGet = _a.sent();
                    auditorias = responseGet.body;
                    auditoriaDeleted = auditorias.find(function (auditoria) { return auditoria.id === "5"; });
                    expect(response.status).toBe(201);
                    expect(auditoriaDeleted).toBeUndefined();
                    return [2 /*return*/];
            }
        });
    }); });
});

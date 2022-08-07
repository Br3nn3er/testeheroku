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
var Curso_1 = require("../../../infra/typeorm/entities/Curso");
var Disciplina_1 = require("../../../infra/typeorm/entities/Disciplina");
var connection;
describe("Handle CRUD routes related to disciplinas", function () {
    beforeAll(function () { return __awaiter(void 0, void 0, void 0, function () {
        var id, password, curso1, curso2;
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
                    curso1 = new Curso_1.Curso();
                    curso1.codigo = "BCC";
                    curso1.nome = "Ciencia da Computacao";
                    curso1.unidade = "UFU";
                    curso1.campus = "udi";
                    curso1.permitir_choque_periodo = false;
                    curso1.permitir_choque_horario = false;
                    curso2 = new Curso_1.Curso();
                    curso2.codigo = "BSI";
                    curso2.nome = "Sistemas de Informação";
                    curso2.unidade = "UFU";
                    curso2.campus = "udi";
                    curso2.permitir_choque_periodo = false;
                    curso2.permitir_choque_horario = false;
                    return [4 /*yield*/, connection.manager.save(curso1)];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, connection.manager.save(curso2)];
                case 6:
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
    it("Should be able to create a new disciplina", function () { return __awaiter(void 0, void 0, void 0, function () {
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
                            .post("/disciplinas")
                            .send({
                            codigo: "GSI023",
                            nome: "Estrutura de Dados",
                            ch_teorica: 4,
                            ch_pratica: 0,
                            ch_total: 4,
                            curso: "BSI",
                            temfila: true,
                            periodo: 2,
                        })
                            .set({
                            Authorization: "Bearer " + token,
                        })];
                case 2:
                    response = _a.sent();
                    responseResult = response.body;
                    expect(response.status).toBe(201);
                    expect(responseResult.codigo).toBe("GSI023");
                    expect(responseResult.periodo).toBe(2);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should not be able to create an existing disciplina", function () { return __awaiter(void 0, void 0, void 0, function () {
        var responseToken, token, response;
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
                            .post("/disciplinas")
                            .send({
                            codigo: "GSI023",
                            nome: "Estrutura de Dados",
                            ch_teorica: 4,
                            ch_pratica: 0,
                            ch_total: 4,
                            curso: "BSI",
                            temfila: true,
                            periodo: 2,
                        })
                            .set({
                            Authorization: "Bearer " + token,
                        })];
                case 2:
                    response = _a.sent();
                    expect(response.status).toBe(403);
                    expect(response.body.message).toBe("Há uma disciplina cadastrada com este codigo!");
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should be able to read all disciplina records", function () { return __awaiter(void 0, void 0, void 0, function () {
        var responseToken, token, disciplina, response, responseResult;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, supertest_1.default(app_1.app).post("/sessions").send({
                        email: "sodd_tcc@outlook.com",
                        password: "admin",
                    })];
                case 1:
                    responseToken = _a.sent();
                    token = responseToken.body.token;
                    disciplina = new Disciplina_1.Disciplina();
                    disciplina.codigo = "GSI011";
                    disciplina.nome = "Introdução à Sistemas";
                    disciplina.ch_teorica = 4;
                    disciplina.ch_pratica = 0;
                    disciplina.ch_total = 4;
                    disciplina.curso = "BSI";
                    disciplina.temfila = true;
                    disciplina.periodo = 2;
                    return [4 /*yield*/, connection.manager.save(disciplina)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, supertest_1.default(app_1.app)
                            .get("/disciplinas")
                            .send()
                            .set({
                            Authorization: "Bearer " + token,
                        })];
                case 3:
                    response = _a.sent();
                    responseResult = response.body;
                    expect(response.status).toBe(200);
                    expect(responseResult).toHaveLength(2);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should be able to read only disciplina record", function () { return __awaiter(void 0, void 0, void 0, function () {
        var responseToken, token, disciplina, response, responseResult;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, supertest_1.default(app_1.app).post("/sessions").send({
                        email: "sodd_tcc@outlook.com",
                        password: "admin",
                    })];
                case 1:
                    responseToken = _a.sent();
                    token = responseToken.body.token;
                    disciplina = new Disciplina_1.Disciplina();
                    disciplina.codigo = "GSI222";
                    disciplina.nome = "Introdução à Sistemas";
                    disciplina.ch_teorica = 4;
                    disciplina.ch_pratica = 0;
                    disciplina.ch_total = 4;
                    disciplina.curso = "BSI";
                    disciplina.temfila = true;
                    disciplina.periodo = 2;
                    return [4 /*yield*/, connection.manager.save(disciplina)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, supertest_1.default(app_1.app)
                            .get("/disciplinas/" + disciplina.codigo)
                            .send()
                            .set({
                            Authorization: "Bearer " + token,
                        })];
                case 3:
                    response = _a.sent();
                    responseResult = response.body;
                    expect(response.status).toBe(200);
                    expect(responseResult.codigo).toStrictEqual(disciplina.codigo);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should be able to update a disciplina record", function () { return __awaiter(void 0, void 0, void 0, function () {
        var responseToken, token, disciplina, response, responseResult;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, supertest_1.default(app_1.app).post("/sessions").send({
                        email: "sodd_tcc@outlook.com",
                        password: "admin",
                    })];
                case 1:
                    responseToken = _a.sent();
                    token = responseToken.body.token;
                    disciplina = new Disciplina_1.Disciplina();
                    disciplina.codigo = "GSI012";
                    disciplina.nome = "Profissões";
                    disciplina.ch_teorica = 4;
                    disciplina.ch_pratica = 0;
                    disciplina.ch_total = 4;
                    disciplina.curso = "BSI";
                    disciplina.temfila = true;
                    disciplina.periodo = 2;
                    return [4 /*yield*/, connection.manager.save(disciplina)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, supertest_1.default(app_1.app)
                            .patch("/disciplinas")
                            .send({
                            codigo: "GSI012",
                            nome: "Profissão em Sistemas de Informação",
                            ch_pratica: 1,
                            ch_teorica: 3,
                        })
                            .set({
                            Authorization: "Bearer " + token,
                        })];
                case 3:
                    response = _a.sent();
                    responseResult = response.body;
                    expect(response.status).toBe(200);
                    expect(responseResult.nome).toBe("Profissão em Sistemas de Informação");
                    expect(responseResult.ch_pratica).toBe(1);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should not be able to update an unexisting disciplina record", function () { return __awaiter(void 0, void 0, void 0, function () {
        var responseToken, token, response;
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
                            .patch("/disciplinas")
                            .send({
                            codigo: "43560",
                            nome: "Profissão em Sistemas de Informação",
                            ch_pratica: 1,
                            ch_teorica: 3,
                        })
                            .set({
                            Authorization: "Bearer " + token,
                        })];
                case 2:
                    response = _a.sent();
                    expect(response.status).toBe(400);
                    expect(response.body.message).toBe("Disciplina não cadastrada!");
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should be able to delete a disciplina record", function () { return __awaiter(void 0, void 0, void 0, function () {
        var responseToken, token, disciplina, response, responseGet, disciplinas, disciplinaDeleted;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, supertest_1.default(app_1.app).post("/sessions").send({
                        email: "sodd_tcc@outlook.com",
                        password: "admin",
                    })];
                case 1:
                    responseToken = _a.sent();
                    token = responseToken.body.token;
                    disciplina = new Disciplina_1.Disciplina();
                    disciplina.codigo = "BCC012";
                    disciplina.nome = "Introdução à Ciencia da Computacao";
                    disciplina.ch_teorica = 4;
                    disciplina.ch_pratica = 0;
                    disciplina.ch_total = 4;
                    disciplina.curso = "BCC";
                    disciplina.temfila = true;
                    disciplina.periodo = 2;
                    return [4 /*yield*/, connection.manager.save(disciplina)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, supertest_1.default(app_1.app)
                            .delete("/disciplinas/GSI012")
                            .send()
                            .set({
                            Authorization: "Bearer " + token,
                        })];
                case 3:
                    response = _a.sent();
                    return [4 /*yield*/, supertest_1.default(app_1.app)
                            .get("/disciplinas")
                            .send()
                            .set({
                            Authorization: "Bearer " + token,
                        })];
                case 4:
                    responseGet = _a.sent();
                    disciplinas = responseGet.body;
                    disciplinaDeleted = disciplinas.find(function (disciplina) { return disciplina.codigo === "GSI012"; });
                    expect(response.status).toBe(200);
                    expect(disciplinaDeleted).toBeUndefined();
                    return [2 /*return*/];
            }
        });
    }); });
});

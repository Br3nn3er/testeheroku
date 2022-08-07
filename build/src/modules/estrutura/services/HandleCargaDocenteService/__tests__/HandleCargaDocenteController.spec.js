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
var DayjsDateProvider_1 = require("../../../../../shared/container/providers/DateProvider/implementations/DayjsDateProvider");
var app_1 = require("../../../../../shared/infra/http/app");
var typeorm_1 = __importDefault(require("../../../../../shared/infra/typeorm"));
var CargaDocente_1 = require("../../../infra/typeorm/entities/CargaDocente");
var Professor_1 = require("../../../infra/typeorm/entities/Professor");
var connection;
var dateProvider;
describe("Handle CRUD routes related to carga docente", function () {
    beforeAll(function () { return __awaiter(void 0, void 0, void 0, function () {
        var id, password;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dateProvider = new DayjsDateProvider_1.DayjsDateProvider();
                    return [4 /*yield*/, typeorm_1.default()];
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
    it("Should be able to create a new carga docente record", function () { return __awaiter(void 0, void 0, void 0, function () {
        var responseToken, token, professor, response, responseResult;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, supertest_1.default(app_1.app).post("/sessions").send({
                        email: "sodd_tcc@outlook.com",
                        password: "admin",
                    })];
                case 1:
                    responseToken = _a.sent();
                    token = responseToken.body.token;
                    professor = new Professor_1.Professor();
                    professor.siape = "1024300";
                    professor.nome = "Oscar Shelton";
                    professor.data_ingresso = dateProvider.processDateToUTC(new Date("2021-01-25"));
                    professor.data_nasc = dateProvider.processDateToUTC(new Date("1998-03-23"));
                    professor.afastado = true;
                    professor.regime = "de";
                    professor.carga_atual = 8;
                    professor.locacao = "udi";
                    professor.cnome = "OShelton";
                    professor.data_aposentadoria = dateProvider.processDateToUTC(new Date("2021-02-05"));
                    professor.status = "ativo";
                    return [4 /*yield*/, connection.manager.save(professor)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, supertest_1.default(app_1.app)
                            .post("/cargas")
                            .send({
                            siape: "1024300",
                            carga_atual: 16,
                            ano: 2015,
                            semestre: 2,
                        })
                            .set({
                            Authorization: "Bearer " + token,
                        })];
                case 3:
                    response = _a.sent();
                    responseResult = response.body;
                    expect(response.status).toBe(201);
                    expect(responseResult.siape).toBe("1024300");
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should not be able to create an existing carga docente record", function () { return __awaiter(void 0, void 0, void 0, function () {
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
                            .post("/cargas")
                            .send({
                            siape: "1024300",
                            carga_atual: 16,
                            ano: 2015,
                            semestre: 2,
                        })
                            .set({
                            Authorization: "Bearer " + token,
                        })];
                case 2:
                    response = _a.sent();
                    expect(response.status).toBe(400);
                    expect(response.body.message).toBe("Já existe uma carga para este siape!");
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should be able to read all carga docente records", function () { return __awaiter(void 0, void 0, void 0, function () {
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
                            .get("/cargas")
                            .send()
                            .set({
                            Authorization: "Bearer " + token,
                        })];
                case 2:
                    response = _a.sent();
                    responseResult = response.body;
                    expect(response.status).toBe(201);
                    expect(responseResult).toHaveLength(1);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should be able to update a carga docente record", function () { return __awaiter(void 0, void 0, void 0, function () {
        var responseToken, token, professor, carga, response, responseResult;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, supertest_1.default(app_1.app).post("/sessions").send({
                        email: "sodd_tcc@outlook.com",
                        password: "admin",
                    })];
                case 1:
                    responseToken = _a.sent();
                    token = responseToken.body.token;
                    professor = new Professor_1.Professor();
                    professor.siape = "1024301";
                    professor.nome = "Jay Andrews";
                    professor.data_ingresso = dateProvider.processDateToUTC(new Date("2021-01-25"));
                    professor.data_nasc = dateProvider.processDateToUTC(new Date("1998-03-23"));
                    professor.afastado = true;
                    professor.regime = "de";
                    professor.carga_atual = 8;
                    professor.locacao = "udi";
                    professor.cnome = "JAndrews";
                    professor.data_aposentadoria = dateProvider.processDateToUTC(new Date("2021-02-05"));
                    professor.status = "ativo";
                    return [4 /*yield*/, connection.manager.save(professor)];
                case 2:
                    _a.sent();
                    carga = new CargaDocente_1.CargaDocente();
                    carga.siape = "1024301";
                    carga.carga_atual = 15;
                    carga.ano = 2015;
                    carga.semestre = 1;
                    return [4 /*yield*/, connection.manager.save(carga)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, supertest_1.default(app_1.app)
                            .patch("/cargas")
                            .send({
                            siape: "1024301",
                            carga_atual: 16,
                            ano: 2020,
                        })
                            .set({
                            Authorization: "Bearer " + token,
                        })];
                case 4:
                    response = _a.sent();
                    responseResult = response.body;
                    expect(response.status).toBe(201);
                    expect(responseResult.ano).toBe(2020);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should be able to update an unexisting carga docente", function () { return __awaiter(void 0, void 0, void 0, function () {
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
                            .patch("/cargas")
                            .send({
                            siape: "212889",
                            carga_atual: 16,
                            ano: 2020,
                        })
                            .set({
                            Authorization: "Bearer " + token,
                        })];
                case 2:
                    response = _a.sent();
                    expect(response.status).toBe(400);
                    expect(response.body.message).toBe("Não há uma carga para este siape!");
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should be able to delete a carga docente record", function () { return __awaiter(void 0, void 0, void 0, function () {
        var responseToken, token, professor, carga, response, responseGet, cargas, cargaDeleted;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, supertest_1.default(app_1.app).post("/sessions").send({
                        email: "sodd_tcc@outlook.com",
                        password: "admin",
                    })];
                case 1:
                    responseToken = _a.sent();
                    token = responseToken.body.token;
                    professor = new Professor_1.Professor();
                    professor.siape = "721246";
                    professor.nome = "Tillie Lloyd";
                    professor.data_ingresso = dateProvider.processDateToUTC(new Date("2021-01-25"));
                    professor.data_nasc = dateProvider.processDateToUTC(new Date("1998-03-23"));
                    professor.afastado = true;
                    professor.regime = "de";
                    professor.carga_atual = 8;
                    professor.locacao = "udi";
                    professor.cnome = "TLloyd";
                    professor.data_aposentadoria = dateProvider.processDateToUTC(new Date("2021-02-05"));
                    professor.status = "ativo";
                    return [4 /*yield*/, connection.manager.save(professor)];
                case 2:
                    _a.sent();
                    carga = new CargaDocente_1.CargaDocente();
                    carga.siape = "721246";
                    carga.carga_atual = 15;
                    carga.ano = 2015;
                    carga.semestre = 1;
                    return [4 /*yield*/, connection.manager.save(carga)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, supertest_1.default(app_1.app)
                            .delete("/cargas/721246")
                            .send()
                            .set({
                            Authorization: "Bearer " + token,
                        })];
                case 4:
                    response = _a.sent();
                    return [4 /*yield*/, supertest_1.default(app_1.app)
                            .get("/cargas")
                            .send()
                            .set({
                            Authorization: "Bearer " + token,
                        })];
                case 5:
                    responseGet = _a.sent();
                    cargas = responseGet.body;
                    cargaDeleted = cargas.find(function (carga) { return carga.siape === "721246"; });
                    expect(response.status).toBe(201);
                    expect(cargaDeleted).toBeUndefined();
                    return [2 /*return*/];
            }
        });
    }); });
});

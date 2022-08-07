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
exports.CreateFila1636122729594 = void 0;
var typeorm_1 = require("typeorm");
var CreateFila1636122729594 = /** @class */ (function () {
    function CreateFila1636122729594() {
    }
    CreateFila1636122729594.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            var fila_codigo_disc_pos_ano_semestre_key, fila_siape_codigo_disc_ano_semestre_key;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.createTable(new typeorm_1.Table({
                            name: "fila",
                            columns: [
                                {
                                    name: "id",
                                    type: "bigint",
                                    isNullable: false,
                                    isGenerated: true,
                                    generationStrategy: "increment",
                                },
                                {
                                    name: "siape",
                                    type: "char",
                                    length: "8",
                                    isNullable: false,
                                },
                                {
                                    name: "codigo_disc",
                                    type: "char",
                                    length: "13",
                                },
                                {
                                    name: "pos",
                                    type: "integer",
                                    isNullable: false,
                                },
                                {
                                    name: "prioridade",
                                    type: "integer",
                                    isNullable: false,
                                },
                                {
                                    name: "qte_ministrada",
                                    type: "integer",
                                    isNullable: false,
                                },
                                {
                                    name: "qte_maximo",
                                    type: "integer",
                                    isNullable: false,
                                },
                                {
                                    name: "ano",
                                    type: "integer",
                                    isNullable: false,
                                },
                                {
                                    name: "semestre",
                                    type: "smallint",
                                    isNullable: false,
                                },
                                {
                                    name: "status",
                                    type: "integer",
                                    default: -1,
                                    isNullable: false,
                                },
                                {
                                    name: "periodo_preferencial",
                                    type: "boolean",
                                    default: false,
                                    isNullable: false,
                                },
                                {
                                    name: "created_at",
                                    type: "timestamp",
                                    default: "now()",
                                },
                            ],
                        }))];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.createPrimaryKey("fila", ["id"])];
                    case 2:
                        _a.sent();
                        fila_codigo_disc_pos_ano_semestre_key = new typeorm_1.TableUnique({
                            columnNames: ["codigo_disc", "pos", "ano", "semestre"],
                        });
                        return [4 /*yield*/, queryRunner.createUniqueConstraint("fila", fila_codigo_disc_pos_ano_semestre_key)];
                    case 3:
                        _a.sent();
                        fila_siape_codigo_disc_ano_semestre_key = new typeorm_1.TableUnique({
                            columnNames: ["siape", "codigo_disc", "ano", "semestre"],
                        });
                        return [4 /*yield*/, queryRunner.createUniqueConstraint("fila", fila_siape_codigo_disc_ano_semestre_key)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.createForeignKey("fila", new typeorm_1.TableForeignKey({
                                name: "fila_codigo_disc_fkey",
                                columnNames: ["codigo_disc"],
                                referencedColumnNames: ["codigo"],
                                referencedTableName: "disciplina",
                                onUpdate: "CASCADE",
                                onDelete: "NO ACTION",
                            }))];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.createForeignKey("fila", new typeorm_1.TableForeignKey({
                                name: "fila_siape_fkey",
                                columnNames: ["siape"],
                                referencedColumnNames: ["siape"],
                                referencedTableName: "professor",
                                onUpdate: "CASCADE",
                                onDelete: "NO ACTION",
                            }))];
                    case 6:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CreateFila1636122729594.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.dropForeignKey("fila", "fila_siape_fkey")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.dropForeignKey("fila", "fila_codigo_disc_fkey")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.dropPrimaryKey("fila")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.dropTable("fila")];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return CreateFila1636122729594;
}());
exports.CreateFila1636122729594 = CreateFila1636122729594;

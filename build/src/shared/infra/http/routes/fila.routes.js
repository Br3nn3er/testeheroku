"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.filaRoutes = void 0;
var express_1 = require("express");
var multer_1 = __importDefault(require("multer"));
var HandleFilaController_1 = require("../../../../modules/dinamica/services/HandleFilaService/HandleFilaController");
var ensureAdmin_1 = require("../middlewares/ensureAdmin");
var ensureAuthenticated_1 = require("../middlewares/ensureAuthenticated");
var filaRoutes = express_1.Router();
exports.filaRoutes = filaRoutes;
var upload = multer_1.default({ dest: "./tmp" });
var handleFilaController = new HandleFilaController_1.HandleFilaController();
filaRoutes.post("/", ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdmin, handleFilaController.create);
filaRoutes.patch("/", ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdmin, handleFilaController.update);
filaRoutes.get("/", ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdmin, handleFilaController.read);
filaRoutes.get("/disciplina/:codigo/semestre/:semestreId", ensureAuthenticated_1.ensureAuthenticated, handleFilaController.readByDiscEAnoESemestre);
filaRoutes.get("/professor/:siape/semestre/:semestreId", ensureAuthenticated_1.ensureAuthenticated, handleFilaController.readByProfessorESemestre);
filaRoutes.get("/professor/:siape", ensureAuthenticated_1.ensureAuthenticated, handleFilaController.readByProfessor);
filaRoutes.get("/turma/:turma", ensureAuthenticated_1.ensureAuthenticated, handleFilaController.readByTurma);
filaRoutes.get("/professor/:siape/ano/:ano/semestre/:semestre", ensureAuthenticated_1.ensureAuthenticated, handleFilaController.readBySemestreEProfessor);
filaRoutes.delete("/:id", ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdmin, handleFilaController.delete);
filaRoutes.post("/import", upload.single("file"), ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdmin, handleFilaController.import);

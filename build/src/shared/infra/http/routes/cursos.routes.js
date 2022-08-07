"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cursosRoutes = void 0;
var express_1 = require("express");
var multer_1 = __importDefault(require("multer"));
var HandleCursoController_1 = require("../../../../modules/estrutura/services/HandleCursoService/HandleCursoController");
var ensureAdmin_1 = require("../middlewares/ensureAdmin");
var ensureAuthenticated_1 = require("../middlewares/ensureAuthenticated");
var cursosRoutes = express_1.Router();
exports.cursosRoutes = cursosRoutes;
var upload = multer_1.default({ dest: "./tmp" });
var handleCursoController = new HandleCursoController_1.HandleCursoController();
cursosRoutes.post("/", ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdmin, handleCursoController.create);
cursosRoutes.get("/", ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdmin, handleCursoController.read);
cursosRoutes.get("/:codigo", ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdmin, handleCursoController.readByCodigo);
cursosRoutes.patch("/", ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdmin, handleCursoController.update);
cursosRoutes.delete("/:codigo", ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdmin, handleCursoController.delete);
cursosRoutes.post("/import", upload.single("file"), ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdmin, handleCursoController.import);

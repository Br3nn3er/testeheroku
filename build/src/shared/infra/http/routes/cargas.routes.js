"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cargasRoutes = void 0;
var express_1 = require("express");
var multer_1 = __importDefault(require("multer"));
var HandleCargaDocenteController_1 = require("../../../../modules/estrutura/services/HandleCargaDocenteService/HandleCargaDocenteController");
var ensureAdmin_1 = require("../middlewares/ensureAdmin");
var ensureAuthenticated_1 = require("../middlewares/ensureAuthenticated");
var cargasRoutes = express_1.Router();
exports.cargasRoutes = cargasRoutes;
var upload = multer_1.default({ dest: "./tmp" });
var handleCargaDocenteController = new HandleCargaDocenteController_1.HandleCargaDocenteController();
cargasRoutes.post("/", ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdmin, handleCargaDocenteController.create);
cargasRoutes.get("/", ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdmin, handleCargaDocenteController.read);
cargasRoutes.patch("/", ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdmin, handleCargaDocenteController.update);
cargasRoutes.delete("/:siape", ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdmin, handleCargaDocenteController.deleteBySiape);
cargasRoutes.post("/import", upload.single("file"), ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdmin, handleCargaDocenteController.import);

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.professoresRoutes = void 0;
var express_1 = require("express");
var multer_1 = __importDefault(require("multer"));
var HandleProfessorController_1 = require("../../../../modules/estrutura/services/HandleProfessorService/HandleProfessorController");
var ensureAdmin_1 = require("../middlewares/ensureAdmin");
var ensureAuthenticated_1 = require("../middlewares/ensureAuthenticated");
var professoresRoutes = express_1.Router();
exports.professoresRoutes = professoresRoutes;
var upload = multer_1.default({ dest: "./tmp" });
var handleProfessorController = new HandleProfessorController_1.HandleProfessorController();
professoresRoutes.post("/", ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdmin, handleProfessorController.create);
professoresRoutes.get("/", ensureAuthenticated_1.ensureAuthenticated, handleProfessorController.read);
professoresRoutes.get("/:siape", ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdmin, handleProfessorController.readBySiape);
professoresRoutes.patch("/", ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdmin, handleProfessorController.update);
professoresRoutes.delete("/:siape", ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdmin, handleProfessorController.delete);
professoresRoutes.post("/import", upload.single("file"), ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdmin, handleProfessorController.import);

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.turmasRoutes = void 0;
var express_1 = require("express");
var multer_1 = __importDefault(require("multer"));
var HandleTurmaController_1 = require("../../../../modules/estrutura/services/HandleTurmaService/HandleTurmaController");
var ensureAdmin_1 = require("../middlewares/ensureAdmin");
var ensureAuthenticated_1 = require("../middlewares/ensureAuthenticated");
var turmasRoutes = express_1.Router();
exports.turmasRoutes = turmasRoutes;
var upload = multer_1.default({ dest: "./tmp" });
var handleTurmaController = new HandleTurmaController_1.HandleTurmaController();
turmasRoutes.post("/", ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdmin, handleTurmaController.create);
turmasRoutes.patch("/", ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdmin, handleTurmaController.update);
turmasRoutes.get("/", ensureAuthenticated_1.ensureAuthenticated, handleTurmaController.read);
turmasRoutes.delete("/:id", ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdmin, handleTurmaController.delete);
turmasRoutes.post("/import", upload.single("file"), ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdmin, handleTurmaController.import);

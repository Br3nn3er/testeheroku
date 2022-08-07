"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.atribuicaoManualRoutes = void 0;
var express_1 = require("express");
var multer_1 = __importDefault(require("multer"));
var HandleAtribuicaoManualController_1 = require("../../../../modules/dinamica/services/HandleAtribuicaoManualService/HandleAtribuicaoManualController");
var ensureAdmin_1 = require("../middlewares/ensureAdmin");
var ensureAuthenticated_1 = require("../middlewares/ensureAuthenticated");
var atribuicaoManualRoutes = express_1.Router();
exports.atribuicaoManualRoutes = atribuicaoManualRoutes;
var upload = multer_1.default({ dest: "./tmp" });
var handleAtribuicaoManualController = new HandleAtribuicaoManualController_1.HandleAtribuicaoManualController();
atribuicaoManualRoutes.post("/", ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdmin, handleAtribuicaoManualController.create);
atribuicaoManualRoutes.get("/", ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdmin, handleAtribuicaoManualController.read);
atribuicaoManualRoutes.delete("/", ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdmin, handleAtribuicaoManualController.delete);
atribuicaoManualRoutes.post("/import", upload.single("file"), ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdmin, handleAtribuicaoManualController.import);

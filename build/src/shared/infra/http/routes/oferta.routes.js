"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ofertaRoutes = void 0;
var express_1 = require("express");
var multer_1 = __importDefault(require("multer"));
var HandleOfertaController_1 = require("../../../../modules/dinamica/services/HandleOfertaService/HandleOfertaController");
var ensureAdmin_1 = require("../middlewares/ensureAdmin");
var ensureAuthenticated_1 = require("../middlewares/ensureAuthenticated");
var ofertaRoutes = express_1.Router();
exports.ofertaRoutes = ofertaRoutes;
var upload = multer_1.default({ dest: "./tmp" });
var handleOfertaController = new HandleOfertaController_1.HandleOfertaController();
ofertaRoutes.post("/", ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdmin, handleOfertaController.create);
ofertaRoutes.get("/", ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdmin, handleOfertaController.read);
ofertaRoutes.delete("/:id", ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdmin, handleOfertaController.delete);
ofertaRoutes.post("/import", upload.single("file"), ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdmin, handleOfertaController.import);

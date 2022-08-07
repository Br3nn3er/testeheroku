"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ministraRoutes = void 0;
var express_1 = require("express");
var multer_1 = __importDefault(require("multer"));
var HandleMinistraController_1 = require("../../../../modules/estrutura/services/HandleMinistraService/HandleMinistraController");
var ensureAdmin_1 = require("../middlewares/ensureAdmin");
var ensureAuthenticated_1 = require("../middlewares/ensureAuthenticated");
var ministraRoutes = express_1.Router();
exports.ministraRoutes = ministraRoutes;
var upload = multer_1.default({ dest: "./tmp" });
var handleMinistraController = new HandleMinistraController_1.HandleMinistraController();
ministraRoutes.post("/", ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdmin, handleMinistraController.create);
ministraRoutes.get("/", ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdmin, handleMinistraController.read);
ministraRoutes.delete("/", ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdmin, handleMinistraController.delete);
ministraRoutes.post("/import", upload.single("file"), ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdmin, handleMinistraController.import);

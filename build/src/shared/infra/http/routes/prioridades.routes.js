"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prioridadeRoutes = void 0;
var express_1 = require("express");
var multer_1 = __importDefault(require("multer"));
var HandlePrioridadeController_1 = require("../../../../modules/dinamica/services/HandlePrioridadeService/HandlePrioridadeController");
var ensureAdmin_1 = require("../middlewares/ensureAdmin");
var ensureAuthenticated_1 = require("../middlewares/ensureAuthenticated");
var prioridadeRoutes = express_1.Router();
exports.prioridadeRoutes = prioridadeRoutes;
var upload = multer_1.default({ dest: "./tmp" });
var handlePrioridadeController = new HandlePrioridadeController_1.HandlePrioridadeController();
prioridadeRoutes.post("/", ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdmin, handlePrioridadeController.create);
prioridadeRoutes.patch("/", ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdmin, handlePrioridadeController.update);
prioridadeRoutes.get("/", ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdmin, handlePrioridadeController.read);
prioridadeRoutes.delete("/:id", ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdmin, handlePrioridadeController.delete);
prioridadeRoutes.post("/import", upload.single("file"), ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdmin, handlePrioridadeController.import);

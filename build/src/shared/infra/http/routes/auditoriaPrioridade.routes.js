"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auditoriaPrioridadeRoutes = void 0;
var express_1 = require("express");
var multer_1 = __importDefault(require("multer"));
var HandleAuditoriaPrioridadeController_1 = require("../../../../modules/dinamica/services/HandleAuditoriaPrioridadeService/HandleAuditoriaPrioridadeController");
var ensureAdmin_1 = require("../middlewares/ensureAdmin");
var ensureAuthenticated_1 = require("../middlewares/ensureAuthenticated");
var auditoriaPrioridadeRoutes = express_1.Router();
exports.auditoriaPrioridadeRoutes = auditoriaPrioridadeRoutes;
var upload = multer_1.default({ dest: "./tmp" });
var handleAuditoriaPrioridadeController = new HandleAuditoriaPrioridadeController_1.HandleAuditoriaPrioridadeController();
auditoriaPrioridadeRoutes.post("/", ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdmin, handleAuditoriaPrioridadeController.create);
auditoriaPrioridadeRoutes.patch("/", ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdmin, handleAuditoriaPrioridadeController.update);
auditoriaPrioridadeRoutes.get("/", ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdmin, handleAuditoriaPrioridadeController.read);
auditoriaPrioridadeRoutes.delete("/:id", ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdmin, handleAuditoriaPrioridadeController.delete);
auditoriaPrioridadeRoutes.post("/import", upload.single("file"), ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdmin, handleAuditoriaPrioridadeController.import);

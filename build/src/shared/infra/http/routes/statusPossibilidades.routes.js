"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.statusPossibilidadesRoutes = void 0;
var express_1 = require("express");
var multer_1 = __importDefault(require("multer"));
var HandleStatusPossibilidadesController_1 = require("../../../../modules/dinamica/services/HandleStatusPossibilidadesService/HandleStatusPossibilidadesController");
var ensureAdmin_1 = require("../middlewares/ensureAdmin");
var ensureAuthenticated_1 = require("../middlewares/ensureAuthenticated");
var statusPossibilidadesRoutes = express_1.Router();
exports.statusPossibilidadesRoutes = statusPossibilidadesRoutes;
var upload = multer_1.default({ dest: "./tmp" });
var handleStatusPossibilidadesController = new HandleStatusPossibilidadesController_1.HandleStatusPossibilidadesController();
statusPossibilidadesRoutes.post("/", ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdmin, handleStatusPossibilidadesController.create);
statusPossibilidadesRoutes.get("/", ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdmin, handleStatusPossibilidadesController.read);
statusPossibilidadesRoutes.delete("/", ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdmin, handleStatusPossibilidadesController.delete);
statusPossibilidadesRoutes.post("/import", upload.single("file"), ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdmin, handleStatusPossibilidadesController.import);

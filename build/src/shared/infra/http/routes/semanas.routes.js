"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.semanasRoutes = void 0;
var express_1 = require("express");
var multer_1 = __importDefault(require("multer"));
var HandleSemanaController_1 = require("../../../../modules/estrutura/services/HandleSemanaService/HandleSemanaController");
var ensureAdmin_1 = require("../middlewares/ensureAdmin");
var ensureAuthenticated_1 = require("../middlewares/ensureAuthenticated");
var semanasRoutes = express_1.Router();
exports.semanasRoutes = semanasRoutes;
var upload = multer_1.default({ dest: "./tmp" });
var handleSemanaController = new HandleSemanaController_1.HandleSemanaController();
semanasRoutes.post("/", ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdmin, handleSemanaController.create);
semanasRoutes.get("/", ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdmin, handleSemanaController.read);
semanasRoutes.patch("/", ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdmin, handleSemanaController.update);
semanasRoutes.delete("/:dia", ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdmin, handleSemanaController.delete);
semanasRoutes.post("/import", upload.single("file"), ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdmin, handleSemanaController.import);

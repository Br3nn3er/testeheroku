"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
var PORT = process.env.PORT || 3333;
app_1.app.listen(PORT, function () { return console.log("Server is Running: " + PORT); });

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var config_1 = require("./utils/config");
var app = express_1.default();
var DateNow = Date().toString();
app.get('/', function (req, res) {
    res.json({ message: 'Ok' });
});
app.listen(config_1.PORT, function () {
    console.info('⌚ Server starting');
    console.info("\uD83D\uDE80 Server started on " + config_1.HOST + config_1.PORT + " at " + DateNow);
});
' ';

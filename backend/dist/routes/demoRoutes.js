"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const demoController_1 = require("../controllers/demoController");
const router = express_1.default.Router();
router.get('/demos', demoController_1.getDemos);
exports.default = router;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const frameController_1 = require("../controllers/frameController");
const router = express_1.default.Router();
router.get('/demos/:id/frames', frameController_1.getFramesByDemo);
router.put('/frames/:id', frameController_1.updateFrame);
exports.default = router;

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateFrame = exports.getFramesByDemo = void 0;
const database_1 = __importDefault(require("../config/database"));
const getFramesByDemo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const result = yield database_1.default.query('SELECT * FROM frames WHERE demo_id = $1', [id]);
        const frames = result;
        res.send(frames);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.getFramesByDemo = getFramesByDemo;
const updateFrame = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { frame_html } = req.body;
    try {
        yield database_1.default.query('UPDATE frames SET frame_html = $1 WHERE id = $2', [frame_html, id]);
        res.status(200).send({ message: 'Frame updated successfully' });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.updateFrame = updateFrame;

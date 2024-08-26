"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const pg_promise_1 = __importDefault(require("pg-promise"));
dotenv_1.default.config();
const conn = (0, pg_promise_1.default)()("postgres://postgres:root@localhost:5432/demo_frame_editor");
exports.default = conn;

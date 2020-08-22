"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const Post_1 = require("./entities/Post");
const constants_1 = require("./constants");
exports.default = {
    migrations: {
        path: path_1.default.join(__dirname, "./migrations"),
        pattern: /^[\w-]+\d+\.[tj]s$/,
    },
    dbName: "mydb",
    entities: [Post_1.Post],
    user: "nenadsavovic",
    password: "",
    debug: !constants_1.__prod__,
    type: "postgresql",
};
//# sourceMappingURL=mikro-orm.config.js.map
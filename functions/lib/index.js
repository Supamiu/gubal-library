"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const path = require("path");
exports.universal = functions.https.onRequest((request, response) => {
    require(path.join(process.cwd(), '/dist/gubal-webpack/server')).app(request, response);
});
//# sourceMappingURL=index.js.map
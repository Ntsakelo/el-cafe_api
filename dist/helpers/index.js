"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.genToken = exports.checkPassword = exports.crypted = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const crypted = async (password) => {
    try {
        const salt = await bcrypt_1.default.genSalt(10);
        const crypted = await bcrypt_1.default.hash(password, salt);
        return crypted;
    }
    catch (error) {
        console.log(error);
    }
};
exports.crypted = crypted;
const checkPassword = async (password, hash) => {
    try {
        const passwordMatch = await bcrypt_1.default.compare(password, hash);
        return passwordMatch;
    }
    catch (error) {
        console.log(error);
    }
};
exports.checkPassword = checkPassword;
const genToken = async (email, userId) => {
    const token = jsonwebtoken_1.default.sign({
        email,
        userId
    }, process.env.SECRET, { expiresIn: '1h' });
    return token;
};
exports.genToken = genToken;
const verifyToken = async (token) => {
    try {
        const decoded = jsonwebtoken_1.default.verify(token, process.env.SECRET);
        return decoded;
    }
    catch (error) {
        console.log(error);
    }
};
exports.verifyToken = verifyToken;
//# sourceMappingURL=index.js.map
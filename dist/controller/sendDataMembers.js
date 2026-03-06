"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addnewMeber = void 0;
const promises_1 = __importDefault(require("fs/promises"));
const crypto_1 = __importDefault(require("crypto"));
const requestMembers_1 = require("./requestMembers");
const MEMBERS_LIST_PATH = './src/data/members.json';
//<!---------------------------------------------------------------------------------------------------------------!>
const writeMembers = async (member) => {
    try {
        await promises_1.default.writeFile(MEMBERS_LIST_PATH, JSON.stringify(member, null, 2));
    }
    catch (error) {
        throw error;
    }
};
//<!---------------------------------------------------------------------------------------------------------------!>
const addnewMeber = async (member) => {
    const members = await (0, requestMembers_1.getAllMembers)();
    const newMember = { ...member, id: crypto_1.default.randomUUID() };
    members.push(newMember);
    try {
        await writeMembers(members);
        return newMember;
    }
    catch (error) {
        throw error;
    }
};
exports.addnewMeber = addnewMeber;
//<!---------------------------------------------------------------------------------------------------------------!>

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllAssignments = void 0;
const promises_1 = __importDefault(require("fs/promises"));
const ASSIGNMENTS_LIST_PATH = './src/data/assignments.json';
//<!---------------------------------------------------------------------------------------------------------------!>
const getAllAssignments = async () => {
    try {
        const jsonMembers = await promises_1.default.readFile(ASSIGNMENTS_LIST_PATH, 'utf-8');
        const assignment = await JSON.parse(jsonMembers);
        return assignment;
    }
    catch (error) {
        throw error;
    }
};
exports.getAllAssignments = getAllAssignments;
//<!---------------------------------------------------------------------------------------------------------------!>

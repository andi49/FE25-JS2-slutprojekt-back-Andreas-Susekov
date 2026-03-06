"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addNewAssignment = exports.writeAssignment = void 0;
const dayjs_1 = __importDefault(require("dayjs"));
const crypto_1 = __importDefault(require("crypto"));
const promises_1 = __importDefault(require("fs/promises"));
const requestAssignment_1 = require("./requestAssignment");
const ASSIGNMENTS_LIST_PATH = './src/data/assignments.json';
//<!---------------------------------------------------------------------------------------------------------------!>
const writeAssignment = async (assignments) => {
    try {
        await promises_1.default.writeFile(ASSIGNMENTS_LIST_PATH, JSON.stringify(assignments, null, 2));
    }
    catch (error) {
        throw error;
    }
};
exports.writeAssignment = writeAssignment;
//<!---------------------------------------------------------------------------------------------------------------!>
const addNewAssignment = async (assignment) => {
    const assignments = await (0, requestAssignment_1.getAllAssignments)();
    const newAssignment = { ...assignment, id: crypto_1.default.randomUUID(),
        timestamp: (0, dayjs_1.default)().format('dddd D MMMM'), status: 'new', assigendto: 'No one is assigned to the task' };
    assignments.push(newAssignment);
    try {
        await (0, exports.writeAssignment)(assignments);
        return newAssignment;
    }
    catch (error) {
        throw error;
    }
};
exports.addNewAssignment = addNewAssignment;
//<!---------------------------------------------------------------------------------------------------------------!>

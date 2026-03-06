"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAssignemntID = void 0;
const requestAssignment_1 = require("./requestAssignment");
const sendDataAssignmnet_1 = require("./sendDataAssignmnet");
const deleteAssignemntID = async (id) => {
    try {
        const assignment = await (0, requestAssignment_1.getAllAssignments)();
        const index = assignment.findIndex((assignment) => assignment.id === id);
        if (index === -1)
            return;
        else {
            // Splice returnerar en array med ett object så vi destructar den
            const [deleteAssignment] = assignment.splice(index, 1);
            await (0, sendDataAssignmnet_1.writeAssignment)(assignment);
            return deleteAssignment;
        }
    }
    catch (error) {
        throw error;
    }
};
exports.deleteAssignemntID = deleteAssignemntID;

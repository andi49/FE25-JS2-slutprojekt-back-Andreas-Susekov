"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAssignment = void 0;
const requestAssignment_1 = require("./requestAssignment");
const sendDataAssignmnet_1 = require("./sendDataAssignmnet");
const updateAssignment = async (id, assigendto, status) => {
    try {
        const assignment = await (0, requestAssignment_1.getAllAssignments)();
        const index = assignment.findIndex((assignment) => assignment.id === id);
        if (index === -1)
            return;
        else {
            assignment[index].assigendto = assigendto;
            assignment[index].status = status;
            await (0, sendDataAssignmnet_1.writeAssignment)(assignment);
            return assignment[index];
        }
    }
    catch (error) {
        throw error;
    }
};
exports.updateAssignment = updateAssignment;

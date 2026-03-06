"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNewAssignment = void 0;
const isNewAssignment = (obj) => {
    typeof obj.id === 'string' &&
        typeof obj.title === 'string' &&
        typeof obj.description === 'string' &&
        typeof obj.category === 'string' &&
        typeof obj.status === 'string' &&
        typeof obj.assigendto === 'string' &&
        typeof obj.timestamp === 'string';
    return obj;
};
exports.isNewAssignment = isNewAssignment;

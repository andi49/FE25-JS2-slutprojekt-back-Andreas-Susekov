"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNewMember = void 0;
const isNewMember = (obj) => {
    typeof obj.id === 'string' &&
        typeof obj.name === 'string' &&
        typeof obj.category === 'string';
    return obj;
};
exports.isNewMember = isNewMember;

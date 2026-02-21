import { Assignments, newAssignment,  } from "../models/assignmentModels";
import dayjs from 'dayjs'
import crypto from 'crypto';
import fs from 'fs/promises';
import { getAllAssignments } from "./requestAssignment";
 const ASSIGNMENTS_LIST_PATH = './src/data/assignments.json'
//<!---------------------------------------------------------------------------------------------------------------!>
const writeAssignment = async (assignments: Assignments[]) => {
    try {
        await fs.writeFile(ASSIGNMENTS_LIST_PATH, JSON.stringify(assignments, null, 2));
    }
    catch(error){
        throw error;
    }
}
//<!---------------------------------------------------------------------------------------------------------------!>
export const addNewAssignment = async (assignment: newAssignment):Promise<Assignments> => {
    const assignments = await getAllAssignments()

    const newAssignment: Assignments = {...assignment, id: crypto.randomUUID()
        , timestamp: dayjs().format('dddd D MMMM'), status: 'new', assigendto:'undefined' }
    assignments.push(newAssignment)

     try{
        await writeAssignment(assignments);
        return newAssignment;
    }
    catch(error){
        throw error;
    }
}
//<!---------------------------------------------------------------------------------------------------------------!>
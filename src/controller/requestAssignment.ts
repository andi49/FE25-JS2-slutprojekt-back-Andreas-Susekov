import fs from 'fs/promises'
import { Assignments } from '../models/assignmentModels'
 const ASSIGNMENTS_LIST_PATH = './src/data/assignments.json'
//<!---------------------------------------------------------------------------------------------------------------!>
 export const getAllAssignments = async (): Promise<Assignments[]> =>{
     try {
            const jsonMembers = await fs.readFile(ASSIGNMENTS_LIST_PATH, 'utf-8');
            const assignment: Assignments[] = await JSON.parse(jsonMembers);
            return assignment;
        }
        catch(error){
            throw error;
        }
 }
//<!---------------------------------------------------------------------------------------------------------------!>

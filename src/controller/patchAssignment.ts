import { getAllAssignments } from "./requestAssignment"
import {writeAssignment} from "./sendDataAssignmnet"

export const updateAssignment = async (id:string, assigendto:string, status:string) => {
    try{
        const assignment = await getAllAssignments();
        const index = assignment.findIndex((assignment: any) => assignment.id === id);
        
        if (index === -1) return;
        else {
            assignment[index].assigendto = assigendto;
            assignment[index].status = status;
            await writeAssignment(assignment);
            return assignment[index];
        }
    }
        catch (error) {
        throw error;
    }
}
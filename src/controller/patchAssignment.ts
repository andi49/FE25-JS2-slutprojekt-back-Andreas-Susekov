import { getAllAssignments } from "./requestAssignment"

const getAssigendment = async (assigendto: string) => {
    try{
        const assignment = await getAllAssignments();
        const index = assignment.findIndex((assig: any) => assig.assigendto === assigendto);
    
        if (index === -1) return;
        else return assignment[index];
    }
        catch (error) {
        throw error;
    }
}
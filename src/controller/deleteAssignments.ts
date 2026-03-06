import { getAllAssignments } from "./requestAssignment";
import { writeAssignment } from "./sendDataAssignmnet";

export const deleteAssignemntID = async (id: string) => {
    try{
        const assignment = await getAllAssignments();
        const index = assignment.findIndex((assignment) => assignment.id === id);
    
        if (index === -1) return;
        else {
            // Splice returnerar en array med ett object så vi destructar den
            const [deleteAssignment] = assignment.splice(index, 1);
            await writeAssignment(assignment);
            return deleteAssignment;
        }
    }
        catch (error) {
        throw error;
    }
}

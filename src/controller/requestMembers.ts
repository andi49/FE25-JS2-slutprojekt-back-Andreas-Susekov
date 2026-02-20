import fs from 'fs/promises'
import { Members } from '../models/membersModels';

 const MEMBERS_LIST_PATH = './src/data/members.json'
//<!---------------------------------------------------------------------------------------------------------------!>
export const getAllMembers = async (): Promise<Members[]> => {
    try {
        const jsonMembers = await fs.readFile(MEMBERS_LIST_PATH, 'utf-8');
        const members: Members[] = await JSON.parse(jsonMembers);
        return members;
    }
    catch(error){
        throw error;
    }
}
//<!---------------------------------------------------------------------------------------------------------------!>
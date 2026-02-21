import fs from 'fs/promises';
import crypto from 'crypto';
import { Members } from '../models/membersModels';
import { newMember } from '../models/membersModels';
import { getAllMembers } from './requestMembers';
 const MEMBERS_LIST_PATH = './src/data/members.json'
//<!---------------------------------------------------------------------------------------------------------------!>
const writeMembers = async (member: Members[]) => {
    try {
        await fs.writeFile(MEMBERS_LIST_PATH, JSON.stringify(member, null, 2));
    }
    catch(error){
        throw error
    }
}
//<!---------------------------------------------------------------------------------------------------------------!>
export const addnewMeber = async (member: newMember):Promise<Members> =>{
    const members = await getAllMembers();

    const newMember: Members = {...member, id: crypto.randomUUID()}
    members.push(newMember);

    try{
        await writeMembers(members);
        return newMember;
    }
    catch(error){
        throw error
    }
}
//<!---------------------------------------------------------------------------------------------------------------!>

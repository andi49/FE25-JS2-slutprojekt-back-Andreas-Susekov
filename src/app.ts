import express from 'express';
import { getAllMembers } from './controller/requestMembers';
import { getAllAssignments } from './controller/requestAssignment';
import { addnewMeber } from './controller/sendDataMembers';
import { isNewMember } from './models/membersModels';
import { isNewAssignment } from './models/assignmentModels';
import { addNewAssignment } from './controller/sendDataAssignmnet';
import cors from "cors";


export const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send('API running OK')
})

app.get('/members', async (req, res) => {
    console.log('Queries:', req.query);
    try {
        const members = await getAllMembers();
        console.log('Get all members');
        res.json(members);
       
    } catch (error) {
        console.error('Error fetching members:', error);
        res.status(500).json({ error: 'Failed to get members' });
    }
})

app.post('/members', async (req, res) => {

    console.log(req.body);

    try {
        if(isNewMember(req.body)){
            const newMember = await addnewMeber(req.body);
            res.json({ message: 'success', newMember });
        }
        else{
            res.status(400).json({ message: 'Wrong format' });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'failed to add new member' });
    }
})





app.get('/assignments', async (req, res) => {
    console.log('Queries:', req.query);
    try {
        const assignments = await getAllAssignments();
        console.log('Get all assignment');
        res.json(assignments);
       
    } catch (error) {
        console.error('Error fetching assignments:', error);
        res.status(500).json({ error: 'Failed to get assignments'});
    }
})


app.post('/assignments', async (req, res) => {

    console.log(req.body);

    try {
        if(isNewAssignment(req.body)){
            const newAssignment = await addNewAssignment(req.body);
            res.json({ message: 'success', newAssignment });
        }
        else{
            res.status(400).json({ message: 'Wrong format' });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'failed to add new assignment' });
    }
})
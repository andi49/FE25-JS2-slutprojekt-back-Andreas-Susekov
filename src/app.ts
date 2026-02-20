import express from 'express';
import { getAllMembers } from './controller/requestMembers';
import { getAllAssignment } from './controller/requestAssignment';
import { addnewMeber } from './controller/sendDataMembers';
import { isNewMember } from './models/membersModels';

export const app = express();
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

app.get('/assignments', async (req, res) => {
    console.log('Queries:', req.query);
    try {
        const assignments = await getAllAssignment();
        console.log('Get all assignment');
        res.json(assignments);
       
    } catch (error) {
        console.error('Error fetching assignments:', error);
        res.status(500).json({ error: 'Failed to get assignments'});
    }
})

app.post('/members', async (req, res) => {

    console.log(req.body);

    try {
        if(isNewMember(req.body)){
            const newMovie = await addnewMeber(req.body);
            res.json({ message: 'success', newMovie });
        }
        else{
            res.status(400).json({ message: 'Wrong format' });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'failed to add movie' });
    }
})
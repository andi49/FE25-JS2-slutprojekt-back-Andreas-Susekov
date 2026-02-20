import fs from 'fs/promises'

 const ASSIGNMENTS_LIST_PATH = './src/data/assignments.json'
//<!---------------------------------------------------------------------------------------------------------------!>
 export const getAllAssignment = async () => {

    const jsonAssignment = await fs.readFile(ASSIGNMENTS_LIST_PATH, "utf-8")

    const assignments = await JSON.parse(jsonAssignment)

    return assignments
}
//<!---------------------------------------------------------------------------------------------------------------!>

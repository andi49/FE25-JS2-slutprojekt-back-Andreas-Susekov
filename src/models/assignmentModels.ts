export interface Assignments {
   id:string,
   title: string,
   description: string,
   category: string,
   status: string,
   assigendto: string,
   timestamp: string
}

export type newAssignment = {
   id:string,
   title: string,
   description: string,
   category: string,
   status: string,
   assigendto: string,
   timestamp: string
}

export const isNewAssignment = (obj:any) => {
    
        typeof obj.id === 'string' &&
        typeof obj.title === 'string' &&
        typeof obj.description === 'string' &&
        typeof obj.category === 'string' &&
        typeof obj.status === 'string' &&
        typeof obj.assigendto === 'string' &&
        typeof obj.timestamp === 'string'
         return obj
}
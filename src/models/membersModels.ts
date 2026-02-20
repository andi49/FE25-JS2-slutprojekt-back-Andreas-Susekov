export interface Members {
    id:string,
    name: string,
    catergory: string
}

export type newMember = {
    id: string,
    name: string,
    catergory: string
}

export const isNewMember = (obj:any) => {
    
        typeof obj.id === 'string' &&
        typeof obj.name === 'string' &&
        typeof obj.catergory === 'string'
         return obj
}
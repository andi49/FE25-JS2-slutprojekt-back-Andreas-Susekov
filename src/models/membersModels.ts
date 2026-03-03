export interface Members {
    id:string,
    name: string,
    category: string
}

// type NewMember = Omit<Members, 'id'>;


export type newMember = {
    id: string,
    name: string,
    category: string
}

export const isNewMember = (obj:any) => {
    
        typeof obj.id === 'string' &&
        typeof obj.name === 'string' &&
        typeof obj.category === 'string'
         return obj
}
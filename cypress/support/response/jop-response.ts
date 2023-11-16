export interface AddJopResponse 
{
    data: {
        id: number
        title: string
        description: string
        note: string
        jobSpecification: {
            id: number
            filename: any
            fileType: any
            
            fileSize: any
        }
    }
    meta: {
        total: number
    },
    rels: []
}

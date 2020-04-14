export class Todo {

    public constructor(
        public id: number,
        public description: string,
        public date: Date,
        public done: boolean
    ){}
    
}
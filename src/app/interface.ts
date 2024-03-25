export interface ITask {
  description:string;
  done:boolean
}

export interface Project {
    id:number;
    title:string;
    description?: string;
    dueDate?:Date;
    list:string;
}

export interface kanbanBoard{
    title:string;
    description?:string;
    lists: string[];
    tasks:Project[]
}

export interface KanbanList {
    id: number;
    title: string;
    cards: KanbanCard[];
  }
  
  export interface KanbanCard {
    id: number;
    title: string;
    description: string;
  }
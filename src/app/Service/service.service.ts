import { Injectable } from '@angular/core';
import { KanbanList, KanbanCard } from '../interface';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

  private kanbakLists: KanbanList[] = [
    {
      id:1,
      title: "Todo",
      cards:[
        {
          id:1, 
          title:'Task 1',
          description:"Description for Task 1"
        },
        {
          id:2, 
          title:'Task 2',
          description:"Description for Task 2"
        }
      ]
    },
    {
      id:2,
      title: 'In Progress',
      cards:[
        {
          id:3,
          title:'Task 3',
          description:"Description for task 3"
        },
        {
          id:4,
          title:'Task 4',
          description:"Description for task 4"
        }
      ]
    },
    {
      id:3,
      title:"Completed",
      cards:[
        {
          id:5,
          title:'Task 5',
          description:"Description for Task 5",
        },
        {
          id:6,
          title:'Task 6',
          description:"Description for Task 6",
        }
      ]
    }
  ]

  getKanBanLists():KanbanList[] {
    return this.kanbakLists;
  }

  getkanbanCards(ListId:number):KanbanCard[] {
    const list = this.kanbakLists.find((list) => list.id === ListId);
    return list ? list.cards : []
  }
}

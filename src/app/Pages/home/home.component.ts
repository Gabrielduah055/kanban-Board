import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { ITask } from 'src/app/interface';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

 
  todoForm !: FormGroup;
  tasks: ITask [] = [];
  progress: ITask [] = [];
  completed: ITask [] = [];
  updateID!:any;
  isEditEnabled :boolean = false;

  constructor(private fb:FormBuilder){}

  ngOnInit(): void {
    this.todoForm = this.fb.group({
      item:['', Validators.required]
    })

    console.log('input valie: ', this.todoForm.value.item)

  }

  

  drop(event: CdkDragDrop<ITask[]>) { 
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  //adding new task
  addTask() {
    this.tasks.push({
      description:this.todoForm.value.item,
      done:false
    })

    this.todoForm.reset();
  }

  updateTask() {
    this.tasks[this.updateID].description = this.todoForm.value.item
    this.tasks[this.updateID].done = false;
    this.todoForm.reset();
    this.updateID = undefined;
    this.isEditEnabled = false;
  }


  deleteTask(i:number) {
    this.tasks.splice(i, 1)
    console.log('its working')
  }

  deleteProgressTask(i:number) {
    this.progress.splice(i, 1)
    console.log('progressing is working')
  }

  deleteCompleteTask(i:number){
    this.completed.splice(i, 1)
    console.log('complete is working')
  }

  onEditTask(i:number, item:ITask) {
    this.todoForm.controls['item'].setValue(item.description);
    this.updateID = i;
    this.isEditEnabled = true
  }
  onEditProgressTask(i:number, item:ITask) {
    this.todoForm.controls['item'].setValue(item.description);
    this.updateID = i;
    this.isEditEnabled = true
  }
}
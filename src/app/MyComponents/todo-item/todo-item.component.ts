import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../Todo';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
@Input() todo?:Todo;
@Output() todoDelete: EventEmitter<Todo>=new EventEmitter();
@Output() todoCheckBox: EventEmitter<Todo>=new EventEmitter();
constructor(){
  
}
onClick(todo?:Todo){
  this.todoDelete.emit(todo);
  console.log("Deleted !!!");
}
onCheckboxClick(todo?:Todo){  
  this.todoCheckBox.emit(todo);
}
}

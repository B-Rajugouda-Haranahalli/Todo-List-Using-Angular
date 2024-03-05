import { Component } from '@angular/core';
import { Todo } from '../../Todo';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TodoItemComponent } from "../todo-item/todo-item.component";
import { AddTodoComponent } from "../add-todo/add-todo.component";


@Component({
    selector: 'app-todos',
    standalone: true,
    templateUrl: './todos.component.html',
    styleUrl: './todos.component.css',
    imports: [CommonModule, RouterModule, TodoItemComponent, AddTodoComponent]
})
export class TodosComponent {
todos :Todo[];
localItem=localStorage.getItem("todos");
constructor(){
  
  if(this.localItem==null){
    this.todos=[];
  }
  else{
    this.todos=JSON.parse(this.localItem);
  }
}
deleteTodo(todo:Todo){
  console.log(todo);
  const index = this.todos.indexOf(todo);
  this.todos.splice(index,1);
  localStorage.setItem("todos",JSON.stringify(this.todos));
}
addTodo(todo:Todo){
  console.log(todo);
  this.todos.push(todo);  
  localStorage.setItem("todos",JSON.stringify(this.todos));
}
strikecheckBox(todo:Todo){
  console.log(todo);
  const index = this.todos.indexOf(todo);
  this.todos[index].active=!this.todos[index].active;  
  localStorage.setItem("todos",JSON.stringify(this.todos));
}

}

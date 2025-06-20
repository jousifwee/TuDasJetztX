import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoService } from '../../services/todo.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
todos$: ReturnType<TodoService['getTodos']>;
newTitle = '';

constructor(private todoService: TodoService) {
  this.todos$ = this.todoService.getTodos();
}

  addTodo() {
    if (this.newTitle.trim()) {
      this.todoService.addTodo({ title: this.newTitle, done: false });
      this.newTitle = '';
    }
  }

  deleteTodo(id: string) {
    this.todoService.deleteTodo(id);
  }
}

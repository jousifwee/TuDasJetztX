import { inject, Injectable } from '@angular/core';
import { collection, collectionData, deleteDoc, doc, Firestore, addDoc } from '@angular/fire/firestore';
import { Todo } from '../models/todo';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TodoService {
  private firestore = inject(Firestore);
  private todoCollection = collection(this.firestore, 'todos');

  getTodos(): Observable<Todo[]> {
    return collectionData(this.todoCollection, { idField: 'id' }) as Observable<Todo[]>;
  }

  addTodo(todo: Todo) {
    return addDoc(this.todoCollection, todo);
  }

  deleteTodo(id: string) {
    const todoDoc = doc(this.firestore, `todos/${id}`);
    return deleteDoc(todoDoc);
  }
}

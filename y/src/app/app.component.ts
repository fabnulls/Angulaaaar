// app.component.ts

import { Component } from '@angular/core';

interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newTodo: string = '';
  todos: Todo[] = []; // Array für die Liste der To-Do-Aufgaben

  addTodo() {
    if (this.newTodo.trim().length === 0) {
      return; // Verhindere das Hinzufügen leerer Aufgaben
    }
    
    // Erzeuge eine eindeutige ID für die neue Aufgabe
    const newTodoItem: Todo = {
      id: this.todos.length + 1,
      task: this.newTodo.trim(),
      completed: false
    };

    // Füge die neue Aufgabe zum Array hinzu
    this.todos.push(newTodoItem);

    // Setze das Eingabefeld zurück
    this.newTodo = '';
  }

  toggleCompleted(todo: Todo) {
    todo.completed = !todo.completed;
  }

  deleteTodo(todo: Todo) {
    // Finde den Index der zu löschenden Aufgabe im Array
    const index = this.todos.findIndex(item => item.id === todo.id);
    if (index !== -1) {
      // Entferne die Aufgabe aus dem Array
      this.todos.splice(index, 1);
    }
  }
}

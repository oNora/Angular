import { Component } from '@angular/core';
import { ITodo } from './interfaces/todo';
import { TodoService } from './todo.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor(public todoService: TodoService) { }

    // we can create a getter so we don't have to keep and maintain extra state on the component for the todos
    get todoList() {
        return this.todoService.todoList;
    }
    handleToggle(index: number) {
        this.todoService.toggle(index);
    }

    editHandler(todo: ITodo) {
        this.todoService.selectedTodo = todo;
    }

    get selectedTodoTitle() {
        const selectedTodo = this.todoService.selectedTodo;
        return selectedTodo ? selectedTodo.title : null;
    }

    saveTodo(title: string) {
        this.todoService.save(title);
    }
}

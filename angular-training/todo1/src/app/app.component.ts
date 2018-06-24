import { Component } from '@angular/core';
import { ITodo } from './interfaces/todo';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    selectedTodo: ITodo;
    todoList: ITodo[] = [
        {
            title: 'Say Hello 1',
            completed: true
        },
        {
            title: 'Say Hello 2',
            completed: true
        },
        {
            title: 'Say Hello 3',
            completed: false
        },
        {
            title: 'Say Hello 4',
            completed: true
        },
    ];


    handleToggle(index: number) {
        this.todoList[index].completed = !this.todoList[index].completed;
    }

    editHandler(todo: ITodo) {
        this.selectedTodo = todo;
    }

    saveTodo(title: string) {

        if (this.selectedTodo) {
            this.selectedTodo.title = title;
            // clean selected todo variable after updating
            this.selectedTodo = null;
            return;
        }

        this.todoList.push({ title: title, completed: false });
    }
}

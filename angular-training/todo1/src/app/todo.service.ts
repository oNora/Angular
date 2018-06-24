import { Injectable } from '@angular/core';
import { ITodo } from './interfaces/todo';

@Injectable({
    providedIn: 'root'
})
export class TodoService {

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
    constructor() { }

    toggle(index: number) {
        this.todoList[index].completed = !this.todoList[index].completed;
    }

    edit(todo: ITodo) {
        this.selectedTodo = todo;
    }

    save(title: string) {

        if (this.selectedTodo) {
            this.selectedTodo.title = title;
            // clean selected todo variable after updating
            this.selectedTodo = null;
            return;
        }

        this.todoList.push({ title: title, completed: false });
    }

}

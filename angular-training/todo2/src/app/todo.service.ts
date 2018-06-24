import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../environments/environment';

import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { ITodo } from './interfaces/todo';


@Injectable({
    providedIn: 'root'
})
export class TodoService implements OnDestroy {

    apiUrl = `${environment.apiUrl}/todos`;
    todoSubscription: Subscription;

    selectedTodo: ITodo = null;

    loaded = false;
    todoList: ITodo[];
    // with api call this is not used
    // todoList: ITodo[] = [
    //     {
    //         title: 'Say Hello 1',
    //         completed: true
    //     },
    //     {
    //         title: 'Say Hello 2',
    //         completed: true
    //     },
    //     {
    //         title: 'Say Hello 3',
    //         completed: false
    //     },
    //     {
    //         title: 'Say Hello 4',
    //         completed: true
    //     },
    // ];
    constructor(private http: HttpClient) {
        this.todoSubscription = this.getData().subscribe(
            {
                next: result => {
                    console.log(result);
                },
                error: error => {
                    console.log(`error: ${error}`);
                },
                complete: () => {
                    this.loaded = true;
                }
            }
        );
    }

    getData(): Observable<any> {
        return this.http.get(this.apiUrl).pipe(
            map((data: Object[]) => {
                // console.log('data: ', data);
                return data.map(
                    (item: { title: string, completed: boolean }) => {
                        // console.log('item:', item);
                        return {
                            title: item.title, completed: item.completed
                        };
                    }
                );
            })
        );
    }
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

    ngOnDestroy() {
        this.todoSubscription.unsubscribe();
    }

}

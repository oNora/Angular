import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

    @Input() title: string;
    @Input() completed: boolean;

    // tslint:disable-next-line:no-output-rename
    @Output('toggle') toggleCompletedEmitter = new EventEmitter();
    // tslint:disable-next-line:no-output-rename
    @Output('edit') editCompletedEmitter = new EventEmitter();
    constructor() { }

    ngOnInit() {
    }


    toggleCompleted() {
        this.toggleCompletedEmitter.emit();
    }
    editCompleted() {
        this.editCompletedEmitter.emit();
    }

}

import { Component, OnInit } from '@angular/core';
import { RxjsApiService } from './rxjs-api.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'app';
    constructor(private api: RxjsApiService) {
    }

    ngOnInit() {
        this.api.testTwo().subscribe(
            (result) => console.log('testTwo: ', result)
        );
    }
}

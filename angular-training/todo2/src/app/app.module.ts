import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodoService } from './todo.service';
import { MyForDirective } from './my-for.directive';

@NgModule({
    declarations: [
        AppComponent,
        TodoComponent,
        MyForDirective
    ],
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    providers: [
        TodoService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

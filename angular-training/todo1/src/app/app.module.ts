import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodoService } from './todo.service';
import { ColorDirective } from './color.directive';
import { ColorRainbowDirective } from './color-rainbow.directive';
import { MyIfDirective } from './my-if.directive';

@NgModule({
    declarations: [
        AppComponent,
        TodoComponent,
        ColorDirective,
        ColorRainbowDirective,
        MyIfDirective
    ],
    imports: [
        BrowserModule
    ],
    providers: [
        TodoService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

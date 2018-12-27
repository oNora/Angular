import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './pages/menu.component';
import { WelcomeComponent } from './pages/welcome.component';
import { AboutComponent } from './pages/about.component';
import { PageNotFoundComponent } from './pages/page-not-found.component';
import { ModalDialogModule } from './shared/modal-dialog/modal-dialog.module';
import { ModalDialogService } from './shared/modal-dialog/moda-dialog.service';

@NgModule({
  imports: [
    BrowserModule,
    ModalDialogModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    MenuComponent,
    WelcomeComponent,
    AboutComponent,
    PageNotFoundComponent
  ],
  providers: [ModalDialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }

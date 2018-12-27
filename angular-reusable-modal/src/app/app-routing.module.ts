import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './pages/welcome.component';
import { PageNotFoundComponent } from './pages/page-not-found.component';
import { AboutComponent } from './pages/about.component';

const appRoutes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'about', component: AboutComponent },

  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/form/form.component';
import { AdministratorComponent } from './components/administrator/administrator.component';

import { Route, RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

const routes: Route [] = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'form', component: FormComponent },
  { path: 'administrator', component: AdministratorComponent }  
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    AdministratorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

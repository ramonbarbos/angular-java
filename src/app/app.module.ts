import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HttpInterceptorModule } from './service/header-interceptor.service';

export const appRouts: Routes = [
  {path : 'home', component : HomeComponent},
  {path : 'login', component : LoginComponent},
  {path : '', component : LoginComponent} //definindo tela padrão

];

export const routes : ModuleWithProviders<any>  = RouterModule.forRoot(appRouts);





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    routes,
    HttpInterceptorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

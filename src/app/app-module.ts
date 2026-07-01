import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Importação dos seus componentes
import { App } from './app';
import { Login } from './login/login';
import { Home } from './home/home';
import { Dashboard } from './dashboard/dashboard';

@NgModule({
  declarations: [
    App,
    Login,
    Home,
    Dashboard // <-- Agora o Angular reconhece todos eles globalmente
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // <-- FormsModule disponível para a aplicação toda!
    HttpClientModule
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule { }
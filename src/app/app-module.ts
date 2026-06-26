import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';

// 1. ADICIONE ESTAS DUAS LINHAS AQUI NO TOPO:
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
    Dashboard
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // 2. ADICIONE OS DOIS MÓDULOS AQUI DENTRO:
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule { }
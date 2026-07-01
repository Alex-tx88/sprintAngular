import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <-- 1. Adicionado aqui!

import { DashboardRoutingModule } from './dashboard-routing-module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule // <-- 2. Adicionado aqui!
  ]
})
export class DashboardModule { }
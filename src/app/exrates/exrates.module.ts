import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ExratesRoutingModule } from './exrates-routing.module';
import { CurrencyListComponent } from './components/currency-list/currency-list.component';
import { CurrencyRatesComponent } from './components/currency-rates/currency-rates.component';
import { ClarityModule } from '@clr/angular';


@NgModule({
  declarations: [CurrencyListComponent, CurrencyRatesComponent],
  imports: [
    CommonModule,
    ClarityModule,
    ExratesRoutingModule,
    HttpClientModule
  ]
})
export class ExratesModule { }

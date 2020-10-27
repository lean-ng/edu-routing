import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExratesRoutingModule } from './exrates-routing.module';
import { CurrencyListComponent } from './components/currency-list/currency-list.component';
import { CurrencyRatesComponent } from './components/currency-rates/currency-rates.component';


@NgModule({
  declarations: [CurrencyListComponent, CurrencyRatesComponent],
  imports: [
    CommonModule,
    ExratesRoutingModule
  ]
})
export class ExratesModule { }

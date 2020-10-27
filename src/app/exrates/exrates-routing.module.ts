import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrencyListComponent } from './components/currency-list/currency-list.component';
import { CurrencyRatesComponent } from './components/currency-rates/currency-rates.component';

const routes: Routes = [
  { path: 'exrates/currencies', component: CurrencyListComponent },
  { path: 'exrates/rates', component: CurrencyRatesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExratesRoutingModule { }

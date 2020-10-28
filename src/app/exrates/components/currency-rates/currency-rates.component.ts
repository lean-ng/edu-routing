import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { RatesResponse } from '../../model/rates-response.interface';
import { RatesAPIService } from '../../rates-api.service';

@Component({
  selector: 'ex-currency-rates',
  templateUrl: './currency-rates.component.html',
  styleUrls: ['./currency-rates.component.css']
})
export class CurrencyRatesComponent implements OnInit {

  currency: string;
  rates$: Observable<RatesResponse>;

  constructor(
    private api: RatesAPIService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.rates$ = this.route.paramMap.pipe(
      map(params => params.get('currency')),
      tap(currency => this.currency = currency),
      switchMap(currency => this.api.getRates(currency))
    );
  }

  gotoList(): void {
    this.router.navigate(['/exrates/currencies', { last: this.currency}]);
  }
}

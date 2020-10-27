import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { RatesResponse } from '../../model/rates-response.interface';
import { RatesAPIService } from '../../rates-api.service';

@Component({
  selector: 'ex-currency-rates',
  templateUrl: './currency-rates.component.html',
  styleUrls: ['./currency-rates.component.css']
})
export class CurrencyRatesComponent implements OnInit {

  currency$: Observable<string>;
  rates$: Observable<RatesResponse>;

  constructor(
    private api: RatesAPIService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.currency$ = this.route.paramMap.pipe(
      map(params => params.get('currency'))
    );
    this.rates$ = this.currency$.pipe(
      switchMap(currency => this.api.getRates(currency))
    );
  }

}

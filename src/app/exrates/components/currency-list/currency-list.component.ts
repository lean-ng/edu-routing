import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RatesAPIService } from '../../rates-api.service';

@Component({
  selector: 'ex-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.css']
})
export class CurrencyListComponent implements OnInit {

  currencies$: Observable<string[]>;

  constructor(private api: RatesAPIService) {
    this.currencies$ = api.getCurrencies();
  }

  ngOnInit(): void {
  }

}

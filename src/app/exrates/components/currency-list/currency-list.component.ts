import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { RatesAPIService } from '../../rates-api.service';

@Component({
  selector: 'ex-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.css']
})
export class CurrencyListComponent implements OnInit {

  selectedCurrency = '';
  currencies$: Observable<string[]>;

  constructor(private api: RatesAPIService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.currencies$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedCurrency = params.get('last');
        console.log(this.selectedCurrency);
        return this.api.getCurrencies();
      })
    )
  }

}

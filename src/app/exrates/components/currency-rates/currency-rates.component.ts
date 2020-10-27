import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'ex-currency-rates',
  templateUrl: './currency-rates.component.html',
  styleUrls: ['./currency-rates.component.css']
})
export class CurrencyRatesComponent implements OnInit {

  currency$: Observable<string>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.currency$ = this.route.paramMap.pipe(
      map(params => params.get('currency'))
    );
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { RatesResponse } from './model/rates-response.interface';
import { map, switchMap } from 'rxjs/operators';

const baseUrl = 'https://api.exchangeratesapi.io/latest';

@Injectable({
  providedIn: 'root'
})
export class RatesAPIService {

  private currencies$: ReplaySubject<string[]> = null;

  constructor(private http: HttpClient) {}

  getCurrencies(): Observable<string[]> {
    if (this.currencies$ === null) {
      this.currencies$ = new ReplaySubject<string[]>(1);
      this.http.get<RatesResponse>(baseUrl).pipe(
        map(data => [ ...Object.getOwnPropertyNames(data.rates), 'EUR' ].sort())
      ).subscribe(this.currencies$);
    }
    return this.currencies$;
  }
}

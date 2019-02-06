import { Injectable } from '@angular/core';
import { Category } from './models/category';

@Injectable({
  providedIn: 'root'
})
export class LinksStateService {

  categories: Array<Category> = [];
  
  constructor() { 

    this.categories = [
      { id: 1, name: 'HTML' },
      { id: 2, name: 'CSS' },
      { id: 3, name: 'EcmaScript' },
      { id: 4, name: 'Angular' },
    ];
  }
}

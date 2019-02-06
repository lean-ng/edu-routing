import { Component, OnInit } from '@angular/core';
import { LinksStateService } from '../links-state.service';
import { Category } from '../models/category';

@Component({
  selector: 'links-categories',
  templateUrl: './links-categories.component.html',
  styleUrls: ['./links-categories.component.scss']
})
export class LinksCategoriesComponent implements OnInit {

  categories: Category[];

  constructor(private svc: LinksStateService) { }

  ngOnInit() {
    this.categories = this.svc.categories;
  }

}

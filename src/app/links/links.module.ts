import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LinksRoutingModule } from './links-routing.module';
import { LinksShellComponent } from './links-shell/links-shell.component';
import { LinksCategoriesComponent } from './links-categories/links-categories.component';
import { LinksHomeComponent } from './links-home/links-home.component';
import { LinksListComponent } from './links-list/links-list.component';

@NgModule({
  declarations: [LinksShellComponent, LinksCategoriesComponent, LinksHomeComponent, LinksListComponent],
  imports: [
    CommonModule,
    LinksRoutingModule
  ]
})
export class LinksModule { }

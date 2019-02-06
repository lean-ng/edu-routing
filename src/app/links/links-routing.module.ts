import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LinksShellComponent } from './links-shell/links-shell.component';
import { LinksCategoriesComponent } from './links-categories/links-categories.component';
import { LinksHomeComponent } from './links-home/links-home.component';
import { LinksListComponent } from './links-list/links-list.component';

const routes: Routes = [
  { path: 'links', component: LinksShellComponent, children: [
    { path: '', component: LinksHomeComponent },
    { path: ':id', component: LinksListComponent }
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LinksRoutingModule { }

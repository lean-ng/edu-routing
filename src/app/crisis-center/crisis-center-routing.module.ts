import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrisisCenterHomeComponent } from './components/crisis-center-home/crisis-center-home.component';
import { CrisisCenterComponent } from './components/crisis-center/crisis-center.component';
import { CrisisDetailComponent } from './components/crisis-detail/crisis-detail.component';

const routes: Routes = [{
  path: 'crisis-center',
  component: CrisisCenterComponent,
  children: [
    {
      path: ':slug',
      component: CrisisDetailComponent
    },
    {
      path: '',
      component: CrisisCenterHomeComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrisisCenterRoutingModule { }

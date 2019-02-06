import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoShellComponent } from './todo-shell/todo-shell.component';

const routes: Routes = [
  { path: 'todos', component: TodoShellComponent },
  { path: 'todos/:filter', component: TodoShellComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { TodoShellComponent } from './todo-shell/todo-shell.component';
import { TodoListComponent } from './todo-list/todo-list.component';

@NgModule({
  declarations: [TodoShellComponent, TodoListComponent],
  imports: [
    CommonModule,
    TodosRoutingModule
  ]
})
export class TodosModule { }

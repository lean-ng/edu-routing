import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'todo-shell',
  templateUrl: './todo-shell.component.html',
  styleUrls: ['./todo-shell.component.scss']
})
export class TodoShellComponent implements OnInit {

  public filter: string = '';

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe( (params: { filter?: string }) => {
      this.filter = params.filter || '';
    });
  }

  goHome() {
    this.router.navigate(['/home']);
  }
}

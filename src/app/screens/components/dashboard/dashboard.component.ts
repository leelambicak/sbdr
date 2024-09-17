import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  defaultForm: any = '';
  selectedCategories = [];
  form: boolean = false;
  constructor (private router: Router) {}
  openForm() {
    this.router.navigate(['/request-form'])
  }
}

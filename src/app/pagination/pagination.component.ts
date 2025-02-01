import { Component, type OnInit } from '@angular/core';
import { DropdownComponent } from "../component/dropdown/dropdown.component";
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagination',
  imports: [DropdownComponent,FormsModule,CommonModule],
  templateUrl: './pagination.component.html',
})
export class PaginationComponent implements OnInit {
  users: number = 5;
  page: number = 1;
  totalPage:number =1;
  userData =  localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData') || '{}') : [];
  userPerPage = [
    { id: 1, type: 5 },
    { id: 2, type: 10 },
    { id: 3, type: 15 },
    { id: 4, type: 20 },
    { id: 5, type: 25 },
    { id: 6, type: 30 },
    { id: 7, type: 35 },
    { id: 8, type: 40 },
    { id: 9, type: 45 },
    { id: 10, type: 50 },
  ]
  get totalPages(): number {
    return Math.ceil(this.userData.length / this.users);
  }
  getPages(): number[] {
    return Array(this.totalPages).fill(0).map((_, index) => index + 1);
  }
  
  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnInit(): void {
    // Retrieve query parameters from the URL
    console.log("")
  }

  // Navigate with updated query params
  navigateToPage(page: number) {
    this.router.navigate(['/'], { queryParams: { users: this.users, page: page } });
  }
  onOptionChange(newValue: number) {
    this.users = newValue;
    this.navigateToPage(1);
  }
  prevPage() {
    if (this.page > 1) {
      this.navigateToPage(this.page - 1);
    }
  }
  nextPage() {
    if (this.page < this.totalPages) {
      this.navigateToPage(this.page + 1);
    }
  }
  onPageChange(page: number) {
    this.navigateToPage(page);
  }

}

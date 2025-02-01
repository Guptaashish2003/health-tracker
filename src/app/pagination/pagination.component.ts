import { Component } from '@angular/core';
import { DropdownComponent } from "../component/dropdown/dropdown.component";

@Component({
  selector: 'app-pagination',
  imports: [DropdownComponent],
  templateUrl: './pagination.component.html',
})
export class PaginationComponent {
  userData =  localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData') || '{}') : [];

}

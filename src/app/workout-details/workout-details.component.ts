import { Component, type OnInit } from '@angular/core';
import { InputComponent } from '../component/input/input.component';
import { FormsModule } from '@angular/forms';
import { DropdownComponent } from '../component/dropdown/dropdown.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-workout-details',
  imports: [InputComponent, FormsModule, DropdownComponent, CommonModule],
  templateUrl: './workout-details.component.html',
})
export class WorkoutDetailsComponent implements OnInit {
  name: string = '';
  users: number = 5;
  page: number = 1;
  selectedOption: string = '';
  WorkOutTypes = [
    { id: 1, type: 'pilates' },
    { id: 2, type: 'crossfit' },
    { id: 3, type: 'Zumba' },
    { id: 4, type: 'cycling' },
    { id: 5, type: 'cycling' },
    { id: 6, type: 'crossfit' },
    { id: 7, type: 'aerobics' },
    { id: 8, type: 'spinning' },
    { id: 9, type: 'running' },
    { id: 10, type: 'HIIT' },
    { id: 11, type: 'running' },
    { id: 12, type: 'aerobics' },
    { id: 13, type: 'weightlifting' },
    { id: 14, type: 'running' },
    { id: 15, type: 'barre' },
  ];
  storedUsers = localStorage.getItem('userData');
  userData: any[] = this.storedUsers ? JSON.parse(this.storedUsers) : [];
  displayedUsers:any[]=[]

  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    // Access query parameters from the URL
    this.route.queryParams.subscribe(params => {
      this.users = +params['users'] || 5;  // Default to 5 if 'users' parameter is not provided
      this.page = +params['page'] || 1;    // Default to page 1 if 'page' parameter is not provided
      this.updateDisplayedUsers();
      console.log("Users per page:", this.users);
      console.log("current pages", this.page)
    });
  }
  updateDisplayedUsers() {
    const startIndex = (this.page - 1) * this.users;
    const endIndex = startIndex + this.users;
    this.displayedUsers = this.userData.slice(startIndex, endIndex); // Slice the users for the current page
  }
  handleSelection() {
    // console.log()
  }


  // pass json of user data to calculateTotalWorkoutsMinutes

  getTotalWorkoutMinutes(workouts: any) {
    let totalMinutes = 0;
    workouts.forEach((workout: any) => {
      totalMinutes += parseInt(workout.minutes, 10); // Convert 'minutes' string to number and sum
    });
    return totalMinutes;
  }
  handleSearchName(newValue: string){
    this.userData = this.userData.filter((user:any) => user.name.toLowerCase().includes(newValue.toLowerCase()));
   

  }

  onOptionChange(newValue:string){
    this.userData = this.userData.filter((user:any) => this.getWorkoutTypesString(user).toLowerCase().includes(newValue.toLowerCase()));
    
    
  }

  getWorkoutTypesString(user: any): string {
    return user.workouts.map((workout: any) => workout.type).join(', ');
  }
 
}
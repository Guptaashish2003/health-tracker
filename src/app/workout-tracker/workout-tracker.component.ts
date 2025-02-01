import { Component } from '@angular/core';
import { FormsModule, type NgForm } from '@angular/forms';
import { InputComponent } from '../component/input/input.component';
import { DropdownComponent } from '../component/dropdown/dropdown.component';
import { CustomButtonComponent } from '../component/button/button.component';

@Component({
  selector: 'app-workout-tracker',
  standalone: true,
  imports: [InputComponent, DropdownComponent, CustomButtonComponent, FormsModule],
  templateUrl: './workout-tracker.component.html',
})
export class WorkoutTrackerComponent {
  formData = { 
    id: 0,
    name: '',
    workout: [
      { type: '', minutes: '' }
    ],
  };

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

  handleSelection(selectedValue: string) {
    this.formData.workout[0].type = selectedValue;
  }
  

  onSubmit() {
    console.log("Form Data:", this.formData);
    const storedUsers = localStorage.getItem('userData');
    let userData: any[] = storedUsers ? JSON.parse(storedUsers) : [];
    let existingUser = userData.find(user => user.name.toLowerCase() === this.formData.name.toLowerCase());
    if (existingUser) {
      existingUser.workouts.push(...this.formData.workout);
      console.log("Workout added to existing user:", existingUser);
    } else {
      const newId = userData.length > 0 ? Math.max(...userData.map(user => user.id)) + 1 : 1;
      
      const newUser = {
        id: newId,
        name: this.formData.name,
        workouts: [...this.formData.workout], 
      };
      userData.push(newUser);
      console.log("New user added:", newUser);
    }
    localStorage.setItem('userData', JSON.stringify(userData));
  }
  
}

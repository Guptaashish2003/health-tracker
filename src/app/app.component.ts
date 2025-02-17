import { Component, type OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { WorkoutTrackerComponent } from "./workout-tracker/workout-tracker.component";
import { WorkoutDetailsComponent } from './workout-details/workout-details.component';
import { PaginationComponent } from './pagination/pagination.component';
import { BrowserModule } from '@angular/platform-browser';
import { BarChartComponent } from './user-charts/user-charts.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, WorkoutTrackerComponent,CommonModule,WorkoutDetailsComponent,PaginationComponent,BarChartComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'health-tracker';

  userData = [
    {
      id: 1,
      name: 'John Doe',
      workouts: [
        { type: 'Running', minutes: 30 },
        { type: 'Cycling', minutes: 45 }
      ]
    },
    {
      id: 2,
      name: 'Jane Smith',
      workouts: [
        { type: 'Swimming', minutes: 60 },
        { type: 'Running', minutes: 20 }
      ]
    },
    {
      id: 3,
      name: 'Mike Johnson',
      workouts: [
        { type: 'Yoga', minutes: 50 },
        { type: 'Cycling', minutes: 40 }
      ]
    },
  ];
 
  // append this data to userData
  ngOnInit() {
    localStorage.setItem('userData', JSON.stringify(this.userData));
  }
}


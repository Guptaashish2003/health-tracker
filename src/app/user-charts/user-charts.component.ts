import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import Chart from 'chart.js/auto';
// import {  } from 'ng2-charts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './user-charts.component.html',
  imports:[CommonModule],
})
export class BarChartComponent implements OnInit {
  userName: string = 'John Doe';
  userData!:any[];

  
  handleSetUserCharts(value:string){
    this.userName = value;
    this.updateChart();
  }
  labelWorkoutSelectedName :string []= [];
  updateChart(){
    this.chart.data.labels = this.userData.find((user: any) => user.name === this.userName)?.workouts.map((workout: any) => workout.type) || [];
    this.chart.data.datasets[0].data = this.userData.find((user: any) => user.name === this.userName)?.workouts.map((workout: any) => workout.minutes) || [];
    this.chart.update();
    
  }
  

  chart: any = [];

  constructor() {}

  ngOnInit() {
    this.userData=localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData') || '{}') : [];
    this.chart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: [],
        datasets: [
          {
            label: '# of minutes',
            data: [],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}
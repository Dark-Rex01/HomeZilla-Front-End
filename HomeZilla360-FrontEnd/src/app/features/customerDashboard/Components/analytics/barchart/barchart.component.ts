import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {
  basicData: any;
  horizontalOptions: any;
  constructor() { }

  ngOnInit(): void {
    this.BarChart();

  }
  
  BarChart(){
    this.basicData = {
      labels: ['Plumber', 'Carpenter', 'House Keeper', 'Electrician'],
      datasets: [
          {
              label: 'Orders',
              backgroundColor: '#FF5733',
              data: [6, 5, 0, 0]
          },
          {
              label: 'Canceled',
              backgroundColor: '#228B22',
              data: [1, 1, 0, 0]
          }
      ]
  };
    this.horizontalOptions = {
      indexAxis: 'y',
      plugins: {
          legend: {
              labels: {
                  color: '#495057'
              }
          }
      },
      scales: {
          x: {
              ticks: {
                  color: '#495057'
              },
              grid: {
                  color: '#ebedef'
              }
          },
          y: {
              ticks: {
                  color: '#495057'
              },
              grid: {
                  color: '#ebedef'
              }
          }
      }
  };

  
  }
}

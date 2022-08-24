import { Component, OnInit } from '@angular/core';
import { GetWeatherService } from './services/get-weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private weatherService: GetWeatherService){}

  ngOnInit(): void {
    this.weatherService.getWeatherData('Nairobi')
    .subscribe((res) => console.log(res))
  }
}

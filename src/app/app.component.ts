import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.model';
import { GetWeatherService } from './services/get-weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private weatherService: GetWeatherService){}
   
  weatherData ?: WeatherData
  cityName : string = 'Nairobi'
  ngOnInit(): void {
    this.getWeatherData(this.cityName)
    this.cityName = ''
  }

  onSubmit(){
    this.getWeatherData(this.cityName)
    this.cityName = ''
  }
  private getWeatherData(cityName:string){
    this.weatherService.getWeatherData(cityName)
    .subscribe({
      next: (response) =>{
        this.weatherData = response
      }
    })
  }

}

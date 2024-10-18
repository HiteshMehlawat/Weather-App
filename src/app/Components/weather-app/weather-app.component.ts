import { Component, inject, signal } from '@angular/core';
import { WeatherService } from '../../weather.service';
import { FormsModule } from '@angular/forms';
import { CommonModule,  } from '@angular/common';
import { weatherCodes, weatherImages, } from './weather.codes';


@Component({
  selector: 'app-weather-app',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './weather-app.component.html',
  styleUrl: './weather-app.component.scss'
})
export class WeatherAppComponent {

  weatherData = signal<any>(null);  
  weatherImages =weatherImages;
city = signal<string>(''); 
  constructor(private weatherService: WeatherService) {}
  getWeather() : void {
        this.weatherService.getWeather(this.city()).subscribe({
        next :(data) => this.weatherData.set(data),
        error:(error) => console.error('Error fetching weather data:', error)
     });
    }
    getWeatherDescription(code: number): string {
      if(weatherCodes[code]){
        return weatherCodes[code];
      }
      else{
        return "Unknown Weather"
      }
    }
}

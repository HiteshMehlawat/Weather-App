import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherAppComponent } from "./Components/weather-app/weather-app.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WeatherAppComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Weather-App';
}

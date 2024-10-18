import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
})

export class WeatherService {

    constructor(private http : HttpClient){}

    private apiKey ='mE3Lc4GYMW00OLO3L78WI10Txvhq2cJ3';
    private apiUrl ='https://api.tomorrow.io/v4/weather/forecast';

      getWeather(city:string): Observable<any> {
        const url =`${this.apiUrl}?location=${city}&apikey=${this.apiKey}`;
        return this.http.get(url);
     }
}

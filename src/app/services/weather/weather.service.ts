import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// const mockWeatherData = require('./mockWeatherData.json');

@Injectable({
  providedIn: 'root'
})

export class WeatherService {

  weatherUrl = 'http://api.weatherstack.com/current?access_key=5d7e00b4d1e9d71c480797205ed0d951&query=Cardiff';

  constructor(private http: HttpClient) { }

  getWeather(): Observable<any> {
      return this.http.get(this.weatherUrl);
      // return mockWeatherData;
  }

}

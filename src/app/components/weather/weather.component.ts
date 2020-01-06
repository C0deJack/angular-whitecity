import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  weather: any;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
      this.weatherService.getWeather().subscribe(weather => {
          this.weather = weather;
          console.log(weather);
      });
  }
}

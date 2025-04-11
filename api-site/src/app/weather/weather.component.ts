import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NowDate } from '../my-Date';

@Component({
  selector: 'app-weather',
  standalone: false,
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css',
})
export class WeatherComponent implements OnInit {
  date: any = new NowDate().date;
  constructor(private dataService: DataService) {}
  selectValue = 'Chernivtsi';
  dataWeather: any = '';
  icon: any = '';
  details: string = '';
  city: any = '';
  temp: any = '';
  feelsLike: any = '';
  tempMax: any = '';
  humidity: any = '';
  speedWind: any = '';
  gustWind: any = '';
  degWind: any = '';
  visibility: any = '';
  pressure: any = '';
  onChangeSelectValue() {
    return this.ngOnInit();
  }
  ngOnInit(): void {
    let citySelected = document.querySelector(
      `option[value=${this.selectValue}]`
    )?.textContent;
    this.dataService.getWeather(this.selectValue).subscribe(
      (dataWeather) => {
        this.dataWeather = dataWeather;

        this.icon = `https://openweathermap.org/img/wn/${dataWeather.weather[0].icon}@2x.png`;
        this.details = this.dataWeather.weather[0].description;
        this.details =
          this.details.slice(0, 1).toUpperCase() + this.details.slice(1);
        this.city = citySelected;
        this.temp = Math.round(this.dataWeather.main.temp);
        this.feelsLike = Math.round(dataWeather.main.feels_like);
        this.tempMax = Math.round(dataWeather.main.temp_max);
        this.humidity = dataWeather.main.humidity;
        this.speedWind = dataWeather.wind.speed;
        if (!dataWeather.wind.gust) {
          this.gustWind = 0;
        } else {
          this.gustWind = dataWeather.wind.gust;
        }
        this.degWind = dataWeather.wind.deg;
        this.pressure = dataWeather.main.pressure;
        this.visibility = dataWeather.visibility;
      },
      (error) => {
        console.error('Error: ', error);
      }
    );
  }
}

import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  Value: string = '';
  // Api_weather = `https://api.openweathermap.org/data/2.5/weather?q=${this.Value}&lang=uk&&units=metric&appid=da84415cd3f507c473a979ece8276622`;
  API_Url =
    'https://newsdata.io/api/1/latest?country=ua&language=uk&category=top&domainurl=pravda.com.ua&apikey=pub_552659bb687db51597fafcfea9c143093d573';

  Api_sport =
    'https://newsdata.io/api/1/latest?country=ua&language=uk&category=sports&apikey=pub_552659bb687db51597fafcfea9c143093d573';
  constructor(private http: HttpClient) {}
  getNews(): Observable<any> {
    return this.http.get<any>(this.API_Url);
  }

  getSportNews(): Observable<any> {
    return this.http.get<any>(this.Api_sport);
  }

  getWeather(value: string): Observable<any> {
    this.Value = value;
    return this.http.get<any>(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.Value}&lang=uk&&units=metric&appid=da84415cd3f507c473a979ece8276622`
    );
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpService: HttpClient) { }

  getCurrentStatus(accesskey,city){
    return this.httpService.get(`${environment.baseUrl}current?access_key=${accesskey}&query=${city}`).pipe(
      map((responce)=>{
        return responce;
      },
      (error)=>{
        return error;
      })
    )
  }
  getCurrentDayForecast(city,days){
    return this.httpService.get(`${environment.baseUrl2}forecast.json?key=c974c9912869406f86c121655222309&q=${city}&day=${days}&aqi=no&alerts=no`).pipe(
      map((res)=>{
        return res
      },
      (error)=>{
        return error;
      })
    )
  }
}

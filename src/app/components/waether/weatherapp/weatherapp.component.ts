import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { WeatherService } from 'src/app/core/service/weather.service';

@Component({
  selector: 'app-weatherapp',
  templateUrl: './weatherapp.component.html',
  styleUrls: ['./weatherapp.component.css']
})
export class WeatherappComponent implements OnInit {


  constructor(private weatherService:WeatherService) { 
   
  }
  current:any
  foreCastInfo:any
  hours:any
  city: any
  otherCity:any
  weatherCurrent(){
 

    const access_key='5d27bf213722e331113c9861f3f3a93b';
    const query = 'New York'; 
    const days ='1'
    this.weatherService.getCurrentStatus(access_key,query).subscribe(
      (res)=>{
        console.log(res);
        this.current = res;
        console.log(this.current);
      },
      (err)=>{
        console.log(err);
      }
    )
    this.weatherService.getCurrentDayForecast(query,days).subscribe(
      (res)=>{
        console.log(res);
        this.foreCastInfo = res;
        this.hours = this.foreCastInfo.forecast.forecastday[0].hour;
        console.log(this.foreCastInfo);
        console.log(this.hours);
      },
      (err)=>{
        console.log(err);
      }
    )
  }
  weatherCheck(){
    const access_key='5d27bf213722e331113c9861f3f3a93b';
    const query = this.city
    console.log(this.city);
    const days ='1'
    
    this.weatherService.getCurrentStatus(access_key,query).subscribe(
      (res)=>{
        console.log(res);
        this.current = res;
        console.log(this.current);
      },
      (err)=>{
        console.log(err);
      } 
    )
    this.weatherService.getCurrentDayForecast(query,days).subscribe(
      (res)=>{
        console.log(res);
        this.foreCastInfo = res;
        this.hours = this.foreCastInfo.forecast.forecastday[0].hour;
        console.log(this.foreCastInfo);
        console.log(this.hours);
      },
      (err)=>{
        console.log(err);
      }
    )
  }
  weatherCheckOtherCity(){
    const access_key='5d27bf213722e331113c9861f3f3a93b';
    const query = this.otherCity
    console.log(this.otherCity);
    const days ='1'
    
    this.weatherService.getCurrentStatus(access_key,query).subscribe(
      (res)=>{
        console.log(res);
        this.current = res;
        console.log(this.current);
      },
      (err)=>{
        console.log(err);
      } 
    )
    this.weatherService.getCurrentDayForecast(query,days).subscribe(
      (res)=>{
        console.log(res);
        this.foreCastInfo = res;
        this.hours = this.foreCastInfo.forecast.forecastday[0].hour;
        console.log(this.foreCastInfo);
        console.log(this.hours);
      },
      (err)=>{
        console.log(err);
      }
    )
  }
  ngOnInit(): void {
    this.weatherCurrent()
  }

}

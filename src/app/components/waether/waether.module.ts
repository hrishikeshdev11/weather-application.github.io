import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { WaetherRoutingModule } from './waether-routing.module';
import { WeatherappComponent } from './weatherapp/weatherapp.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [WeatherappComponent],
  imports: [
    CommonModule,
    FormsModule
    // WaetherRoutingModule
  ]
})
export class WaetherModule { }

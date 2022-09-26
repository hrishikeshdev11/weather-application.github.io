import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WaetherModule } from './components/waether/waether.module';
import { WeatherappComponent } from './components/waether/weatherapp/weatherapp.component';

const routes: Routes = [
    {path:'', component: WeatherappComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

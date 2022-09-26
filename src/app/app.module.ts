import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WaetherModule } from './components/waether/waether.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    WaetherModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

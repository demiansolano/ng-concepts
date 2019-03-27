import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { BoothComponent } from './booth/booth.component';
import { ReserveComponent } from './reserve/reserve.component';
import { ApiService } from './services/api.service';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    BoothComponent,
    ReserveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

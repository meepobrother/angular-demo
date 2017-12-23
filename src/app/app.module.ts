import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MeepoCoreModule, CoreService } from 'meepo-core';
import { MeepoBmapModule } from 'meepo-bmap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MeepoCoreModule.forRoot(),
    MeepoBmapModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

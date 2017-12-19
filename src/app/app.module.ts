import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MeepoModule } from 'meepo-citypicker';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MeepoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

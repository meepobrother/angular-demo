import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PostTaskPage } from './post-task/post-task';

import { MeepoCoreModule } from 'meepo-core';
import { MeepoBmapModule } from 'meepo-bmap';
import { XscrollModule } from 'meepo-xscroll';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MeepoCoreModule.forRoot(),
    MeepoBmapModule,
    XscrollModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

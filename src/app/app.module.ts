import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MeepoCoreModule, MeepoCoreServiceModule } from 'meepo-core';
import { MeepoBmapModule } from 'meepo-bmap';
import { XscrollModule } from 'meepo-xscroll';
import { PostTaskPage } from './post-task/post-task';
@NgModule({
  declarations: [
    AppComponent,
    PostTaskPage
  ],
  imports: [
    BrowserModule,
    MeepoCoreServiceModule,
    XscrollModule,
    MeepoCoreModule.forRoot(),
    MeepoBmapModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

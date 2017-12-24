import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MeepoCoreModule, MeepoCoreServiceModule } from 'meepo-core';
import { MeepoBmapModule } from 'meepo-bmap';
import { XscrollModule } from 'meepo-xscroll';
import { PostTaskPage } from './post-task/post-task';
import { MeepoFormsModule } from 'meepo-forms';
@NgModule({
  declarations: [
    AppComponent,
    PostTaskPage
  ],
  imports: [
    BrowserModule,
    XscrollModule,
    MeepoCoreModule.forRoot(),
    MeepoBmapModule.forRoot(),
    MeepoFormsModule
  ],
  bootstrap: [
    AppComponent
  ],
  providers: []
})
export class AppModule { }

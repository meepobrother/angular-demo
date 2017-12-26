import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { AppComponent } from './app.component';

import { MeepoCoreModule } from 'meepo-core';
import { MeepoBmapModule } from 'meepo-bmap';
import { MeepoFormsModule } from 'meepo-forms';
import { PostTaskPage } from './post-task/post-task';

export class MyErrorHandler implements ErrorHandler {
  handleError(error) {
    if (error) {
      // const vConsole = new window['VConsole']();
      // console.log('Hello world');
      console.dir(error);
    }
  }
}
@NgModule({
  declarations: [
    AppComponent,
    PostTaskPage
  ],
  imports: [
    BrowserModule,
    MeepoCoreModule.forRoot(),
    MeepoBmapModule,
    MeepoFormsModule
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    { provide: ErrorHandler, useClass: MyErrorHandler }
  ]
})
export class AppModule { }

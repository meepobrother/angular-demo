import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { AppComponent } from './app.component';

import { MeepoCoreModule } from 'meepo-core';
import { MeepoBmapModule } from 'meepo-bmap';
import { MeepoFormsModule } from 'meepo-forms';
import { UploaderModule } from 'meepo-uploader';

import { PostTaskPage } from './post-task/post-task';
import { PopoverModule } from 'meepo-popover';
export class MyErrorHandler implements ErrorHandler {
  handleError(error) {
    if (error) {
      // const vConsole = new window['VConsole']();
      // console.log('Hello world');
      // console.dir(error);
      throw error;
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
    MeepoFormsModule,
    UploaderModule,
    PopoverModule
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    { provide: ErrorHandler, useClass: ErrorHandler }
  ]
})
export class AppModule { }

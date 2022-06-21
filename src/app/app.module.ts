import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { VideocontainerComponent } from './videocontainer/videocontainer.component';
import { VideocardComponent } from './videocard/videocard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VideocontainerComponent,
    VideocardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

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
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { VideocontainerComponent } from './videocontainer/videocontainer.component';
import { VideocardComponent } from './videocard/videocard.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CategoryComponent } from './category/category.component';
import { ChipComponent } from './category/chip/chip.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VideocontainerComponent,
    VideocardComponent,
    NavigationComponent,
    CategoryComponent,
    ChipComponent,
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

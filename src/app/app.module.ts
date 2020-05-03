import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { DuckFeedComponent } from 'src/app/pages/duck-feed/duck-feed.component';
import { DuckFeedServiceService } from './services/duck-feed-service.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DuckFeedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    DuckFeedServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

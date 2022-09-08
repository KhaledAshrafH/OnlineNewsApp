import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { EgyptNewsComponent } from './pages/egypt-news/egypt-news.component';
import { UsaNewsComponent } from './pages/usa-news/usa-news.component';
import { HomeComponent } from './pages/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { CutPipe } from './pipes/cut.pipe';
import { DetailsComponent } from './pages/details/details.component';
import { AboutComponent } from './pages/about/about.component';
import { SportsNewsComponent } from './pages/egypt-news/sports-news/sports-news.component'
import {BusinessNewsComponent} from "./pages/egypt-news/business-news/business-news.component";
import {TechnologyNewsComponent} from "./pages/egypt-news/technology-news/technology-news.component";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    EgyptNewsComponent,
    UsaNewsComponent,
    HomeComponent,
    CutPipe,
    DetailsComponent,
    AboutComponent,
    SportsNewsComponent,
    BusinessNewsComponent,
    TechnologyNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }

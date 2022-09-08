import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {AppModule} from "../../app.module";
import {RouterModule, Routes} from "@angular/router";
import {SportsNewsComponent} from "./sports-news/sports-news.component";
import {EgyptNewsComponent} from "./egypt-news.component";
import { BusinessNewsComponent } from './business-news/business-news.component';
import { TechnologyNewsComponent } from './technology-news/technology-news.component';

const routes: Routes = [
  {path:'sports', component:SportsNewsComponent},
  {path:'', component:EgyptNewsComponent}
];


@NgModule({
  declarations: [




  ],
  imports: [
    CommonModule,
    AppModule,
    RouterModule.forChild(routes)
  ]
})
export class EgyptNewsModule { }

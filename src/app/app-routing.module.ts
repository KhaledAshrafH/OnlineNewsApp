import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {EgyptNewsComponent} from "./pages/egypt-news/egypt-news.component";
import {UsaNewsComponent} from "./pages/usa-news/usa-news.component";
import {DetailsComponent} from "./pages/details/details.component";
import {AboutComponent} from "./pages/about/about.component";
import {SportsNewsComponent} from "./pages/egypt-news/sports-news/sports-news.component";
import {TechnologyNewsComponent} from "./pages/egypt-news/technology-news/technology-news.component";
import {BusinessNewsComponent} from "./pages/egypt-news/business-news/business-news.component";


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'egyptnews', component: EgyptNewsComponent },
  { path: 'egyptnews/sports', component: SportsNewsComponent },
  { path: 'egyptnews/technology', component: TechnologyNewsComponent},
  { path: 'egyptnews/business', component: BusinessNewsComponent },
  { path: 'egyptnews', loadChildren: () => import('../app/pages/egypt-news/egypt-news.module').then(m => m.EgyptNewsModule) },
  { path: 'usanews', component: UsaNewsComponent },
  { path: 'about', component: AboutComponent },
  { path: "details/:id", component:DetailsComponent},
  { path: "**", component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

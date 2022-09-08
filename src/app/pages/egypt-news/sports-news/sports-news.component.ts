import { Component, OnInit } from '@angular/core';
import {NewsService} from "../../../service/news.service";

@Component({
  selector: 'app-sports-news',
  templateUrl: '../egypt-news.component.html',
  styleUrls: ['../../../../assets/pageStyle.scss']
})
export class SportsNewsComponent implements OnInit {
  allData=[];

  constructor(private _NewsService:NewsService) {
    this._NewsService.getSportsEgyptNews().subscribe((data)=>{
      this.allData=data.articles;
    });
  }

  ngOnInit(): void {
  }

}

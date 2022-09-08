import { Component, OnInit } from '@angular/core';
import {NewsService} from "../../../service/news.service";

@Component({
  selector: 'app-technology-news',
  templateUrl: '../egypt-news.component.html',
  styleUrls: ['../../../../assets/pageStyle.scss']
})
export class TechnologyNewsComponent implements OnInit {

  allData=[];

  constructor(private _NewsService:NewsService) {
    this._NewsService.getTechnologyEgyptNews().subscribe((data)=>{
      this.allData=data.articles;
    });
  }

  ngOnInit(): void {
  }

}

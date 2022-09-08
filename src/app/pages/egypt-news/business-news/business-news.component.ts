import { Component, OnInit } from '@angular/core';
import {NewsService} from "../../../service/news.service";

@Component({
  selector: 'app-business-news',
  templateUrl: '../egypt-news.component.html',
  styleUrls: ['../../../../assets/pageStyle.scss']
})
export class BusinessNewsComponent implements OnInit {

  allData=[];

  constructor(private _NewsService:NewsService) {
    this._NewsService.getBusinessEgyptNews().subscribe((data)=>{
      this.allData=data.articles;
    });
  }

  ngOnInit(): void {
  }

}

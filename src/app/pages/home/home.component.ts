import { Component, OnInit } from '@angular/core';
import {NewsService} from "../../service/news.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  allData=[];
  constructor(private _NewsService:NewsService) {
    this._NewsService.getHeadlinesNews().subscribe((data)=>{
      this.allData=data.articles;
    });
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import {NewsService} from '../../service/news.service'
@Component({
  selector: 'app-usa-news',
  templateUrl: './usa-news.component.html',
  styleUrls: ['./usa-news.component.scss','../../../assets/pageStyle.scss']
})
export class UsaNewsComponent implements OnInit {
  allData=[];
  constructor(private _NewsService:NewsService) {
    this._NewsService.getUsaNews().subscribe((data)=>{
      this.allData=data.articles;
    });
  }

  ngOnInit(): void {
  }

}

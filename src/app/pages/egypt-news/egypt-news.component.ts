import {Component, OnInit} from '@angular/core';
import {NewsService} from '../../service/news.service'

@Component({
  selector: 'app-egypt-news',
  templateUrl: './egypt-news.component.html',
  styleUrls: ['../../../assets/pageStyle.scss']
})

export class EgyptNewsComponent implements OnInit {
  allData=[];
  constructor(private _NewsService:NewsService) {
    this._NewsService.getEgyptNews().subscribe((data)=>{
      this.allData=data.articles;
    });

  }

  ngOnInit(): void {

  }

}

import { Component, OnInit } from '@angular/core';
import {NewsService} from "../../service/news.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  id:number=0;
  item: any;
  constructor(private _NewsService:NewsService,private _ActivatedRoute:ActivatedRoute) {
    // @ts-ignore
    this.id=this._ActivatedRoute.snapshot.paramMap.get("id");
    this._NewsService.getEgyptNews().subscribe((data)=>{
      this.item=data.articles[(this.id as number)];
    });
  }

  ngOnInit(): void {
  }

}

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private _HttpClient:HttpClient) { }

  getEgyptNews():Observable<any>{
    return this._HttpClient.get("https://newsapi.org/v2/top-headlines?country=eg&apiKey=cc3c37b3d4894d7597c101af46d6cb1e\n");
  }

  getSportsEgyptNews():Observable<any>{
    return this._HttpClient.get("https://newsapi.org/v2/top-headlines?country=eg&category=sports&apiKey=cc3c37b3d4894d7597c101af46d6cb1e\n");
  }

  getTechnologyEgyptNews():Observable<any>{
    return this._HttpClient.get("https://newsapi.org/v2/top-headlines?country=eg&category=technology&apiKey=cc3c37b3d4894d7597c101af46d6cb1e\n");
  }

  getBusinessEgyptNews():Observable<any>{
    return this._HttpClient.get("https://newsapi.org/v2/top-headlines?country=eg&category=business&apiKey=cc3c37b3d4894d7597c101af46d6cb1e\n");
  }

  getUsaNews():Observable<any>{
    return this._HttpClient.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=cc3c37b3d4894d7597c101af46d6cb1e\n");
  }

  getHeadlinesNews():Observable<any>{
    return this._HttpClient.get("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=cc3c37b3d4894d7597c101af46d6cb1e\n");
  }
}

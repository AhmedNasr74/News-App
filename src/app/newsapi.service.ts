import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {

  constructor(private _HttpClient:HttpClient) { }
   getNews(code:string):Observable<any>
  {
    return this._HttpClient.get("https://newsapi.org/v2/top-headlines?country="+code+"&category=sports&apiKey=804a7dc51fcc460fa2ebe32b4725cc55")
  }
}

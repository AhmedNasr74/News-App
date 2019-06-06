import { Component, OnInit } from '@angular/core';
import {NewsapiService} from '../newsapi.service'
@Component({
  selector: 'app-newsapi',
  templateUrl: './newsapi.component.html',
  styleUrls: ['./newsapi.component.css']
})
export class NewsapiComponent implements OnInit {

  countries = ["ae","eg","fr","us","gb","de","ca","sa"];
  NewsContainer = [];
  ngOnInit() {}
 term:string='';
  constructor(private _NewsapiService:NewsapiService)
  {
    this.changCode("fr");
  }//end constructor

  changCode(code:string)
  {
    this._NewsapiService.getNews(code).subscribe(news =>
      {
      for( var i = 0 ; i < news.articles.length ; i++ )
        if(news.articles[i].urlToImage == null)
        news.articles[i].urlToImage ="./assets/images/empty.png";
      this.NewsContainer = news.articles
    })
  }
}

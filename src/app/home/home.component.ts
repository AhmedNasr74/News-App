import { Component, OnInit } from '@angular/core';
import {NewsService} from '../news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  clients:object[] = [
  ];
  tabletoggle:boolean = true;

  constructor(_NewsService:NewsService) { 
    this.clients = _NewsService.getDummyNews();
  }

  ngOnInit() {
  }

  toggle()
  {
    this.tabletoggle = !this.tabletoggle

  }
}

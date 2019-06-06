import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }
  name:string = "Hany";
  imgSRC :string ="./assets/images/one.jpg";
  ngOnInit() {
  }
  alerT( c:string)
  {
    alert("Welcome : "+c)
  }

}

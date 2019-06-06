import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor() { }
  getDummyNews()
  {
    return[
      {name:'ahmed' , age:20 , salary:2500 , dateOfBirth:'4/1/1999',gander:'Male'},
      {name:'ali' , age:20 , salary:3500 , dateOfBirth:'4/2/1999',gander:'Male'},
      {name:'aya' , age:20 , salary:1500 , dateOfBirth:'25/5/1998',gander:'Female'},
      {name:'mohamed' , age:20 , salary:12500 , dateOfBirth:'4/1/1999',gander:'Male'},
      {name:'yassmen' , age:20 , salary:6500 , dateOfBirth:'8/1/1999',gander:'Female'},
      {name:'rahma' , age:20 , salary:2900 , dateOfBirth:'4/1/1999',gander:'Female'},
      {name:'nada' , age:20 , salary:2700 , dateOfBirth:'26/1/1999',gander:'Female'},
      {name:'fatma' , age:20 , salary:2000 , dateOfBirth:'4/3/1999',gander:'Female'},
      {name:'hany' , age:20 , salary:2900 , dateOfBirth:'4/11/1999',gander:'Male'},
      {name:'alaa' , age:20 , salary:2900 , dateOfBirth:'27/12/1999',gander:'Female'},
    ]
  }
}

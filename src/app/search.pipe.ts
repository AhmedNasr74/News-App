import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(news: any, term: string): any {
    if(term ==null || term == undefined)
    return news;

    else
      {
        return news.filter( function(news){
            return news.title.toLowerCase().includes(term.toLowerCase())
        })
      }
  }

}

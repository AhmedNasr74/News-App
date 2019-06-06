import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newsFilter'
})
export class NewsFilterPipe implements PipeTransform {

  transform(keyword: string , len:number): string {
    return keyword.substr(0,len)+" More...";
  }

}

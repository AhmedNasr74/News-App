import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ganderTitle'
})
export class GanderTitlePipe implements PipeTransform {

  transform(name: string, gander?: string): string {
    
    return gander == 'Male'? "Mr ."+name : "Miss ."+name;
  }

}

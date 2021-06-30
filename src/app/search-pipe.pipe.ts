import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {

  transform(items: any[],keyword:string): any {

    var obj;
    if (!items) {
      return [];
    }
    if (!keyword) {
      return items;
    }
    keyword = keyword.toLowerCase();
 
    obj = items.filter(t=>t.character.toLocaleLowerCase().includes(keyword) 
    || t.title.toLocaleLowerCase().includes(keyword)
    || t.description.toLocaleLowerCase().includes(keyword));
    return obj;
   /*  return items.filter(i => {
      return i.toLocaleLowerCase().includes(keyword);
    }); */
    

  }

}

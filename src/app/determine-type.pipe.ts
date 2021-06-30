import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'determineType'
})
export class DetermineTypePipe implements PipeTransform {

  transform(value: any): any {
    if(Array.isArray(value) && typeof value !== 'object')
    {
    return "This is an array";
    } 

    if (typeof value === 'string'){
      return "This is a string";
    }

    else if (Array.isArray(value) && typeof value === 'object'){
      return "This is an Array of Objects";
    }

    else if (typeof value === 'object')
    {
      return "This is an object";
    }

    else{
      return null;
    }
  }

}

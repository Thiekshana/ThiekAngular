import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {

  transform(value: any): any {
    let object = "Hi Thiek. Weclome to "+value.myCountry+" your number is "+value.myNumber;
    return object;
  }
  

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cut'
})
export class CutPipe implements PipeTransform {

  transform(str:string,n:number): string {
    return `${str.substr(0, n)}...`;
  }

}

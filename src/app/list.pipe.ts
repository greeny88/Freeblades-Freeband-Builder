import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'list'
})
export class ListPipe implements PipeTransform {

  transform(value: string[], separator: string = ', '): unknown {
    return value.join(separator);
  }

}

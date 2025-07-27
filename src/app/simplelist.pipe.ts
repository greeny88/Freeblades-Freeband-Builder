import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'simplelist'
})
export class SimpleListPipe implements PipeTransform {
    transform(value: string[], separator: string = ', '): unknown {
        return value.join(separator);
    }
}
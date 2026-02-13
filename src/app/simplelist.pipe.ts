import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'simplelist',
    standalone: false
})
export class SimpleListPipe implements PipeTransform {
    transform(value: string[], separator: string = ', '): unknown {
        return value.join(separator);
    }
}
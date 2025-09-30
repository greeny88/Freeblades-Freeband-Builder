import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'complexlist'
})
export class ComplexListPipe implements PipeTransform {
    transform(value: {[key:string]: string}[], key: string, separator: string = ', '): unknown {
        return value.map(item => `${item[key]}`).join(separator);
    }
}
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'replace'
})

export class ReplacePipe implements PipeTransform {
    transform(value: string, isReplaced: boolean = true): string {
        return isReplaced ? '[' + value + ']' : value;
    }
}

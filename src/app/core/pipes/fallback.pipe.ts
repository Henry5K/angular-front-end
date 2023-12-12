import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'fallback'
})
export class FallbackPipe implements PipeTransform {
    transform(value: any, fallbackText: string = 'Não há dados'): any {
        return value !== null && value !== undefined ? value : fallbackText;
    }
}
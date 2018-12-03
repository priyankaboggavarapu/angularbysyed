import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'prefixisd'
})
export class PrefixPipe implements PipeTransform {
    transform(country) {
        if (country == 'IN') {
            return "+91";
        }
        else if (country == 'US') {
            return "+1";
        }
        else {
            return "";
        }
    }
}
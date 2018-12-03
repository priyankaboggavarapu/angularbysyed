import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'sortbyprice'
})
export class SortByPricePipe implements PipeTransform {
    transform(products, sortbyPrice) {
        if (products) {
            let result = products.sort((x, y) => {
                return x.salePrice - y.salePrice;
            });
            if (sortbyPrice == 'asc') {
                return result;
            }
            else{
                return result.reverse();
            }

        }

    }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toppingFilter'
})
export class ToppingFilterPipe implements PipeTransform {

  transform(toppings: string[],searchText: string): unknown {
    return toppings.filter(topping => topping.includes(searchText));
  }

}

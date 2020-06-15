import { Pipe, PipeTransform } from '@angular/core';
import { Flyer } from '../model/heroes';

@Pipe({
  name: 'flyingHeroes',
  pure:false
})
export class FlyingHeroesPipe implements PipeTransform {

  transform(allHeroes:  Flyer[]): unknown {
    return allHeroes.filter(hero=>hero.canFly);
  }

}

import { Component, OnInit } from '@angular/core';
import { HEROES } from '../model/heroes';

@Component({
  selector: 'app-flying-heroes',
  templateUrl: './flying-heroes.component.html',
  styleUrls: ['./flying-heroes.component.scss']
})
export class FlyingHeroesComponent {

  heroes: any[] = [];
  canFly = true;
  title = 'Flying Heroes (pure pipe)';
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  searchText:string;


  constructor() { this.reset(); }

  addHero(name: string) {
    name = name.trim();
    if (!name) { return; }
    let hero = { name, canFly: this.canFly };
    this.heroes = this.heroes.concat(hero);
    // this.heroes.push(hero);
  }

  reset() { this.heroes = HEROES.slice(); }
}

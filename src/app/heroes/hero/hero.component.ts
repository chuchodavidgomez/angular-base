import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;
  public change: boolean = false;

  get capitalizedName(): string {
    return this.name.toLocaleUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeName(): void {
    this.name = 'spider';
    this.change = true;
  }

  changeAge(): void {
    this.age = 1;
    this.change = true;
  }

  reset(): void {
    this.name = 'ironman';
    this.age = 45;
    this.change = false;
  }
}

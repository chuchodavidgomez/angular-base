import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  public heroNames: string[] = [
    'Spiderman',
    'Ironman',
    'Hulk',
    'She hulk',
    'Thor',
  ];

  public deletedHero? = '';

  removeLastHero(): void {
    this.deletedHero = this.heroNames.pop();
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h2>{{ counter }}</h2>
    <button (click)="increaseBy(1)">+</button>
    <button (click)="reset()">reset</button>
    <button (click)="increaseBy(-1)">-</button>
  `,
})
export class CounterComponent {
  public counter: number = 0;

  increaseBy(value: number): void {
    this.counter += value;
  }

  reset() {
    this.counter = 10;
  }
}

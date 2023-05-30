import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({ providedIn: 'root' })
export class DbzService {
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'krilin',
      power: 1000,
    },
    {
      id: uuid(),
      name: 'goku',
      power: 9500,
    },
    {
      id: uuid(),
      name: 'vegeta',
      power: 7500,
    },
  ];

  addCharacter(character: Character): void {
    this.characters.push({ ...character, id: uuid() });
  }

  // onDeleteCharacter(index: number): void {
  //   this.characters.splice(index, 1);
  // }

  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter(
      (character) => character.id !== id
    );
  }
}

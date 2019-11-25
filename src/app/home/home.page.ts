import { Component, OnInit } from '@angular/core';

export class Character {
  constructor(
    public name: string,
    public description: string,
    public quote: string,
    public img: string
  ) { }
}

export const characters = [
  new Character('Finn!!!!', 'I\'m a big deal', 'Listen, I\'ve had a pretty messed up day...', './assets/avatar-finn.png'),
  new Character('Han', 'Look, kid...', 'I\'ve got enough on my plate as it is, and I...', './assets/avatar-han.png')
];

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  characters: any;

  constructor() { }

  ngOnInit() {
    this.characters = characters;
  }

}

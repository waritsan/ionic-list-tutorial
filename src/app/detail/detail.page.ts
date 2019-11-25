import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { characters, Character } from "../home/home.page";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  character: Character;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const index = +this.activatedRoute.snapshot.paramMap.get('id');
    this.character = characters[index];
  }

}

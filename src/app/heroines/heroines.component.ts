import { Component, OnInit } from '@angular/core';
import {Heroine} from '../Heroine';
import {HEROINES} from '../mock-heroines';

@Component({
  selector: 'app-heroines',
  templateUrl: './heroines.component.html',
  styleUrls: ['./heroines.component.css']
})
export class HeroinesComponent implements OnInit {

  heroines = HEROINES;

  selectedHeroine: Heroine = HEROINES[0]; // 初期値

  onSelect(heroine: Heroine): void {
    this.selectedHeroine = heroine;
    console.log(heroine);  // 確認用
  }

  constructor() { }

  ngOnInit() {
  }

}

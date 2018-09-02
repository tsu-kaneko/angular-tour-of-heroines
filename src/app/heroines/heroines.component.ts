import { Component, OnInit } from '@angular/core';
import {Heroine} from '../Heroine';

@Component({
  selector: 'app-heroines',
  templateUrl: './heroines.component.html',
  styleUrls: ['./heroines.component.css']
})
export class HeroinesComponent implements OnInit {

  heroine: Heroine = {
    id: 1,
    name: 'シータ'
  }

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import {Heroine} from '../Heroine';
import {HeroineService} from '../heroine.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroines: Heroine[] = [];

  constructor(private heroineService: HeroineService) {}

  ngOnInit() {
    this.getHeroines();
  }

  getHeroines(): void {
    this.heroineService.getHeroines()
      .subscribe(heroines => this.heroines = heroines.slice(0, 4));
  }
}

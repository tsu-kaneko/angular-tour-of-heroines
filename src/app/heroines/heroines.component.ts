import { Component, OnInit } from '@angular/core';
import { Heroine } from '../Heroine';
import { HeroineService } from '../heroine.service';

@Component({
  selector: 'app-heroines',
  templateUrl: './heroines.component.html',
  styleUrls: ['./heroines.component.css']
})
export class HeroinesComponent implements OnInit {

  heroines: Heroine[];

  constructor(private heroineService: HeroineService) { }

  ngOnInit() {
    this.getHeroines();
  }

  getHeroines(): void {
    this.heroineService.getHeroines()
      .subscribe(heroines => this.heroines = heroines);
  }

}

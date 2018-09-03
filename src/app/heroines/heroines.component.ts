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
  selectedHeroine: Heroine;

  constructor(private heroineService: HeroineService) { }

  ngOnInit() {
    this.getHeroines();
  }

  getHeroines(): void {
    this.heroineService.getHeroines()
      .subscribe(heroines => this.heroines = heroines);
  }

  onSelect(heroine: Heroine): void {
    this.selectedHeroine = heroine;
    console.log(heroine);
  }

}

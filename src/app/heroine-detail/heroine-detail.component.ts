import {Component, OnInit, Input} from '@angular/core';
import { Heroine } from '../Heroine';
import {ActivatedRoute} from '@angular/router';
import {HeroineService} from '../heroine.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-heroine-detail',
  templateUrl: './heroine-detail.component.html',
  styleUrls: ['./heroine-detail.component.css']
})
export class HeroineDetailComponent implements OnInit {
  @Input() heroine: Heroine;

  constructor(
    private route: ActivatedRoute,
    private heroineService: HeroineService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getHeroine();
  }

  getHeroine(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroineService.getHeroine(id)
      .subscribe(heroine => this.heroine = heroine);
  }

  goBack(): void {
    this.location.back();
  }

}

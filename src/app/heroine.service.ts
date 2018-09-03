import { Injectable } from '@angular/core';
import { Heroine } from './Heroine';
import { HEROINES } from './mock-heroines';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroineService {

  constructor() { }

  getHeroines(): Observable<Heroine[]> {
    return of(HEROINES);
  }
}

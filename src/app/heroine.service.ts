import { Injectable } from '@angular/core';
import { Heroine } from './Heroine';
import { HEROINES } from './mock-heroines';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroineService {

  constructor(private messageService: MessageService) { }

  getHeroines(): Observable<Heroine[]> {
    this.messageService.add('HeroineService: データを取得');
    console.log(this.messageService);
    return of(HEROINES);
  }

  getHeroine(id: number): Observable<Heroine> {
    this.messageService.add(`HeroineService: 番号${id}のデータを取得`);
    return of(HEROINES.find(heroine => heroine.id === id));
  }
}

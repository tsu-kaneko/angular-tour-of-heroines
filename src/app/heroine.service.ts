import { Injectable } from '@angular/core';
import { Heroine } from './Heroine';
// import { HEROINES } from './mock-heroines';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class HeroineService {

  // InMemoryDataService.createDb()メソッドの戻り値に与えたキー(heroines)
  private heroinesUrl = 'api/heroines';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  getHeroines(): Observable<Heroine[]> {
    this.messageService.add('HeroineService: データを取得');
    // console.log(this.messageService);
    this.log('データを取得');
    // return of(HEROINES);
    return this.http.get<Heroine[]>(this.heroinesUrl)
      .pipe(
        tap(heroines => this.log('データを取得')),
        catchError(this.handleError('getHeroines', []))
      );
  }

  getHeroine(id: number): Observable<Heroine> {
    const url = `${this.heroinesUrl}/${id}`;
    // this.messageService.add(`HeroineService: 番号${id}のデータを取得`);
    this.log(`HeroineService: 番号${id}のデータを取得`);
    // return of(HEROINES.find(heroine => heroine.id === id));
    return this.http.get<Heroine>(url)
      .pipe(
          tap(_ => this.log(`番号${id}のデータを取得`)),
          catchError(this.handleError<Heroine>(`getHeroine 番号=${id}`))
        );
  }

  updateHeroine(heroine: Heroine): Observable<any> {
    return this.http.put(this.heroinesUrl, heroine, httpOptions)
      .pipe(
        tap(_ => this.log(`番号${heroine.id}のデータを変更`)),
        catchError(this.handleError<any>('updateHeroine'))
      );
  }

  private log(message: string) {
    this.messageService.add('HeroineService: ' + message);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}

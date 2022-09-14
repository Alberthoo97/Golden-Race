import { Injectable } from '@angular/core';
import { interval, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  private seconds: number = 1000;

  private maxNumber: number = 10;

  getNumbers(): Observable<number> {
    return interval(this.seconds).pipe(map(v => Math.floor(Math.random() * this.maxNumber)));
  }
}

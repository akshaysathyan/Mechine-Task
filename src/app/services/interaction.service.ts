import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InteractionService {
  private _scroll: Subject<string> = new Subject<string>();

  /**
   * Getter for navigation
   */
  getScroll$(): Observable<string> {
    return this._scroll.asObservable();
  }

  setScroll$(target: string) {
    this._scroll.next(target);
  }
}

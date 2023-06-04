import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private _show$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  private _urlMap: Map<string, boolean> = new Map<string, boolean>();

  /**
   * Getter for show
   */
  get show$(): Observable<boolean> {
    return this._show$.asObservable();
  }

  /**
   * Show the loading bar
   */
  show(): void {
    this._show$.next(true);
  }

  /**
   * Hide the loading bar
   */
  hide(): void {
    this._show$.next(false);
  }

  /**
   * Sets the loading status on the given url
   *
   * @param status
   * @param url
   */
  _setLoadingStatus(status: boolean, url: string): void {
    // Return if the url was not provided
    if (!url) {
      console.error('The request URL must be provided!');
      return;
    }

    if (status === true) {
      this._urlMap.set(url, status);
      this._show$.next(true);
    } else if (status === false && this._urlMap.has(url)) {
      this._urlMap.delete(url);
    }

    // Only set the status to 'false' if all outgoing requests are completed
    if (this._urlMap.size === 0) {
      this._show$.next(false);
    }
  }
}

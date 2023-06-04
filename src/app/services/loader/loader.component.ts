import { Component } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { LoaderService } from './loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent {
  show = false;
  private _unsubscribeAll: Subject<any> = new Subject<any>();
  constructor(public _loaderService: LoaderService) {}

  /**
   * On init
   */
  ngOnInit(): void {
    this._loaderService.show$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((value) => {
        this.show = value;
      });
  }
}

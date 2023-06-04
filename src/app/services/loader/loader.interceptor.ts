import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, Observable } from 'rxjs';
import { LoaderService } from './loader.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  /**
   * Constructor
   */
  constructor(private _loaderService: LoaderService) {}
  /**
   * Intercept
   *
   * @param req
   * @param next
   */
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Set the loading status to true
    this._loaderService._setLoadingStatus(true, req.url);

    return next.handle(req).pipe(
      finalize(() => {
        // Set the status to false if there are any errors or the request is completed
        this._loaderService._setLoadingStatus(false, req.url);
      })
    );
  }
}

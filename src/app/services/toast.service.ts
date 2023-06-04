import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarConfig,
  MatSnackBarRef,
  TextOnlySnackBar,
} from '@angular/material/snack-bar';

const config: MatSnackBarConfig = {
  duration: 3000,
  horizontalPosition: 'right',
  verticalPosition: 'top',
};

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private _matSnackBar: MatSnackBar) {}

  open(
    message: string,
    action = 'OK',
    options?: MatSnackBarConfig
  ): MatSnackBarRef<TextOnlySnackBar> {
    return this._matSnackBar.open(message, action, options);
  }

  default(
    message: string,
    action = 'OK',
    options?: MatSnackBarConfig
  ): MatSnackBarRef<TextOnlySnackBar> {
    return this._matSnackBar.open(message, action, {
      panelClass: 'bg-accent',
      ...config,
      ...options,
    });
  }

  success(
    message: string,
    action = 'OK',
    options?: MatSnackBarConfig
  ): MatSnackBarRef<TextOnlySnackBar> {
    return this._matSnackBar.open(message, action, {
      panelClass: 'bg-success',
      ...config,
      ...options,
    });
  }

  error(
    message: string,
    action = 'OK',
    options?: MatSnackBarConfig
  ): MatSnackBarRef<TextOnlySnackBar> {
    return this._matSnackBar.open(message, action, {
      panelClass: 'bg-danger',
      ...config,
      ...options,
    });
  }

  info(
    message: string,
    action = 'OK',
    options?: MatSnackBarConfig
  ): MatSnackBarRef<TextOnlySnackBar> {
    return this._matSnackBar.open(message, action, {
      panelClass: 'bg-info',
      ...config,
      ...options,
    });
  }

  warning(
    message: string,
    action = 'OK',
    options?: MatSnackBarConfig
  ): MatSnackBarRef<TextOnlySnackBar> {
    return this._matSnackBar.open(message, action, {
      panelClass: 'bg-warning',
      ...config,
      ...options,
    });
  }
}

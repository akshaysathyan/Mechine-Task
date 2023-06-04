import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpService } from './services/http-service.service';
import { ToastService } from './services/toast.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DatePipe } from '@angular/common';
import { LoaderService } from './services/loader/loader.service';
import { LoaderModule } from './services/loader/loader.module';

import { InteractionService } from './services/interaction.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogeModule } from './services/dialoge/dialoge.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    MatDialogModule,
    DialogeModule,
    MatSnackBarModule,
  ],
  providers: [
    HttpService,
    ToastService,
    DatePipe,
    LoaderService,
    InteractionService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateStoryRoutingModule } from './create-story-routing.module';
import { CreateStoryComponent } from '../create-story/create-story.component';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [CreateStoryComponent],
  imports: [
    CommonModule,
    CreateStoryRoutingModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,

    AngularFirestoreModule,
  ],
})
export class CreateStoryModule {}

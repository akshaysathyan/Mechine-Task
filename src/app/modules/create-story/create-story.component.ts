import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-create-story',
  templateUrl: './create-story.component.html',
  styleUrls: ['./create-story.component.scss'],
})
export class CreateStoryComponent implements OnInit {
  task!: any[];
  taskForm!: FormGroup;

  formGroup = new FormGroup({
    story: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    points: new FormControl(null, [Validators.required]),
    created_at: new FormControl(new Date().toISOString()),
  });
  constructor(
    private firebase: FirebaseService,
    private _router: Router,
    private _toast: ToastService
  ) {}

  ngOnInit(): void {}

  cancel() {
    this._router.navigate(['/']);
  }

  saveTask() {
    let formdata = this.formGroup.value;
    if (!this.formGroup.controls.story.value) {
      this._toast.error('Please enter a story');
      return;
    }
    if (!this.formGroup.controls.description.value) {
      this._toast.error('Please enter a description');
      return;
    }

    if (!this.formGroup.controls.points.value) {
      this._toast.error('Please enter point');
      return;
    }

    if (!this.formGroup.controls.points.value) {
      this._toast.error('Please enter point');
      return;
    }
    if (this.formGroup.controls.points.value > 10) {
      this._toast.error('Point value shoud not be greater than 10');
      return;
    }
    if (this.formGroup.controls.points.value < 1) {
      this._toast.error('Point value shoud not be less than 1');
      return;
    }
    this.firebase.createDocument(formdata);
    this._toast.success('User Story Created successfully');
    this._router.navigate(['/']);
  }
}

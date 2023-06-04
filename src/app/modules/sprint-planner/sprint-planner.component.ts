import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-sprint-planner',
  templateUrl: './sprint-planner.component.html',
  styleUrls: ['./sprint-planner.component.scss'],
})
export class SprintPlannerComponent implements OnInit {
  task!: any[];
  taskForm!: FormGroup;
  data: any[] = [];
  selectedValues: [] = [];
  totalPoints!: number;

  formGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    stories: new FormControl([], [Validators.required]),
    points: new FormControl(null, [Validators.required]),
    created_at: new FormControl(new Date().toISOString()),
  });
  constructor(
    private firebase: FirebaseService,
    private _router: Router,
    private _toast: ToastService,
    private firestore: AngularFirestore
  ) {}

  ngOnInit(): void {
    this.firebase.getAllDocuments().subscribe((documents) => {
      this.data = documents;
      console.log(this.data);
    });
  }

  cancel() {
    this._router.navigate(['/sprint-planner/list']);
  }
  taskselect(e: any) {
    this.selectedValues = e.value;
    console.log(this.selectedValues);
    this.formGroup.controls.stories.setValue(this.selectedValues);
    const sum: number = this.selectedValues.reduce((acc: number, obj: any) => {
      return acc + obj.points;
    }, 0);
    console.log(sum);
    this.totalPoints = sum;
  }

  saveTask() {
    let formdata = this.formGroup.value;

    if (!this.formGroup.controls.stories.value) {
      this._toast.error('Please enter a story');
      return;
    }

    if (!this.formGroup.controls.points.value) {
      this._toast.error('Please enter point');
      return;
    }

    if (this.formGroup.controls.points.value < 1) {
      this._toast.error('Point value shoud not be less than 1');
      return;
    }

    if (!this.totalPoints) {
      this._toast.error('Please Select Story');
      return;
    }
    if (this.totalPoints > this.formGroup.controls.points.value) {
      this._toast.error('Selected Story points exeeds the total target points');
      return;
    }
    const id = this.firestore.createId();
    this.firestore.doc(`${'Sprint'}/${id}`).set(formdata);
    this._toast.success('Sprint Created successfully');
    this._router.navigate(['/sprint-planner/list']);
  }
}

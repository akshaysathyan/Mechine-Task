import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-sprint-list',
  templateUrl: './sprint-list.component.html',
  styleUrls: ['./sprint-list.component.scss'],
})
export class SprintListComponent implements OnInit {
  data: any[] = [];
  firestoreData$: Observable<any[]> | undefined;
  constructor(
    private firestore: AngularFirestore,
    private _toast: ToastService
  ) {}
  ngOnInit(): void {
    this.firestoreData$ = this.firestore.collection('Sprint').valueChanges();
    this.firestoreData$.subscribe((data) => {
      this.data = data;
      console.log(this.data);
    });
  }

  deleteSprint(id: string) {
    console.log(id);

    this.firestore
      .collection('Sprint')
      .doc(id)
      .delete()
      .then(() => {
        this._toast.success('Sprint deleted successfully');
      })
      .catch((error) => {
        this._toast.error(error.message);
      });
  }
}

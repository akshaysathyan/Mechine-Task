import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DialogeService } from 'src/app/services/dialoge.service';
import { FirebaseService } from 'src/app/services/firebase.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss'],
})
export class StoriesComponent implements OnInit {
  data: any[] = [];
  constructor(
    private firebase: FirebaseService,
    private dialogService: DialogeService,
    private _toast: ToastService
  ) {}

  ngOnInit(): void {
    this.firebase.getAllDocuments().subscribe((documents) => {
      this.data = documents;
      console.log(this.data);
    });
  }

  deleteAll() {
    const dialogRef = this.dialogService.openDialog(
      'Are you sure you want to delete this story'
    );

    if (dialogRef) {
      dialogRef.afterClosed().subscribe((result: boolean) => {
        if (result === true) {
          this.firebase.deleteAllDocuments();
          this._toast.error('Deleted all documents');
        }
      });
    }
  }
}

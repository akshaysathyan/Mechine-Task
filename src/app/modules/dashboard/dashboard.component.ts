import { Component, OnInit } from '@angular/core';
import { DialogeService } from 'src/app/services/dialoge.service';
import { FirebaseService } from 'src/app/services/firebase.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
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

  deleteStory(id: string) {
    console.log(id);

    const dialogRef = this.dialogService.openDialog(
      'Are you sure you want to delete this story'
    );

    if (dialogRef) {
      dialogRef.afterClosed().subscribe((result: boolean) => {
        if (result === true) {
          this.firebase.deleteDocument(id);
          this._toast.error('Story deleted successfully');
        }
      });
    }
  }
}

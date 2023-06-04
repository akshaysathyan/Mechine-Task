import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Observable, catchError, map, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  private collectionName = 'Story';
  collection;

  constructor(private firestore: AngularFirestore) {
    this.collection = firestore.collection(this.collectionName);
  }

  createDocument(data: any): Promise<void> {
    const id = this.firestore.createId();
    return this.firestore.doc(`${this.collectionName}/${id}`).set(data);
  }

  getDocumentById(id: string): Observable<any> {
    return this.firestore.doc(`${this.collectionName}/${id}`).valueChanges();
  }

  updateDocument(id: string, data: any): Promise<void> {
    return this.firestore.doc(`${this.collectionName}/${id}`).update(data);
  }

  deleteDocument(id: string): Promise<void> {
    return this.firestore.doc(`${this.collectionName}/${id}`).delete();
  }

  getAllDocuments(): Observable<any[]> {
    return this.collection.valueChanges({ idField: 'id' });
  }

  deleteAllDocuments(): Promise<void[]> {
    return this.collection
      .get()
      .toPromise()
      .then((querySnapshot) => {
        if (querySnapshot) {
          const deletePromises: Promise<void>[] = [];
          querySnapshot.forEach((doc) => {
            deletePromises.push(doc.ref.delete());
          });
          return Promise.all(deletePromises);
        } else {
          return [];
        }
      });
  }
}

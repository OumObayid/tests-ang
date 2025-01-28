import { Injectable } from '@angular/core';
import { Firestore, collectionData, addDoc, collection, deleteDoc, doc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(private firestore: Firestore) {}

  getDocuments(collectionName: string): Observable<any[]> {
    const colRef = collection(this.firestore, collectionName);
    return collectionData(colRef, { idField: 'id' });
  }

  addDocument(collectionName: string, data: any) {
    const colRef = collection(this.firestore, collectionName);
    return addDoc(colRef, data);
  }

  deleteDocument(collectionName: string, docId: string) {
    const docRef = doc(this.firestore, `${collectionName}/${docId}`);
    return deleteDoc(docRef);
  }
}

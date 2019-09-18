import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Property, LabeledData } from '../core-model/properties';

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {
  constructor(
    private firestore: AngularFirestore
  ) { }

  public getProperties() {
    return this.firestore.collection('places').valueChanges();
  }

  public getById(propertyId: Property['id']) {
    return this.firestore
      .collection('places')
      .doc<Property>(propertyId)
      .get()
      .pipe(
        map(snap => snap.data())
      );
  }

  public getPropertyFeatures(propertyId: Property['id']) {
    return this.firestore
      .collection('places')
      .doc(propertyId)
      .collection<LabeledData>('features')
      .get()
      .pipe(
        map(snap => snap.docs.map(doc => doc.data()))
      );
  }

  public getPropertyRecords(propertyId: Property['id']) {
    return this.firestore
      .collection('places')
      .doc(propertyId)
      .collection<LabeledData>('records')
      .get()
      .pipe(
        map(snap => snap.docs.map(doc => doc.data()))
      );
  }
}

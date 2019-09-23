import { Injectable } from '@angular/core';
import { AngularFirestore, QuerySnapshot } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Property, LabeledData, PropertyStatsAttribute, PropertyReview } from '../core-model/properties';

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {
  constructor(
    private firestore: AngularFirestore
  ) { }

  public getAll() {
    return this.firestore.collection<Property>('places').valueChanges();
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

  public getFeatures(propertyId: Property['id']) {
    return this.getSubCollection<LabeledData>(propertyId, 'features');
  }

  public getRecords(propertyId: Property['id']) {
    return this.getSubCollection<LabeledData>(propertyId, 'records');
  }

  public getPublicStats(propertyId: Property['id']) {
    return this.getSubCollection<PropertyStatsAttribute>(propertyId, 'stats');
  }

  public getReviews(propertyId: Property['id']) {
    return this.getSubCollection<PropertyReview>(propertyId, 'reviews');
  }

  private getSubCollection<DataType = any>(propertyId: Property['id'], collection: string) {
    return this.firestore
      .collection('places')
      .doc(propertyId)
      .collection<DataType>(collection)
      .get()
      .pipe(
        map(snap => snap.docs.map(doc => doc.data() as DataType))
      );
  }
}

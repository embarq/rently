import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { PropertiesService } from './properties.service';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PropertyResolver implements Resolve<any> {

  constructor(
    private propertiesService: PropertiesService
  ) { }

  resolve(route: ActivatedRouteSnapshot) {
    if ('id' in route.params) {
      return combineLatest(
        this.propertiesService.getById(route.params.id),
        this.propertiesService.getFeatures(route.params.id),
        this.propertiesService.getRecords(route.params.id)
      ).pipe(
        map(([ prop, features, records ]) => {
          return {
            ...prop,
            features,
            records
          }
        })
      )
    }

    // TODO: redirect to 404
    return null;
  }
}

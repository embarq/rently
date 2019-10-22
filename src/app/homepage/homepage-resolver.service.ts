import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { Property } from '../core-model/properties';
import { PropertiesService } from '../core/properties.service';

@Injectable({
  providedIn: 'root'
})
export class HomepageResolverService implements Resolve<Property[]> {

  constructor() { }

  resolve() {
    return null
  }
}

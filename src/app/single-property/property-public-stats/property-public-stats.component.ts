import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Property } from 'src/app/core-model/properties';

@Component({
  selector: 'rty-property-public-stats',
  templateUrl: './property-public-stats.component.html',
  styleUrls: ['./property-public-stats.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PropertyPublicStatsComponent implements OnInit {
  @Input()
  public readonly data: Property;

  private readonly neighborhoodStatAttributesMapping: { [id: number]: string };

  constructor() {
    this.neighborhoodStatAttributesMapping = {
      1: 'fa-smile',
      2: 'fa-glass-cheers',
      3: 'fa-hourglass',
      4: 'fa-candy-cane',
      5: 'fa-binoculars',
      6: 'fa-headphones-alt',
      7: 'fa-dove',
      8: 'fa-shopping-cart',
      9: 'fa-utensils',
      10: 'fa-parking',
      11: 'fa-car',
      12: 'fa-moon',
      13: 'fa-walking',
      14: 'fa-lightbulb',
      15: 'fa-child',
      16: 'fa-paw',
    };
  }

  ngOnInit() {
  }

  public getAttributeIcon(id) {
    return this.neighborhoodStatAttributesMapping[id];
  }

}

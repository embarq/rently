import { Component, OnInit, ChangeDetectionStrategy, Input, ChangeDetectorRef } from '@angular/core';
import { Property } from 'src/app/core-model/properties';
import { environment } from 'src/environments/environment';
import * as isEmpty from 'lodash/isEmpty';

@Component({
  selector: 'rty-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PropertyCardComponent implements OnInit {
  @Input() data: Property;

  public propPreviewImageUrl: string = null;

  constructor() { }

  ngOnInit() {
    if (!isEmpty(this.data.picturesCollection)) {
      const firstEntry = this.data.picturesCollection[0];
      this.propPreviewImageUrl = `${ environment.remoteAssetsCdn }/pictures/${ firstEntry }`;
    }
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Property } from 'src/app/core-model/properties';
import isEmpty from 'lodash/isEmpty';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'rty-property-list-item',
  templateUrl: './property-list-item.component.html',
  styleUrls: ['./property-list-item.component.scss']
})
export class PropertyListItemComponent implements OnInit {
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

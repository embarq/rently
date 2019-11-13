import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Property } from 'src/app/core-model/properties';

@Component({
  selector: 'rty-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PropertyDetailsComponent {
  @Input()
  public readonly data: Property;
}

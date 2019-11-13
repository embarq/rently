import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Property } from 'src/app/core-model/properties';

@Component({
  selector: 'rty-property-overview',
  templateUrl: './property-overview.component.html',
  styleUrls: ['./property-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PropertyOverviewComponent {
  @Input()
  public readonly data: Property;
}

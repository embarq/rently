import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { LabeledData } from 'src/app/core-model/properties';

@Component({
  selector: 'rty-property-attributes-grid',
  templateUrl: './property-attributes-grid.component.html',
  styleUrls: ['./property-attributes-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PropertyAttributesGridComponent {
  @Input()
  public readonly data: LabeledData[];
}

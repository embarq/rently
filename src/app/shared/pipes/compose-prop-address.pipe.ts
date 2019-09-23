import { Pipe, PipeTransform } from '@angular/core';
import { Property } from 'src/app/core-model/properties';

@Pipe({
  name: 'composePropAddress',
  pure: true
})
export class ComposePropAddressPipe implements PipeTransform {

  transform(prop: Property) {
    const { streetNumber, street, state, zipCode } = prop;
    return `${ streetNumber } ${ street }, ${ state } ${ zipCode }`;
  }

}

import { Pipe, PipeTransform } from '@angular/core';
import * as isEmpty from 'lodash/isEmpty';

@Pipe({
  name: 'isEmpty',
  pure: true
})
export class IsEmptyPipe implements PipeTransform {

  transform(value: any): any {
    return value == null || isEmpty(value);
  }

}

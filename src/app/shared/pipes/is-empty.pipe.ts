import { Pipe, PipeTransform } from '@angular/core';
import { isEmpty } from 'lodash-es';

@Pipe({
  name: 'isEmpty',
  pure: true
})
export class IsEmptyPipe implements PipeTransform {

  transform(value: any): any {
    return value == null || isEmpty(value);
  }

}

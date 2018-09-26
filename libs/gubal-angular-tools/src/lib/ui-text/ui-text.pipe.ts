import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'xivUIText'
})
export class UiTextPipe implements PipeTransform {

  //<72>F201FA</72><73>F201FB</73>Bio<73>01</73><72>01</72>

  transform(value: string): string {
    return null;
  }

}

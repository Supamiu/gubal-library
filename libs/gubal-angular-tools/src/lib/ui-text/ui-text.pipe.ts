import { OnDestroy, Pipe, PipeTransform } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { UIColor } from './ui-color';

@Pipe({
  name: 'xivUIText',
  pure: false
})
export class UiTextPipe implements PipeTransform, OnDestroy {

  private subscription: Subscription;

  private colors: UIColor[] = [];

  constructor(http: HttpClient) {
    http.get<UIColor[]>('http://staging.xivapi.com/Colors')
      .subscribe(colors => this.colors = colors);
  }

  //<72>F201FA</72><73>F201FB</73>Bio<73>01</73><72>01</72>

  transform(value: string): string {
    value = value.replace(/<73>(.*?)<\/73>/i, '');
    value = value.replace(/<73>01/i, '');
    value = value.replace(/<72>01<\/72>/, '</span>');
    const matches = value.match(/<72>(.*?)<\/72>/i);
    if (matches[0]) {
      const colorCode = matches[1].substr(-4);
      console.log(colorCode);
      const colorEntry: UIColor = this.colors.find(c => c.ColorAHex === colorCode);
      const color = colorEntry === undefined ? '#fff' : colorEntry.ColorAHex;
      value = value.replace(matches[0], `<span style="color: #${color};">`);
    }
    return value;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}

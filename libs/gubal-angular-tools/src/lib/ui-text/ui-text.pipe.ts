import { OnDestroy, Pipe, PipeTransform } from '@angular/core';
import { Subscription } from 'rxjs';
import { UIColor } from './ui-color';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { UiColorsService } from '../ui-colors.service';

@Pipe({
  name: 'xivUIText',
  pure: false
})
export class UiTextPipe implements PipeTransform, OnDestroy {

  private subscription: Subscription;

  private colors: UIColor[] = [];

  constructor(private uiColorsService: UiColorsService, private sanitizer: DomSanitizer) {
    this.subscription = this.uiColorsService.getColors().subscribe(colors => this.colors = colors);
  }

  transform(value: string): SafeHtml {
    value = value.replace(/<73>(.*?)<\/73>/gi, '');
    value = value.replace(/<72>01<\/72>/gi, '</span>');
    value = value.replace(/\n/g, '<br>');
    let match;
    while (match = /<72>(.*?)<\/72>/gi.exec(value)) {
      const colorID = parseInt(match[1].substr(-4), 16);
      const colorEntry: UIColor = this.colors.find(c => c.ID === colorID);
      const color = colorEntry === undefined ? 'fff' : colorEntry.ColorAHex;
      value = value.replace(match[0], `<span style="color: #${color};">`);
    }
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}

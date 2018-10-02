import { Component, Input } from '@angular/core';

@Component({
  selector: 'gubal-item-gear-details',
  templateUrl: './item-gear-details.component.html',
  styleUrls: ['./item-gear-details.component.scss']
})
export class ItemGearDetailsComponent {

  @Input()
  item: any;

  public getStats(): { name: string, value: number }[] {
    if (this.item === null) {
      return [];
    }
    return Object.keys(this.item)
      .filter(key => /^BaseParam\d+$/.test(key) && this.item[key] !== 0)
      .map(key => {
        const statIndex = key.match(/(\d+)/)[0];
        return {
          // TODO i18n
          name: this.item[key].Name,
          value: this.item[`BaseParamValue${statIndex}`]
        };
      });
  }

}

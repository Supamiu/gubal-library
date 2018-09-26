import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { XivapiEndpoint, XivapiService } from '@xivapi/angular-client';
import { map } from 'rxjs/operators';

@Component({
  selector: 'gubal-item-action-details',
  templateUrl: './item-action-details.component.html',
  styleUrls: ['./item-action-details.component.scss']
})
export class ItemActionDetailsComponent implements OnInit {

  @Input()
  action: any;

  actionDetails$: Observable<any>;

  constructor(private xivapi: XivapiService) {
  }

  ngOnInit(): void {
    this.actionDetails$ = this.xivapi.get(XivapiEndpoint.ItemFood, this.action.Data1).pipe(
      map(details => {
        return Object.keys(details).filter(key => /^BaseParam\d$/.test(key))
          .map(key => {
            const paramIndex = key[key.length - 1];
            return {
              stat: details[key],
              value: details[`Value${paramIndex}`],
              max: details[`Max${paramIndex}`],
              HQvalue: details[`ValueHQ${paramIndex}`],
              HQmax: details[`MaxHQ${paramIndex}`]
            };
          });
      })
    );
  }

}

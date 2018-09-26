import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { XivapiEndpoint, XivapiService } from '@xivapi/angular-client';
import { map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'gubal-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.less']
})
export class ItemComponent {

  item$: Observable<any>;

  constructor(route: ActivatedRoute, xivapi: XivapiService) {
    this.item$ = route.paramMap.pipe(
      map(params => params.get('itemId')),
      mergeMap(itemId => xivapi.get(XivapiEndpoint.Item, +itemId))
    )
  }

}

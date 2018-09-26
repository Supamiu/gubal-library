import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { XivapiEndpoint, XivapiService } from '@xivapi/angular-client';
import { map, mergeMap } from 'rxjs/operators';
import { PageContainerTabEntry } from '../../../core/page-container/page-container-tab-entry';
import { PageContainerTab } from '../../../core/page-container/page-container-tab';
import { ExternalLink } from '../../../core/model/external-link';

@Component({
  selector: 'gubal-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  item$: Observable<any>;

  tabs$: Observable<PageContainerTabEntry[]>;

  @ViewChild('details')
  detailsRef: TemplateRef<any>;

  externalLinks$: Observable<ExternalLink[]>;

  constructor(route: ActivatedRoute, xivapi: XivapiService) {
    this.item$ = route.paramMap.pipe(
      map(params => params.get('itemId')),
      mergeMap(itemId => xivapi.get(XivapiEndpoint.Item, +itemId))
    );
    this.externalLinks$ = this.item$.pipe(
      map(item => {
        return [
          {
            url: `http://www.garlandtools.org/db/#item/${item.ID}`,
            toolName: 'GarlandTools',
            icon: 'https://xivdb.com/img/ui/GarlandLogo.png'
          },
          {
            url: `http://www.garlandtools.org/db/#item/${item.Name_en.toString().split(' ').join('_')}`,
            toolName: 'Gamer Escape',
            icon: 'https://xivdb.com/img/ui/GE.png'
          }
        ]
      })
    )
  }

  ngOnInit(): void {
    this.tabs$ = this.item$.pipe(
      map(item => {
        return [
          {
            title: PageContainerTab.DETAILS,
            template: this.detailsRef,
            active: true
          },
          {
            title: PageContainerTab.COMMENTS,
            template: null,
            counter: 0
          },
          {
            title: PageContainerTab.SCREENSHOTS,
            template: null,
            counter: 0
          },
          {
            title: PageContainerTab.QUESTS,
            template: null,
            counter: this.getLinkCount(item, 'Quest')
          },
          {
            title: PageContainerTab.INSTANCES,
            template: null,
            counter: 0
          },
          {
            title: PageContainerTab.ENEMIES,
            template: null,
            counter: 0
          },
          {
            title: PageContainerTab.RECIPES,
            template: null,
            counter: this.getLinkCount(item, 'Recipe')
          },
          {
            title: PageContainerTab.CREATED_FROM,
            template: null,
            counter: 0
          },
          {
            title: PageContainerTab.SHOPS,
            template: null,
            counter: 0
          },
          {
            title: PageContainerTab.SPECIAL_SHOPS,
            template: null,
            counter: 0
          },
          {
            title: PageContainerTab.CURRENCY,
            template: null,
            counter: 0
          },
          {
            title: PageContainerTab.GATHERING,
            template: null,
            counter: 0
          },
          {
            title: PageContainerTab.GUILD_LEVES,
            template: null,
            counter: 0
          }
        ];
      })
    );
  }

  private getLinkCount(item: any, propertyName: string): number {
    if (item.GameContentLinks[propertyName] === undefined) {
      return 0;
    }
    return Object.keys(item.GameContentLinks[propertyName]).length;
  }

}

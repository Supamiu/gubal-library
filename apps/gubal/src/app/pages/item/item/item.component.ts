import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { XivapiEndpoint, XivapiService } from '@xivapi/angular-client';
import { map, mergeMap } from 'rxjs/operators';
import { PageContainerBlockEntry } from '../../../core/page-container/page-container-block-entry';
import { PageContainerBlock } from '../../../core/page-container/page-container-block';
import { ExternalLink } from '../../../core/model/external-link';

@Component({
  selector: 'gubal-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  item$: Observable<any>;

  blocks$: Observable<PageContainerBlockEntry[]>;

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
    this.blocks$ = this.item$.pipe(
      map(item => {
        return [
          {
            title: PageContainerBlock.DETAILS,
            template: this.detailsRef
          },
          {
            title: PageContainerBlock.COMMENTS,
            template: null
          },
          {
            title: PageContainerBlock.SCREENSHOTS,
            template: null
          },
          {
            title: PageContainerBlock.QUESTS,
            template: null
          },
          {
            title: PageContainerBlock.INSTANCES,
            template: null
          },
          {
            title: PageContainerBlock.ENEMIES,
            template: null
          },
          {
            title: PageContainerBlock.RECIPES,
            template: null
          },
          {
            title: PageContainerBlock.CREATED_FROM,
            template: null
          },
          {
            title: PageContainerBlock.SHOPS,
            template: null
          },
          {
            title: PageContainerBlock.SPECIAL_SHOPS,
            template: null
          },
          {
            title: PageContainerBlock.CURRENCY,
            template: null
          },
          {
            title: PageContainerBlock.GATHERING,
            template: null
          },
          {
            title: PageContainerBlock.GUILD_LEVES,
            template: null
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

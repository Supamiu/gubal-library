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
        ];
      })
    );
  }

  ngOnInit(): void {
    this.blocks$ = this.item$.pipe(
      map(item => {
        const blocks: PageContainerBlockEntry[] = [
          {
            title: PageContainerBlock.DETAILS,
            template: this.detailsRef
          }
        ];

        if (item.GameContentLinks.Recipe) {
          blocks.push(
            {
              title: PageContainerBlock.RECIPES,
              template: null
            }
          );
        }

        if (item.GameContentLinks.Quest) {
          blocks.push(
            {
              title: PageContainerBlock.QUESTS,
              template: null
            }
          );
        }

        return blocks;
      })
    );
  }

}

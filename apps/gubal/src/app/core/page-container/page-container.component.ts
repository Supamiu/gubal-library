import { Component, Input } from '@angular/core';
import { PageContainerBlockEntry } from './page-container-block-entry';
import { ExternalLink } from '../model/external-link';

@Component({
  selector: 'gubal-page-container',
  templateUrl: './page-container.component.html',
  styleUrls: ['./page-container.component.scss']
})
export class PageContainerComponent {

  @Input()
  data: any;

  @Input()
  blocks: PageContainerBlockEntry[] = [];

  @Input()
  externalLinks: ExternalLink[] = [];

  constructor() {
  }

}

import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { PageContainerTabEntry } from './page-container-tab-entry';
import { ExternalLink } from '../model/external-link';

@Component({
  selector: 'gubal-page-container',
  templateUrl: './page-container.component.html',
  styleUrls: ['./page-container.component.scss']
})
export class PageContainerComponent implements OnInit {

  @Input()
  data: any;

  @Input()
  tabs: PageContainerTabEntry[] = [];

  @Input()
  externalLinks: ExternalLink[] = [];

  constructor() {
  }

  ngOnInit() {
  }

  public getActiveTemplate(): TemplateRef<any> {
    if (this.tabs === null) {
      return null;
    }
    const activeTab = this.tabs.find(tab => tab.active);
    return activeTab !== undefined ? activeTab.template : null;
  }

  public selectTab(tab: PageContainerTabEntry): void {
    this.tabs.forEach(t => t.active = false);
    tab.active = true;
  }

}

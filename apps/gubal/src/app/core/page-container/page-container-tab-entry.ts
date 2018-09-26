import { PageContainerTab } from './page-container-tab';
import { TemplateRef } from '@angular/core';

export interface PageContainerTabEntry {
  title: PageContainerTab;
  template: TemplateRef<any>;
  counter?: number;
  active?: boolean;
}

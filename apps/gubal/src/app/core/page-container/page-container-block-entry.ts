import { PageContainerBlock } from './page-container-block';
import { TemplateRef } from '@angular/core';

export interface PageContainerBlockEntry {
  title: PageContainerBlock;
  template: TemplateRef<any>;
}

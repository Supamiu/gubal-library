import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './icon/icon.component';
import { LoaderComponent } from './loader/loader.component';
import { DetailsBlockComponent } from './details-block/details-block.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DetailsRowComponent } from './details-row/details-row.component';
import { PageContainerComponent } from './page-container/page-container.component';

@NgModule({
  imports: [
    CommonModule,

    FlexLayoutModule
  ],
  declarations: [
    IconComponent,
    LoaderComponent,
    DetailsBlockComponent,
    DetailsRowComponent,
    PageContainerComponent
  ],
  exports: [
    IconComponent,
    LoaderComponent,
    DetailsBlockComponent,
    DetailsRowComponent,
    PageContainerComponent
  ]
})
export class CoreModule {
}

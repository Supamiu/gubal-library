import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './icon/icon.component';
import { LoaderComponent } from './loader/loader.component';
import { DetailsBlockComponent } from './details-block/details-block.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DetailsRowComponent } from './details-row/details-row.component';
import { PageContainerComponent } from './page-container/page-container.component';
import { GubalAngularToolsModule } from '../../../../../libs/gubal-angular-tools/src';
import { RouterModule } from '@angular/router';
import { DetailsCardComponent } from './details-card/details-card.component';

@NgModule({
  imports: [
    CommonModule,

    FlexLayoutModule,

    GubalAngularToolsModule,
    RouterModule
  ],
  declarations: [
    IconComponent,
    LoaderComponent,
    DetailsBlockComponent,
    DetailsRowComponent,
    PageContainerComponent,
    DetailsCardComponent
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

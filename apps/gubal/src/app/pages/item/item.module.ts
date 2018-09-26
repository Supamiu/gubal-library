import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemRoutingModule } from './item-routing.module';
import { ItemComponent } from './item/item.component';
import { XivapiClientModule } from '@xivapi/angular-client';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GubalAngularToolsModule } from '../../../../../../libs/gubal-angular-tools/src';
import { ItemActionDetailsComponent } from './item-action-details/item-action-details.component';
import { CoreModule } from '../../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    ItemRoutingModule,
    GubalAngularToolsModule,

    XivapiClientModule,

    CoreModule
  ],
  declarations: [ItemComponent, ItemActionDetailsComponent]
})
export class ItemModule {
}

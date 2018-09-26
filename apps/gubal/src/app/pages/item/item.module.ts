import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemRoutingModule } from './item-routing.module';
import { ItemComponent } from './item/item.component';
import { XivapiClientModule } from '@xivapi/angular-client';
import { IconModule } from '../../modules/icon/icon.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    ItemRoutingModule,

    XivapiClientModule,

    IconModule,
  ],
  declarations: [ItemComponent]
})
export class ItemModule {
}

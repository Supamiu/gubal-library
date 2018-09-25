import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemRoutingModule } from './item-routing.module';
import { ItemComponent } from './item/item.component';
import { XivapiClientModule } from '@xivapi/angular-client';

@NgModule({
  imports: [
    CommonModule,
    ItemRoutingModule,

    XivapiClientModule
  ],
  declarations: [ItemComponent]
})
export class ItemModule {
}

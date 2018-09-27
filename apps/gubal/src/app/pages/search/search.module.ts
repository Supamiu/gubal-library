import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { XivapiClientModule } from '@xivapi/angular-client';
import { CoreModule } from '../../core/core.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GubalAngularToolsModule } from '../../../../../../libs/gubal-angular-tools/src';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    FlexLayoutModule,
    GubalAngularToolsModule,
    RouterModule,

    XivapiClientModule
  ],
  declarations: [SearchComponent]
})
export class SearchModule {
}

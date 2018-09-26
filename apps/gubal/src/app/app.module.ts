import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { XivapiClientModule } from '@xivapi/angular-client';
import { ItemModule } from './pages/item/item.module';
import { ItemRoutingModule } from './pages/item/item-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    NxModule.forRoot(),
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),

    XivapiClientModule.forRoot('cb3e18f360c44641822c65a1'),

    ItemModule,
    ItemRoutingModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

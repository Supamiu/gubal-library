import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { XivapiClientModule } from '@xivapi/angular-client';
import { ItemModule } from './pages/item/item.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SearchModule } from './pages/search/search.module';
import { WorkInProgressModule } from './pages/work-in-progress/work-in-progress.module';
import { SearchRoutingModule } from './pages/search/search-routing.module';
import { ItemRoutingModule } from './pages/item/item-routing.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslationsLoaderFactory } from './translations-loader';

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
    SearchModule,
    SearchRoutingModule,
    FlexLayoutModule,


    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: TranslationsLoaderFactory,
        deps: [HttpClient]
      }
    }),

    // This must always be imported at the very end for routing purpose
    WorkInProgressModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

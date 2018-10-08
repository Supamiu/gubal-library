import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { XivapiSearchOptions, XivapiService } from '@xivapi/angular-client';

@Component({
  selector: 'gubal-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  public results$: Observable<any>;

  private request$: Observable<any>;

  constructor(private route: ActivatedRoute, private xivapi: XivapiService) {
    this.request$ = this.route.queryParamMap.pipe(
      map(query => {
        return <XivapiSearchOptions>{
          string: query.get('string'),
          staging: true
        };
      }),
      mergeMap(searchOptions => {
        return this.xivapi.search(searchOptions);
      })
    );
    this.results$ = this.request$.pipe(
      map(response => response.Results.map(result => {
          // TODO i18n slug part
          return { ...result, uri: `/${result.UrlType.toLowerCase()}/${result.ID}/${result.Name.split(' ').join('+')}` };
        }
      ))
    );
  }
}

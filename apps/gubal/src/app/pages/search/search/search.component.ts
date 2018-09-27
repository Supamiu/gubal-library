import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { XivapiService } from '@xivapi/angular-client';

@Component({
  selector: 'gubal-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent {

  public results$: Observable<any>;

  private request$: Observable<any>;

  constructor(private route: ActivatedRoute, private xivapi: XivapiService) {
    this.request$ = this.route.queryParamMap.pipe(
      map(query => {
        return {
          string: query.get('string')
        };
      }),
      mergeMap(searchOptions => {
        return this.xivapi.search(searchOptions);
      })
    );
    this.results$ = this.request$.pipe(
      map(response => response.Results.map(result => {
          // TODO i18n slug part
          return { ...result, uri: `/${result.GameType.toLowerCase()}/${result.ID}/${result.Name.split(' ').join('+')}` };
        }
      ))
    );
  }
}

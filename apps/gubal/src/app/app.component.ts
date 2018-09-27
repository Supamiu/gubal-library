import { Component } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable, Subject } from 'rxjs';
import { debounceTime, filter, map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { XivapiSearchOptions } from '@xivapi/angular-client';

@Component({
  selector: 'gubal-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public initialSearchQueryValue$: Observable<string>;

  // TODO filters
  searchQuery$: Subject<string> = new Subject<string>();

  filters$: BehaviorSubject<XivapiSearchOptions> = new BehaviorSubject<XivapiSearchOptions>({});

  constructor(router: Router, activeRoute: ActivatedRoute) {
    this.initialSearchQueryValue$ = activeRoute.queryParamMap.pipe(
      map(queryParams => queryParams.get('string'))
    );
    combineLatest(this.searchQuery$, this.filters$).pipe(
      debounceTime(500),
      filter(([query]) => query.length > 1),
      map(([query, filters]) => {
        return {
          ...filters,
          string: query
        };
      })
    ).subscribe(options => {
      router.navigate(['search'], {queryParams: options});
    });
  }


}

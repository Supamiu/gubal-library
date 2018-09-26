import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { XivapiService } from '@xivapi/angular-client';
import { debounceTime, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'gubal-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  searchQuery$: Subject<string> = new Subject<string>();

  results$: Observable<any>;

  constructor(xivapi: XivapiService) {
    this.results$ = this.searchQuery$.pipe(
      debounceTime(500),
      mergeMap(query => xivapi.search({
        string: query
      }))
    )
  }


}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UIColor } from './ui-text/ui-color';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UiColorsService {

  constructor(private http: HttpClient) {
  }

  getColors(): Observable<UIColor[]> {
    return this.http.get<UIColor[]>('http://staging.xivapi.com/Colors')
      .pipe(
        shareReplay(1)
      );
  }
}

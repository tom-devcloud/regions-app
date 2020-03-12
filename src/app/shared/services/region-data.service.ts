import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class RegionDataService {

  endpoint = 'https://restcountries.eu/rest/v2/region/';

  constructor(
    private http: HttpClient
  ) {}

  getRegionData(region: string): Observable<any> {
    const url = `${this.endpoint}${region}`;
    return this.http.get<any>(url).pipe(
      catchError(this.handleError<any>('getRegionData', {}))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation: string, result?: T) {
    return (error: any): Observable<T> => {

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

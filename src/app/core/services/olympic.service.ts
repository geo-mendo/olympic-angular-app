import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {BehaviorSubject, concatAll, filter, find, first, map, Observable, take} from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import {CountryItem} from "../types/dataType";
import {logMessages} from "@angular-devkit/build-angular/src/builders/browser-esbuild/esbuild";

@Injectable({
  providedIn: 'root',
})
export class OlympicService {
  private olympicUrl = './assets/mock/olympic.json';
  private olympics$ = new BehaviorSubject<any>(undefined);

  constructor(private http: HttpClient) {}

  loadInitialData() {
    return this.http.get<any>(this.olympicUrl).pipe(
      tap((value) => this.olympics$.next(value)),
      catchError((error, caught) => {
        // TODO: improve error handling
        console.error(error);
        // can be useful to end loading state and let the user know something went wrong
        this.olympics$.next(null);
        return caught;
      })
    );
  }

  getOlympics(){
    return this.olympics$.asObservable();
  }

  getCountryByName(countryName:string): Observable<CountryItem> {
    return this.getOlympics().pipe(
      filter(Boolean),
      concatAll(),
      filter(( t:any) => t.country.toLowerCase() === countryName),
    ) ;
  }
}

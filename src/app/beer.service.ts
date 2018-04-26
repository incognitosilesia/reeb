import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import "rxjs/Rx";
import { Subject, Observable, Subscription } from "rxjs";
import { Beer } from "./beer.interface";

@Injectable()
export class BeerService {
  constructor(private http: HttpClient) {}
  beerApiUrl: string = "https://api.punkapi.com/v2/beers";
  beerStream$ = new Subject<Beer>();
  beer;

  /**
   * Function represents the list of beers from PunkApi
   * @returns {Observable}<Beer[]> 
   */
  getBeerList(page):Observable<Beer[]> {
    console.log(page);
    return this.http.get<Beer[]>(`${this.beerApiUrl}?page=${page}&per_page=25`);
  }

    /**
   * Function represents chosen/clicked by user single beer
   * @param {string} id
   * @returns {Subscription}
   */
  getBeer(id: string):Subscription{
    return this.http.get(`${this.beerApiUrl}/${id}`).subscribe(beer => {
      this.beer = beer;
      this.beerStream$.next(this.beer);
    });
    
  }


    /**
   * Function represents chosen/clicked by user single beer
   * @param {string} id
   * @returns {Observable} <Beer>
   */
  getBeerStream(id: string): Observable<Beer> {
    this.getBeer(id);
    return Observable.from(this.beerStream$).startWith(this.beer);
  }
}

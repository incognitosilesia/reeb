import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import "rxjs/Rx";
import { Subject, Observable } from "rxjs";
import { Beer } from "./beer";

@Injectable()
export class BeerService {
  constructor(private http: HttpClient) {}
  beerApiUrl: string = "https://api.punkapi.com/v2/beers";
  beerStream$ = new Subject<Beer>();
  beer;

  /**
   * Function represents the list of beers from PunkApi
   * @returns {Observable}
   */
  getBeerList():Observable<any> {
    return this.http.get(`${this.beerApiUrl}?page=1&per_page=70`);
  }

    /**
   * Function represents chosen/clicked by user single beer
   * @param {string} id
   * @returns {Object} beer
   */
  getBeer(id: string){
    return this.http.get(`${this.beerApiUrl}/${id}`).subscribe(beer => {
      this.beer = beer;
      this.beerStream$.next(this.beer);
    });
    
  }


    /**
   * Function represents chosen/clicked by user single beer
   * @param {string} id
   * @returns {Observable} beer
   */
  getBeerStream(id: string): Observable<Beer> {
    this.getBeer(id);
    return Observable.from(this.beerStream$).startWith(this.beer);
  }
}

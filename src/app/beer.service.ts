import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import "rxjs/Rx";
import { Subject, Observable } from "rxjs";

@Injectable()
export class BeerService {

  constructor(private http: HttpClient) { }
  beerApiUrl: string = "https://api.punkapi.com/v2/beers";
  beerStream$ = new Subject<any>();
  beer;


  getBeerList(){
    return this.http.get(`${this.beerApiUrl}`);
  }

  getBeer(id){
    return this.http.get(`${this.beerApiUrl}/${id}`)
    .subscribe(beer => {
        this.beer = beer;
        this.beerStream$.next(this.beer);
      });

  }

  getBeerStream(id) {
      this.getBeer(id);
  
    return Observable.from(this.beerStream$).startWith(this.beer);
  }

}

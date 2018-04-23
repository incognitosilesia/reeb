import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { BeerService } from './beer.service';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class BeerResolve implements Resolve<any> {
  
  constructor(private  beerService: BeerService){}
 resolve(route:ActivatedRouteSnapshot, 
        state:RouterStateSnapshot,
       ): Observable<any> {
    return this.beerService.getBeer(route.queryParams['id']);  
  }
}
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { BeerService } from './../beer.service';
import "rxjs/Rx";
import { Subject, Observable } from "rxjs";

@Component({
  selector: 'app-beer-details',
  templateUrl: './beer-details.component.html',
  styleUrls: ['./beer-details.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class BeerDetailsComponent implements OnInit {

  beer;
  foods;
  spinner: boolean = false;

  constructor(private activeRoute: ActivatedRoute,
              private router: Router,
              private beerService: BeerService) { }

  ngOnInit() {
    this.spinner = true;
    this.activeRoute.params.subscribe((params => {
      let id = params["id"];
      this.beerService.getBeerStream(id).subscribe((beer => {
        console.log(beer);
        if (beer) {
          this.beer = beer[0];
          this.foods = this.beer.food_pairing;
          console.log(this.beer.food_pairing);
          this.spinner = false;
         
          //this.beer.food_pairing = this.beer.food_pairing.join([' --- ']);          
        
        }
      }))
    }));


  }

  backToList() {
  this.router.navigate(['/']);
}

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { BeerService } from './../beer.service';
import "rxjs/Rx";
import { Subject, Observable } from "rxjs";

@Component({
  selector: 'app-beer-details',
  templateUrl: './beer-details.component.html',
  styleUrls: ['./beer-details.component.css']
})
export class BeerDetailsComponent implements OnInit {

  beer;

  constructor(private activeRoute: ActivatedRoute,
              private router: Router,
              private beerService: BeerService) { }

  ngOnInit() {
    this.activeRoute.params.subscribe((params => {
      let id = params["id"];
      this.beerService.getBeerStream(id).subscribe((beer => {
        console.log(beer);
        if (beer) {
          this.beer = beer[0];
        }
      }))
    }))
  }

}

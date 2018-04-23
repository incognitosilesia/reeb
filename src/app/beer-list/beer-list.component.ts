import { BeerService } from './../beer.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {

  constructor(private BeerService: BeerService,
              private router: Router) { }

  beers;

  ngOnInit() {

    this.BeerService.getBeerList().subscribe((beers => {
      this.beers = beers;
    }))
  }

  showDetails(beer){
    console.log("beer.id",beer.id);
    this.router.navigate(["details", beer.id]);
  }

}

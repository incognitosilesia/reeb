import { BeerService } from './../beer.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {

  beers;
  
  p: number = 1;
  spinner: boolean = false;

  constructor(private BeerService: BeerService,
              private router: Router) { }



  ngOnInit() {

    this.spinner = true;

    this.BeerService.getBeerList().subscribe((beers => {
      this.beers = beers;
      this.spinner = false;
    }))
  }

  showDetails(beer){
    console.log("beer.id",beer.id);
    this.router.navigate(["details", beer.id]);
  }

}

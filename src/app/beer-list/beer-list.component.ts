import { BeerService } from './../beer.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Beer } from '../beer';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {

  beers;
  p: number = 1;
  spinner: boolean = false;

  constructor(private BeerService: BeerService,
              private router: Router) { 
                this.spinner = true;
              }

  ngOnInit() {
    this.BeerService.getBeerList().subscribe((beers => {
      this.beers = beers;
      console.log(this.beers);
      this.spinner = false;
    }))
  }

  showDetails(beer:Beer){
    console.log("beer.id",beer.id);
    this.router.navigate(["details", beer.id]);
  }

}

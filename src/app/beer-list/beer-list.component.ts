import { BeerService } from "./../beer.service";
import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Beer } from "../beer.interface";

@Component({
  selector: "app-beer-list",
  templateUrl: "./beer-list.component.html",
  styleUrls: ["./beer-list.component.scss"]
})
export class BeerListComponent implements OnInit {
  beers: Beer[];
  p: number = 1;
  spinner: boolean = false;
  loading: boolean = false;
  total: number = 0;
  page: number = 1;
  limit: number = 25;

  constructor(private BeerService: BeerService, private router: Router) {}

  ngOnInit() {
    this.getBeers();
  }
  getBeers() {
    this.loading = true;
    this.spinner = true;
    this.BeerService.getBeerList(this.page).subscribe(beers => {
      this.beers = beers;
      this.spinner = false;
      this.loading = false;
      this.total = 700;
    });
  }

  /**
   * Function redirects to chosen beer page
   * @param {object}
   * @return {undefined}
   */
  showDetails(beer: Beer) {
    console.log(typeof beer, beer);
    this.router.navigate(["details", beer.id]);
  }

  goToPage(n: number): void {
    this.page = n;
    this.getBeers();
  }

  onNext(): void {
    this.page++;
    this.getBeers();
  }

  onPrev(): void {
    this.page--;
    this.getBeers();
  }
}

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

  /**
   * Function gets beers list from service
   * @return {undefined}
   */
  getBeers(): void {
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
   * @param {object} beer
   * @return {undefined}
   */
  showDetails(beer: Beer): void {
    this.router.navigate(["details", beer.id]);
  }

  /**
   * Function for pagination: sets the page variable and calls function getBeers;
   * @param {number} n
   * @return {undefined}
   */
  goToPage(n: number): void {
    this.page = n;
    this.getBeers();
  }

  /**
   * Function for pagination: increases the page variable and calls function getBeers;
   * @return {undefined}
   */
  onNext(): void {
    this.page++;
    this.getBeers();
  }

  /**
   * Function for pagination: decreases the page variable and calls function getBeers;
   * @return {undefined}
   */
  onPrev(): void {
    this.page--;
    this.getBeers();
  }
}

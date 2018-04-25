
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';
import { Router } from "@angular/router";
import {NgxPaginationModule} from 'ngx-pagination'; 

import { AppComponent } from './app.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import { BeerDetailsComponent } from './beer-details/beer-details.component';
import { BeerService } from './beer.service';

@NgModule({
  declarations: [
    AppComponent,
    BeerListComponent,
    BeerDetailsComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
      RouterModule.forRoot([
        {
          path: "",
          component: BeerListComponent
        },
        {
          path: "details/:id",
          component: BeerDetailsComponent
        },
        {
          path: "**",
          redirectTo: "/",
          pathMatch: "full"
        }
    
  ])
  ],

  providers: [BeerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

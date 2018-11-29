import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WoocommerceProductsService, AuthService, Product, ProductQuery } from 'src/app/shared/woo/wooApi';
import { switchMap } from 'rxjs/operators';
import { Observable, Observer } from 'rxjs';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
query;
products;

  constructor(
    public activatedRoute: ActivatedRoute,
    private wooProducs: WoocommerceProductsService
  ) { 
    this.query = {
    
    }
      wooProducs.retrieveProducts(this.query).subscribe((data) => {
        this.products = data.products
        console.log(data);
      },
      (err) => {
        console.log(err);
      },
    
      () => {
        console.log("completed");
      }
    );
    // this.activatedRoute.queryParams
    //   .pipe(
    //     switchMap(query => this.wooProducs.retrieveProducts(query))
    //   ).subscribe(response => {
    //     console.log(response);
    //   }, err => {
    //     console.log(err);
    //   });
    
  }

  ngOnInit() {
  }

}

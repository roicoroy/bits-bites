import { Component, OnInit, Input } from '@angular/core';
import { WpApiPosts } from 'wp-api-angular';
import { Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { WoocommerceProductsService, Product } from 'src/app/shared/woo/wooApi';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  posts;
  query:Product;
  products;
  images = [
    { img: "../../assets/gallery/Photos/gallery-1.jpg", thumb:
    "../../assets/gallery/Photos/gallery-1.jpg", description: "Image 1" },
    // { img: "../../assets/gallery/Photos/gallery-3.jpg", thumb:
    // "../../assets/gallery/Photos/gallery-3.jpg", description: "Image 1" },
    // { img: "../../assets/gallery/Photos/gallery-5.jpg", thumb:
    // "../../assets/gallery/Photos/gallery-5.jpg", description: "Image 1" },
    { img: "../../assets/gallery/Photos/gallery-6.jpg", thumb:
    "../../assets/gallery/Photos/gallery-6.jpg", description: "Image 1" },
    { img: "../../assets/gallery/Photos/gallery-7.jpg", thumb:
    "../../assets/gallery/Photos/gallery-7.jpg", description: "Image 1" },
    // { img: "../../assets/gallery/Photos/gallery-8.jpg", thumb:
    // "../../assets/gallery/Photos/gallery-8.jpg", description: "Image 1" },
    ]
  constructor(
    private wpApiPosts: WpApiPosts,
    private wooProducs: WoocommerceProductsService
  ) { 
    this.getPosts();
  } 
  getPosts() {
    let headers = new Headers({
      'Content-Type': "text/html; charset=utf-8",
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Max-Age': '1728000',
      'Access-Control-Allow-Headers': 'Content-Type, Content-Range, Content-Disposition, Content-Description',
      'Access-Control-Allow-Methods': 'DELETE, HEAD, GET, OPTIONS, POST, PUT'
    });
  //   this.wpApiPosts.getList({ headers }).subscribe(res => {
  //     this.posts = res.json;
  //     console.log(this.posts)
  // })
  // this.posts = this.wpApiPosts.
  // this.posts = this.wpApiPosts.getList( {headers} )
  //     .toPromise()
  //     .then(response => response.json())
  //     .then(body => {})
  //     .catch(error => {})
  this.wpApiPosts.getList( headers )
  .toPromise()
  .then( response => {
    let json: any = response.json();
    this.posts = json;
    console.log(this.posts);
  });
}
  
  ngOnInit() {
    this.query = {
      "featured": true,
      }
        this.wooProducs.retrieveProducts(this.query).subscribe((data) => {
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
  }

}

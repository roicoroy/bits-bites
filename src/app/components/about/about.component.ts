import { Component, OnInit, Input } from '@angular/core';
import { WpApiPosts } from 'wp-api-angular';
import { Headers } from '@angular/http';
import { WoocommerceProductsService, Product } from 'src/app/shared/woo/wooApi';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  posts;
  
postId: {
  12
};

  constructor(
    private wpApiPosts: WpApiPosts
  ) { 
    this.getPosts();
  }
  getPosts() {
    // let postId: 12;
    let headers = new Headers({
      'Content-Type': "text/html; charset=utf-8",
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Max-Age': '1728000',
      'Access-Control-Allow-Headers': 'Content-Type, Content-Range, Content-Disposition, Content-Description',
      'Access-Control-Allow-Methods': 'DELETE, HEAD, GET, OPTIONS, POST, PUT'
    });

  this.wpApiPosts.get(this.postId)
  .toPromise()
  .then( response => {
    let json: any = response.json();
    this.posts = json;
    console.log(this.posts);
  }); 
}
  ngOnInit() {
   console.log('hello about page')
  }

}

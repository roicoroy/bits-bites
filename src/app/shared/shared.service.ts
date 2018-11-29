import { Router } from '@angular/router';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService implements OnInit {
  
  constructor(private router: Router) { }

  ngOnInit() {

  }

}

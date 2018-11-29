
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import { NavComponent } from './../../components/shared/nav/nav.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SharedService } from 'src/app/shared/shared.service';
import { ProductsComponent } from 'src/app/components/products/products.component';
import { FooterComponent } from 'src/app/components/shared/footer/footer.component';
import { HomeComponent } from 'src/app/components/home/home.component';
import { AgmCoreModule } from '@agm/core';
import { AboutComponent } from 'src/app/components/about/about.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    MDBBootstrapModulesPro.forRoot(),
    AgmCoreModule.forRoot({
      // please get your own API key here:
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      apiKey: 'AIzaSyDyPdR91PGLL0RtskC7SDn_VmDO-7Cf_zc'
    })
  ],
  declarations: [
    NavComponent,
    ProductsComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent
  ],
  exports: [
    RouterModule, 
    NavComponent, 
    AboutComponent,
    ProductsComponent,
    FooterComponent,
    HomeComponent,
  ],
  providers: [
    SharedService
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class RoutesModule { }

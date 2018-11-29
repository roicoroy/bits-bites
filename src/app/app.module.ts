import { FacebookService } from 'ngx-facebook';

import { SharedService } from './shared/shared.service';
import { RoutesModule } from './modules/routes/routes.module';
import { BrowserModule } from '@angular/platform-browser';
import {MDBBootstrapModulesPro, ToastModule} from 'ng-uikit-pro-standard';

import { MDBSpinningPreloader } from 'ng-uikit-pro-standard';

import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
// import { FooterComponent } from './components/shared/footer/footer.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppInterceptor } from './shared/http.interceptor';
import { WoocommerceProductsService, WoocommerceHelperService, WoocommerceOrderService, AuthService } from './shared/woo/wooApi';
// import { ModalDetailComponent } from './components/modal-detail/modal-detail.component';
// import { HomeComponent } from './components/home/home.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment.prod'
import { AngularFireDatabaseModule } from '@angular/fire/database';
import {
  WpApiModule,
  WpApiLoader,
  WpApiStaticLoader,
} from 'wp-api-angular';
import { Http } from '@angular/http';

export function WpApiLoaderFactory(http: Http) {
  return new WpApiStaticLoader(http, 'https://www.goiabeirascotland.com/wp-json');
}

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    HttpClientModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    MDBBootstrapModulesPro.forRoot(),
    ToastModule.forRoot(),
    RoutesModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({}),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    WpApiModule.forRoot({
      provide: WpApiLoader,
      useFactory: (WpApiLoaderFactory),
      deps: [Http]
    })
  ],
  providers: [
    MDBSpinningPreloader, 
    SharedService, 
    // FacebookService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppInterceptor,
      multi: true
    },
    WoocommerceProductsService,
    WoocommerceHelperService,
    WoocommerceOrderService,
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

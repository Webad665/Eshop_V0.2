import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ShopComponent } from './shop/shop.component';
import { CartComponent } from './cart/cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { RoutingModule } from './app.routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';  
import { FormsModule } from '@angular/forms';
import { HotPageComponent } from './shop/hot-page/hot-page.component';
import { FullListPageComponent } from './shop/full-list-page/full-list-page.component';
import { FavouritesPageComponent } from './shop/favourites-page/favourites-page.component';
import { ShopService } from './shop/shop.service';
import { CheckOutComponent } from './cart/check-out/check-out.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    WelcomeComponent,
    ShopComponent,
    CartComponent,
    HotPageComponent,
    FullListPageComponent,
    FavouritesPageComponent,
    CheckOutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RoutingModule,
    FlexLayoutModule,
    FormsModule    
  ],
  providers: [
    ShopService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

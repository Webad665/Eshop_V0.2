import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { WelcomeComponent } from "./welcome/welcome.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { LoginComponent } from "./auth/login/login.component";
import { CartComponent } from "./cart/cart.component";
import { ShopComponent } from "./shop/shop.component";

const myRoutes: Routes = [

    { path: '', component: WelcomeComponent},
    { path: 'signup', component: SignupComponent},
    { path: 'login', component: LoginComponent},
    { path: 'cart', component: CartComponent},
    { path: 'shop', component: ShopComponent},

]

@NgModule({

    imports:[RouterModule.forRoot(myRoutes)],
    exports:[RouterModule]

})

export class RoutingModule{}
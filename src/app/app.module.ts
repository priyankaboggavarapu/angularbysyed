import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router'
import { TopNavComponent } from './topnav/topnav.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProfileComponent } from './profile/profile.component'
import { FooterComponent } from './footer/footer.component';


import { LookupProvider } from './providers/lookup.provider';
import { HttpClientService } from './providers/http.provider';
import { PrefixPipe } from './pipes/prefix.pipe';
import { SortByPricePipe } from './pipes/search.pipe';
import { AlphabetsOnlyDirective } from './directives/alphabets.directive';
import { OwlDirective } from './directives/owl.directive';
import { DropdownComponent } from './dropdown/dropdown.component';
import { CartComponent } from './cart/cart.component';
//import { BootstrapGrowlModule } from "ngx-bootstrap-growl";
import {CalendarModule} from 'primeng/calendar';
@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProductsComponent,
    ProfileComponent,
    FooterComponent,
    PrefixPipe,
    SortByPricePipe,
    AlphabetsOnlyDirective,
    OwlDirective,
    DropdownComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CalendarModule,
    //BootstrapGrowlModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
      { path: 'cart', component: CartComponent },
      
      
      {path:'',component:LoginComponent}
    ])
  ],
  providers: [LookupProvider, HttpClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }

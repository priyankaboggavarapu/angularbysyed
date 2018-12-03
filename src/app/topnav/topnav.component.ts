import { Component, ComponentFactoryResolver } from '@angular/core';
import { HttpClientService } from '../providers/http.provider';
import { Router } from '@angular/router';

//Decorate
@Component({
    selector: 'baba-topnav',
    templateUrl: './topnav.component.html',
    styleUrls: ['./topnav.component.css']
})

//export

export class TopNavComponent {
    viewData: any;
    searchProduct: any;
    routes: any;
    chooseDate: Date;
    userDetails: any
    constructor(private httpSvc: HttpClientService, private route: Router) {
        this.chooseDate = new Date();
        this.viewData = {
            appName: 'B-Kart'
        }
        this.routes = {
            products: 'products',
            home: 'home'
        }
        this.searchProduct = '';
        this.observerOfLoginStatus();
        this.observeAddProduct();
        this.observeRemoveProduct();
        this.userDetails = {
            firstName: "",
            lastName: "",
            isLoggedIn: false
        }
    }

    loadRoute(path) {
        this.route.navigateByUrl(path);
    }

    search() {
        console.log(this.searchProduct);
        if (this.searchProduct.length > 3) {
            this.httpSvc.getProductsFromWalmart(this.searchProduct)
                .subscribe(x => {
                    console.log(x);
                },
                    (err) => {
                        console.log(err);
                    })
        }
    }

    observerOfLoginStatus() {
        this.httpSvc.observeLoginStatus()
            .subscribe(x => {
                console.log(x);
                this.userDetails = x;
            },
                err => {
                    console.log(err);
                })
    }
    counter=0;
    observeAddProduct() {
        this.httpSvc.addProductToCart()
            .subscribe((result) => {
                     console.info('Adding a product');
                     this.counter++;
            },
                (err) => {

                })
    }

    observeRemoveProduct() {
        this.httpSvc.removeProductFromCart()
            .subscribe((result) => {
                console.info('Removing a product');
                this.counter--;
            },
                (err) => {

                })
    }


}
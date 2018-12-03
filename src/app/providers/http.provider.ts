import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable()
export class HttpClientService {
    loginStatus: Subject<any>;
    productList:Array<any>;
    cartList:Array<any>;
    productAddSubject:Subject<any>;
    productRemoveSubject:Subject<any>;
    constructor(private http: HttpClient) {
        this.loginStatus = new Subject<any>();
        this.cartList=[];
        this.productList =[];
        this.productAddSubject= new Subject<any>();
        this.productRemoveSubject = new Subject<any>();
    }
    getCountriesFromApi() {
        return this.http.get('http://vocab.nic.in/rest.php/country/json');
    }
    getProductsFromWalmart(payLoad) {
        const headers = new HttpHeaders()
            .set("Authorization", localStorage.getItem('token'));
        return this.http.get("/api/search/" + payLoad, { headers: headers });
    }
    registerUser(payLoad) {
        return this.http.post("/api/register", payLoad);
    }
    loginUser(payLoad) {
        return this.http.post("/api/login", payLoad);
    }

    observeLoginStatus(){
        return this.loginStatus.asObservable();
    }
    addProductToCart(){
       return this.productAddSubject.asObservable();
    }

    removeProductFromCart(){
        return this.productRemoveSubject.asObservable();
    }

}
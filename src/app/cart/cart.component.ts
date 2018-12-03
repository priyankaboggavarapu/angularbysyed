import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../providers/http.provider';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartList:Array<any>
  constructor(private httpSvc:HttpClientService) { }

  ngOnInit() {
    this.cartList = this.httpSvc.productList.filter(x=>x.quantity>0);
  }

}

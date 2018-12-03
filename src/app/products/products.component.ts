import { Component } from '@angular/core';
import { HttpClientService } from '../providers/http.provider';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  product: any;
  searchProduct: any;
  productList: Array<any>;
  textIndex:any;
  sortByPrice:string;
  constructor(private httpSvc: HttpClientService) {
    this.product = {
      img: 'assets/img/s-l300 (1).jpg',
      productName: 'Levis- TShirt',
      price: '1000',
      discount: '50%',
      description: 'Levis is the best brand.'
    };
    this.searchProduct = 'samsung';
    this.sortByPrice='asc';
    this.getDataFromApi();
    this.textIndex={
      startIndex:0,
      endIndex:30
    }
  
  }

  getDataFromApi() {
    if (this.searchProduct.length > 3) {
      this.httpSvc.getProductsFromWalmart(this.searchProduct)
        .subscribe((x: any) => {
          console.log(x);
          this.productList = x.data.map((x,i)=>{
            x.quantity=0;
            x.productId=i+1;
            return x;
          });
          this.httpSvc.productList = this.productList;
        },
          (err) => {
            console.log(err);
          });
    }
  }

   showMore(){
    this.textIndex.endIndex +=20;
   }

   sortBy(){
     this.sortByPrice =   this.sortByPrice=='asc'?'desc':'asc';
   }

   addToCart(item){
     item.quantity++;
     this.httpSvc.productAddSubject.next(item);
   }
   removeFromCart(item){
     if(item.quantity>0){
       item.quantity--;
       this.httpSvc.productRemoveSubject.next(item);
     }
   }


}

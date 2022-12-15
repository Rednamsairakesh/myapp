import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  public product:any = [];
  public keys:any = [];
  constructor(private _productService:ProductService) {
    this.product= _productService.productdetails;
    this.keys= Object.keys(this.product[0])
  }
  sort(){
    // this.product = this.product.sort((a:any,b:any) => a.price - b.price)
    this.product = this.product.sort((a:any,b:any) => a.brand.localeCompare(b.brand))  
  }
  plth() {
    this.product = this.product.sort((a:any,b:any) => a.price - b.price)

  }   
  
}

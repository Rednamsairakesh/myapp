import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public productdetails: any = [{brand:'Dell',processor:'i5',ram:'16gb', graphics:'GTX 1060Ti', HDD:'1TB', SSD:'256GB', price:'140000'},
  {brand:'HP',processor:'i7',ram:'8gb', graphics:'GTX 1040', HDD:'1TB', SSD:'256GB',price:'120000'},
  {brand:'Acer',processor:'i5',ram:'8gb', graphics:'GTX 1040', HDD:'1TB', SSD:'256GB',price:'110000'},
  {brand:'Lenovo',processor:'i7',ram:'4gb', graphics:'GTX 1020', HDD:'1TB', SSD:'256GB',price:'100000'},
  {brand:'Alienware',processor:'i9',ram:'8gb', graphics:'GTX 1060', HDD:'1TB', SSD:'256GB',price:'130000'}]
  constructor() { }
  
}

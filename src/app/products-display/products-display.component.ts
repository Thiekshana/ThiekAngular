import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../interfaces/product.model';

@Component({
  selector: 'app-products-display',
  templateUrl: './products-display.component.html',
  styleUrls: ['./products-display.component.css']
})
export class ProductsDisplayComponent implements OnInit {
  @Input() products: Product
  constructor() { }

  ngOnInit() {
  }
  addProduct(event:Product)
  {
    //this.products.push(event);
    console.log(event);
  }

}

import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  allProducts: Product;


  constructor() { }

  ngOnInit() {
    console.log(this.allProducts);
  }

 

}

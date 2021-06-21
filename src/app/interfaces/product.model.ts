export class Product {
  productTitle: string;
  productDescription:string;
  productPrice: number;
  productTotalPrice:number;
  productImage:string;

  constructor(
    productTitle:string,
    productDescription:string,
    productPrice: number,
    productTotalPrice: number,
    productImage:string)
    
    {

    this.productTitle = productTitle;
    this.productDescription = productDescription;
    this.productPrice = productPrice;
    this.productTotalPrice = productTotalPrice;
    this.productImage = productImage;

  }
}
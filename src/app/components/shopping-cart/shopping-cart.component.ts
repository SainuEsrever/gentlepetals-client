import { Component, OnInit } from '@angular/core';
import { CartService } from '../_services/cart.service';
import { Cart } from '../_models/cart';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cart :any;
  product: any;
  products: any[] = [];
  VAT = 0.08;
  tax: number = 0;
  cartId: string = "658e317229ae51df3c41c5d6";
  editCart:any;
  total: number = 0;
  constructor(private _service: CartService) {}
  ngOnInit() {
    this.products = []
    this.getCart(this.cartId)
  }

  getCart(id:string){
    this._service.getCart(id).subscribe({
      next: data => {this.cart = data.data},
      error: err => {console.log(err)},
      complete: ()=>{
        for (let p of this.cart.products){
          this.product = this._service.getProduct(p.productId).subscribe({
            next: productData =>{this.product = productData.data},
            error: err => {console.log(err)},
            complete: () =>{
              let newData = {
                quantity: p.amount,
                totalPrice: p.amount*this.product.price
              }
              Object.assign(this.product, newData)
              this.products.push(this.product)
            }
          })
        }
        this.tax = Math.round(this.cart.totalPrice*this.VAT);
        this.total = this.cart.totalPrice - this.tax
      }
    })
  }

  minus(id: string){
    let index = this.cart.products.findIndex((p: { productId: string; }) => p.productId == id);
    let pIndex = this.products.findIndex(pI => pI._id === id);
    if (index != -1 && this.cart.products[index].amount>1){
      this.cart.products[index].amount --;
      this.cart.totalPrice -= this.cart.products[index].amount*this.products[pIndex].price;
    }
    this.updateCart()
  }
  plus(id: string){
    let index = this.cart.products.findIndex((p: { productId: string; }) => p.productId === id);
    let pIndex = this.products.findIndex(pI => pI._id === id);
    let inventory = this.products[pIndex].amount;
    if (index != -1 && this.cart.products[index].amount < inventory){
      this.cart.products[index].amount ++;
      this.cart.totalPrice += this.cart.products[index].amount*this.products[pIndex].price;
    } else if (this.cart.products[index].amount >= inventory){
      console.log("Số lượng chọn đã đạt tối đa")
    }
    this.updateCart()
  }
  
  updateCart(){
    this.editCart = {
      "accountId": this.cart.accountId,
      "products": [],
      "totalPrice": this.cart.totalPrice
    }
    for (let p of this.cart.products){
      let pInfo = {
        "productId": p.productId,
        "amount": p.amount
      }
      this.editCart.products.push(pInfo);
    }
    this.putCart(this.cartId);
    location.reload()
  }

  putCart(cartId:string){
    this._service.putCart(this.editCart, cartId).subscribe({
      next: (data) => {this.cart = data},
      error: (err) => {console.log(err)}
    })
  }
}

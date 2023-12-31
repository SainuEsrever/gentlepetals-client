import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomepageService } from '../_services/homepage.service';
import { Product } from '../_models/product';
import { CartService } from '../_services/cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product_details.component.html',
  styleUrls: ['./product_details.component.css']
})
export class ProductDetailComponent implements OnInit {
  // selectedProduct: Product | undefined;
  selectedProduct: any;
  cartId: string = "";
  productId: string = "";
  amount:any;
  quantity:any;
  cart: any;
  editCart: any;

  constructor(
    private activateRoute: ActivatedRoute,
    private _fs: HomepageService,
    private _service: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((param) => {
      let idObject = param.get('_id');
      if (idObject !== null) {
        let id = idObject;
        this.productId = idObject;
        this._fs.getProductDetail(id).subscribe(
          (product: Product) => {
            this.selectedProduct = product;
            console.log(this.selectedProduct);
            this.amount = this.selectedProduct.amount;
          },
          (error) => {
            console.error('Error fetching product details:', error);
          }
        );
      } else {
        console.error('Product ID is null');
      }
    });

    this.cartId = this._service.getCartId();
  }

  

  addProduct(){
    this._service.getCart(this.cartId).subscribe({
      next: (data) => {this.cart = data.data},
      error: (err) => {console.log(err)},
      complete: ()=>{
        let index = this.cart.products.findIndex((p: {productId: string; }) => p.productId === this.productId);
        console.log(index)
        console.log(this.selectedProduct)
        if (index == -1 && this.quantity > 0){
          if (this.quantity <= this.amount){
            let pInfo = {
              "productId": this.productId,
              "amount": this.quantity
            }
            this.cart.products.push(pInfo);
            this.cart.totalPrice += this.quantity*this.selectedProduct.price;
            this.updateCart();
          } else {
            alert("Số lượng hàng vượt quá tồn kho")
          }
        } else if (index != -1 && this.quantity > 0 ){
          if (this.quantity + this.cart.products[index].amount <= this.selectedProduct.amount){
            this.cart.products[index].amount += this.quantity;
            this.cart.totalPrice += this.quantity*this.selectedProduct.price;
            this.updateCart();
          } else {
            alert("Số lượng hàng vượt quá tồn kho")
          }
        }
      }
    })
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
    this._service.patchCart(this.editCart, this.cartId).subscribe({
      next: (data) => {this.cart = data.data},
      complete: () =>{
        alert("Đã thêm sản phẩm " + this.selectedProduct.name + " vào giỏ hàng")
      }
    });
  }
}
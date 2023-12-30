import { Component, OnInit } from '@angular/core';
import { OrderService } from '../_services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orderId = "";
  customer: any;
  order:any;
  products: any[] = [];

  constructor(private _service: OrderService){ }
  
  ngOnInit(): void {
    this.orderId = this._service.getOrderId();
    this.getOrder(this.orderId)
  }

  getOrder(id:string){
    this._service.getOrder(id).subscribe({
      next: (data) => {this.order = data.data},
      complete: () => {
        this.getProfile()
        let product: any
        for (let p of this.order.products){
          this._service.getProduct(p.productId).subscribe({
            next: productData =>{product = productData.data},
            error: err => {console.log(err)},
            complete: () =>{
              let newData = {
                quantity: p.amount,
                totalPrice: p.amount*product.price
              }
              Object.assign(product, newData)
              this.products.push(product)
            }
          })
        }
      }
    })
  }

  getProfile(){
    this._service.getProfile(this.order.accountId).subscribe({
      next: (data) => {
        console.log(data);
        this.customer = {
          "name": data.datas.lastName + " " + data.datas.firstName,
          "phoneNumber": data.datas.phoneNumber,
          "email": data.datas.email
        }
      }
    })
  }

}

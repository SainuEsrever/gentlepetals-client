import { Component, OnInit } from '@angular/core';
import { OrderService } from '../_services/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  billId = "";
  bill:any;
  order: any;
  customer:any;
  products: any[] = [];
  VAT = 0.08;
  tax: number = 0;
  total: number = 0;

  constructor(private _service: OrderService, private _router: Router){ }

  ngOnInit(): void {
    this.billId = this._service.getBillId();
    this.getBill(this.billId)
  }

  getBill(id:string){
    this._service.getBill(id).subscribe({
      next: (data) => {console.log(data); this.bill = data.data},
      complete: () => {
        this.getProduct();
        this.getProfile();
        this.tax = Math.round(this.bill.totalPrice*this.VAT);
        this.total = this.bill.totalPrice - this.tax
      },
    })
  }
  getProfile(){
    this._service.getProfile(this.bill.accountId).subscribe({
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
  getProduct(){
    this._service.getOrder(this.bill.orderId).subscribe({
      next: (data) => {this.order = data.data},
      complete: () =>{
        let product: any;
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
              console.log(this.products)
            }
          })
        }
      }
    })
  }

  confirm(){
    alert("Đặt hàng thành công");
    this._router.navigate(["/home"])
  }
}

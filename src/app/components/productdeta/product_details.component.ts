import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomepageService } from '../_services/homepage.service';
import { Product } from '../_models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product_details.component.html',
  styleUrls: ['./product_details.component.css']
})
export class ProductDetailComponent implements OnInit {
  selectedProduct: Product | undefined;

  constructor(
    private activateRoute: ActivatedRoute,
    private _fs: HomepageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((param) => {
      let idObject = param.get('_id');
      if (idObject !== null) {
        let id = idObject;
        this._fs.getProductDetail(id).subscribe(
          (product: Product) => {
            this.selectedProduct = product;
            console.log(this.selectedProduct);
          },
          (error) => {
            console.error('Error fetching product details:', error);
          }
        );
      } else {
        console.error('Product ID is null');
      }
    });
  }
}
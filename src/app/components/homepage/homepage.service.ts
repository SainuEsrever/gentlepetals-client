import { Injectable } from '@angular/core';
import { BannerImage } from './homepage.if';
import { Product } from './homepage.if';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private returnedData: BannerImage[] = [];

  loadBannerJsonFromFile(): void {
    fetch('assets/data/banner.json')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Error: ' + res.statusText);
        }
        return res.json();
      })
      .then((data: BannerImage[]) => {
        this.returnedData = data;
      })
      .catch((err) => {
        console.error(err.message);
      });
  }

  loadProductJson(): void {
    fetch('assets/data/product.json')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Error: ' + res.statusText);
        }
        return res.json();
      })
      .then((returproduct: Product[]) => {
        let htmlContent = '';
        returproduct.forEach((p) => {
          htmlContent += `
            <div class="product" onclick="">
              <img src="img/${p.pThumb}" width="190px" />
              <hr>
              <p class="name">${p.pName}</p>
              <p class="price">${p.pPrice} VNĐ</p>
            </div>`;
        });
      })
      .catch((err) => {
        console.error(err.message);
      });
  }
}

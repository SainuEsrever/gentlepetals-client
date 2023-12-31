import { Component, OnInit } from '@angular/core';
import { HomepageService } from '../_services/homepage.service';
import { BannerService } from '../_services/banner.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from '../_services/categories.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  products: any[] = [];
  selectedCode: any;
  categories: any[] = [];

  constructor(
    public bannerService: BannerService,
    private _service: HomepageService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _cservice: CategoriesService
  ) {}

  ngOnInit() {
    this.bannerService.currentBannerId$.subscribe(id => {});

    this.bannerService.changeBanner(1);

    this._service.getProducts().subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (err) => {
        console.log(err);
      }
    });

    this._activatedRoute.paramMap.subscribe((params) => {
      let code = params.get('_id');
      if (code !== null) {
        this.selectedCode = code;
      }
    });
  }

  changeBanner(id: number) {
    this.bannerService.changeBanner(id);
  }

  someFunction(productId: any): void {
    this._router.navigate(['/products', productId._id]);
  }

  someFunction1(categoryId: any): void {
    this._router.navigate(['/categories', categoryId.name]);
  }
}

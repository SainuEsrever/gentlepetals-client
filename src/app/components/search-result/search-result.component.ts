import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomepageService } from '../_services/homepage.service';
import { Product } from '../_models/product';
import { CategoriesService } from '../_services/categories.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  searchResults: any[] = [];
  products: Product[] = [];
  idObject: string | null = null;
  selectedCode: any
  categories: any[] = [];
  
  constructor(private route: ActivatedRoute, private productService: HomepageService, private _cservice: CategoriesService, private _router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const searchTerm = params['q'];
      this.productService.searchProducts(searchTerm).subscribe(results => {
        this.searchResults = results;
        this.route.paramMap.subscribe((param) => {
          this.idObject = param.get('_id');
          if (this.idObject) {
            this._cservice.getProductsByCategoryId(this.idObject).subscribe((data: any) => {
              // Use type assertion to handle the data
              this.products = data.filter((product: any) => {
                if (typeof product.categoryId === 'object' && product.categoryId) {
                  return product.categoryId === this.idObject;
                }
                // If categoryId is a string
                return product.categoryId === this.idObject;
              });
    
              console.log('Filtered Products:', this.products);
            });
          }
        });
    
        this._cservice.getCategories().subscribe({
          next: (data) => { this.categories = data },
          error: (err) => { console.log(err) }
        }); 
    
        this.route.paramMap.subscribe((params) => {
          let code = params.get("_id.$oid");
          console.log('Category ID:', code);
          if (code != null){
            this.selectedCode = code
          }
       })
    
      }
      );
    })

    }
    someFunction(productId: any): void {
      this._router.navigate(["/products", productId._id]);
     } 
  
     someFunction1(categorieId: any): void {
      this._router.navigate(["/categories", categorieId._id]);
     }
  }

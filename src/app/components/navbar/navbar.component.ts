<<<<<<< Updated upstream
import { Component } from '@angular/core';
=======
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from '../_services/categories.service';
>>>>>>> Stashed changes

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
<<<<<<< Updated upstream
export class NavbarComponent {

=======
export class NavbarComponent implements OnInit{
  selectedCode: any
  categories: any[] = [];
  searchTerm: string = '';

  constructor( private _activatedRoute: ActivatedRoute, private _router: Router, private _cservice: CategoriesService)  {}
  
  ngOnInit() {
    this._cservice.getCategories().subscribe({
      next: (data) => { this.categories = data },
      error: (err) => { console.log(err) }
    }); 

    this._activatedRoute.paramMap.subscribe((params) => {
      let code = params.get("_id.$oid");
      console.log('Category ID:', code);
      if (code != null){
        this.selectedCode = code
      }
   })
    
}

search(): void {
  this._router.navigate(['/search'], { queryParams: { q: this.searchTerm } });
}
  someFunction1(categorieId: any): void {
    this._router.navigate(["/categories", categorieId._id]);
   }
>>>>>>> Stashed changes
}

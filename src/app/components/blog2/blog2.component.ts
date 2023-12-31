import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../_services/blog.service';
import { Blog } from '../_models/blog';

@Component({
  selector: 'app-blog2',
  templateUrl: './blog2.component.html',
  styleUrls: ['./blog2.component.css']
})

export class Blog2Component implements OnInit {
  selectedBlog: Blog | undefined;

  constructor(
    private activateRoute: ActivatedRoute,
    private _fs: BlogService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((param) => {
      let idObject = param.get('_id');
      if (idObject !== null) {
        let id = idObject;
        this._fs.getBlogDetails(id).subscribe(
          (blog: Blog) => {
            this.selectedBlog = blog;
          },
          (error) => {
            console.error('Error fetching product details:', error);
          }
        );
      } else {
      }
    });
  }
}
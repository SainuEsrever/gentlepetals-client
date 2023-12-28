import { Component, OnInit } from '@angular/core';
import { DataService } from './homepage.service';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  public htmlContent: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.loadBannerJsonFromFile();
    this.dataService.loadProductJson();
}}

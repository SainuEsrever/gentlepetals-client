import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../_services/dashboard.service';

@Component({
  selector: 'app-dashboard-dashboard',
  templateUrl: './dashboard-dashboard.component.html',
  styleUrls: ['./dashboard-dashboard.component.css']
})
export class DashboardDashboardComponent implements OnInit{
  data:any;

  constructor(private _service : DashboardService ) {}

  ngOnInit(): void {
    this.getTotalOrder()
  }

  getTotalOrder(){
    this._service.getProfilebyId().subscribe(
      (data) => {this.data = data.datas
      console.log(data)},
    )
  }
}

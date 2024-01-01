import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../_services/dashboard.service';

@Component({
  selector: 'app-dashboard-edit-profile',
  templateUrl: './dashboard-edit-profile.component.html',
  styleUrls: ['./dashboard-edit-profile.component.css']
})
export class DashboardEditProfileComponent implements OnInit{
  data: any;
  firstName:any;
  lastName:any;
  phoneNumber:any;
  address:any;
  city:any;
  state:any;
  country:any;
  profile = {
    firstName:"", 
    lastName:"", 
    phoneNumber:"",
    address:"",
    city:"",
    state:"",
    country:"",
  }

  constructor(private _service : DashboardService ) {}

  ngOnInit(): void {
    this.getData()
    this.profile.firstName = this.data.firstName
    console.log("đây là console" + this.data.firstName)
  }
  
  onSubmit() {
    this._service.changeProfile(this.data).subscribe(
      (res) => {this.ngOnInit()
      alert("Đổi thành công")}
    )
  }

  getData(){
    this._service.getProfilebyId().subscribe(
      (data) => {this.data = data.datas
      console.log(data)}
    )
  }

  

}

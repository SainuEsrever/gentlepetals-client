import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../_services/dashboard.service';

@Component({
  selector: 'app-dashboard-edit-profile',
  templateUrl: './dashboard-edit-profile.component.html',
  styleUrls: ['./dashboard-edit-profile.component.css']
})
export class DashboardEditProfileComponent implements OnInit{
  data: any;
  res : any

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
  }
  
  onSubmit() {
    console.log(this.profile)

    this._service.changeProfile(this.profile).subscribe(
      (res) => {this.ngOnInit()
      alert("Đổi thành công")}
    )
  }

  getData(){
    this._service.getProfilebyId().subscribe(
      (data) => {
        this.data= data.datas

        console.log(data)
        this.profile.firstName = this.data.firstName
        this.profile.lastName = this.data.lastName
        this.profile.phoneNumber = this.data.phoneNumber
        this.profile.address = this.data.address
        this.profile.city = this.data.city
        this.profile.state = this.data.state
        this.profile.country = this.data.country
    }
    )
  }

  

}

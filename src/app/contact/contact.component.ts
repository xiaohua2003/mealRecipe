import { Component, OnInit } from '@angular/core';
import {User} from '../user'
import { OrderService } from '../order.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public dishes:string[]=['vegetable','meat','fruit']
  public topicHasError:boolean=true
  constructor(private _OrderService:OrderService) {}
  submitted:boolean=false
  errorMsg=''
  ngOnInit(): void {
  }
  public userinfo=new User('','xcai3@ualberta.ca',1234567890,'default','evening', true)
  validateDish(value:string){
    if(value==="default"){
      this.topicHasError=true
    }else{
      this.topicHasError=false
    }
  }
  onSubmit(){
    this.submitted=true;
    this._OrderService.order(this.userinfo).subscribe(data=>console.log(data),
     error=>{this.errorMsg=error.statusText; console.log(error)}
     )
  }
}

import { Component, OnInit } from '@angular/core';
import {User} from '../user'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public dishes:string[]=['vegetable','meat','fruit']
  public topicHasError:boolean=true
  constructor() {}
  ngOnInit(): void {
  }
  public userinfo=new User('','xcai3@ualberta.ca', 566221,'default','evening', true)
  validateDish(value:string){
    if(value==="default"){
      this.topicHasError=true
    }else{
      this.topicHasError=false
    }
  }
  onSubmit(){
    console.log(this.userinfo)
  }
}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {
  maxDate: any;

  constructor(){}

  ngOnInit(){
    this.maxDate = new Date();
    this.maxDate.setFullYear (this.maxDate.getFullYear()-18);
    
  // add min date
  }
  onSubmit(form: NgForm){
    console.log(form);
  }
}

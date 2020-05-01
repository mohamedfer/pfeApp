import { Component, OnInit } from '@angular/core';
import { FormControl,Validators } from '@angular/forms';
import {FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userForm = new FormGroup({
     
    email: new FormControl('', [Validators.required,Validators.email]),
    fullname: new FormControl('', [Validators.required]),
    
    password: new FormControl('', [Validators.required]),
    repeatpassword: new FormControl('', [Validators.required,this.passwordMatch])
  
   
  });
  


  constructor(private router:Router,private authService : AuthService) { 
    console.log('userform',this.userForm);
  }

  passwordMatch(control : FormControl){
    const password =control.root.get('password');
    return password && control.value !== password.value?
    {
      passwordMatch :true
    }
    :null ;

  }


register(){
  /** 
  if(!this.userForm.valid)
  {
    return ;
  }
*/
  const user =this.userForm.getRawValue();
  this.authService
  .register(user)
  .subscribe(s=>this.router.navigate(['/']));


}

  
  get fullname (){
    return this.userForm.get('fullname');
  }

  get email(){
    return this.userForm.get('email');
  }

  get password(){
    return this.userForm.get('password');
  }

  get repeatpassword(){
    return this.userForm.get('repeatpassword');
  }
  ngOnInit() {
  }
 
}


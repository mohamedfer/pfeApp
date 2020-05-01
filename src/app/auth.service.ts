import { Injectable } from '@angular/core';
import { of, Subject, throwError } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';
import { User } from './user';
import { HttpClient } from '@angular/common/http';

//import {User} from './user'; 



@Injectable({
  providedIn: 'root'
})

export class AuthService {
private  user$ =new Subject <User>() ;
private apiUrl='/api/auth/';

  constructor(private httpClient:HttpClient) { }


  login(email:string,password:string){
    const logincred ={email,password};
    console.log('login credentials ',   logincred  )

   return of (logincred);
  }
  
  logout(){
    // remove user from suject 
    this.setUser(null);
    console.log(`Logout succes`);

  }


  get user(){
    return this.user$.asObservable();
  }

 

  register(user:any){
   return  this.httpClient.post<User>('/api/auth/register',user).pipe(
     switchMap(savedUser=>{
       this.setUser(savedUser);
       console.log('user reg success ',savedUser);
       return of (savedUser);

}),

catchError(e=> {
  console.log('server error occured',e);
  return throwError('Registration failed please contact to admin');

 })

);

}


  private setUser(user)
  {
    this.user$.next(user);
  }



}

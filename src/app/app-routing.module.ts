import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
  
    path:'home',
    pathMatch: 'full',
    component : HomeComponent
  }
  ,

{
  path:'',
  pathMatch:'full',
  redirectTo:'home'
}

 , 
  {
  
    path:'products',
    pathMatch: 'full',
    loadChildren:'./products/products.module#ProductsModule'
  },
  {
    path:'login',
    
    component : LoginComponent

  },
  {
    path:'register',
    
    component : RegisterComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

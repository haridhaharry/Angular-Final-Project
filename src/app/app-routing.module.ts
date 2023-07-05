import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: "", redirectTo: "login", pathMatch: 'full'},
  {path:"login", loadChildren:() => import('./login/login.module').then(m => m.LoginModule)},
  {path:"pets", loadChildren:() => import('./pets/pets.module').then(m => m.PetsModule)},
  {path:"carts", loadChildren:() => import('./carts/carts.module').then(m => m.CartsModule)},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

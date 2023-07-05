import { Routes, RouterModule } from '@angular/router';
import { PetsComponent } from './pets.component';
import { PetsListComponent } from './pets-list/pets-list.component';
import { PetsDetailsComponent } from './pets-details/pets-details.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path:"",
    component: PetsComponent,
    children: [
      {
        path: "",
        component: PetsListComponent
      },
      {
        path:"pets-list",
        component: PetsListComponent
      },
      {
        path: "pets-details/:id",
        component: PetsDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PetsRoutingModule { }


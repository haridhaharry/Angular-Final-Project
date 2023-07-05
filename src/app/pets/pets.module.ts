import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetsComponent } from './pets.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { HeaderModule } from '../shared/component/header/header.module';
import { PetsRoutingModule } from './pets.routing';
import { PetsListComponent } from './pets-list/pets-list.component';
import { PetsDetailsComponent } from './pets-details/pets-details.component';



@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PetsRoutingModule,
    HeaderModule
  ],
  declarations: [PetsComponent, PetsListComponent, PetsDetailsComponent]
})
export class PetsModule { }

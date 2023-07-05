import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { PetLisFilterPipe } from './pipes/pet-list-filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
    HttpClientModule,
    MaterialModule,
    FormsModule,
    PetLisFilterPipe
  ],
  declarations: [PetLisFilterPipe]
})
export class SharedModule { }

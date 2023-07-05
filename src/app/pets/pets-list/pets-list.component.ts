import { Component, OnInit } from '@angular/core';
import { Pet } from '../pet.model';
import { PetsService } from '../pets.service';
import { Category } from 'src/app/shared/model/category.model';
import { CategoryService } from 'src/app/shared/services/category.service';

@Component({
  selector: 'app-pets-list',
  templateUrl: './pets-list.component.html',
  styleUrls: ['./pets-list.component.css']
})
export class PetsListComponent implements OnInit {

  petList: Pet[] = new Array<Pet>();
  nameFilter: string;
  selectedCategory: number;
  categories: Category[] = [];

  // constructor
  constructor(private petsService: PetsService,
    private categoryService: CategoryService) { }


  // oninit life cycle hook
  ngOnInit() {

    this.getPets();

    this.getCategories();

  }


  //------------------------
  // public methods
  // -----------------------
  // get All pets list
  getPets(){
    this.petsService.getPets().subscribe((res)=>{
      this.petList = res;
      console.log(res);
    })
  }

  getCategories(){
    this.categoryService.getCategories().subscribe((res: Category[])=>{
      this.categories = res;
    })
  }

}

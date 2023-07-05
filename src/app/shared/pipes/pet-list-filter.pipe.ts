import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'PetLisFilter'
})
export class PetLisFilterPipe implements PipeTransform {

  transform(petList: any, type: number): any {
    if(!type)
       return petList;

    return petList.filter((x:any)=>x.categoryId == type)
  }

}

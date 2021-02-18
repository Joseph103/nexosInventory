import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs/operators';
import { Product } from './models/product';

@Pipe({
  name: 'filter'
})

@Injectable()
export class FilterPipe implements PipeTransform {

  transform(items: Product[], field: string, value: string): any[] {
    if (!items) {
      return [];
    }
    if (!field || !value) {
      return items;
    }


    return items.filter(item => {item.name==field, item.userId.name==field, item.entryDate==new Date(field)})
    ;
  }
}

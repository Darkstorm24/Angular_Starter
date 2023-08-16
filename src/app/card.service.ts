import { Product } from './products';
import { Injectable } from '@angular/core';




@Injectable({
  providedIn: 'root'
})
export class CardService {
  items: Product[] = [];

  addToCard(product : Product){
    this.items.push();
  }

  getItems(){
    return this.items;
  }

  clearCard(){
    this.items = []
    return this.items;
  }

  constructor() { }
}

import { HttpClient } from '@angular/common/http';
import { Product } from './products';
import { Injectable } from '@angular/core';




@Injectable({
  providedIn: 'root'
})
export class CardService {
  items: Product[] = [];

  constructor( 
    private http : HttpClient
  ) {}

  addToCard(product : Product){
    this.items.push(product);
  }

  getItems(){
    return this.items;
  }

  clearCard(){
    this.items = []
    return this.items;
  }

  getShippingPrices(){
    return this.http.get<{type:string, price:number}[]>('asssets/shipping.json');
  }

  
}

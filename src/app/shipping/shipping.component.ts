import { Component, OnInit } from '@angular/core';
import { CardService } from '../card.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit{

  constructor( private cardService : CardService){}

  shippingCosts! : Observable<{type:string, price:number }[]>;

ngOnInit():void{
  this.shippingCosts = this.cardService.getShippingPrices();
}


}

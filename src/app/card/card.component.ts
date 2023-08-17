import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CardService } from '../card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  items = this.cardService.getItems();

  checkoutForm = this.formBuilder.group({
    name:'',
    address:''
  });

  constructor(
    private cardService: CardService,
    private formBuilder: FormBuilder,

  ){}


  onSubmit(): void{
    this.items = this.cardService.clearCard();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset(); 
  }
}

import { Component } from '@angular/core';
import { CardService } from '../card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  items = this.cardService.getItems()

  constructor(
    private cardService: CardService
  ){}

}

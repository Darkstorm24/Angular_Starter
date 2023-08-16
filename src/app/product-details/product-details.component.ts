import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../products';
import { CardService } from '../card.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{

  product : Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private cardService: CardService) { }

  addToCard(product:Product){
    this.cardService.addToCard(product);
    window.alert('Your product has been addded to the card')
  }
  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
  
    // Find the product that correspond with the id provided in route.
    this.product = products.find(product => product.id === productIdFromRoute);
  }
}


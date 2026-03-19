import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  products: any[] =[
    {id:1, name:'Product A', price:100,quantity:10},
    {id:2, name:'Product B', price:150,quantity:5},
    {id:3, name:'Product C', price:200,quantity:8}
  ]

  buy(p:number){
   // rechercher le produit avec l'id p
   let prod = this.products.find(pdt => pdt.id === p);
    // traitement decrementation
    prod.quantity--;
   }

}

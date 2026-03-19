import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title:string =" artcic6 home page"
  color:string="blue";

  save(){
    alert("welcome 4 arctic 6");
  }
}


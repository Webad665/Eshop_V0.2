import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CheckOutComponent } from './check-out/check-out.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  constructor (private dialog: MatDialog){}

  paramToPass = 123;

  onCheckoutButton(){
    this.dialog.open(CheckOutComponent,
      
    {data:
      {
        paramToPass: this.paramToPass
      }
    }
    );
  }

  onCancelButton(){

  }

}
//{height:'400px',width:'600px'},
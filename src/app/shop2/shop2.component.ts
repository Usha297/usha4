import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  d : 'payment processing'
}
@Component({
  selector: 'app-shop2',
  templateUrl: './shop2.component.html',
  styleUrls: ['./shop2.component.css']
})

export class Shop2Component implements OnInit {

  constructor(public dialog: MatDialog) { }

  products = [
    {productname:'Product 01', price: 100},
    {productname:'Product 02', price: 200},
    {productname:'Product 03', price: 300}
  ] ;
  total = 0
  sname = ''
  sprice = 0
  snr = []

  ap(sn ,shp) {
    //return this.total += this.products
    this.sname = sn
    this.sprice = shp
    this.total += shp
    console.log(this.total + this.sname, this.sprice)
    this.snr.push(this.sprice)
    alert('You buyed...\n'+this.sname +'of price= '+ this.sprice + '\n'+this.sname +' is added to your cart.\n Present Total price = '+this.total)
  }
  dp(s) {
    //return this.total += this.products
    //this.sname = sn
    this.sprice = s
    //this.total += shp
    //console.log(this.total + this.sname, this.sprice)
    delete this.sprice
    //alert(this.sname +'of price= '+ this.sprice + ' is added to the cart and the total price is: '+this.total)
  }
  openDialog() {
    this.dialog.open(DialogDataExampleDialog, {
      data: {
        d: 'payement'
      }
    });
  }


  ngOnInit(): void {
  }

}

@Component({
  selector: 'dialog-data-payment-dialog',
  templateUrl: '../shop1/dialog-data-payment-dialog.html'
})
export class DialogDataExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}

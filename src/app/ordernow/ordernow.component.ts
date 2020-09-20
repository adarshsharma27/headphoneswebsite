import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordernow',
  templateUrl: './ordernow.component.html',
  styleUrls: ['./ordernow.component.css']
})
export class OrdernowComponent implements OnInit {
    numberValue = 0;
    
  constructor() { }

  ngOnInit(): void {
  }

  inc(){ 
    this.numberValue++;        
 } 
 
 dec(){


if(this.numberValue === 0){
  this.numberValue = 0;
} else {
  this.numberValue--;
}
          }
}

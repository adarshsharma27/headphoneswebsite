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
//   let decs= document.getElementById("sum").innerHTML;
//   console.log(decs);
// //  ngIf(decs>0)
//   //  decs--;
//   document.getElementById("sum").innerHTML=decs;
 

if(this.numberValue === 0){
  this.numberValue = 0;
} else {
  this.numberValue--;
}
          }
}

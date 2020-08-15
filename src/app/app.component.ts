import { Component } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
declare const smoothscroll:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'headphonse-app';
  ngOnit(){
    smoothscroll();

  }
}

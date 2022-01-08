import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 public id = ''
  constructor(public myserviceService:MyserviceService){
    this.showData();
  }

  showData(){
    this.myserviceService.getData().subscribe((res)=>{
    
      console.log(res)
    
    })
  }
}
 
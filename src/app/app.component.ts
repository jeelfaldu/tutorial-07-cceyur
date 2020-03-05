import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slider, transformer, fader, stepper } from './route-animations';
import {ContentComponent} from './content/content.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    fader
  ]
  
})
export class AppComponent {
  title = 'Tutorial 07';
  ismoon : boolean = false;
  mode :string = "fa fa-moon-o";
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
  night(){
    if(this.ismoon == true){
      this.ismoon = false;
      this.mode = "fa fa-moon-o";
      new ContentComponent().data(this.ismoon);
      console.log(this.ismoon);
      
     }else if (this.ismoon == false){
      this.ismoon = true;
      this.mode = "fa fa-sun-o text-warning";
      new ContentComponent().data(this.ismoon);
      console.log(this.ismoon);
     }
  }
  
  

  
}

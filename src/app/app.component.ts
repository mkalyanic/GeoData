import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'geolocation';
  @Input() selectID :string

  getTextInput(){
    console.log("Selected input is ", this.selectID);

  }

}

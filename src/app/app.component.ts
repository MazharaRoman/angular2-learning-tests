import { Component } from '@angular/core';

//import { AnotherComponentComponent } from './another-component/another-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test Tour of Heroes';
  public alerts: any = [];

  fireAlert(){
    this.alerts.push({
      type: 'success',
      msg: '<strong>Yeah, call me captain, but you pushed fucking button</strong>',
      timeout: 1000
    });
  }
}

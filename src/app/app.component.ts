import { Component } from '@angular/core';
import * as firebase from 'firebase';

const config = {
  apiKey : 'AIzaSyAwrCx7-MMK8Z8s2dq7HUf0vFyyxOS8cwQ',
  databaseURL : 'https://angularchat-ae7cb.firebaseio.com'
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'angular-chat';

  constructor() {
    firebase.default.initializeApp(config);
  }
}

import { Component } from '@angular/core'
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

import { firebaseConfig } from '../auth'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular'
  constructor () {
    const app = initializeApp(firebaseConfig)
    const analytics = getAnalytics(app)
  }
}
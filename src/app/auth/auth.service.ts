import { Injectable } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor (private auth: AngularFireAuth, private router: Router) {}

  login (email: string, password: string) {
    this.auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        localStorage.setItem('Token', 'true')
        this.router.navigate(['/dashboard'])
      })
      .catch(() => {
        alert('Something went wrong')
        this.router.navigate(['/login'])
      })
  }
}

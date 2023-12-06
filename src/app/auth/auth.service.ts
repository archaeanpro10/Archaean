import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor (
    private auth: AngularFireAuth,
    private router: Router,
    private http: HttpClient
  ) {}
  serverApi: string = 'http://localhost:2000/login'
  login (email: string, password: string) {
    // this.auth
    //   .signInWithEmailAndPassword(email, password)
    //   .then(() => {
    //     localStorage.setItem('Token', 'true')
    //     this.router.navigate(['/dashboard'])
    //   })
    //   .catch(() => {
    //     alert('Something went wrong')
    //     this.router.navigate(['/login'])
    //   })

    return this.http.get<any>(this.serverApi)
  }

  register (uname: string, phone: string, email: string, msg: string) {
    return this.http.post<any>(this.serverApi, { uname, phone, email, msg })
  }
}

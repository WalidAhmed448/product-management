import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fa: AngularFireAuth) {
  }
  
  signUp(email: string , password: string) {
    return this.fa.createUserWithEmailAndPassword(email,password)
  };
  
  signIn(email: string, password: string) {
    return this.fa.signInWithEmailAndPassword(email,password)
  }
}

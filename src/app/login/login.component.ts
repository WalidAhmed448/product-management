import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private sa:AuthService) { }
  
  ngOnInit(): void {
    
  }
   
  login(f: any) {
    let data = f.value
    this.sa.signIn(data.email, data.password).then(() => {
      console.log('login')
    }).catch(() => {
      console.log('error')
    })
    
  }
}
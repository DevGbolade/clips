import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  showAlert = false;
  alertColor = 'blue';
  alertMessage = 'Please wait! while you login.';
  credentials = {
    email: '',
    password: ''
 }
  constructor(private auth: AngularFireAuth) { }

  ngOnInit(): void {
  }
 async login() {
   console.log(this.credentials)
   try {
    this.showAlert = true;
    this.alertColor = 'blue';
    // this.alertMessage = 'Please wait! you account is been created';
     await this.auth.signInWithEmailAndPassword(this.credentials.email, this.credentials.password)
   } catch (error) {
    console.error(error);
    this.alertMessage =
      'An unexpected error occurred. Please try again later';
    this.alertColor = 'red';
    return;
   }
   this.alertColor = 'green';
   this.alertMessage = 'Success! login successful.';
}
}

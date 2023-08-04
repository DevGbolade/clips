import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { EmailTaken } from '../validators/email-taken';
import { RegisterValidators } from '../validators/register-validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit{
  showAlert = false;
  alertColor = 'blue';
  alertMessage = 'Please wait! you account is been created';

  age = new FormControl(null, [
    Validators.required,
    Validators.min(18),
    Validators.max(120),
  ]);
  name = new FormControl('', [Validators.required, Validators.minLength(3)]);
  email = new FormControl('', [Validators.required, Validators.email], [this.emailTaken.validate]);
  phone = new FormControl('', [Validators.required]);
  password = new FormControl('', [
    Validators.required,
    Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm),
  ]);
  confirm_password = new FormControl('', [Validators.required]);

  registerForm = new FormGroup({
    age: this.age,
    name: this.name,
    email: this.email,
    phone: this.phone,
    password: this.password,
    confirm_password: this.confirm_password,
  }, [RegisterValidators.match('password', 'confirm_password')]);

  constructor(private authService: AuthService, private emailTaken: EmailTaken) { }
  
  ngOnInit(): void {
   
    this.getUsers()
  }

  async getUsers() {
  //  (await this.authService.getUsers())

  }
  async onSubmit() {
    this.showAlert = true;
    this.alertColor = 'blue';
    this.alertMessage = 'Please wait! you account is been created';
    try {
     await  this.authService.createUser(this.registerForm.value)
  
    } catch (error) {
      console.error(error);
      this.alertMessage =
        'An unexpected error occurred. Please try again later';
      this.alertColor = 'red';
      return;
    }
    this.alertColor = 'green';
    this.alertMessage = 'Success! you account has been created';
  }
}

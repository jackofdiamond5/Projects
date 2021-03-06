import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, EventEmitter, Output } from '@angular/core';

import { UserService } from '../services/user.service';
import { AuthenticationService } from '../services/authentication.service';
import { ExternalAuthService, ExternalAuthProvider } from '../services/igx-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string;
  password: string;

  public loginForm: FormGroup;

  apiResult: string;

  @Output() viewChange: EventEmitter<any> = new EventEmitter();
  @Output() loggedIn: EventEmitter<any> = new EventEmitter();

  constructor(
    private authService: ExternalAuthService, private authentication: AuthenticationService,
    private userService: UserService, private router: Router, fb: FormBuilder
  ) {
    // https://github.com/angular/angular/issues/13721
    this.loginForm = fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  signUpG() {
    this.authService.login(ExternalAuthProvider.Google);
  }

  signUpMS() {
    this.authService.login(ExternalAuthProvider.Microsoft);
  }

  signUpFb() {
    this.authService.login(ExternalAuthProvider.Facebook);
    this.loggedIn.emit();
  }

  tryLogin() {
    const response = this.authentication.login(this.loginForm.value);
    if (response) {
      this.userService.setCurrentUser(response);
      this.router.navigate(['/profile']);
      this.loggedIn.emit();
    }
  }

  showRegistrationForm() {
    this.viewChange.emit();
  }
}

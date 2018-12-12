import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { NotificationService } from '../../shared/messages/snackbar/notification.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'mt-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  navigateTo: string;

  constructor(private fb: FormBuilder,
    private loginService: LoginService,
    private notificationService: NotificationService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required])
    }); // se ninguem passar um rota vai para '/'
    this.navigateTo = this.activatedRoute.snapshot.params['to'] || btoa('/'); // pega o parametro na url chamado to
  }

  login() {
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe(user => this.notificationService.notify(`Bem vindo, ${user.name}`),
                  response => this.notificationService.notify(response.error.message), // HttpErrorResponse
                  () => this.router.navigate([ atob(this.navigateTo)])); // atob decodificando a url depois do btoa
  }

}

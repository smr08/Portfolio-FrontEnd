import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/model/login-usuario';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  form: FormGroup;
  isLogged = false;
  isLoggingFail = false;
  loginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  password!: string;
  roles: string[] = [];
  errMsj!: string;


  constructor(private tokenService: TokenService, private authService: AuthService, private router: Router, private formBuilder: FormBuilder) {
    this.form= this.formBuilder.group({
      nombre: '',
      nombreUsuario: ['',[Validators.required]],
      email : '',
      password : ['',[Validators.required]]
    })
   }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLoggingFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin(): void {
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
    this.authService.login(this.loginUsuario).subscribe(data => {
      this.isLogged = true;
      this.isLoggingFail = false;
      this.tokenService.setToken(data.token);
      this.tokenService.setUserName(data.nombreUsuario);
      this.tokenService.setAuthorities(data.authorities);
      this.roles = data.authorities;
      this.router.navigate(['']);
    }, err => {
      this.isLogged = false;
      this.isLoggingFail = true;
      this.errMsj = err.error.message;
      console.log(this.errMsj);
    })
  }

  get NombreUsuario()
  {
    return this.form.get('nombreUsuario');
  }

  get Password()
  {
    return this.form.get('password');
  }

}

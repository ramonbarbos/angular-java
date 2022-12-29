import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../service/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {




  usuario = {login: '',senha: ''};

    constructor(private loginService: LoginServiceService){

  }
  //Adcionando ação ao botão
  public login(){
    this.loginService.login(this.usuario);
  }


  ngOnInit(): void {
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppConstants } from '../app-constants';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient, private router: Router) { }

  login(usuario){

   // console.info(JSON.stringify(usuario))

    return this.http.post(AppConstants.baselogin, JSON.stringify(usuario)).subscribe(data => {

      //Criando uma variavel para o token do usuario logado
      var token = JSON.parse(JSON.stringify(data)).Authorization.split(' ')[1];

      localStorage.setItem("token", token);

     // console.info(localStorage.getItem("token"))
      console.info("Token Valido")

      //Navegar
      this.router.navigate(['home']);


    },

    error => {
      console.error("Erro ao fazer login")
      alert("Acesso Negado")}
    )
  }

}

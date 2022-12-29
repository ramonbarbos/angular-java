import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConstants } from '../app-constants';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient, private router: Router) { }

  login(usuario: { login: any; senha?: string; }){

    console.info(JSON.stringify(usuario));

    return this.http.post(AppConstants.baselogin, JSON.stringify(usuario)).subscribe(data => {
        //corpo do retorno Http

        var token = JSON.parse(JSON.stringify(data)).Authorization.split(' ')[1];

        localStorage.setItem("token", token);

        console.info("Tohken "+ localStorage.getItem("token"))

         //Navegação
            this.router.navigate(['home']);

    },
    error => {
            console.error("Erro ao fazer login")
      alert("Acesso Negado")
    }
    )

  }

}

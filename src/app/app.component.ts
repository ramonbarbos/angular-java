import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from './service/login-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-java';

  constructor(private router : Router ){ }

  ngOnInit(): void {

    if(localStorage.getItem('token') == null){
      this.router.navigate(['login']);
    }
  }

  public sair(){
    localStorage.clear();
    console.info("Desconectado")
    this.router.navigate(['login'])
    alert("Desconectado")
  }

}

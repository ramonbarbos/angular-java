import { Component } from '@angular/core';
import { LoginServiceService } from './service/login-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-java';

  usuario = {login: '', senha: ''};

  constructor(private loginService : LoginServiceService){ }

  public login(): void{
    this.loginService.login(this.usuario);
	  }


}

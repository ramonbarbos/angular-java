export class AppConstants {

	public static get baseServidor(): string { return 'http://localhost:8080/'};

	public static get baselogin(): string {return this.baseServidor + 'restfulTeste/login'};

	public static get baseUrl(): string {return this.baseServidor + 'restfulTeste/home/'};

}

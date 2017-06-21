//Arquivo que inicia o módulo/aplicação
//Importar uma função
//Fazendo boot da aplicação para rodar no browser
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app.module';

//Criando uma constante = valor váriavel não mudará, será uma função
const platform = platformBrowserDynamic();
//Seta qual módulo que iniciará a aplicação
platform.bootstrapModule(AppModule);
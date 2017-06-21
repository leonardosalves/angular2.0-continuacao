"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Arquivo que inicia o módulo/aplicação
//Importar uma função
//Fazendo boot da aplicação para rodar no browser
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var app_module_1 = require("./app.module");
//Criando uma constante = valor váriavel não mudará, será uma função
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
//Seta qual módulo que iniciará a aplicação
platform.bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
//importar um decorator do angular 2, importado de ....
var core_1 = require("@angular/core");
var Task = (function () {
    function Task() {
    }
    return Task;
}());
//Cada tarefa corresponde a classe task
var TASKS = [
    { id: 1, name: 'Trabalhar' },
    { id: 2, name: 'Lavar Pratos' },
    { id: 3, name: 'Tirar poeira' },
    { id: 4, name: 'Comparas no supermercado' },
    { id: 5, name: 'Cuidar das crianças' },
    { id: 6, name: 'Jogar videogame' },
    { id: 7, name: 'Almoçar' },
    { id: 8, name: 'Jantar' },
    { id: 9, name: 'Fazer Exercício' },
    { id: 10, name: 'Pagar contas' },
];
var TaskEditComponent = (function () {
    function TaskEditComponent() {
    }
    return TaskEditComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Task)
], TaskEditComponent.prototype, "task", void 0);
TaskEditComponent = __decorate([
    core_1.Component({
        selector: 'task-edit',
        template: "\n        <div *ngIf=\"task\">\n            <input type=\"text\" [(ngModel)]=\"task.name\" />\n        </div>\n    "
    })
], TaskEditComponent);
exports.TaskEditComponent = TaskEditComponent;
//Decoretor
var AppComponent = (function () {
    function AppComponent() {
        this.title = "Lista de Tarefas";
        //Criando propriedade
        this.tasks = TASKS;
    }
    //Enviando a tarefa para o selectTask com o on click no elemento 
    AppComponent.prototype.onClick = function (task) {
        this.selectedTask = task;
    };
    AppComponent.prototype.onKeyPress = function (event) {
        console.log(event);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        //qual será a tag customizada do html que iremos usar:(objeto)
        selector: 'my-app',
        //template customizado do próprio componente com o `` fazendo o template em mult-linha
        //Destivar o 2waydatabinding retirar os parenteses deixar somente o conchetes Ex: [(ngModel)] == [ngModel]
        //o que  significa o * = sintax sugar = diminui o código de programação
        //() interação view -> component Ex = (click) era o onClick
        //$event acessar propriedades do elemento que aconteceu o evento
        //passando o o do ngFor pega o valor do elemento ao qual foi clicado
        //<input (keypress)="onKeyPress($event)">
        //<button type="button" (click)="onClick({})">Clicar me!</button>
        //keypress == recebe o que foi digitado as letras do teclado 
        //ngIf mostrar o selectTask se ele for selecionado com algum conteudo
        template: "\n        <h1>{{ title }}</h1>\n        <ul>\n            <li *ngFor=\"let o of tasks\" (click)=\"onClick(o)\">\n                {{ o.id }} - {{ o.name }}\n            </li>\n        </ul>\n        <task-edit [task]=\"selectedTask\"></task-edit>\n    "
    })
    //Associar este decorator a uma classe relativo ao nome do arquivo 'app.component'
    //export para usar a classe em outros arquivos, exportando a classe, usando o import em outro arquivo
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
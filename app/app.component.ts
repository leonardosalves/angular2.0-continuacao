//importar um decorator do angular 2, importado de ....
import {Component, Input} from '@angular/core';

class Task {
    id : number;
    name : string;
}

//Cada tarefa corresponde a classe task
let TASKS:Task[] = [
    {id : 1, name : 'Trabalhar'},
    {id : 2, name : 'Lavar Pratos'},
    {id : 3, name : 'Tirar poeira'},
    {id : 4, name : 'Comparas no supermercado'},
    {id : 5, name : 'Cuidar das crianças'},
    {id : 6, name : 'Jogar videogame'},
    {id : 7, name : 'Almoçar'},
    {id : 8, name : 'Jantar'},
    {id : 9, name : 'Fazer Exercício'},
    {id : 10, name : 'Pagar contas'},
];


@Component({
    selector: 'task-edit',
    template: `
        <div *ngIf="task">
            <input type="text" [(ngModel)]="task.name" />
        </div>
    `
})
export class TaskEditComponent {
    //Colcando o Input diz que esta propriedade task pode ser acessado externamente
    @Input()
    task : Task;
}


//Decoretor
@Component({
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
    template: `
        <h1>{{ title }}</h1>
        <ul>
            <li *ngFor="let o of tasks" (click)="onClick(o)">
                {{ o.id }} - {{ o.name }}
            </li>
        </ul>
        <task-edit [task]="selectedTask"></task-edit>
    `
})
//Associar este decorator a uma classe relativo ao nome do arquivo 'app.component'
//export para usar a classe em outros arquivos, exportando a classe, usando o import em outro arquivo
export class AppComponent {
    title = "Lista de Tarefas";
    //Criando propriedade
    tasks : Task[] = TASKS;
    selectedTask : Task;
    //Enviando a tarefa para o selectTask com o on click no elemento 
    onClick(task){
        this.selectedTask = task;
    }

    onKeyPress(event){
        console.log(event);
    }
}
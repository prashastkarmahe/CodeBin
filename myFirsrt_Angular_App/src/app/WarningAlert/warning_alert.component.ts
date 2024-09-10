import { Component } from "@angular/core";
@Component({
    selector:'app-warning-alert',
    templateUrl: './warning.html',
    styles:[`
    p{
        padding: auto;
        color: red;
        background-color:pink;
        font-size: larger;
        height: 5vh;
        border: 2px solid red;
        text-align: center;
    }
    `]
})
export class WarningAlert{}
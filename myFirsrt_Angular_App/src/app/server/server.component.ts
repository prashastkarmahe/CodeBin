import { Component } from "@angular/core";

@Component({
    selector:'App_Server',
    templateUrl:'./server.component.html',
    styleUrl:'./server.component.css'
})
export class ServerComponent{
    serverID=10;
    serverStatus="offline";

    getServerStatus(){
        return this.serverStatus="offline";
    }

    allowNewServer=false;
    constructor(){
        setTimeout(()=>{
            this.allowNewServer=true;
        },2500); 
    }

    serverCreationStatus="Click on button to create a server."
    serverCreated=false;
    onServerCreation(){
        this.serverCreated=true;
        this.serverCreationStatus="Server is created !!!"
    }

    ServerName="Type some text & Click on add server to get Server Name"
    onUpdateServerName(event){
        this.ServerName=(<HTMLInputElement>event.target).value;
    }

    // Assigment for  data binding ---------------
    userName="";

    resetUserNameonClick(){
        this.userName="";
    }
    // -----------------------------

     // Assigment for Directives ---------------
     showSecret=false;
     log=[];
     onToggleDets(){
        this.showSecret=!this.showSecret;
        this.log.push(this.log.length+1);
     }
     // -----------------------------
}
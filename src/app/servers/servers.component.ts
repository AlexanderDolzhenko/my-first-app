import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus: string = 'lalala';
  serverName = '123';
  taskName = '';
  serverCreated = false;
  servers = ['Testserver', 'Testserver2'];
  clickedButton = false;
  log = [];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);

  }
  ngOnInit() {  }
  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'server was created! Name is' + this.serverName;
  }
  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onToggleDetails() {
    this.clickedButton = !this.clickedButton;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }
}

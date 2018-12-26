import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowAddServer = false;
  serverCreationStatus = 'nothing to display!!!';
  serverName = '';

  constructor() { }

  ngOnInit() {
    setTimeout( () => {
      this.allowAddServer = true;
    } , 2000);
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server created successfully!';
  }

  /*updateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }*/

  log(x) {
    console.log(x);
  }

}

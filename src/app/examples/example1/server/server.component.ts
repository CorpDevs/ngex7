import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent {
  serverId = 10;
  serverStatus = 'Offline';

  getServerStatus() {
    return this.serverStatus;
  }
}


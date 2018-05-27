import { Component, OnInit } from '@angular/core';
import * as socketIo from 'socket.io-client';

const SERVER_URL = 'http://localhost:3000';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  public mensaje = "";
  private socket;
 public conversacion = new Array();
  public ngOnInit(): void {
      this.socket = socketIo(SERVER_URL);

      this.socket.on("message", (data)=> {this.conversacion.push(data);  console.log(this.conversacion);});
     
  }

  public send(): void {
      this.socket.emit('message', this.mensaje);
  }

  
}

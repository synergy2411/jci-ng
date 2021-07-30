import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket;
  private subject = new Subject();

  constructor() {
    this.socket = io("http://localhost:9090")
    this.socket.on("acknowledge", data => {
      console.log("Server Says : ", data.message)
    })
    this.socket.on("message", ({message, chatterName}) => {
      this.subject.next({message, chatterName})
    })
  }

  getMessage(){
    return this.subject;
  }

  sendMessage(chatterName : string, message :string){
    this.socket.emit("message", {chatterName , message})
  }
}

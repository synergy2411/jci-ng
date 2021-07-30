import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  taMessage: string = "";
  message : string;
  chatterName : string;
  constructor(private socketService: SocketService) { }

  ngOnInit(): void {
    this.chatterName = prompt("Enter your name");
    this.socketService.getMessage().subscribe(({message, chatterName}) => {
      if(message && chatterName){
      this.taMessage += `${chatterName} : ${message}\n`
      }
    })
  }

  onSend(){
    this.socketService.sendMessage(this.chatterName, this.message);
    this.message="";
  }

}

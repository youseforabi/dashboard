import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  messages: any[] = [];
  newMessage: string = '';

  constructor(private chatService: ChatService) {}

  ngOnInit(): void {
    this.chatService.listenForMessages((message: any) => {
      this.messages.push(message);
    });
  }

  sendMessage() {
    const message = {
      content: this.newMessage,
      timestamp: new Date().toISOString(),
    };

    // Add the sent message to the messages array
    this.messages.push(message);
    this.newMessage = '';

    // Simulate a response and add it to messages
    this.chatService.simulateResponse(message, (response) => {
      this.messages.push(response); // Push the simulated response to the messages
    });
  }
}

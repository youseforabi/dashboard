import { Injectable } from '@angular/core';
import Pusher, { Channel } from 'pusher-js';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private pusher: Pusher;
  private channel: Channel;

  constructor() {
    this.pusher = new Pusher('YOUR_PUSHER_KEY', {
      cluster: 'YOUR_CLUSTER',
    });

    this.channel = this.pusher.subscribe('doctor-app') as Channel;
  }

  // Listen for client messages
  listenForMessages(callback: (message: any) => void) {
    this.channel.bind('client-message', (data: any) => {
      console.log('Client message received:', data);
      callback(data);
    });
  }

  // Simulate sending a message and receiving a response
  simulateResponse(message: any, callback: (response: any) => void) {
    setTimeout(() => {
      let responseContent = '';
  
      // Define a set of questions with single answers
      const responses: { [key: string]: string } = {
        'what is your name?': 'My name is ChatBot!',
        'how are you?': 'I’m doing well, thank you!',
        'tell me a joke': 'Why don’t scientists trust atoms? Because they make up everything!',
        'what can you do?': 'I can chat with you and provide information!',
        'where are you from?': 'I exist in the cloud, ready to assist you!',
        'goodbye': 'Goodbye! Have a great day!',
        'thank you': 'You’re welcome! I’m glad to help.',
        'what time is it?': `I'm not sure of the time, but you can check your device!`,
        'what is the weather like?': `I can't check the weather, but I hope it's nice!`,
        'do you like music?': `I don’t have ears, but I think music is wonderful!`,
        'what is your favorite color?': `I don't see colors, but I love all the colors of the world!`,
        'can you help me?': `Absolutely! Just tell me what you need!`,
        'what do you eat?': `I don’t eat, but I think food is fascinating!`,
        'are you a robot?': `I’m more like a virtual assistant than a robot!`,
        'what is your purpose?': `My purpose is to assist you and provide information!`,
        // Add more questions as needed
      };
  
      // Check for specific phrases and get the corresponding response
      const lowerCaseInput = message.content.toLowerCase();
      responseContent = responses[lowerCaseInput as keyof typeof responses] || `Echo: ${message.content}`;
  
      const response = {
        content: responseContent,
        timestamp: new Date().toISOString(),
      };
  
      console.log('Simulating response:', response);
      callback(response); // Call the callback with the response
    }, 1000); // Simulate a delay for the response
  }
  
  
}

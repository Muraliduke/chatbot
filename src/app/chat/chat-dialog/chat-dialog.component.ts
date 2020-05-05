import { Component, OnInit, AfterViewChecked , ElementRef, ViewChild } from '@angular/core';
import { ChatService, Message } from '../chat.service';
import { Observable } from 'rxjs';
import { scan } from 'rxjs/operators';

@Component({
  selector: 'chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.scss']
})
export class ChatDialogComponent implements OnInit, AfterViewChecked  {
  message: Observable<Message[]>;
  formval: string;
  messages: any[] = [];
  isRemovable = true;
  Mcolor = ['accent', 'primary' ];
  quickInfo: string[] = ['What is corona?',
  'Provide me general covid stats globally',
  'Need city wise covid details?',
  'Need Province wise covid details?',
  'Country wise covid details', 'Travel data'
  ];
  displayedColumns: string[] = ['desc', 'val'];
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;

  constructor(private chat: ChatService) { }
  today: number = Date.now();

  ngOnInit(): void {
    this.message = this.chat.conversation.asObservable().pipe(scan((acc, val) => acc.concat(val)));
    this.message.subscribe(data => console.log(data), err => console.log(err));
    this.scrollToBottom();
  }

  sendMessage(val){
    this.scrollToBottom();
    this.today = Date.now();
    this.chat.converse(val || this.formval);
    this.formval = '';
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
        this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }

}

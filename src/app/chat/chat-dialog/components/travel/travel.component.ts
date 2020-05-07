import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.scss']
})
export class TravelComponent implements OnInit {
  @Input() data ;
  @Output() viewMore = new EventEmitter<string>();

  sendMessage(a){
    this.viewMore.emit(a);

  }
  constructor() { }

  ngOnInit(): void {
  }

}

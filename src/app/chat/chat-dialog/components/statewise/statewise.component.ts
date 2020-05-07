import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'statewise',
  templateUrl: './statewise.component.html',
  styleUrls: ['./statewise.component.scss']
})
export class StatewiseComponent implements OnInit {

  @Input() data ;
  @Output() viewMore = new EventEmitter<string>();

  sendMessage(a){
    this.viewMore.emit(a);

  }
  constructor() {
    console.log(this.data)
   }

  ngOnInit(): void {
    console.log(this.data)
  }

}

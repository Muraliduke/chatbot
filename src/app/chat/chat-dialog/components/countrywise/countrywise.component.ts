import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'countrywise',
  templateUrl: './countrywise.component.html',
  styleUrls: ['./countrywise.component.scss']
})
export class CountrywiseComponent implements OnInit {
  @Input() data ;
  @Output() viewMore = new EventEmitter<string>();

  constructor() {
    console.log(this.data);
  }

  ngOnInit(): void {
  }

  sendMessage(a){
    this.viewMore.emit(a);

  }

}

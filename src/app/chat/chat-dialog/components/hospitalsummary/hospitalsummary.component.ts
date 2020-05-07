import { Component, OnInit , Input,
  Output,
  EventEmitter} from '@angular/core';

@Component({
  selector: 'hospitalsummary',
  templateUrl: './hospitalsummary.component.html',
  styleUrls: ['./hospitalsummary.component.scss']
})
export class HospitalsummaryComponent implements OnInit {
  @Input() data ;
  @Output() viewMore = new EventEmitter<string>();

  sendMessage(a){
    this.viewMore.emit(a);

  }
  constructor() { }

  ngOnInit(): void {
  }

}

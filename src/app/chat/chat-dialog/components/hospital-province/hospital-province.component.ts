import { Component, OnInit , Input,
  Output,
  EventEmitter} from '@angular/core';

@Component({
  selector: 'hospital-province',
  templateUrl: './hospital-province.component.html',
  styleUrls: ['./hospital-province.component.scss']
})
export class HospitalProvinceComponent implements OnInit {
  @Input() data ;
  @Output() viewMore = new EventEmitter<string>();

  sendMessage(a){
    this.viewMore.emit(a);

  }
  constructor() { }

  ngOnInit(): void {
  }

}

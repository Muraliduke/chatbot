import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  @Input() data: any;

  constructor() {
  }

  formatHeading(str){
    const a = str[0].toUpperCase() + str.slice(1);
    // console.log(str, a);
    return a.replace(/_/g, ' ');
  }

  ngOnInit(): void {
  }

}

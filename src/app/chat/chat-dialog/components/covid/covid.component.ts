import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.scss']
})
export class CovidComponent implements OnInit {
  @Input() data: string;
  constructor() { }

  ngOnInit(): void {
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {IPiano} from '@data/interfaces';

@Component({
  selector: 'app-piano',
  templateUrl: './piano.component.html',
  styleUrls: ['./piano.component.scss'],
})
export class PianoComponent implements OnInit {
  @Input() piano: IPiano;

  constructor() { }

  ngOnInit() {}

}

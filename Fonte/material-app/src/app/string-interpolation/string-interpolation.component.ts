import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {

  firstname = 'Eduardo';
  person = {
    firstname: 'Eduardo',
    lastname: 'Maia',
    age: 50,
    address: 'Casa'
  };

  constructor() { }

  ngOnInit() {
  }

}

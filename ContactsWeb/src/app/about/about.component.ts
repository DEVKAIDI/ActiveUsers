import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  info={nom:"mohammed",email:"mohammed.mm@ff.fr"};

  constructor() { }

  ngOnInit() {
  }

}

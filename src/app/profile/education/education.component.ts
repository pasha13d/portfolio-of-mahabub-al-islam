import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}

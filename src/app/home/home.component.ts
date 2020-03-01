import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;
  learnMoreMode = false;

  constructor() { }

  ngOnInit() { }

  register() {
    this.registerMode = true;
  }

  learnMore() {
    this.learnMoreMode = true;
  }

  cancelRegisterMode() {
    this.registerMode = false;
  }

  cancelLearnMoreMode() {
    this.learnMoreMode = false;
  }
}

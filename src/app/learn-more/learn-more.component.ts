import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-learn-more',
  templateUrl: './learn-more.component.html',
  styleUrls: ['./learn-more.component.css']
})
export class LearnMoreComponent implements OnInit {
  @Output() cancelLearnMore = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  cancel() {
    this.cancelLearnMore.emit();
  }
}

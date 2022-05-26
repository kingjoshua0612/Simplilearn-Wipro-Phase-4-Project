import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-questions',
  templateUrl: './display-questions.component.html',
  styleUrls: ['./display-questions.component.css']
})
export class DisplayQuestionsComponent implements OnInit {
  @Input() questions: any
  constructor() { }

  ngOnInit(): void {
  }

}

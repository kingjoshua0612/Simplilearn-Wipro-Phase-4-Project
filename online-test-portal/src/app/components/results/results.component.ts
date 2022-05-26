import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  correctAnswers: number = 0;
  timestamp: String = new Date().toLocaleString();
  status: string = 'PASSED';
  marks: number;
  statusColor: string = 'green';
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(data => this.correctAnswers = data["correctAnswers"])
    if(this.correctAnswers < 4){
      this.status = "FAILED";
      this.statusColor = 'red';
    }
    this.marks = 100 * this.correctAnswers/5

  }


}

import {AfterViewChecked, Component, Input, OnInit} from '@angular/core';
import {QuestionService} from "../../service/question.service";
import {NgForm} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit, AfterViewChecked {
  htmlQuestions;
  @Input()subject;
  constructor(private questionService: QuestionService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => this.subject = params.get("subject"))
  }

  onSubmit(questionForm: NgForm) {
    const TOTAL_QUESTIONS: number = 5;
    let correctAnswers: number = 0;
    for(let i = 1; i <= TOTAL_QUESTIONS; i++){
      if(this.questionService.isCorrectAnswer(this.subject, i, questionForm.value[i.toString()])){
        correctAnswers++;
      }
    }
    this.router.navigate(['/results', {"correctAnswers": correctAnswers}]);
  }

  ngAfterViewChecked(): void {
    this.htmlQuestions = this.questionService.getQuestions(this.subject);
  }

}

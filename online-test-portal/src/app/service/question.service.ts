import { Injectable } from '@angular/core';
import {Question} from "../interface/question";
import htmlQuestions from  "../../assets/html.json"
import cssQuestions from  "../../assets/css.json"
import javaScriptQuestions from  "../../assets/javascript.json"

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor() { }
  questions: Question[];

  getQuestions(subject: string):  Question[]{
    switch (subject){
      case "html":
        this.questions =  htmlQuestions;
        break;
      case "css":
        this.questions =  cssQuestions;
        break;
      case "javascript":
        this.questions =  javaScriptQuestions;
        break;
      default:
    }
    return this.questions;
  }

  isCorrectAnswer(subject: string, questionId: number, userAnswer: string): boolean{
    let isCorrect: boolean = false;
    if (subject === "html") {
      isCorrect =  htmlQuestions.find(question => question.id == questionId)?.correct === userAnswer ;
    } else if (subject === "css") {
      isCorrect = cssQuestions.find(question => question.id == questionId)?.correct === userAnswer ;
    } else if (subject === "javascript") {
      isCorrect = javaScriptQuestions.find(question => question.id == questionId)?.correct === userAnswer ;
    }
    return isCorrect;
  }
}

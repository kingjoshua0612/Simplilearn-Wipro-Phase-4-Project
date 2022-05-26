import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {QuestionsComponent} from "../components/questions/questions.component";
import {QuestionPlaceholderComponent} from "../components/question-placeholder/question-placeholder.component";
import {ResultsComponent} from "../components/results/results.component";

const routes: Routes =[
  {path:"subject/:subject", component: QuestionsComponent},
  {path:"results", component: ResultsComponent},
  {path:"**", component: QuestionPlaceholderComponent}
]


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

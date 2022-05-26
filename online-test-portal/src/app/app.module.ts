import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {QuestionService} from "./service/question.service";
import { HeaderComponent } from './components/header/header.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {AppRoutingModule} from "./app-routing/app-routing.module";
import { QuestionsComponent } from './components/questions/questions.component';
import { QuestionPlaceholderComponent } from './components/question-placeholder/question-placeholder.component';
import {FormsModule} from "@angular/forms";
import { ResultsComponent } from './components/results/results.component';
import { DisplayQuestionsComponent } from './components/display-questions/display-questions.component';
import {WebcamModule} from 'ngx-webcam';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QuestionsComponent,
    QuestionPlaceholderComponent,
    ResultsComponent,
    DisplayQuestionsComponent
  ],
    imports: [
        BrowserModule, 
        NgbModule, 
        AppRoutingModule, 
        FormsModule,
        WebcamModule
    ],
  providers: [QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }

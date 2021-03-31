import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SurveyQuestion, SurveyAnswer } from '../../models';

@Component({
  selector: 'app-survey-question',
  templateUrl: './survey-question.component.html',
  styleUrls: ['./survey-question.component.scss'],
})
export class SurveyQuestionComponent {
  orderLabels = [
    "Sit",
    "Crawl",
    "Walk",
    "Run",
    "Fly"
  ];

  @Input() question: SurveyQuestion;

  get answers(): SurveyAnswer[] {
    return this.question && Array.isArray(this.question.answers)? this.question.answers : [];
  }

  @Output() answerIdChange = new EventEmitter<number>();
  set model(value: number) {
    this.answerIdChange.emit(value);
  };
}

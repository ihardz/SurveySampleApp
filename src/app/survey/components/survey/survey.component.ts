import { Component, Input } from '@angular/core';

import { Survey } from './../../models/survey';
import { SurveyQuestion } from './../../models';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss'],
})
export class SurveyComponent {
  private activeQuestionId: number;
  private current: Survey;
  private finished = false;
  private result = {};

  private get questions(): SurveyQuestion[] {
    return this.survey ? this.survey.questions : [];
  }
  
  public activeQuestionAnswerChanged = false;

  @Input() public set survey(value: Survey) {
    this.current = value;
    let question = value.questions[0];
    this.activeQuestionId = question ? question.id : null;
    this.finished = false;
    this.activeQuestionAnswerChanged = false;
    this.result = {};
  };

  public get survey(): Survey {
    return this.current;
  }

  get totalCount(): number {
    return this.current ? this.current.questions.length : 0;
  }

  get currentNumber(): number {
    return this.questions.indexOf(this.activeQuestion) + 1;
  }

  get complete(): number {
    let max = 100;
    return this.finished ? max : (this.currentNumber - 1) * max / this.totalCount;
  }

  get activeQuestion(): SurveyQuestion {
    return this.survey ? this.survey.questions.find(x => x.id === this.activeQuestionId) : null;
  }

  get last(): boolean {
    return this.questions.length === this.currentNumber;
  }

  handleNextQuestionClick($event: any): void {
    this.activeQuestionAnswerChanged = false;
    if (this.last) {
      this.finished = true;
    } else {
      let next = this.questions[this.currentNumber];
      this.activeQuestionId = next.id;      
    }
  }

  handleAnswerChange(answerId: number): void {
    this.activeQuestionAnswerChanged = true;
    this.result[this.activeQuestionId] = answerId;
  }
}

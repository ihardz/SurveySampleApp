import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Survey } from './../../models';
import { SurveyService } from './../../services';

@Component({
  selector: 'app-survey-questions-page',
  templateUrl: './survey-questions.page.html',
  styleUrls: ['./survey-questions.page.scss'],
})
export class SurveyQuestionsPage implements OnInit, OnDestroy {

  private subs: Subscription[] = [];
  private currentSurvey: Survey;
  private loaded = false;

  get loading(): boolean {
    return !this.loaded;
  }

  get survey(): Survey {
    return this.currentSurvey;
  }

  constructor(private service: SurveyService) {    
  }

  ngOnDestroy(): void {
    this.subs.forEach(x => x.unsubscribe());
  }

  ngOnInit() {
    let subscription = this.service.getSurvey().subscribe(this.onSurveyLoaded.bind(this));
    this.subs.push(subscription);
  }

  private onSurveyLoaded(survey: Survey): void {
    this.currentSurvey = survey;
    this.loaded = true;
  }
}
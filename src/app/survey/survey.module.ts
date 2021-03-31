import { SurveyService } from './services/survey.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SurveyRoutingModule } from './survey-routing.module';

import { SurveyQuestionsPage } from './pages';
import { SurveyComponent, SurveyQuestionComponent } from './components';
import { NgbButtonsModule, NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SurveyRoutingModule,
    NgbProgressbarModule,
    NgbButtonsModule
  ],
  declarations: [
    SurveyQuestionsPage,
    SurveyQuestionComponent,
    SurveyComponent
  ],
  providers: [
    SurveyService
  ]
})
export class SurveyModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SurveyQuestionsPage } from './pages';

const routes: Routes = [
  {
    path: '',
    data: { title: 'Survey Questions' },
    component: SurveyQuestionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SurveyRoutingModule { }

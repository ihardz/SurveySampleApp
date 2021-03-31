import { SurveyQuestion } from './survey-question';

export class Survey {
  constructor(
    public id: number,
    public questions: SurveyQuestion[]
  ) {
  }
}
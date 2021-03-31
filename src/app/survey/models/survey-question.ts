import { SurveyAnswer } from './survey-answer';

export class SurveyQuestion {
  constructor(
    public id: number,
    public text: string,
    public answers: SurveyAnswer[]
  ){}
}
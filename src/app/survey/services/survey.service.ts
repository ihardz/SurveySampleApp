import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from "rxjs/operators";

import { Survey, SurveyAnswer, SurveyQuestion } from './../models';

const survey = new Survey(
  1,
  [
    new SurveyQuestion(
      1,
      'How easy is your codebase to maintain for your component?',
      [
        new SurveyAnswer(1, 'Everything is hard to understand, it would take more than 50% of the development Maintainability time already complete to refactor existing technical debt. (SonarQube rating anything over 50% is an E)'),
        new SurveyAnswer(2, 'Majority is hard to understand, it would take 21%-50% of the development time already complete to refactor existing technical debt. (SonarQube rating between 21 to 50% the rating is a D)'),
        new SurveyAnswer(3, 'Most of the code is possible to maintain, it would take 11-20% of the development time already complete to refactor existing technical debt. (SonarQube rating between 11 to 20% the rating is a C)'),
        new SurveyAnswer(4, 'Majority is easy to understand. It would take 6-10% of the total development time to refactor existing technical debt. (SonarQube rating between 6 to 11% the rating is a B)'),
        new SurveyAnswer(5, 'Nearly everything is properly named and easy to understand. It would take less than 5% of the total development time to refactor existing technical debt. (SonarQube rating less than 5% the rating is a A)')
      ]
    ),
    new SurveyQuestion(
      2,
      'How often is code duplicated in your code base?',
      [
        new SurveyAnswer(6, 'There are many places where code is duplicated (>20%)'),
        new SurveyAnswer(7, 'Code is occasionally duplicated (<19%)'),
        new SurveyAnswer(8, 'Code is seldom duplicated (<10%) '),
        new SurveyAnswer(9, 'We rarely see instances of code being duplicated (<5%)'),
        new SurveyAnswer(10, 'We know code is not duplicated because we check with SonarQube (0%)')
      ]
    ),
    new SurveyQuestion(
      3,
      'How useful are comments in the codebase?',
      [
        new SurveyAnswer(11, 'There are no comments and the code is hard to understand'),
        new SurveyAnswer(12, 'There are no comments, but the code is comprehensible due to good naming conventions'),
        new SurveyAnswer(13, 'There are comments, but when we go to look at the code the comments are not always helpful.'),
        new SurveyAnswer(14, 'We have defined a commenting approached, that most team members follow, and when followed the code is easy to understand'),
        new SurveyAnswer(15, 'We have defined a commenting approach, is it followed by all the team, and it makes the code very easy to understand.')
      ]
    ),
    new SurveyQuestion(
      4,
      'For every new change that our team releases in a build, how many regression test fail?',
      [
        new SurveyAnswer(16, 'On average over the last 8  builds where we had changes, from our team, we had >=1 regression test failed per change.'),
        new SurveyAnswer(17, 'On average over the last 8 builds where we had changes from our team, we <1 regression test failed per 5 changes.'),
        new SurveyAnswer(18, 'On average over the last 8 builds where we had changes from our team, we had < 1 regression test failed per 10 changes.'),
        new SurveyAnswer(19, 'On average over the last 8 builds where we had changes from our team, we had <1 regression test failed per 20 changes.'),
        new SurveyAnswer(20, 'On average over the last 8 builds where we had changes from our team, we had zero regression failures.')
      ]
    )
  ]
);

@Injectable()
export class SurveyService {
  getSurvey(): Observable<Survey> {
    return of(survey).pipe(delay(1000)); //delay added to simulate a request;
  }
}
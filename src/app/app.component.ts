import { Component } from '@angular/core';
import * as questionnaireMock from './questionnaire-mock.json';
import { QuestionnaireRoot } from './questionnaire.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  questionnaire = (questionnaireMock as QuestionnaireRoot).questionnaire;
}

import { Component, OnInit, Input } from '@angular/core';
import { Questionnaire, QuestionSection } from '../questionnaire.model';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {

  @Input() questionnaire = new Questionnaire();
  constructor() { }

  get questionnaireSections (): QuestionSection[] {
    return this.questionnaire.questionSections;
  }

  ngOnInit() {
  }
}

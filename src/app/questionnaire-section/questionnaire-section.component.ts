import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { QuestionSection, Question } from '../questionnaire.model';

@Component({
  selector: 'app-questionnaire-section',
  templateUrl: './questionnaire-section.component.html',
  styleUrls: ['./questionnaire-section.component.css']
})
export class QuestionnaireSectionComponent implements OnInit {

  @Input() section: QuestionSection = new QuestionSection();

  get sectionQuestions(): Question[] {
    return this.section.questions;
  }

  constructor() { }

  ngOnInit() {
  }

}

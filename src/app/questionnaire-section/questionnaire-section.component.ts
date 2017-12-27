import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { QuestionSection, Question } from '../questionnaire.model';
import { FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';

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

  constructor(private formBuilder: FormBuilder) { }

  questionSectionForm: FormGroup;

  ngOnInit() {
    this.questionSectionForm = this.formBuilder.group({
      questionSectionName: '',
      headerText: '',
      subHeaderText: '',
      repeatable: '',
      questions: this.formBuilder.array([])
    });
  }

  createQuestion(): FormGroup {
    return this.formBuilder.group({
      answer: Validators.required
    });
  }

}

import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../questionnaire.model';
import { RenderingTranslationService } from './rendering-translation.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
  providers: [
    RenderingTranslationService]
})
export class QuestionComponent implements OnInit {

  @Input() question = new Question();
  @Input() form: FormGroup;

  get isValid() {
    return this.form.get(this.question.externalQuestionId).valid;
  }

  constructor(private renderingTranslationService: RenderingTranslationService) {
  }

  getQuestionRendering(question: Question) {
    return this.renderingTranslationService.getRenderingForQuestion(question);
  }

  ngOnInit() {
  }

}

import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { QuestionnaireSectionComponent } from './questionnaire-section/questionnaire-section.component';
import { QuestionComponent } from './question/question.component';
import { QuestionFormGeneratorService } from './questionnaire-section/question-form-generator.service';


@NgModule({
  declarations: [
    AppComponent,
    QuestionnaireComponent,
    QuestionnaireSectionComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [QuestionFormGeneratorService],
  bootstrap: [AppComponent]
})
export class AppModule { }

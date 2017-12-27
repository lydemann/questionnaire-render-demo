import { ValidationRule } from './validation-rules';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidationErrors, AbstractControl } from '@angular/forms';
import { Question, Questionnaire } from '../questionnaire.model';


@Injectable()
export class QuestionControlService {

    constructor() { }

    toFormGroup(questionnaire: Questionnaire) {
        const group: {[key: string]: AbstractControl} = {};

        questionnaire.questionSections.forEach(questionSection => {
            group['questions'] = this.getQuestionsFormGroup(questionSection.questions);
        });

        return new FormGroup(group);
    }

    private getQuestionsFormGroup(quesitons: Question[]): FormGroup {

        const questionGroup = new FormGroup({});
        quesitons.forEach(question => {
            questionGroup[question.externalQuestionId] = new FormControl(question.answer || '',
            this.getValidationFunctions(question.validationRules));
        });
        return questionGroup;
    }

    getValidationFunctions(validationRuleStrings: string[]): Array<(control: AbstractControl) => ValidationErrors | null> | null  {

        const validationRules = [];
        for (const validationRuleStr of validationRuleStrings) {
            const validationRule = ValidationRule.validationRulesMap.get(validationRuleStr);
            if (validationRule !== undefined) {
                validationRules.push(validationRule);
            }
        }

        return validationRules.length > 0 ? validationRules : null;
    }
}

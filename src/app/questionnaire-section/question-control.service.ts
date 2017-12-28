import { QuestionSection } from './../questionnaire.model';
import { ValidationRule } from './validation-rules';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidationErrors, AbstractControl } from '@angular/forms';
import { Question, Questionnaire } from '../questionnaire.model';


@Injectable()
export class QuestionControlService {

    constructor() { }

    toFormGroup(questionSections: QuestionSection[]) {
        const group: {[key: string]: AbstractControl} = {};


        questionSections.forEach(questionSection => {

            // TODO: render this with forin to remove hardcoding

            group['questionSectionName'] = new FormControl(questionSection.questionSectionName);
            group['questions'] = this.getQuestionsFormGroup(questionSection.questions);
        });

        return new FormGroup(group);
    }

    getQuestionsFormGroup(quesitons: Question[]): FormGroup {

        const group: {[key: string]: AbstractControl} = {};
        quesitons.forEach(question => {
            const validatiors = this.getValidationFunctions(question.validationRules);
            group[question.externalQuestionId] =
                new FormControl(question.answer || '',
                ...validatiors);
        });
        return new FormGroup(group);
    }

    getValidationFunctions(validationRuleStrings: string[]): Array<(control: AbstractControl) => ValidationErrors | null> | null  {

        const validationRules = [];
        for (const validationRuleStr of validationRuleStrings) {
            const validationRule = ValidationRule.validationRulesMap.get(validationRuleStr.toUpperCase());
            if (validationRule !== undefined) {
                validationRules.push(validationRule.validationFn);
            }
        }

        return validationRules.length > 0 ? validationRules : null;
    }
}

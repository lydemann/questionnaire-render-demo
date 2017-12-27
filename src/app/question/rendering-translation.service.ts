import { element } from 'protractor';
import { Injectable } from '@angular/core';
import { Question } from '../questionnaire.model';
import { Rendering } from './renderings';

const comboboxAnswerOptionLength = 7;

class RenderingTranslationRule {

    public static freetextRenderingRule = new RenderingTranslationRule(Rendering.freetext, (question: Question) => {
        if (question.answerType.toLowerCase() === 'freetext') {
            return true;
        }
        return false;
    });

    public static radioRenderingRule = new RenderingTranslationRule(Rendering.radio, (question: Question) => {
        if (question.answerType.toLocaleLowerCase() === 'SelectOne' &&
            question.answerOptions.length < comboboxAnswerOptionLength) {
                return true;
        }

        return false;
    });

    public static checkboxRenderingRule = new RenderingTranslationRule(Rendering.checkbox, (question: Question) => {
        if (question.answerType === 'selectmulti' &&
            question.answerOptions.length < comboboxAnswerOptionLength) {
                return true;
        }

        return false;
    });

    public static comboboxRenderingRule = new RenderingTranslationRule(Rendering.checkbox, (question: Question) => {
        if ((question.answerType === 'selectone' || question.answerType === 'selectmulti') &&
            question.answerOptions.length >= comboboxAnswerOptionLength) {
                return true;
        }

        return false;
    });

    private constructor(public rendering: Rendering, public booleanExp: (Question) => boolean) {
    }
}

@Injectable()
export class RenderingTranslationService {

    constructor() {
    }

    // Rendering rules goes here...
    private renderingTranslationRules: RenderingTranslationRule[] = [
        RenderingTranslationRule.freetextRenderingRule
    ];

    getRenderingForQuestion(question: Question): Rendering {

        let renderingToReturn;
        for (const renderingTranslationRule of this.renderingTranslationRules) {
            if (renderingTranslationRule.booleanExp(question)) {
                renderingToReturn = renderingTranslationRule.rendering;
                break;
            }
        }

        if (!renderingToReturn) {
            throw new Error('No renderings for question: ' + question.externalQuestionId);
        }

        return renderingToReturn;
    }
}

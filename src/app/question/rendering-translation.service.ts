import { element } from 'protractor';
import { Injectable } from '@angular/core';
import { Question } from '../questionnaire.model';
import { Rendering } from './renderings';

class RenderingTranslationRule {

    public static freetextRenderingRule = new RenderingTranslationRule(Rendering.freetext, (question: Question) => {
        if (question.answerType === 'freetext') {
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

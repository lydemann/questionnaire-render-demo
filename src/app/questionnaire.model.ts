export class AnswerOption {
    optionText: string;
    optionCode: string;
}

export class MatchCriteria {
    externalQuestionId: string;
    evaluateOperator: string;
    answerValue: string;
}

export class Question<T = any> {

    constructor() {
        this.answerOptions = [];
        this.enabledCriteria = [];
        this.validationRules = [];
    }

    externalQuestionId: string;
    questionText: string;
    helpText: string;
    answerType: string;
    answerOptions: AnswerOption[];
    enabledCriteria: MatchCriteria[];
    validationRules: string[];
    answer?: T;
}

export class QuestionSection {
    questionSectionName: string;
    headerText: string;
    subHeaderText: string;
    repeatable: boolean;
    questions: Question[];
}

export class Questionnaire {
    questionSections: QuestionSection[];
}

export class QuestionnaireRoot {
    questionnaire: Questionnaire;
}

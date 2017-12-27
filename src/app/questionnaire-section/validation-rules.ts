import { ValidationErrors, AbstractControl } from '@angular/forms';
import { Validators } from '@angular/forms';

export class ValidationRule {

    private static _validationRuleMap: Map<string, ValidationRule>;
    public static get validationRulesMap() {
        if (!ValidationRule.validationRulesMap) {
            ValidationRule._validationRuleMap = new Map<string, ValidationRule>();
        }

        return ValidationRule._validationRuleMap;
    }

    public static required = new ValidationRule('REQUIRED', Validators.required);

    private constructor(private name: string, private validationFn: (control: AbstractControl) => ValidationErrors | null) {
        ValidationRule.validationRulesMap.set(name, this);
    }

    toString() {
        return this.name;
    }
}

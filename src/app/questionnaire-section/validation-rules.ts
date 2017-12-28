import { ValidationErrors, AbstractControl } from '@angular/forms';
import { Validators } from '@angular/forms';

export class ValidationRule {

    private static _validationRulesMap: Map<string, ValidationRule>;
    public static get validationRulesMap() {
        if (!ValidationRule._validationRulesMap) {
            ValidationRule._validationRulesMap = new Map<string, ValidationRule>();
        }

        return ValidationRule._validationRulesMap;
    }

    public static required = new ValidationRule('REQUIRED', Validators.required);

    private constructor(private name: string, public validationFn: (control: AbstractControl) => ValidationErrors | null) {
        ValidationRule.validationRulesMap.set(name, this);
    }

    toString() {
        return this.name;
    }
}

import { ZodProps } from "../types/ZodInputProps";
import { ValidationPassingResult } from "../types/ValidationPassingResult";

/**
 * Checks if anything needs to be checked or not.
 */
export function isZodPropsNonEmpty(props: ZodProps) {
    const zodSchema = props.ZodSchema;
    const IsValid = props.IsValid;
    const Required = props.IsRequired;

    return Boolean(zodSchema) || Boolean(IsValid) || Boolean(Required);
}

/**
 * Returns 
 */
export function doesInputPassZodProps(input: string, props: ZodProps): ValidationPassingResult {
    const zodSchema = props.ZodSchema;
    const IsValid = props.IsValid;
    const IsRequired = props.IsRequired;

    // Non-empty check
    console.log("IsRequired:",IsRequired);
    if (IsRequired) {
        const trimmed = input.trim();
        console.log("trimmed length:",trimmed.length);
        if (trimmed.length == 0) {
            return {
                success: false,
                errorMessage: IsRequired
            };
        }
    }

    console.log("zodSchema:",zodSchema);
    if (zodSchema) {
        const result = zodSchema.safeParse(input);
        if (!result.success) {
            const errorMessage = result.error.errors[0].message;
            return {
                success: false,
                errorMessage: errorMessage
            };
        }
    }

    console.log("IsValid:",IsValid);
    if (IsValid) {
        const result = IsValid(input);
        console.log("result:",result);
        if (!result.success) {
            return {
                success: false,
                errorMessage: result.errorMessage
            };
        }
    }

    return {
        success: true
    };
}
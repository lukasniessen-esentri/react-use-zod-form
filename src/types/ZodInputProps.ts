import { ZodSchema } from "zod";
import { ErrorHandler } from "./ErrorHandler";
import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { CustomValidator } from "./CustomValidator";

export interface ZodProps {
    name: string;

    ZodSchema?: ZodSchema<any>;
    HandleError?: ErrorHandler;
    IsValid?: CustomValidator;

    /**
     * This is a string and it is the error msg to be shown in case its empty.
     * We use it as Boolean(Required) to see if its specified or else if the
     * input is allowed to be empty.
     */
    IsRequired?: string;
}

export interface ZodInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'name'>, ZodProps {}

export interface ZodTextareaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'name'>, ZodProps {}

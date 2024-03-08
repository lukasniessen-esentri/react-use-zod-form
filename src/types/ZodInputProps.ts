import { ZodSchema } from "zod";
import { ErrorHandler } from "./ErrorHandler";
import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { ZodBaseInputProps } from "./ZodBaseInputProps";

/**
 *  
 * Type that extends the existing input props type
 * 
 * ---
 * 
 * schema:
 * ZodSchema that needs to pass
 * 
 * 
 * handleError:
 * Is called with errorMessage by ZodForm > ZodInput if Zod schemna fails, 
 * otherwise, if input is valid, it's called with null.
 * 
 * Therefore, this can also be used as a successIndicator: inputValid = errorMessage === null;
 * E.g. useful for indicating which validations are satisfied and which are not, like on a password you have multiple for example.
 * 
 * 
 * ---
 * 
 * We use Omit so "name" does not conflict and we make "name" mandatory then by using it in ZodProps and omitting it in ...HTMLAttr
 * 
 */

export interface ZodProps {
    ZodSchema?: ZodSchema<any>;
    HandleError?: ErrorHandler;
    name: string;
}

export interface ZodInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'name'>, ZodProps {}

export interface ZodTextareaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'name'>, ZodProps {}

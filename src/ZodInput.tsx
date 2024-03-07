import React, { InputHTMLAttributes, useState } from 'react';
import { ZodSchema } from 'zod';
import { ErrorHandler } from './ErrorHandler';
import { generateRandomString } from './utils/RandomID';


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
 */
export interface ZodInputProps extends InputHTMLAttributes<HTMLInputElement> {
  schema?: ZodSchema<any>;
  handleError?: ErrorHandler;
  name: string;
}

export const ZodInput: React.FC<ZodInputProps> = ({ schema, handleError, ...props }) => {
  
  const [name] = useState(() => props.name ? props.name : generateRandomString());

  return (
    <input
      {...props}
      name={props.name}
    />
  );

}

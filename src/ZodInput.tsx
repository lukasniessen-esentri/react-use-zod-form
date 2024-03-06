import React, { InputHTMLAttributes, useMemo } from 'react';
import { ZodSchema } from 'zod';
import { generateRandomString } from './utils/RandomID';
import { ErrorHandler } from './ErrorHandler';


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
interface ZodInputProps extends InputHTMLAttributes<HTMLInputElement> {
  schema?: ZodSchema;
  onError: ErrorHandler;
}

export const ZodInput: React.FC<ZodInputProps> = ({ schema, handleError, ...props }) => {

  // Check if props specify a name. If not, generate a random one.
  // needed for later accessing the form key value pairs data.
  // TODO
  // NOT WORKING!!!!! BREAKS I GUESS DUE TO RERENDERING
  const name = useMemo(() => props.name ? props.name : generateRandomString(), [schema, handleError, props]);

  return (
    <input
      name={name}
      {...props} 
    />
  );

}

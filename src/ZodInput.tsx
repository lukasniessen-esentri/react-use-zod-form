import React, { InputHTMLAttributes, useState } from 'react';
import { z, ZodSchema, ZodError } from 'zod';
import { generateRandomString } from './utils/RandomID';


// Define a new type that extends the existing input props type
interface ZodInputProps extends InputHTMLAttributes<HTMLInputElement> {
  schema?: ZodSchema;
}

export const ZodInput: React.FC<ZodInputProps> = ({ schema: ZodSchema, ...props }) => {

  // Check if props specify a name. If not, generate a random one.
  // needed for later accessing the form key value pairs data.
  const name = props.name ? props.name : generateRandomString();

  return (
    <input
      name={name}
      {...props} 
    />
  );

}

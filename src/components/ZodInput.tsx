import React, {  } from 'react';
import { ZodInputProps } from '../types/ZodInputProps';

export const ZodInput: React.FC<ZodInputProps> = ({ schema, handleError, ...props }) => {

  return (
    <input
      {...props}
      name={props.name}
    />
  );

}

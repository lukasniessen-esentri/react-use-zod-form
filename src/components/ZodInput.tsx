import React, {  } from 'react';
import { ZodInputProps } from '../types/ZodInputProps';

/**
 * @deprecated The should not be used
 */
export const ZodInput: React.FC<ZodInputProps> = ({ zs, handleError, ...props }) => {

  return (
    <input
      {...props}
      name={props.name}
    />
  );

}

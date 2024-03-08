import React, {  } from 'react';
import { ZodTextareaProps } from '../types/ZodInputProps';

/**
 * @deprecated The should not be used
 */
export const ZodTextarea: React.FC<ZodTextareaProps> = ({ schema, handleError, ...props }) => {

  return (
    <textarea
      {...props}
      name={props.name}
    >
    </textarea>
  );

}

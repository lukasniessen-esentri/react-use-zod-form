import React from 'react';
import { z, ZodSchema, ZodError } from 'zod';

export const ZodInput = ({ zodSchema: ZodSchema, ...rest }) => (
  <>
    <input type="text" {...rest} />
  </>
);

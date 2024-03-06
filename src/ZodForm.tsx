import React, { useState } from 'react';
import { ZodInput } from './ZodInput';
import { z, ZodSchema, ZodError } from 'zod';

export const ZodForm = ({ handleSubmit, handleError, children }) => {

    function onSubmit(event) {
        console.log("onSubmit...!!");
    
      event.preventDefault();

      console.log("event.target:",event.target);

      // { name: 'Stackoverflow', ... } 
      const formData = new FormData(event.target);
      console.log("formData:",formData);
      const entries = formData.entries();
      console.log("entries:",entries);

      const formValues = Object.fromEntries(new FormData(event.target).entries());
      console.log("formValues:",formValues);
  
      const errors = React.Children.toArray(children)
        .map((child) => {
          if (child.props.schema) {
            const schema = z.object({ [child.props.name]: child.props.schema });
            const result = schema.safeParse({ [child.props.name]: formValues[child.props.name] });
            if (!result.success) {
              return result.error.errors[0].message;
            }
          }
          return null;
        })
        .filter(Boolean);
  
      if (errors.length > 0) {
        handleError(errors);
      } else {
        handleSubmit(formValues);
      }
    };
    
    return (
        <form onSubmit={onSubmit}>
            {children}
            <input type="submit" style={{ display: 'none' }} />
        </form>
    );
  };

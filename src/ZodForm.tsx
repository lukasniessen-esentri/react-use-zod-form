import React from 'react';
import { z } from 'zod';

export const ZodForm = ({ onSubmit, children }) => {

    function handleSubmit(event) {
        event.preventDefault();

        // { name: 'Stackoverflow', ... } 
        const formValues = Object.fromEntries(new FormData(event.target).entries());
        console.log("formValues:",formValues);
    
        const childrenArray = React.Children.toArray(children);
        console.log("childrenArray:",childrenArray);
        console.log("childrenArray:",childrenArray);

        let isExistError = false;

        for (let i=0; i<childrenArray.length; i++) {
            const child = childrenArray[i];
            
            // TODO: check child type
            // TYPING

            const schema = child.props.schema;
            const onError = child.props.onError;

            console.log("schema:",schema);
            console.log("handleError:",onError);

            let errorMessage: string | null = null;

            if (schema) {
                const schema = z.object({ [child.props.name]: child.props.schema });
                const result = schema.safeParse({ [child.props.name]: formValues[child.props.name] });

                if (!result.success) {
                    isExistError = true;
                    errorMessage = result.error.errors[0].message;
                }
            }
            console.log("errorMessage:",errorMessage);

            // handle error in any case, in success case signaling the success
            if (onError) {
                onError(errorMessage);
            }
        }

        console.log("isExistError:",isExistError);
        if (!isExistError) {
            onSubmit(formValues);
        }
    };
    
    return (
        <form onSubmit={handleSubmit}>
            {children}
            <input type="submit" style={{ display: 'none' }} />
        </form>
    );
  };

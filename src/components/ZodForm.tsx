
import React, { FC, FormEvent } from 'react';
import { ZodProps } from '../types/ZodInputProps';
import { FormValues } from '../types/FormValues';
import { ZodFormProps } from '../types/ZodFormProps';
import { isElementZodBaseField } from '../utils/ZodBaseFieldCheck';

/**
 * ALL children with input must have "name" property set to function properly
 */
export const ZodForm: FC<ZodFormProps> = (props) => {

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        // { name: 'Stackoverflow', ... } 
        const formValues: FormValues = Object.fromEntries(new FormData(event.currentTarget).entries());
        const children = React.Children.toArray(props.children);

        // helper boolean to check if all fields pass or not
        let isExistError = false;

        for (let i=0; i<children.length; i++) {
            const child = children[i];
            
            // Make sure its a valid element
            if (!React.isValidElement(child)) {
                continue;
            }

            // We only check those elements that have "zs" defined on them
            const props = child.props as ZodProps;
            const zodSchema = props.zs;

            if (zodSchema) {
                const handleError = props.handleError;
                const name = props.name;

                //console.log("> schema:",schema);
                //console.log("> handleError:",handleError);
                //console.log("> name:",name);

                let errorMessage: string | null = null;
                const result = zodSchema.safeParse(formValues[name]);

                if (!result.success) {
                    isExistError = true;
                    errorMessage = result.error.errors[0].message;
                }

                // handle error in any case, in success case signaling the success
                if (handleError) {
                    handleError(errorMessage);
                }
            }
        }

        if (!isExistError) {
            props.onSubmit(formValues);
        }
    };
    
    return (
        <form onSubmit={handleSubmit}>
            {props.children}
            <input type="submit" style={{ display: 'none' }} />
        </form>
    );
  };

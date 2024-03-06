
import React, { FC, FormEvent } from 'react';
import { ZodInput, ZodInputProps } from './ZodInput';

type FormValues = {
    [k: string]: FormDataEntryValue;
};

interface ZodFormProps {
    onSubmit: (formValues: FormValues) => void;
    children: React.ReactNode;
}

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
            
            // We only check ZodInput elements
            if (React.isValidElement(child) && child.type === ZodInput) {
                const props = child.props as ZodInputProps;

                const schema = props.schema;
                const handleError = props.handleError;
                const name = props.name;

                //console.log("> schema:",schema);
                //console.log("> handleError:",handleError);
                //console.log("> name:",name);

                let errorMessage: string | null = null;

                if (schema) {
                    const result = schema.safeParse(formValues[name]);

                    if (!result.success) {
                        isExistError = true;
                        errorMessage = result.error.errors[0].message;
                    }
                }

                // handle error in any case, in success case signaling the success
                if (handleError) {
                    handleError(errorMessage);
                }
            }
        }

        console.log("isExistError:",isExistError);
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

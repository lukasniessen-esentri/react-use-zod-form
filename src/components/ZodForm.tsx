
import React, { FC, FormEvent } from 'react';
import { ZodProps } from '../types/ZodInputProps';
import { FormValues } from '../types/FormValues';
import { ZodFormProps } from '../types/ZodFormProps';
import { doesInputPassZodProps, isZodPropsNonEmpty } from '../utils/ZodPropsHelper';

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

            const props = child.props as ZodProps;
            
            if (isZodPropsNonEmpty(props)) {
                const handleError = props.HandleError;
                const name = props.name;

                if (!name) {
                    console.warn("Name required on ZodForm fields! Please specify name='...'. See docs.")
                }

                let errorMessage: string | null = null;
                const input = formValues[name] as string;

                const result = doesInputPassZodProps(input, props);

                console.log(">>> result:",result);
                
                if (!result.success) {
                    isExistError = true;
                    errorMessage = result.errorMessage!;
                }

                // handle error in any case, in success case signaling the success
                // by passing null
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

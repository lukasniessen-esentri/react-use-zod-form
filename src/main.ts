import { ZodSchema } from 'zod';
import { patchProperties } from './utils/PropertyPatcher';
import { ErrorHandler } from './types/ErrorHandler';
import { CustomValidator } from './types/CustomValidator';

declare module 'react' {
  interface ExtendedProps {
    ZodSchema?: ZodSchema;
    HandleError?: ErrorHandler;
    IsRequired?: string;
    IsValid?: CustomValidator;
  }

  interface ExtendedInput extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >, ExtendedProps {}

  interface ExtendedTextArea extends React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >, ExtendedProps {}

  interface InputProps extends ExtendedProps {}

  namespace JSX {
    interface IntrinsicElements {
      input: ExtendedInput;
      textarea: ExtendedTextArea;
    }
  }
}

declare global {
  namespace JSX {
    interface IntrinsicAttributes {
      ZodSchema?: ZodSchema;
      HandleError?: ErrorHandler;
    }
  }
}

export { ZodForm as ZodForm } from './components/ZodForm';

patchProperties();
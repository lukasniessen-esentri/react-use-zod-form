import { ZodSchema } from 'zod';
import { patchProperties } from './utils/PropertyPatcher';
import { ErrorHandler } from './types/ErrorHandler';

declare module 'react' {
  interface ExtendedProps {
    zs?: ZodSchema;
    handleError?: ErrorHandler;
  }

  interface ExtendedInput extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >, ExtendedProps {}

  interface ExtendedTextArea extends React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >, ExtendedProps {}

  namespace JSX {
    interface IntrinsicElements {
      input: ExtendedInput;
      textarea: ExtendedTextArea;
    }
  }
}

export { ZodInput } from './components/ZodInput';
export { ZodForm as ZodForm } from './components/ZodForm';
export { ZodTextarea } from './components/ZodTextarea';

patchProperties();
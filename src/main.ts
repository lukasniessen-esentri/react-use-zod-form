import { ZodSchema } from 'zod';
import { patchProperties } from './utils/PropertyPatcher';

declare module 'react' {
  interface ExtendedInput extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
    zs?: ZodSchema;
  }

  namespace JSX {
    interface IntrinsicElements {
      input: ExtendedInput;
    }
  }
}

export { ZodInput } from './components/ZodInput';
export { ZodForm } from './components/ZodForm';
export { ZodTextarea } from './components/ZodTextarea';

patchProperties();
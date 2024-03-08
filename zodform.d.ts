import { AriaAttributes } from "react";
import { ZodSchema } from "zod";

declare module 'react' {
  interface ExtendedButtonInput extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
    zs?: ZodSchema;
  }

  namespace JSX {
    interface IntrinsicElements {
      input: ExtendedButtonInput;
    }
  }
}

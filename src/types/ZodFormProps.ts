import { FormValues } from "./FormValues";

export interface ZodFormProps {
    onSubmit: (formValues: FormValues) => void;
    children: React.ReactNode;
}
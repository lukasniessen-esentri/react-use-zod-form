import { ZodInput } from "../components/ZodInput";
import { ZodTextarea } from "../components/ZodTextarea";

/**
 * "ZodBaseField" means: 
 * Something input related we want to check.
 */
export function isElementZodBaseField(element: React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>>) {
    
    return (
        element instanceof HTMLInputElement ||
        element instanceof HTMLTextAreaElement
    );

    /*
    const t = element.type;
    return (
        t === instanceof ||
        t === ZodTextarea
    );
    */
}
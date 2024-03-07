import { ZodInput } from "../components/ZodInput";
import { ZodTextarea } from "../components/ZodTextarea";

export function isElementZodBaseField(element: React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>>) {
    const t = element.type;
    return (
        t === ZodInput ||
        t === ZodTextarea
    );
}
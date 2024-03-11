import { ValidationPassingResult } from "./ValidationPassingResult";

export type CustomValidator = (input: string) => ValidationPassingResult;
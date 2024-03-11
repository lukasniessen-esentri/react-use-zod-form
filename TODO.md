# TODO URGENT

- Show use cases on website which show the working code with the code below, 
    and it shows THIS code compared to use-form-hook with zod and shows
    how much less code you need here. Show that for multiple important use cases, such 
    as register, login, password change, ... and all that with vanilla, MUI, chakra, ...

- Add patching for things like "Required", "IsValid" (for function that will validate), other things

- Maybe rename the library then?

- JS compatitble and JS docs

- Double valid import src ?? fix

- If TS configs are needed, add info about that in docs!!

- Allow non-zod validation

- Rename IsValid!!

- Password form example add, with (list-passed-not-passed-tests)

- Docs gut machen

- Allow schema on form so you can also have schema for multiple inputs

- Make sure it can be used for UI libraries as well, put example in docs !!!

- Submit button can be added

- Other elements can be added as well

- Add optional schemaArray param, for example for a password you want multiple with each having a specific error msg

- "ALL children with input should have "name" property set to function properly" --> Add warning

- "Warning: React does not recognize the `ZodSchema` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `zodschema` instead. If you accidentally passed it from a parent component, remove it from the DOM element."

- MAYBE: Allow simpleErrorHandling that will just assign the error msg to a string var and useState internally

# TODO OTHER

- Check rerendering logic. Must be perfect

- Make sure super performant and compare to other libraries

- Better types, better project structure

---

# Probably not

(- Allow not specifying names! Random does not work yet)

- These:
    "ZodSchema",
    "HandleError",
    "Required",
    "IsValid"
    copy pasted in multiple places, repetitive. Avoid!
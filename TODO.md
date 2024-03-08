# TODO URGENT

- Add alternative way of doing it for UI libraries:
<ZI validation="..." name="...">
    <YourInputElement ... />
</ZI>
Or name must be in YourInputEl.
Similar thing for form. <ZF> ... </ZF> maybe.

OR consider this:
inputs must have an ID. That ID must be used in a zodvalidator 

- Allow non-zod validation

- Password form example add, with (list-passed-not-passed-tests)

- Docs gut machen

- Allow schema on form so you can also have schema for multiple inputs

- Make sure it can be used for UI libraries as well, put example in docs !!!

- Submit button can be added

- Other elements can be added as well

- Add optional schemaArray param, for example for a password you want multiple with each having a specific error msg

- Even less boilerplate

- "ALL children with input should have "name" property set to function properly" --> Add warning

# TODO OTHER

- Check rerendering logic. Must be perfect

- Make sure super performant and compare to other libraries

- Better types, better project structure

---

# Probably not

(- Allow not specifying names! Random does not work yet)
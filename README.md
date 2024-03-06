# Form validation with Zod: ZERO boilerplate code.

Unfinished test version.

Installation:
`npm i @lukasniessenesentri/react-zod-form`

Working example:

```
import { ZodForm, ZodInput } from 'react-zod-form';
import './App.css'
import z from "zod";
import { useState } from 'react';

function App() {

  const mailSchema = z.string().email("Invalid email");
  const min10 = z.string().min(10, "Too short");

  const [errorName, setErrorName] = useState("");
  const [errorMail, setErrorMail] = useState("");
  const [success, setSuccess] = useState("");

  function onErrorMail(msg: string | null) {
    if (msg) {
      setErrorMail(msg);
    } else {
      setErrorMail("");
    }
  }

  function onErrorName(msg: string | null) {
    if (msg) {
      setErrorName(msg);
    } else {
      setErrorName("");
    }
  }

  function handleSubmit(formData: any) {
    setSuccess(JSON.stringify(formData));
    console.log(formData);
    
  }

  return (
    <>
      <ZodForm onSubmit={handleSubmit}>

        <ZodInput 
          name="name1" 
          schema={min10} 
          placeholder="Name..."
          handleError={onErrorName}
        />
        <p>{errorName}</p>

        <ZodInput 
          name="mail2" 
          schema={mailSchema}
          placeholder="Email..."
          handleError={onErrorMail}
        />
        <p>{errorMail}</p>

        <input 
          name="sth3" 
          placeholder="Cool..."
        />

        <ZodInput 
          name="sth4" 
          placeholder="Something..."
        />

      </ZodForm>

      {success && (
        <>
          <h1>Passed:</h1>
          <p>
            {success}
          </p>
        </>
      )}
    </>
  )
}

export default App
```
# Form validation with Zod: ZERO boilerplate code.

Unfinished test version.

Installation:
`npm i @lukasniessenesentri/react-zod-form`

Working example:

```
import { ZodForm, ZodInput, ZodTextarea } from 'react-zod-form';
import './App.css'
import z from "zod";
import { useState } from 'react';

function App() {

  const mailSchema = z.string().email("Invalid email");
  const min10 = z.string().min(10, "Too short");
  const min20 = z.string().min(20, "Too short bro");

  const [errorName, setErrorName] = useState("");
  const [errorMail, setErrorMail] = useState("");
  const [errorSuperLong, setErrorSuperLong] = useState("");
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

  function onErrorLong(msg: string | null) {
    if (msg) {
      setErrorSuperLong(msg);
    } else {
      setErrorSuperLong("");
    }
  }

  function handleSubmit(formData: any) {
    console.log("SUBMIT SUCCESSFUL");
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

        <ZodTextarea 
          name="long" 
          schema={min20}
          placeholder="Longer..."
          handleError={onErrorLong}
        />
        <p>{errorSuperLong}</p>

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
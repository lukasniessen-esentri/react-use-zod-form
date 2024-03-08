# Form validation with Zod: ZERO boilerplate code.

Unfinished test version.

Installation:
`npm i @lukasniessenesentri/react-zod-form`

Uses monkey patching for defining attributes on all form related elements
and thereby allows writing form validaiton with zero-boilerplate code.

Working example:

```
import React, { useState } from 'react';
import { ZodForm } from 'react-zod-form';
import { z } from 'zod';
import { Input as MuiInput } from '@mui/material';
import { Input as ChakraInput } from '@chakra-ui/react'

export const VanillaForm = () => {

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

                <MuiInput 
                    name="name1" 
                    placeholder="Name..."
                    ZodSchema={min10} 
                    HandleError={onErrorName}
                />
                <p>{errorName}</p>

                <ChakraInput 
                    name="name99" 
                    placeholder="chakra name..."
                    ZodSchema={min10} 
                    HandleError={onErrorName}
                />
                <p>{errorName}</p>

                <input 
                    name="mail2" 
                    placeholder="Email bruva..."
                    ZodSchema={mailSchema}
                    HandleError={onErrorMail}
                />
                <p>{errorMail}</p>

                <textarea 
                    name="long" 
                    placeholder="Longer..."
                    ZodSchema={min20}
                    HandleError={onErrorLong}
                />
                <p>{errorSuperLong}</p>

                <input 
                    name="rnd4" 
                    placeholder="Random things man..."
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
    );
};
```
import React, { useState } from 'react'

export const useForm = ({ defaultFormValues }) => {
    console.log("defaultFormValues",defaultFormValues);
    const [formValues,setFormValues] = useState(defaultFormValues);

    const onInputChange = (e)=> {
       const { validateInput } = formValues[e.target.name];
    setFormValues((prevFormValues) => {
      return {  ...prevFormValues, [e.target.name]: {...prevFormValues[e.target.name],
          value: e.target.value,error: validateInput ? validateInput(e.target.value) : "",},
      };
    });
  };

  const checkButtonDisable = (values) => {
    for(const [key,objvalue] of Object.entries(values)){
      if(objvalue.required &&(objvalue.error || !objvalue.value)){
        return true
      }
    }
  };

  const clearForm = (obj)=>{
    setFormValues(obj)
  };
  return {
    formValues,
    setFormValues,
    onInputChange,
    clearForm,
    checkButtonDisable
  }
}

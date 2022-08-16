import { useState } from "react";
export const useForm = (initialForm = {}) => {
     
 // const [formState, setFormState] = useState({
 //   username: '',
 //   email: '',
 //   password: '',
 // });
 
 //const {username, email, password} = formState;
 
 const [formState, setFormState] = useState(initialForm);

  const onInputChange=({target})=>{
    const {value, name} = target;
    setFormState({
      ...formState,
      [ name ]: value
    });
  }
  const onFormReset=()=>{
    setFormState(initialForm);
  }
  return {
    ...formState,
      formState,
      onInputChange,
      onFormReset,
   }  
}

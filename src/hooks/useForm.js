// write your custom hook here to control your checkout form
import  { useState } from "react";

export const useForm = initialValue => {
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [values, setValues] = useStorage(initialValue);
  
    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setShowSuccessMessage(true);
      };
    return [values, showSuccessMessage, handleChanges, handleSubmit];
  }
  export const useStorage = (initValue) => {
    const [storedValue, setValue] = useLocalStorage('showSuccess', initValue)
    return [storedValue, setValue] 
  }
  export const useLocalStorage = (key, initialvalue) => {
    const [storedValue, setStoredValue] = useState(() => {
        const item = localStorage.getItem(key);
        // return item ? JSON.parse(item) : initialvalue;
        if(localStorage.getItem(key)){
            return setValue(JSON.parse(localStorage.getItem(key)))
        }
        localStorage.setItem(key, JSON.stringify(initialvalue))
        return initialvalue;
    });
  
    const setValue = (value) => {
        setStoredValue(value);
        localStorage.setItem(key, JSON.stringify(value));
    }
    
    return [storedValue, setValue];
}
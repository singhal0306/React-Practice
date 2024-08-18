import { useState } from "react";

const useInput = (validateValue) => {
    const [value, setValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = validateValue(value);
    const hasError = !valueIsValid && isTouched;
    const valueChangeHandler = (event) => {
        setValue(event.target.value);
    }
    const valueBlurHandler = () => {
        setIsTouched(true)
    }
    const reset = () => {
        setValue('');
        setIsTouched(false)
    }

    return {
        value,
        isValid: valueIsValid,
        hasError,
        valueChangeHandler,
        valueBlurHandler,
        reset
    }
}
export default useInput;
import useInput from '../hooks/use-input';

export default function SimpleInput(props) {
    let formIsValid = false;

    const {
        value: name,
        isValid: nameisValid,
        hasError,
        valueChangeHandler: nameHandler,
        valueBlurHandler: nameBlurHandlder,
        reset: resetName
    } = useInput(value => value.trim() !== '')

    if (nameisValid) {
        formIsValid = true;
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if (!nameisValid) return;
        resetName()
    }

    const style = hasError ?
        'form-control invalid' : 'form-control';
    return (
        <form onSubmit={submitHandler}>
            <div className={style}>
                <label htmlFor="name">Your Name</label>
                <input type="text" id='name' value={name} onBlur={nameBlurHandlder} onChange={nameHandler} />
                {hasError && <p className='error-text'>Enter a valid name</p>}
            </div>
            <div className='form-actions'>
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    )
}

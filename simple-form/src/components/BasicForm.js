import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  let formIsValid = false;
  const {
    value: fname,
    isValid: fnameIsValid,
    hasError: fnameHasError,
    valueChangeHandler: fnameHandler,
    valueBlurHandler: fnameBlurHandler,
    reset: resetFName
  } = useInput(value => value.trim() !== '');

  const {
    value: lname,
    isValid: lnameIsValid,
    hasError: lnameHasError,
    valueChangeHandler: lnameHandler,
    valueBlurHandler: lnameBlurHandler,
    reset: resetLName
  } = useInput(value => value.trim() !== '');

  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailHandler,
    valueBlurHandler: emailBlurHandler,
    reset: resetEmail
  } = useInput(value => value.includes('@'));

  if (fnameIsValid && lnameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) return;

    console.log(fname, lname, email)

    resetLName();
    resetFName();
    resetEmail();
  }

  const fnamestyle = fnameHasError ?
    'form-control invalid' : 'form-control';

  const lnamestyle = lnameHasError ?
    'form-control invalid' : 'form-control';

  const emailstyle = emailHasError ?
    'form-control invalid' : 'form-control';
  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className={fnamestyle}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' value={fname} onBlur={fnameBlurHandler}
            onChange={fnameHandler} />
          {fnameHasError && <p className='error-text'>Enter a valid name</p>}
        </div>
        <div className={lnamestyle}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' value={lname} onBlur={lnameBlurHandler} onChange={lnameHandler} />
          {lnameHasError && <p className='error-text'>Enter a valid name</p>}
        </div>
      </div>
      <div className={emailstyle}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' onChange={emailHandler} onBlur={emailBlurHandler} value={email} />
        {emailHasError && <p className='error-text'>Enter a valid Email</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div> 
    </form>
  );
};

export default BasicForm;

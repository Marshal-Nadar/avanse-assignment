import { useState } from 'react';
import './formInputs.css';

const FormInputs = props => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = e => {
    setFocused(true);
  };

  return (
    <div className='formInput'>
      <label className='form-label'>{label}</label>
      <input
        className='form-inputs'
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === 'confirmPassword' && setFocused(true)
        }
        focused={focused.toString()}
      />
      <span className='error-msg'>{errorMessage}</span>
    </div>
  );
};

export default FormInputs;

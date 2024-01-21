import { useState } from 'react';
import './formInputs.css';

const FormInputs = props => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;
  // console.log('onChange', inputProps);

  const handleFocus = e => {
    // console.log('Trigger');
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

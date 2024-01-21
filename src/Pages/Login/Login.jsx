import React, { useEffect } from 'react';
import { useState } from 'react';
import FormInputs from '../../components/Inputs/FormInputs';
import '../../App.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: '',
    password: null,
    confirmpassword: '',
  });

  const [disable, setDisable] = useState(false);

  const inputs = [
    {
      id: 1,
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      errorMessage: `It should be a valid email address!`,
      label: 'Email',
      required: true,
    },

    {
      id: 2,
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      errorMessage: `Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!`,
      label: 'Password',
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 3,
      name: 'confirmpassword',
      type: 'password',
      placeholder: 'Confirm Password',
      errorMessage: `Passwords don't match!`,
      label: 'Confirm Password',
      pattern: values.password,
      required: true,
    },
  ];

  function validateEmail(e) {
    console.log(e);
    var re = /\S+@\S+\.\S+/;
    console.log('re.test(e)', re.test(e));
    // setEmail(re.test(e.target.value));
    return re.test(e);
  }

  const onChange = e => {
    // if (e.target.value === '' || validateEmail(e.target.value)) {
    // }
    // console.log('fd', { ...values, [e.target.name]: e.target.value });
    // setValues({ ...values, [e.target.name]: e.target.value });
    setValues(values => ({
      ...values,
      [e.target.name]: e.target.value,
    }));

    // console.log('mxmxc', values.password === values.confirmpassword);
  };
  console.log(values);

  // useEffect(() => {
  //   // console.log('Keyword:', values.confirmpassword);
  //   // console.log('Search: ', values.password);
  //   if (values.password === values.confirmpassword) {
  //     setDisable(true);
  //   }
  // }, [values.password, values.confirmpassword]);

  const handleSubmit = e => {
    console.log('values', values.email);
    const checkEmail = validateEmail(values.email);
    const passCheck = values.password === values.confirmpassword;
    console.log('checkEmail', checkEmail, 'checkPassword', passCheck);

    if (checkEmail && passCheck) {
      e.preventDefault();
      navigate('/home');
    }
    // console.log(values.email);
  };

  return (
    <div className='login-main'>
      <div className='form'>
        <h1 className='login-title'>Welcome to Avanse</h1>
        <div>
          {inputs.map(input => {
            // console.log(values[input.name]);
            return (
              <FormInputs
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            );
          })}
        </div>
        <button
          className={`btn-login`}
          onClick={e => {
            handleSubmit(e);
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Login;

import React from "react";
import { useState } from "react";
import FormInputs from "../../components/Inputs/FormInputs";
import "../../App.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
    confirmpassword: "",
  });

  const inputs = [
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: `It should be a valid email address!`,
      label: "Email",
      required: true,
    },

    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage: `Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!`,
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: "confirmpassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: `Passwords don't match!`,
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  console.log(values);

  const handleSubmit = (e) => {
    console.log(values);
    e.preventDefault();
    navigate("/home");
  };

  return (
    <div className="login-main">
      <div className="form">
        <h1>Login</h1>
        {inputs.map((input) => {
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
        <button
          onClick={(e) => {
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

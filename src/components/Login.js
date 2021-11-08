import React, { useState } from "react";

const Login = (props) => {
  const [login, setLogin] = useState({});
  const changeHandler = (event) =>
    setLogin((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.login({ ...login });
      }}
    >
      <label htmlFor="name">
        Name:
        <input
          type="password"
          name="name"
          id="name"
          value={login.name}
          onChange={changeHandler}
        />
      </label>
      Pass:
      <label htmlFor="pass">
        <input
          type="password"
          name="pass"
          id="pass"
          value={login.pass}
          onChange={changeHandler}
        />
      </label>
      <button>Login</button>
    </form>
  );
};

export default Login;

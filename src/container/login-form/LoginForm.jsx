import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { userLogin } from "../../store/login/actions";

export const LoginForm = ({ isLoading }) => {

  const [form, setForm] = useState({
    username: "",
    password: "",
    email2:"email2"
  });
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
      const target = event.target;
      setForm({
        ...form,
        [target.name]: target.value,
      });
    }

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      dispatch(userLogin(form));
    },
    [dispatch, form]
  );

  return (
    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
      <div className="card">
        <input
          id='username'
          name="username"
          className="form-control email"
          placeholder="username"
          onChange={handleInputChange}
          value={form.username}
        />
      </div>
      <div className="card">
        <input
          name="email"
          className="form-control email d-none"
          placeholder="email2"
          onChange={handleInputChange}
          value={form.email2}
        />
      </div>
      <div className="card">
        <input
          id="password"
          name="password"
          className="form-control"
          placeholder="Password"
          type="password"
          onChange={handleInputChange}
          value={form.password}
        />
      </div>
      <div className="card">
        <button
          id="buttonSubmit"
          className="btn btn-primary"
          color="primary"
          disabled={isLoading}
          type="submit"
        >
          {isLoading ? "Loading..." : "Submit"}
        </button>
      </div>
    </form>
  );
};

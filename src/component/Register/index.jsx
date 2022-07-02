import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import ReactSelect from "react-select";
import { useState } from "react";
import makeAnimated from "react-select/animated";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data)
    reset();
  };

  console.log(errors);


  const options = [
    { value: 1, label: "Male" },
    { value: 2, label: "Female" },
  ];

  const hobbies = [
    { value: 1, label: "Football" },
    { value: 2, label: "BasketBall" },
    { value: 3, label: "Reading" },
    { value: 4, label: "Watching Movies" },
    { value: 5, label: "Gym" },
  ];

  return (
    <Form className="w-50 m-auto" onSubmit={handleSubmit(onSubmit)}>
      <div className="d-flex justify-content-center mt-5 mb-3">
        <h2>Create New Account</h2>
      </div>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address : </Form.Label>
        <Form.Control
          type="email"
          placeholder="email"
          {...register("email", {
            required: true,
            pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
          })}
        />

        {errors.email && errors.email.type === "required" && (
          <p className="text-danger">Email is Required</p>
        )}
        {errors.email && errors.email.type === "pattern" && (
          <p className="text-danger">Error in Pattern</p>
        )}

        <Form.Text className="text-muted">
          {/* We'll never share your email with anyone else. */}
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password : </Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          {...register("password", {
            required: true,
            pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
          })}
        />

        {errors.password && errors.password.type === "required" && (
          <p className="text-danger">Email is Required</p>
        )}
        {errors.password && errors.password.type === "pattern" && (
          <p className="text-danger">Error in Pattern</p>
        )}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirm Password :</Form.Label>
        <Form.Control
          type="password"
          placeholder="Confirm Password"
          {...register("Confirm", {
            required: true,
            validate: (val) => {
              if (watch("password") != val) {
                return "your password do not match";
              }
            },
          })}
        />

        {errors.Confirm && errors.Confirm.type === "required" && (
          <p className="text-danger">Email is Required</p>
        )}
        {errors.Confirm && errors.Confirm.type === "validate" && (
          <p className="text-danger">Password Not Match</p>
        )}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Gender : </Form.Label>
        <ReactSelect options={options}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Hobbies : </Form.Label>
        <ReactSelect options={hobbies} isMulti />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Register;

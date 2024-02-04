//Misc imports
import React from "react";
import { Button, Col, FormFeedback, Input, Row } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { setCurrUser} from "../store";

const LoginScreen = ({ toggleTab }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const defaultValues = {
    email: "",
    password: "",
  };

  //React Hook form for Validation and handlilng form data
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

      const onSubmit = (data) => {
        fetch(`http://localhost:5000/users/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => response.json())
      .then((users) => {
        // Find user by email
        const userByEmail = users.find((user) => user.email === data.email);
        // Password Validations to verify the user
        if (userByEmail && userByEmail.password === data.password) {
          dispatch(setCurrUser("true"));
          localStorage.setItem("currUser", "true");
          navigate("products");
        } else {
          // Handle cases where email, id, or password is not found or does not match
          if (!userByEmail) {
            toast.error("Email not found");
          }
          if (userByEmail && userByEmail.password !== data.password) {
            toast.error("Incorrect password");
          }
        }
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .catch((error) => toast.error(error.message));
  };
  return (
    <div className="border rounded p-4 shadow-sm">
      <h2 className="mx-4 mb-4">Login</h2>
      <Row className="m-3">
        <Col>
          <Controller
            name="email"
            control={control}
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Please enter a valid email !",
              },
            }}
            render={({ field }) => (
              <Input
                placeholder="Enter email"
                invalid={errors.email && true}
                {...field}
              />
            )}
          />
          {errors && errors.email && (
            <small className="text-danger">{errors.email.message}</small>
          )}
        </Col>
      </Row>
      <Row className="m-3">
        <Col>
          <Controller
            id="password"
            name="password"
            rules={{
              required: "Please enter your password",
            }}
            control={control}
            render={({ field }) => (
              <Input
                type="password"
                placeholder="Enter Password"
                {...field}
                invalid={errors.password &&  true}
              ></Input>
            )}
          />
          {errors.password ? (
            <FormFeedback> {errors.password.message} </FormFeedback>
          ) : null}
        </Col>
      </Row>
      <Row className="m-3">
        <Col>
          <Button color="link" className="p-0" outline>
            <small onClick={() => toggleTab("2")} className="text-primary">
              New User? Create an Account
            </small>
          </Button>
        </Col>
        <Col>
          <Button
            color="primary"
            className="px-3"
            style={{ width: "100%", borderRadius: "500px" }}
            onClick={handleSubmit(onSubmit)}
          >
            Login
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default LoginScreen;

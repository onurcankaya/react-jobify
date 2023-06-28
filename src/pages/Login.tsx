import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { toast } from "react-toastify";

import { Button, Link, Logo, FormRow } from "../components";

import { useAppDispatch, useAppSelector } from "../features/hooks";

import { loginUser, registerUser } from "../features/user/userSlice";

type UserValues = {
  name: string;
  email: string;
  password: string;
  isMember: boolean;
};

const initialUserValues = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

export function Login() {
  const [userValues, setUserValues] = useState<UserValues>(initialUserValues);

  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserValues({ ...userValues, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    const { name, email, password, isMember } = userValues;

    e.preventDefault();

    if (!email || !password || (!isMember && !name)) {
      toast.error("Please fill out all fields!");
      return;
    }

    if (isMember) {
      dispatch(loginUser({ email, password }));
    } else {
      dispatch(registerUser({ name, email, password }));
    }
  };

  const toggleMember = () => {
    setUserValues({ ...userValues, isMember: !userValues.isMember });
  };

  const { name, email, password, isMember } = userValues;

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Logo />
        <Title>{isMember ? "Login" : "Register"}</Title>
        {!isMember && (
          <FormRow
            type="name"
            label="name"
            name="name"
            value={name}
            onChange={handleInputChange}
          />
        )}
        <FormRow
          type="email"
          label="email"
          name="email"
          value={email}
          onChange={handleInputChange}
        />
        <FormRow
          type="password"
          label="password"
          name="password"
          value={password}
          onChange={handleInputChange}
        />
        <Button type="submit">{isMember ? "Log in" : "Register"}</Button>
        <Description>
          {isMember ? "Not a member?" : "Already a member?"}
          <Link type="button" onClick={toggleMember}>
            {isMember ? "Register" : "Log in"}
          </Link>
        </Description>
      </Form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Form = styled.form`
  width: var(--fluid-width);
  max-width: 400px;
  background: var(--white);
  padding: 2rem 2.5rem;
  margin: 3rem auto;
  transition: var(--transition);
  border-top: 5px solid var(--primary-500);
  border-radius: var(--borderRadius);
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    width: 100%;
    margin-top: 1rem;
  }
`;

const Title = styled.h3`
  margin: 1.5rem 0;
`;

const Description = styled.div`
  margin: 1rem 0 0 0;
  text-align: center;
  button {
    width: auto;
    margin: 0;
  }
`;

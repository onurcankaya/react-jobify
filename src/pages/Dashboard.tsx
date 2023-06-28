import { useEffect } from "react";
import { useNavigate } from "react-router";

import { Button } from "../components";

import { useAppDispatch, useAppSelector } from "../features/hooks";
import { logoutUser } from "../features/user/userSlice";

export function Dashboard() {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  });

  const logout = () => {
    dispatch(logoutUser());
  };

  return (
    <div>
      Dashboard
      <Button onClick={logout}>Log out</Button>
    </div>
  );
}

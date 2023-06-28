import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast, ToastContent } from "react-toastify";

import {
  addItemToLocalStorage,
  getItemFromLocalStorage,
  customFetch,
  removeItemFromLocalStorage,
} from "../../utils";

import {
  User,
  RegisterUserPayload,
  LoginUserPayload,
  UserResponse,
  ErrorResponse,
} from "./types";

interface UserState {
  isLoading: boolean;
  user: User | null;
}

const initialState: UserState = {
  isLoading: false,
  user: getItemFromLocalStorage("user"),
};

export const registerUser = createAsyncThunk<UserResponse, RegisterUserPayload>(
  "user/registerUser",
  async (user, thunkAPI) => {
    try {
      const response = await customFetch.post("/auth/register", user);
      return response.data;
    } catch (error) {
      const typedError = error as ErrorResponse;
      return thunkAPI.rejectWithValue(typedError.response.data.msg);
    }
  }
);

export const loginUser = createAsyncThunk<UserResponse, LoginUserPayload>(
  "user/loginUser",
  async (user, thunkAPI) => {
    try {
      const response = await customFetch.post("/auth/login", user);
      return response.data;
    } catch (error) {
      const typedError = error as ErrorResponse;
      return thunkAPI.rejectWithValue(typedError.response.data.msg);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.user = null;
      removeItemFromLocalStorage("user");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(registerUser.fulfilled, (state, action) => {
      const { user } = action.payload;
      state.isLoading = false;
      state.user = user;
      addItemToLocalStorage("user", user);
      toast.success(`Hello ${user.name}!`);
    });

    builder.addCase(registerUser.rejected, (state, action) => {
      state.isLoading = false;
      toast.error(action.payload as ToastContent);
    });

    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(loginUser.fulfilled, (state, action) => {
      const { user } = action.payload;
      state.isLoading = false;
      state.user = user;
      addItemToLocalStorage("user", user);
      toast.success(`Welcome back ${user.name}!`);
    });

    builder.addCase(loginUser.rejected, (state, action) => {
      state.isLoading = false;
      toast.error(action.payload as ToastContent);
    });
  },
});

export const { logoutUser } = userSlice.actions;
export const userReducer = userSlice.reducer;

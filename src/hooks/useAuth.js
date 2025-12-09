// hooks/useAuth.js
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import client from "../services/client";
import {
  logInStart,
  logInSuccess,
  logInFailure,
  setAdminFromToken,
  clearAdminAuth,
} from "../redux/AdminSlice";

export const useAuth = () => {
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.admin.currentUser);
  const loading = useSelector((state) => state.admin.loading);
  const error = useSelector((state) => state.admin.error);
  const isLoggedIn = !!currentUser;

  const login = useCallback(
    async (email, password) => {
      dispatch(logInStart());
      try {
        const res = await client.post("/auth/users/login", {
          email,
          password,
        });

        const user = res.data;
        dispatch(logInSuccess(user));
        return user;
      } catch (err) {
        const message =
          err?.response?.data?.message ||
        dispatch(logInFailure(message));
        throw err;
      }
    },
    [dispatch]
  );

  const refreshSession = useCallback(async () => {
    try {
      const res = await client.get("/auth/users/profile");
      const profile = res?.data?.user ?? res?.data ?? null;
      if (profile) {
        dispatch(setAdminFromToken(profile));
      } else {
        dispatch(clearAdminAuth());
      }
    } catch {
      dispatch(clearAdminAuth());
    }
  }, [dispatch]);

  return {
    currentUser,
    isLoggedIn,
    loading,
    error,
    login,
    refreshSession,
  };
};

import { useState } from "react";
import {
  signUp,
  signIn,
  signOutf,
  continueWithGoogle,
  resetPassword,
} from "../db/sign";

export const SignInHook = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submit = async () => {
    if (!email) {
      setError("Email must be provided");
      return;
    }

    if (!password) {
      setError("Password must be provided");
      return;
    }

    setError("");

    const r = await signIn(email, password);
    if (r.err) {
      setError(r.err);
      return;
    }

    return true;
  };

  return { email, password, error, setEmail, setPassword, submit };
};

export const SignUpHook = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [error, setError] = useState("");

  const submit = async () => {
    if (!email) {
      setError("Email must be provided");
      return;
    }

    if (!username) {
      setError("Username must be provided");
      return;
    }

    if (!password) {
      setError("Password must be provided");
      return;
    }

    if (cpassword !== password) {
      setError("Password not match!");
      return;
    }

    setError("");

    const r = await signUp(email, password, username);
    if (r.err) {
      setError(r.err);
      return;
    }

    return true;
  };

  return {
    email,
    username,
    password,
    cpassword,
    error,
    setEmail,
    setUsername,
    setPassword,
    setCPassword,
    submit,
  };
};

export const SignOut = () => signOutf();

export const ContinueWithGoogle = () => {
  const [error, setError] = useState("");

  async function continueWithGoogleClick() {
    const r = await continueWithGoogle();
    if (r.user) {
      return true;
    }
    return false;
  }

  return { error, continueWithGoogleClick };
};

export const ResetPassword = () => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [succes, setSuccess] = useState("");

  const submit = async () => {
    if (!email) {
      setError("Email must be provided");
      return;
    }
    if (error) setError("");
    if (succes) setSuccess("");
    const r = await resetPassword(email);
    if (!r.error) {
      setSuccess("Email just sent successfully");
      return true;
    } else if (r.err) setError(r.err);
    return false;
  };

  return { email, setEmail, error, succes, submit };
};

import React from "react";
import { SignedIn, SignedOut, SignIn } from "@clerk/clerk-react";

const Login = () => {
  return (
    <div style={{ height: "100vh" }}>
      <main
        style={{ height: "100vh" }}
        className="d-flex justify-content-center align-items-center"
      >
        <SignIn />
      </main>
    </div>
  );
};

export default Login;

"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Signup from "../SignupForm/Signup";
import Welcome from "../Welcome/Welcome";
const ProtectedRoute = ({ children }) => {
  const [token, setToken] = useState(null);
  const router = useRouter();
  useEffect(() => {
    const checkToken = () => {
      const storedToken = localStorage.getItem("token");
      if (!storedToken) {
        router.push("/welcome");
      } else {
        setToken(storedToken);
      }
    };
    checkToken();
    window.addEventListener("storage", checkToken);
    return () => {
      window.removeEventListener("storage", checkToken);
    };
  }, []);
  if (!token) {
    return  <Welcome />;
  }
  return token ? <>{children}</> : null;
};

export default ProtectedRoute;

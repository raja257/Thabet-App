"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Signup from "../SignupForm/Signup";
const ProtectedRoute = ({ children }) => {
  const [token, setToken] = useState(null);
  const router = useRouter();
  useEffect(() => {
    const checkToken = () => {
      const storedToken = localStorage.getItem("token");
      if (!storedToken) {
        router.push("/signup");
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
    return  <Signup />;
  }
  return token ? <>{children}</> : null;
};

export default ProtectedRoute;

import React, { useEffect, createContext, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import * as auth from "../utils/auth";

export const UserContext = createContext();

const UserProvider = (props) => {
  const router = useHistory();
  const userContext = useContext(UserContext);

  useEffect(() => {
    const checkIfUserIsAuthenticated = async () => {
      const res = await axios
        .get("http://localhost:4000/me", {
          headers: {
            authorization: auth.getUserToken(),
          },
        })
        .then((res) => {
          console.log("after me");

          const data = res?.data;

          if (data.success) {
            router.push("/me/todos");
            userContext.setUser(res.data.user);
          }
          console.log("data", data);
        })
        .catch((e) => {});
    };

    checkIfUserIsAuthenticated();
  }, [auth.getUserToken()]);

  return props.children;
};

export default UserProvider;

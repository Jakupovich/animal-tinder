import axios from "axios";
import React, { useEffect, useState } from "react";

export const fetchUser = async () => {
  const token = localStorage.getItem("userToken")
    try {
      const response = await axios.get("https://animal-tinder-backend.vercel.app/shelter/getShelter", {
        headers: { Authorization: `Bearer ${token}` },
      });
      localStorage.setItem("shelterAccountt",response.data.user)
      return response.data.user;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

export const getUserToken = async (setUser) => {
  const userFetchToken = localStorage.getItem("userToken");
  if (userFetchToken) {
    const user = await fetchUser(userFetchToken);
    setUser(user);
  }
};

export const formHandler = async (data, link, setError, navigation) => {
  const postData = await axios.post(link, data).catch((err) => {
    setError(err.response?.data);
    console.log(err.response?.data);
  });
  if (postData) {
    const token = postData.data.data.token;
    try {
      localStorage.setItem("userToken", token);
      const user = await fetchUser(token);
      navigation.navigate("HomeRoot");
    } catch (error) {
      console.log(error);
    }
  }
};

export const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUserToken(setUser);
  }, []);

  return <div>{user ? `Welcome ${user.name}` : "Please log in"}</div>;
};

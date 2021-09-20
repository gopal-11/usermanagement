import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    webiste: "",
  });
  const { id } = useParams();
  //console.log(id);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(res.data);
  };
  useEffect(() => {
    loadUser();
  }, []);

  return (
    <div>
      <h1>User Id: {id}</h1>

      <hr />
      <ul>
        <li>name: {user.name}</li>
        <li>user name: {user.username}</li>
        <li>email: {user.email}</li>
        <li>phone: {user.phone}</li>
        <li>website: {user.website}</li>
      </ul>
    </div>
  );
};

export default User;

// User.jsx
import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { userNameState } from "../State/username";
import Info from "./Info";
import Repo from "./Repos";

const User = () => {
  const [userData, setUserData] = useState([]);
  const username = useRecoilValue(userNameState);

  useEffect(() => {
    const apiUrl = `https://api.github.com/users/${username}`;

    axios
      .get(apiUrl)
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error("Can't Fetch Data", error);
      });
  }, [username]);

  return (
    <div className="min-h-screen flex-row justify-center items-center bg-gradient-to-r p-4 from-purple-400 to-pink-600">
      <Info userData={userData} />
      <br />
      <Repo />
    </div>
  );
};

export default User;

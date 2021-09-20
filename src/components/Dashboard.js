import React, { useEffect, useState } from "react";

import "../table.css";
import { ButtonGroup, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import axios from "axios";

function Dashboard() {
  const [dogs, setDogs] = useState([]);
  const [repos, setRepos] = useState([]);
  const [count, setCount] = useState(0);
  let history = useHistory();

  const handleUsersClick = () => {
    history.replace("/usersview");
  };

  const handleLogoutClick = () => {
    history.replace("/");
  };

  useEffect(() => {
    fetch("https://api.github.com/users/vampaynani/repos")
      .then((res) => res.json())
      .then((repos) => {
        console.log(repos);
        setRepos(repos);
      });

    //   axios
    //     .get("https://dog.ceo/api/breed/malinois/images")
    //     .then((res) => {
    //       //console.log(res);
    //       setDogs(res.data.message);
    //     })
    //     .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ padding: "10px" }}>
      <div style={{ float: "right", padding: "5px" }}>
        <Button variant="secondary" onClick={handleUsersClick}>
          ViewUsers
        </Button>{" "}
        <Button variant="secondary" onClick={handleLogoutClick}>
          Logout
        </Button>
      </div>
      <h1 align="center">Github Repo Table</h1>
      <table>
        <tr>
          <th>Id</th>
          <th>Clone Url</th>
          <th>Size</th>
          <th>Created_at</th>
        </tr>
        {repos.map((data) => (
          <>
            <tr>
              <td>{data.id}</td>
              <td>
                <a href={data.clone_url} target="_blank">
                  {data.clone_url}
                </a>
              </td>
              <td>{data.size}</td>
              <td>{data.created_at}</td>
            </tr>
          </>
        ))}
      </table>

      <br />
      <br />
      {/* <div align="center">
        {
          <img
            src={dogs[count]}
            alt="dog img"
            style={{ width: "1000px", height: "500px" }}
          />
        }
        <div>
          <ButtonGroup aria-label="Navigate Button">
            <Button
              variant="dark"
              size="lg"
              onClick={() => setCount(count - 1)}
            >
              Prev
            </Button>

            <Button
              variant="dark"
              size="lg"
              onClick={() => setCount(count + 1)}
            >
              Next
            </Button>
          </ButtonGroup>
        </div>
      </div> */}
      <br />
      <br />
    </div>
  );
}

export default Dashboard;

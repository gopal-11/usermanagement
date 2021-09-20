import axios from "axios";
import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
const Userview = () => {
  const [users, setUser] = useState([]);
  let history = useHistory();

  const handleAddUserClick = () => {
    history.replace("/users/add");
  };

  const handleViewClick = (e) => {
    let id = e.target.id;

    history.push(`/users/${id}`);
  };

  const handleEditClick = (e) => {
    let id = e.target.id;
    history.push(`/users/edit/${id}`);
  };

  const handleDeleteClick = async (e) => {
    let id = e.target.id;
    await axios.delete(`http://localhost:3003/users/${id}`);
    loadUsers();
  };

  useEffect(() => {
    loadUsers();
  }, []);
  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    //console.log(result);
    setUser(result.data);
  };
  return (
    <>
      <div style={{ float: "right", padding: "5px" }}>
        <Button variant="secondary" onClick={handleAddUserClick}>
          AddUser
        </Button>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>

              <td>
                <Button
                  variant="primary"
                  size="sm"
                  id={user.id}
                  onClick={(e) => handleViewClick(e)}
                >
                  View
                </Button>{" "}
                <Button
                  variant="light"
                  size="sm"
                  id={user.id}
                  onClick={(e) => handleEditClick(e)}
                >
                  Edit
                </Button>{" "}
                <Button
                  variant="danger"
                  size="sm"
                  id={user.id}
                  onClick={(e) => handleDeleteClick(e)}
                >
                  Delete
                </Button>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Userview;

import "./App.css";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home.js";
import Signup from "./components/Signup.js";
import Login from "./components/Login.js";
import Dashboard from "./components/Dashboard.js";
import Userview from "./components/Userview";
import AddUser from "./components/AddUser";
import Error from "./components/Error";
import User from "./components/User";
import EditUser from "./components/EditUser";
function App() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React Application</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/">
                <Button variant="light">Home</Button>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/signup">
                {" "}
                <Button variant="light">Signup</Button>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/login">
                <Button variant="light">Login</Button>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/dashboard">
                <Button variant="light">Dashboard</Button>
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/signup" component={Signup}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/dashboard" component={Dashboard}></Route>
        <Route exact path="/usersview" component={Userview}></Route>
        <Route exact path="/users/add" component={AddUser}></Route>
        <Route exact path="/users/:id" component={User} />
        <Route exact path="/users/edit/:id" component={EditUser} />
        <Route component={Error}></Route>
      </Switch>
    </div>
  );
}

export default App;

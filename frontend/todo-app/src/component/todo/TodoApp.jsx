import {useState} from "react";
import "./TodoApp.css";
import {
  BrowserRouter,
  Route,
  Routes,
  useNavigate,
  useParams,
} from "react-router-dom";

export default function TodoApp() {
  return (
    <div className="TodoApp">
      <BrowserRouter>
        <Routes>
          {/*  */}
          <Route path="/" element={<LoginComponent />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/welcome/:username" element={<WelcomeComponent />} />
          <Route path="/todos" element={<ListTodosComponent />} />
          <Route path="*" element={<ErrorComponent />} />
          {/*  */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function LoginComponent() {
  const [username, setUserName] = useState("Robert");
  const [password, setPassword] = useState("password");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const navigate = useNavigate();

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  function handleSubmit() {
    if (password === "password" && username === "Robert") {
      console.log("Authenticated Successfully");
      setShowSuccessMessage(true);
      setShowErrorMessage(false);
      navigate(`/welcome/${username}`);
    } else {
      console.log("Authentication Failed. Please check your credentials.");
      setShowErrorMessage(true);
      setShowSuccessMessage(false);
    }
  }

  return (
    <div>
      <h1>React Todo Management Application</h1>
      <h2>Login</h2>
      <div className="Login">
        {showSuccessMessage && <div>Authenticated Successfully</div>}
        {showErrorMessage && (
          <div>Authentication Failed. Wrong Credentials.</div>
        )}
        <div className="LoginForm">
          <div>
            <label>User Name:</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={handleUserNameChange}
              required
            ></input>
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handPasswordChange}
              required
            ></input>
          </div>
          <button type="button" name="login" onClick={handleSubmit}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

function WelcomeComponent() {
  const {username} = useParams();
  //   console.log(username);

  return (
    <div>
      <h1>Welcome to React Todo App, {username}!</h1>
      <div className="Welcome">Welcome Component</div>
    </div>
  );
}

function ErrorComponent() {
  return (
    <div className="ErrorComponent">
      <h1>We are working really hard!</h1>
      <div>
        Apologies for the 404. Reach to our Team at portfolioprojects.com
      </div>
    </div>
  );
}

function ListTodosComponent() {
  const todos = [
    {id: 1, description: "Learn AWS"},
    {id: 2, description: "Learn SpringBoot"},
    {id: 3, description: "Learn FullStack Development"},
    {id: 4, description: "Learn DevOps"},
  ];
  return (
    <div className="ListTodosComponent">
      <h1>Things You Want To Do</h1>
      <div>
        <table>
          <thead>
            <tr>
              <td>ID</td>
              <td>Description</td>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

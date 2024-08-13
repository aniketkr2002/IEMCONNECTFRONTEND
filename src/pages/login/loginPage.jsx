import { useContext, useState } from "react";
import "./loginPage.scss";
import { Link, useNavigate } from "react-router-dom";
import apiRequest from "../../lib/apiRequest.js";
import { AuthContext } from "../../context/AuthContext";

function LoginPage() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const {updateUser} = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    const formData = new FormData(e.target);

    const userName = formData.get("userName");
    const password = formData.get("password");

    try {
      const res = await apiRequest.post("/student/login", {
        userName,
        password,
      });
      // localStorage.setItem("user", JSON.stringify(res))
      updateUser(res.data)
      // console.log(res.data);
      
      navigate("/");
    } catch (err) {
      // console.log(err);
      setError(err.response.data);
    } finally {
      setIsLoading(false);
    }

  }
  return (
    <div className="login">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Welcome back</h1>
          <input
            name="userName"
            required
            minLength={3}
            maxLength={20}
            type="text"
            placeholder="Username"
          />
          <input
            name="password"
            type="password"
            required
            placeholder="Password"
          />
          <button disabled={isLoading}>Login</button>
          {error && <span>{error}</span>}
          <Link to="/register">{"Don't"} you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  )
}

export default LoginPage
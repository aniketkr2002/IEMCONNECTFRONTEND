import { useState } from "react";
import "./register.scss";
import {Link, useNavigate} from "react-router-dom";
import apiRequest from "../../lib/apiRequest";

function Register() {
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();


    const handleSubmit = async(e) => {
        e.preventDefault();
        setError("")
        setIsLoading(true)
        const formData = new FormData(e.target);

        const name = formData.get("name");
        const userName = formData.get("userName");
        const email = formData.get("email");
        const password = formData.get("password");
        const curryear = formData.get("curryear");
        const semester = formData.get("semester");
        const enrollment = formData.get("enrollment");
        const phone = formData.get("phone");
        const branch = formData.get("branch");

        const formObject = Object.fromEntries(formData.entries());

        console.log(formObject);
        
        try {
            const res = await apiRequest.post("/student/register", {
              name,
              userName,
              email,
              password,
              curryear,
              semester,
              enrollment,
              phone,
              branch
            });
            console.log(res);

            navigate("/login");
            
        } catch (err) {
            console.log(err.response);
            setError(err.response.data.message);
        } finally {
            setIsLoading(false)
        }
    }




  return (
    <div className="registerPage">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Create an Account</h1>
          <input name="name" type="text" placeholder="Your Name" required  />
          <input name="userName" type="text" placeholder="Username" required />
          <input name="email" type="text" placeholder="Email" required />
          <input name="password" type="password" placeholder="Password" required minLength="6"/>
          <input name="curryear" type="text" placeholder="Current Year" />
          <input name="semester" type="text" placeholder="Semester" />
          <input name="enrollment" type="text" placeholder="Enrollment NO" />
          <input name="phone" type="text" placeholder="Phone No" />
          <input name="branch" type="text" placeholder="Branch" />
          <button disabled={isLoading}>Register</button>
          {error && <span>{error}</span>}
          <Link to="/login">Do you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  )
}

export default Register
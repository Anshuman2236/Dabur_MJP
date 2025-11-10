import React, { useState } from "react";
import logo from "./logo.png"
import Navbar from "../components/Navbar";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../FirebaseConfig";
import { useNavigate } from "react-router-dom";

function Login() {
  
  const [userName, setUserName] = useState("anshuman.kumar@dabur.com");
  const [password, setPassword] = useState("Azure@12345");
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("login")
    signInWithEmailAndPassword(auth, userName, password)
  .then((userCredential) => {
    console.log("Success" + userCredential)

    // Signed in 
    const user = userCredential.user;
    navigate("/home")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    console.log(errorCode)
    const errorMessage = error.message;
    console.log("error" + errorMessage)
  });
  };

  const handleForgetPassword = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div>
        <button onClick={handleLogin}></button>
        <Navbar/>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-6 text-center text-md-left mb-4 mb-md-0">
              <img className="logo"
                alt="Logo"

                src={logo}
                style={{ width: "100px" }}
              />
              <h1 className="BadaMjp">Monthly Journey Plan</h1>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="text-center">
                    <h3>
                      <i className="fa fa-user-circle-o white-text"/>
                      Login
                    </h3>
                  </div>
                  <form >
                    <div className="form-group">
                      <label htmlFor="txtUserName"></label>
                      <input
                        type="text"
                        id="txtUserName"
                        className="form-control"
                        placeholder="Enter User Name"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="txtPassword"></label>
                      <input
                        type="password"
                        id="txtPassword"
                        className="form-control"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="text-center mt-4">
                      <input
                        type="submit"
                        name="btnLogin"
                        value="Log In"
                        className="btn btn-info btn-sm"
                        onClick={handleLogin}
                      />
                      <div
                        style={{
                          textAlign: "right",
                          color: "white",
                          fontSize: "larger",
                          fontWeight: 800,
                          marginTop: "10px",
                        }}
                      >
                        <a
                          id="lbtnFP"
                          href="/"
                          style={{ color: "White" }}
                          onClick={handleForgetPassword}
                        >
                          Forget Password
                        </a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Forget Password modal */}
        {/* ... */}
      </div>
    </>
  );
}

export default Login;

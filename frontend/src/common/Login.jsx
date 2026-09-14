import api from "../api/axios";
import "../css/commonCSS/Login.css";
import { useState } from "react";


const Login = () => {

  const [usernameOrEmail, setUsernameOrEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async(e) =>{
    e.preventDefault();
    try{
      const response = await api.post("/login",{
        usernameOrEmail,
        password
      })

      console.log(response.message);
      alert("Login successful");

      setUsernameOrEmail('')
      setPassword('')

    }
    catch(err){
      console.log(err.message);
      alert("Error in login.")
    }
  }

  return (
      <main className="loginPage">
      {/* Decorative background */}
      <div className="loginGlow loginGlowOne"></div>
      <div className="loginGlow loginGlowTwo"></div>

      {/* Left section */}
      <section className="loginIntro">
        <a href="/" className="loginLogo">
          Media<span>HUB</span>
        </a>

        <div className="loginIntroContent">
          <span className="loginIntroTag">
            <i></i>
            WELCOME BACK
          </span>

          <h1>
            Your ideas.
            <br />
            Your
            <br />
            <span>space.</span>
          </h1>

          <p>
            Continue creating, publishing and sharing your
            work with the MediaHUB community.
          </p>
        </div>

        <div className="loginIntroBottom">
          <span>MEDIAHUB</span>

          <div></div>

          <span>01 / LOGIN</span>
        </div>
      </section>

      {/* Login section */}
      <section className="loginSection">
        <div className="loginCard">

          {/* Header */}
          <div className="loginHeader">
            <span className="loginNumber">
              02 / ACCOUNT
            </span>

            <h2>
              Welcome
              <br />
              back.
            </h2>

            <p>
              Don't have an account?{" "}
              <a href="/signup">Create one</a>
            </p>
          </div>

          {/* Form */}
          <form className="loginForm" onSubmit={handleSubmit}>

            {/* Email / Username */}
            <div className="loginInputGroup">
              <label htmlFor="identifier">
                EMAIL OR USERNAME
              </label>

              <input
                id="identifier"
                name="identifier"
                type="text"
                required
                autoComplete="username"
                placeholder="Enter your email or username"
                value={usernameOrEmail}
                onChange={(e)=>setUsernameOrEmail(e.target.value)}
              />
            </div>

            {/* Password */}
            <div className="loginInputGroup">
              <div className="passwordLabel">
                <label htmlFor="password">
                  PASSWORD
                </label>

                <a href="/forgot-password">
                  Forgot password?
                </a>
              </div>

              <input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                placeholder="Enter your password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
              />
            </div>

            {/* Remember me */}
            <label className="rememberMe">
              <input
                type="checkbox"
                name="remember"
              />

              <span>
                Keep me signed in
              </span>
            </label>

            {/* Submit */}
            <button
              type="submit"
              className="loginSubmitBtn"
            >
              <span>Login to MediaHUB</span>
              <strong>↗</strong>
            </button>
          </form>

          {/* Security note */}
          <div className="loginSecureNote">
            <span>●</span>
            Secure authentication · Your data stays private
          </div>

        </div>
      </section>
    </main>
  );
};

export default Login;
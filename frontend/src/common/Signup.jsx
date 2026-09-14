import api from "../api/axios";
import "../css/commonCSS/Signup.css";
import { useState } from "react";

const Signup = () => {

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');

  const handleSubmit = async(e)=>{
    e.preventDefault();

    try{
      const response = await api.post("/register",{
      fullName,
      email,
      username,
      password,
      dateOfBirth
    })

    console.log(response.data);
    alert("User registered successully.");

    setFullName('');
    setEmail('');
    setUsername('');
    setDateOfBirth('');
    setPassword('');
    }
    catch(err){
      console.log(err.message);
      alert("Error in registering user.")
    }
  }



  return (
    <main className="signupPage">
      {/* Decorative background */}
      <div className="signupGlow signupGlowOne"></div>
      <div className="signupGlow signupGlowTwo"></div>

      {/* Left content */}
      <section className="signupIntro">
        <a href="/" className="signupLogo">
          Media<span>HUB</span>
        </a>

        <div className="introContent">
          <span className="introTag">
            <i></i>
            JOIN THE COMMUNITY
          </span>

          <h1>
            Create.
            <br />
            Share.
            <br />
            <span>Inspire.</span>
          </h1>

          <p>
            Create your personal space, publish your ideas and
            showcase the work that matters to you.
          </p>
        </div>

        <div className="introBottom">
          <span>01</span>
          <div></div>
          <span>MEDIAHUB / 2026</span>
        </div>
      </section>

      {/* Signup form */}
      <section className="signupSection">
        <div className="signupCard">

          <div className="formHeader">
            <span className="formNumber">01 / ACCOUNT</span>

            <h2>
              Create your
              <br />
              account.
            </h2>

            <p>
              Already have an account?{" "}
              <a href="/login">Login</a>
            </p>
          </div>

          <form className="signupForm" onSubmit={handleSubmit}>
            {/* Full name */}
            <div className="inputGroup">
              <label htmlFor="fName">
                FULL NAME
              </label>

              <input
                id="fName"
                name="fullName"
                type="text"
                required
                autoComplete="name"
                placeholder="Enter your full name"
                value={fullName}
                onChange={(e)=>setFullName(e.target.value)}
              />
            </div>

            {/* Email */}
            <div className="inputGroup">
              <label htmlFor="email">
                EMAIL ADDRESS
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />
            </div>

            {/* Username */}
            <div className="inputGroup">
              <label htmlFor="username">
                USERNAME
              </label>

              <div className="usernameInput">
                <span>@</span>

                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  autoComplete="username"
                  placeholder="yourusername"
                  value={username}
                onChange={(e)=>setUsername(e.target.value)}
                />
              </div>
            </div>

            {/* DOB */}
            <div className="inputGroup">
              <label htmlFor="dob">
                DATE OF BIRTH
              </label>

              <input
                id="dob"
                name="dateOfBirth"
                type="date"
                required
                value={dateOfBirth}
                onChange={(e)=>setDateOfBirth(e.target.value)}
              />
            </div>

            {/* Password */}
            <div className="inputGroup">
              <label htmlFor="password">
                PASSWORD
              </label>

              <input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="new-password"
                placeholder="Create a strong password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
              />

              <small>
                Use at least 8 characters.
              </small>
            </div>

            {/* Terms */}
            <label className="terms">
              <input type="checkbox" required />

              <span>
                I agree to the{" "}
                <a href="#terms">Terms of Service</a>{" "}
                and{" "}
                <a href="#privacy">Privacy Policy</a>.
              </span>
            </label>

            {/* Submit */}
            <button
              type="submit"
              className="createAccountBtn"
            >
              <span>Create account</span>
              <strong>↗</strong>
            </button>
          </form>

          <div className="secureNote">
            <span>●</span>
            Your information is securely encrypted.
          </div>
        </div>
      </section>
    </main>
  );
};

export default Signup;
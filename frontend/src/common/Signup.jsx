import "../css/commonCSS/Signup.css";

const Signup = () => {
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

          <form className="signupForm">
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
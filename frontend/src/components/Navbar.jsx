import "../css/componentsCSS/Navbar.css";
import { useState } from "react";
import Profile from "./Profile";

const Navbar = () => {

    const [showProfile, setShowProfile] = useState(false)

  return (
    <nav className="navbar">
      {/* Logo */}
      <a href="/" className="navbarLogo">
        Media<span>HUB</span>
      </a>

      {/* Navigation */}
      <div className="navbarLinks">
        <a href="/dashboard" className="active">
          Home
        </a>

        <a href="/projects">
          Projects
        </a>

        <a href="/explore">
          Explore
        </a>
      </div>

      {/* User section */}
      <div className="navbarUser" onClick={()=>setShowProfile(!showProfile)}>
        <div className="userInfo">
          <div className="profileImage">
            <span>R</span>
          </div>

          <div className="userDetails">
            <p className="userName">
              Rupesh
            </p>

            <span className="userRole">
              Creator
            </span>
          </div>
        </div>

        <button
          className="profileButton"
          aria-label="Open profile menu"
        >
          ↓
        </button>
      </div>

      {showProfile && <Profile/>}
    </nav>
  );
};

export default Navbar;
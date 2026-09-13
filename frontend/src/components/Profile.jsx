import "../css/componentsCSS/Profile.css";

const Profile = () => {
  return (
    <div className="profilePopup">

      {/* Profile header */}
      <div className="profileHeader">
        <div className="profileAvatar">
          <span>R</span>
        </div>

        <div className="profileIdentity">
          <h3>Rupesh</h3>
          <span>@rupesh</span>
        </div>

        <div className="onlineDot"></div>
      </div>

      {/* User information */}
      <div className="profileInfo">

        <div className="infoItem">
          <span className="infoLabel">
            EMAIL
          </span>

          <p>
            rupesh@example.com
          </p>
        </div>

        <div className="infoItem">
          <span className="infoLabel">
            PROFILE
          </span>

          <a href="/u/rupesh">
            mediahub.com/u/rupesh
            <span>↗</span>
          </a>
        </div>

      </div>

      {/* Actions */}
      <div className="profileActions">

        <a
          href="/profile"
          className="editProfileBtn"
        >
          <span>Edit profile</span>
          <span>→</span>
        </a>

        <button className="logoutBtn">
          <span>Logout</span>
          <span>↗</span>
        </button>

      </div>

      {/* Footer */}
      <div className="profileFooter">
        <span>MEDIAHUB</span>
        <span>ACCOUNT</span>
      </div>

    </div>
  );
};

export default Profile;
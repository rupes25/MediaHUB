import blogImage from "../assets/view_blog.jpg";
import manageBlog from "../assets/update_blog.jpg";
import createBlog from "../assets/create_blog.jpg";

import "../css/userCSS/Homepage.css";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
    const navigate = useNavigate()
  return (
    <main className="homePage">
        <Navbar/>

      {/* Decorative background */}
      <div className="homeShape homeShapeOne"></div>
      <div className="homeShape homeShapeTwo"></div>

      {/* Hero section */}
      <section className="homeHero">

        <div className="homeHeroContent">
          <span className="homeTag">
            <i></i>
            YOUR CREATIVE WORKSPACE
          </span>

          <h1>
            Create.
            <br />
            Manage.
            <br />
            <span>Share.</span>
          </h1>

          <p>
            Everything you need to create and manage your
            blogs, publish your ideas and build your own
            creative space.
          </p>
        </div>

        <div className="homeHeroMeta">
          <span>MEDIAHUB</span>
          <div></div>
          <span>2026 / CREATOR SPACE</span>
        </div>

      </section>

      {/* Cards section */}
      <section className="cardSection">

        <div className="sectionHeader">
          <div>
            <span className="sectionLabel">
              WORKSPACE
            </span>

            <h2>
              What do you
              <br />
              want to do?
            </h2>
          </div>

          <p>
            Choose an action to continue working
            on your content.
          </p>
        </div>

        <div className="cardsGrid">

          {/* View Blogs */}
          <article className="blogActionCard">

            <div className="cardImage">
              <img
                src={blogImage}
                alt="View blogs"
              />

              <div className="imageOverlay">
                <span>01</span>
                <span>EXPLORE</span>
              </div>
            </div>

            <div className="cardContent">

              <div className="cardTop">
                <span>01</span>

                <span className="cardArrow">
                  ↗
                </span>
              </div>

              <h3>
                View blogs
              </h3>

              <p>
                Explore your published articles,
                discover new ideas and manage your
                reading experience.
              </p>

              <button className="cardButton">
                View blogs
                <span>→</span>
              </button>

            </div>

          </article>


          {/* Manage Blogs */}
          <article className="blogActionCard">

            <div className="cardImage">
              <img
                src={manageBlog}
                alt="Manage blogs"
              />

              <div className="imageOverlay">
                <span>02</span>
                <span>MANAGE</span>
              </div>
            </div>

            <div className="cardContent">

              <div className="cardTop">
                <span>02</span>

                <span className="cardArrow">
                  ↗
                </span>
              </div>

              <h3>
                Manage blogs
              </h3>

              <p>
                Edit existing posts, update content,
                organize your articles and keep
                everything under control.
              </p>

              <button className="cardButton">
                Manage blogs
                <span>→</span>
              </button>

            </div>

          </article>


          {/* Create Blog */}
          <article className="blogActionCard featuredCard">

            <div className="cardImage">
              <img
                src={createBlog}
                alt="Create a new blog"
              />

              <div className="imageOverlay">
                <span>03</span>
                <span>CREATE</span>
              </div>
            </div>

            <div className="cardContent">

              <div className="cardTop">
                <span>03</span>

                <span className="cardArrow">
                  ↗
                </span>
              </div>

              <h3>
                Create a blog
              </h3>

              <p>
                Turn your ideas into stories and
                publish something worth sharing
                with the community.
              </p>

              <button className="cardButton" onClick={()=>navigate('/create')}>
                Create blog
                <span>→</span>
              </button>

            </div>

          </article>

        </div>

      </section>

      {/* Small bottom information */}
      <section className="homeBottom">

        <div>
          <span className="bottomNumber">
            03
          </span>

          <p>
            Your ideas deserve a place on the
            internet.
          </p>
        </div>

        <span className="bottomText">
          KEEP CREATING · KEEP SHARING
        </span>

      </section>

    </main>
  );
};

export default Homepage;
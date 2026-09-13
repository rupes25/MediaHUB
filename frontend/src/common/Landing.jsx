import "../css/commonCSS/Landing.css";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate()

  return (
    <main className="dashboard">
      {/* Decorative background */}
      <div className="bgShape bgShapeOne"></div>
      <div className="bgShape bgShapeTwo"></div>

      {/* Navbar */}
      <header className="nav">
        <a href="/" className="logo">
          Media<span>HUB</span>
        </a>

        <nav className="navLinks">
          <a href="#home">Home</a>
          <a href="#blogs">Blogs</a>
          <a href="#about">About</a>
        </nav>

        <div className="navActions">
          <button className="loginBtn" onClick={()=>{navigate('/login')}}>Login</button>
          <button className="signupBtn" onClick={()=>{navigate('/signup')}}>Get Started ↗</button>
        </div>
      </header>

      {/* Hero */}
      <section className="hero" id="home">
        <div className="heroText">
          <div className="tag">
            <span></span>
            A CREATIVE MEDIA SPACE
          </div>

          <h1>
            Ideas worth
            <br />
            <span>sharing.</span>
          </h1>

          <p className="heroDescription">
            Discover stories, projects and ideas from creators.
            Build your own space and share what you create with
            the world.
          </p>

          <div className="heroButtons">
            <button className="primaryBtn">
              Start writing
              <span>↗</span>
            </button>

            <button className="outlineBtn">
              Explore blogs
            </button>
          </div>
        </div>

        {/* Hero visual */}
        <div className="heroVisual">
          <div className="floatingLabel labelOne">
            <span>01</span>
            STORIES
          </div>

          <div className="articleCard">
            <div className="articleImage">
              <div className="imagePattern"></div>

              <div className="imageText">
                <span>FEATURED</span>
                <h3>
                  Create.
                  <br />
                  Share.
                  <br />
                  Inspire.
                </h3>
              </div>
            </div>

            <div className="articleContent">
              <div className="articleMeta">
                <span>CREATIVE</span>
                <span>06 MIN READ</span>
              </div>

              <h2>
                Build a space for your
                ideas.
              </h2>

              <p>
                A modern place to publish your thoughts,
                projects and creative work.
              </p>

              <div className="readMore">
                Read article
                <span>→</span>
              </div>
            </div>
          </div>

          <div className="floatingLabel labelTwo">
            <span>2026</span>
            MEDIAHUB
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="topics">
        <div className="sectionHeading">
          <span>EXPLORE</span>
          <h2>
            What are you
            <br />
            interested in?
          </h2>
        </div>

        <div className="topicList">
          <button>
            Technology
            <span>↗</span>
          </button>

          <button>
            Design
            <span>↗</span>
          </button>

          <button>
            Development
            <span>↗</span>
          </button>

          <button>
            Cybersecurity
            <span>↗</span>
          </button>
        </div>
      </section>

      {/* Latest articles */}
      <section className="latest" id="blogs">
        <div className="latestTop">
          <div>
            <span className="sectionLabel">
              LATEST STORIES
            </span>

            <h2>
              Fresh from
              <br />
              the community.
            </h2>
          </div>

          <a href="#all" className="viewAll">
            View all
            <span>↗</span>
          </a>
        </div>

        <div className="blogGrid">
          <article className="blogCard">
            <div className="blogNumber">01</div>

            <div>
              <span className="blogCategory">
                TECHNOLOGY
              </span>

              <h3>
                Things I learned while building
                my first real web application
              </h3>

              <p>
                Lessons, mistakes and useful ideas
                from building products from scratch.
              </p>
            </div>

            <div className="blogBottom">
              <span>8 MIN READ</span>
              <span>→</span>
            </div>
          </article>

          <article className="blogCard featuredBlog">
            <div className="blogNumber">02</div>

            <div>
              <span className="blogCategory">
                SECURITY
              </span>

              <h3>
                Thinking like an attacker:
                a beginner's guide
              </h3>

              <p>
                Understanding how security researchers
                approach applications and systems.
              </p>
            </div>

            <div className="blogBottom">
              <span>10 MIN READ</span>
              <span>→</span>
            </div>
          </article>

          <article className="blogCard">
            <div className="blogNumber">03</div>

            <div>
              <span className="blogCategory">
                DEVELOPMENT
              </span>

              <h3>
                Building better APIs with
                Node and Express
              </h3>

              <p>
                Practical patterns for creating cleaner
                and more secure backend applications.
              </p>
            </div>

            <div className="blogBottom">
              <span>7 MIN READ</span>
              <span>→</span>
            </div>
          </article>
        </div>
      </section>

      {/* Floating action */}
      <button className="floatingAction">
        ↑
      </button>
    </main>
  );
};

export default Landing;
import Navbar from "../components/Navbar";
import "../css/userCSS/Blog.css";

const Blog = () => {
  const blogImages = [
    "https://images.unsplash.com/photo-1499750310107-5fef28a66643",
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    "https://images.unsplash.com/photo-1553877522-43269d4ea984",
    "https://images.unsplash.com/photo-1500534623283-312aade485b7",
  ];

  return (
    <div className="blogPage">

      <Navbar />

      <main className="fullBlogSection">

        {/* =========================
            ARTICLE HEADER
        ========================= */}

        <header className="blogHeader">

          <div className="blogMetaTop">
            <span className="blogCategoryTag">
              Technology
            </span>

            <span className="blogMetaDot">•</span>

            <span>8 min read</span>

            <span className="blogMetaDot">•</span>

            <span>Sep 13, 2026</span>
          </div>


          <h1>
            The Art of Building Better
            <span> Digital Experiences</span>
          </h1>


          <p className="blogIntro">
            Explore how thoughtful design, technology and storytelling
            come together to create meaningful digital experiences
            that people actually enjoy using.
          </p>


          {/* Author */}

          <div className="blogAuthorSection">

            <div className="blogAuthorAvatar">
              R
            </div>

            <div className="blogAuthorInfo">

              <span className="writtenBy">
                WRITTEN BY
              </span>

              <strong>
                Rupesh
              </strong>

              <span>
                @rupesh
              </span>

            </div>

          </div>

        </header>


        {/* =========================
            IMAGE GALLERY
        ========================= */}

        <section className="blogGallerySection">

          <div className="galleryHeader">

            <div>
              <span className="galleryKicker">
                STORY GALLERY
              </span>

              <p>
                Swipe to explore the story
              </p>
            </div>

            <span className="galleryCounter">
              01 — 05
            </span>

          </div>


          <div className="blogImageScroller">

            {blogImages.map((image, index) => (
              <div
                className="blogImageSlide"
                key={index}
              >
                <img
                  src={image}
                  alt={`Blog visual ${index + 1}`}
                />

                <span className="imageNumber">
                  0{index + 1}
                </span>
              </div>
            ))}

          </div>


          <div className="galleryScrollHint">
            <span></span>
            Scroll horizontally
            <span>→</span>
          </div>

        </section>


        {/* =========================
            ARTICLE CONTENT
        ========================= */}

        <article className="articleContent">

          <div className="articleLayout">

            <aside className="articleSideInfo">

              <div className="sideInfoItem">
                <span>AUTHOR</span>
                <strong>Rupesh</strong>
              </div>

              <div className="sideInfoItem">
                <span>CATEGORY</span>
                <strong>Technology</strong>
              </div>

              <div className="sideInfoItem">
                <span>READING TIME</span>
                <strong>8 Minutes</strong>
              </div>

            </aside>


            <div className="articleText">

              <p className="articleLead">
                Great digital experiences are rarely created by
                accident. They come from understanding people,
                solving the right problems and paying attention to
                the smallest details.
              </p>


              <h2>
                Start with the problem, not the technology
              </h2>

              <p>
                One of the easiest mistakes to make when building a
                product is becoming obsessed with the technology
                before understanding the actual problem.
              </p>

              <p>
                Developers naturally enjoy exploring new frameworks,
                libraries and tools. But a technically impressive
                application can still fail if it does not solve
                something meaningful for its users.
              </p>


              <div className="articleHighlight">

                <span className="quoteMark">
                  “
                </span>

                <p>
                  Good products are not built around technology.
                  They are built around people.
                </p>

              </div>


              <h2>
                Design and development should work together
              </h2>

              <p>
                Design is not simply about making an interface look
                beautiful. It is about creating an experience that
                feels natural and understandable.
              </p>

              <p>
                When design and development happen together,
                decisions become much more intentional. Performance,
                accessibility, responsiveness and usability become
                part of the experience from the beginning.
              </p>


              <h2>
                Small details create a big difference
              </h2>

              <p>
                Animations, spacing, typography, loading states and
                feedback might look like small details individually,
                but together they shape how a user feels about a
                product.
              </p>

              <p>
                The goal should not be to add effects everywhere.
                Instead, every interaction should have a reason to
                exist.
              </p>


              <div className="articleEnd">

                <span className="endLine"></span>

                <span>
                  End of article
                </span>

                <span className="endLine"></span>

              </div>

            </div>

          </div>

        </article>


        {/* =========================
            BACK BUTTON
        ========================= */}

        <div className="backToFeed">

          <button>
            <span>←</span>
            Back to feed
          </button>

        </div>

      </main>

    </div>
  );
};

export default Blog;